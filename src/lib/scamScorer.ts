
export type RiskLevel = 'Low' | 'Medium' | 'High';

export interface ScanSignal {
    id: string;
    label: string;
    points: number;
    explanation: string;
    matchedText?: string;
}

export interface ScamAnalysisResult {
    score: number;
    riskLevel: RiskLevel;
    signals: ScanSignal[];
    summary: string; // Plain english summary
}

const SIGNALS = [
    {
        id: 'prize_bait',
        label: 'Prize/Lottery Bait',
        points: 35,
        pattern: /\b(win|winner|won|\$\d+|prize|gift|free money|cash|reward)s?\b/i,
        explanation: "Promises of money, prizes, or rewards are the most common hook used by scammers."
    },
    {
        id: 'link_bait',
        label: 'Suspicious Link Request',
        points: 15,
        pattern: /\b(visit|click|tap|link|here|claim)\b/i,
        explanation: "Asking you to click a link is standard operating procedure for phishing attacks."
    },
    {
        id: 'payment_request',
        label: 'Payment or Financial Request',
        points: 45,
        pattern: /\b(credit card|card details|bank|bsb|account number|crypto|gift card|payment|fee)s?\b/i,
        explanation: "Legitimate organizations rarely ask for sensitive financial details or payments via text/email."
    },
    {
        id: 'verification_bait',
        label: 'Account Verification Bait',
        points: 30,
        pattern: /\b(verify|confirm|validate|login|password|reset|mygov|ato|auspost|unusual activity|suspended)\b/i,
        explanation: "Scammers pretend to be trusted services (like MyGov or banks) to steal your login details."
    },
    {
        id: 'age_card_scam',
        label: 'Age Verification via Card',
        points: 60,
        pattern: /(verify|confirm|prove).{0,50}(age|identity).{0,50}(card|payment)/i,
        explanation: "Asking for credit card details to 'verify your age' is a known, high-risk scam tactic."
    },
    {
        id: 'urgency',
        label: 'Urgency / Pressure',
        points: 20,
        pattern: /\b(urgent|now|today|final notice|limited time|act now|immediately|suspend|locked)\b/i,
        explanation: "Creating a false sense of urgency is designed to make you act without thinking."
    }
];

export function calculateRiskScore(content: string): ScamAnalysisResult {
    let score = 0;
    const caughtSignals: ScanSignal[] = [];
    const normalizedContent = content.toLowerCase();

    // 1. Evaluate Signals
    for (const sig of SIGNALS) {
        const match = content.match(sig.pattern);
        if (match) {
            score += sig.points;
            caughtSignals.push({
                id: sig.id,
                label: sig.label,
                points: sig.points,
                explanation: sig.explanation,
                matchedText: match[0]
            });
        }
    }

    // 2. Hard Overrides
    // If Payment Request AND Prize Bait are both present -> Force High Risk
    const hasPayment = caughtSignals.some(s => s.id === 'payment_request');
    const hasPrize = caughtSignals.some(s => s.id === 'prize_bait');
    const hasAgeScam = caughtSignals.some(s => s.id === 'age_card_scam');
    const hasUrgency = caughtSignals.some(s => s.id === 'urgency');
    const hasVerification = caughtSignals.some(s => s.id === 'verification_bait');

    if ((hasPayment && hasPrize) || hasAgeScam) {
        if (score < 55) score = 65; // Boost to High
    }

    // URGENT + VERIFY is a very strong scam signal (e.g. "Urgent: Verify your account")
    if (hasUrgency && hasVerification) {
        score += 15; // Boost score significantly
    }

    // 3. Determine Level
    let riskLevel: RiskLevel = 'Low';
    if (score >= 55) riskLevel = 'High';
    else if (score >= 25) riskLevel = 'Medium';

    // 4. Generate Summary
    const summary = generateSummary(riskLevel, caughtSignals);

    return {
        score,
        riskLevel,
        signals: caughtSignals,
        summary
    };
}

function generateSummary(level: RiskLevel, signals: ScanSignal[]): string {
    if (level === 'Low') {
        return "We didn't detect strong scam signals, but always stay vigilant.";
    }

    const mainReason = signals.length > 0 ? signals[0].explanation : "Multiple suspicious patterns detected.";
    return `This looks ${level} Risk because it ${mainReason.toLowerCase()}`;
}
