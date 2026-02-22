/**
 * generate-scam-post.ts
 *
 * Generates a new scam-alert MDX blog post from optional source data.
 *
 * Usage:
 *   npx tsx scripts/generate-scam-post.ts
 *
 * Environment variables:
 *   SCAM_SOURCES — JSON array of {title, url, snippet, published} objects.
 *                  If not set, generates a "Scam Watch Roundup" with general
 *                  advice and well-known reporting endpoints.
 */

import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

// ── Types ──────────────────────────────────────────────────────────────────

interface ScamSource {
    title: string;
    url: string;
    snippet?: string;
    published?: string;
}

// ── Safety guardrails ──────────────────────────────────────────────────────

/**
 * Strings that MUST NOT appear in the output unless they are inside a clearly
 * labelled warning or "red flags" context (i.e. preceded by 🚩 or inside a
 * section headed "Red Flags" / "Warning").
 */
const DANGEROUS_STRINGS = [
    'send gift cards',
    'download this file',
    'remote access',
];

function validateContent(content: string): void {
    const lines = content.split('\n');
    let inSafeSection = false;

    for (const line of lines) {
        const lower = line.toLowerCase();

        // Detect headings for "safe" sections where warnings are expected
        if (/^##?\s+(red flags|warning)/i.test(line)) {
            inSafeSection = true;
            continue;
        }
        // Any other heading resets
        if (/^##?\s+/i.test(line)) {
            inSafeSection = false;
            continue;
        }
        // Lines with red-flag emoji are safe
        const isFlagLine = line.includes('🚩');

        if (!inSafeSection && !isFlagLine) {
            for (const dangerous of DANGEROUS_STRINGS) {
                if (lower.includes(dangerous)) {
                    throw new Error(
                        `Safety check failed: output contains "${dangerous}" outside a warning context. ` +
                        `Move it under a "Red Flags" heading or prefix with 🚩.`,
                    );
                }
            }
        }
    }
}

// ── Disclaimer ─────────────────────────────────────────────────────────────

const DISCLAIMER =
    '> **Disclaimer:** This is general information, not legal or financial advice. If you have been affected, contact your bank and local authorities immediately.';

// ── Post generation ────────────────────────────────────────────────────────

function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function generateFromSources(sources: ScamSource[]): string {
    const title = sources.length === 1
        ? `${sources[0].title} – What You Need to Know`
        : 'Scam Watch Roundup – Latest Alerts';

    const summary = sources.length === 1
        ? `A breakdown of the "${sources[0].title}" scam: how it works, red flags, and what to do.`
        : `A roundup of ${sources.length} recent scam reports with advice on staying safe.`;

    const sourceUrls = sources.map((s) => `  - "${s.url}"`).join('\n');

    const quickTake = sources
        .map(
            (s) =>
                `- ${s.snippet || s.title}${s.published ? ` (reported ${s.published})` : ''}`,
        )
        .join('\n');

    const references = sources
        .map((s) => `- [${s.title}](${s.url})`)
        .join('\n');

    return `---
title: "${title}"
date: "${new Date().toISOString().split('T')[0]}"
summary: "${summary}"
tags: ["scam-alert"]
sources:
${sourceUrls}
---

${DISCLAIMER}

## Quick Take

${quickTake}

## How the Con Works

Based on the reported sources, this scam typically involves creating a sense of urgency or fear to prompt immediate action. Victims may be asked to provide personal information, make payments, or click on suspicious links.

Always verify claims through official channels before taking action.

## Red Flags

- 🚩 Unsolicited contact from an unknown number or email address.
- 🚩 Pressure to act immediately — "your account will be closed."
- 🚩 Requests for personal information, passwords, or payment details.
- 🚩 Links that do not match the organisation's official website.

## What to Do If You Engaged

1. **Stop all contact** with the suspected scammer immediately.
2. **Contact your bank** or financial institution to report suspicious transactions.
3. **Change your passwords** — especially for email, banking, and social media.
4. **Enable two-factor authentication** on all important accounts.
5. **Monitor your accounts** for any unusual activity over the coming weeks.

## Report It

- 🇦🇺 Australia: [Scamwatch](https://www.scamwatch.gov.au/report-a-scam)
- 🇺🇸 USA: [FTC ReportFraud](https://reportfraud.ftc.gov/)
- 🇬🇧 UK: [Action Fraud](https://www.actionfraud.police.uk/)
- 🌐 More: [Global Scam Reporting Directory](/global-scam-reporting)

## References

${references}
`;
}

function generateFallbackRoundup(): string {
    return `---
title: "Scam Watch Roundup – General Advice to Stay Safe"
date: "${new Date().toISOString().split('T')[0]}"
summary: "A general roundup of common scam tactics and actionable steps to protect yourself online."
tags: ["scam-alert", "general-advice", "safety-tips"]
sources:
  - "https://www.scamwatch.gov.au/"
  - "https://consumer.ftc.gov/features/scam-alerts"
  - "https://www.actionfraud.police.uk/"
---

${DISCLAIMER}

## Quick Take

- Scammers are constantly evolving their tactics — staying informed is your best defence.
- The most common scam categories remain phishing emails, fake investment schemes, and impersonation calls.
- Anyone can be targeted, regardless of age or tech-savviness.

## How the Con Works

Most scams follow a predictable pattern: the scammer creates a sense of **urgency** or **fear**, impersonates a trusted organisation, and pushes the victim to act quickly — before they have time to think critically.

Common approaches include:

- **Phishing emails** that mimic banks, government agencies, or delivery companies.
- **Phone calls** claiming to be from the tax office, police, or tech support.
- **Text messages** with suspicious links promising refunds, prize winnings, or package tracking.
- **Social media** messages from accounts impersonating friends, family, or public figures.

## Red Flags

- 🚩 You are asked to act immediately or face consequences.
- 🚩 The message contains a link you did not expect.
- 🚩 You are asked to provide personal information, passwords, or payment details.
- 🚩 The sender's email address or phone number looks slightly off.
- 🚩 The offer sounds too good to be true.

## What to Do If You Engaged

1. **Stop all contact** with the suspected scammer immediately.
2. **Contact your bank** or financial institution to report suspicious transactions.
3. **Change your passwords** — especially for email, banking, and social media.
4. **Enable two-factor authentication** on all important accounts.
5. **Monitor your accounts** for any unusual activity over the coming weeks.

## Report It

- 🇦🇺 Australia: [Scamwatch](https://www.scamwatch.gov.au/report-a-scam)
- 🇺🇸 USA: [FTC ReportFraud](https://reportfraud.ftc.gov/)
- 🇬🇧 UK: [Action Fraud](https://www.actionfraud.police.uk/)
- 🌐 More: [Global Scam Reporting Directory](/global-scam-reporting)

## References

- [Scamwatch Australia](https://www.scamwatch.gov.au/) — Australian Competition and Consumer Commission
- [FTC Scam Alerts](https://consumer.ftc.gov/features/scam-alerts) — U.S. Federal Trade Commission
- [Action Fraud UK](https://www.actionfraud.police.uk/) — UK National Fraud & Cyber Crime Reporting Centre
`;
}

// ── Main ───────────────────────────────────────────────────────────────────

function main(): void {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
    }

    let content: string;
    const rawSources = process.env.SCAM_SOURCES;

    if (rawSources) {
        let sources: ScamSource[];
        try {
            sources = JSON.parse(rawSources);
        } catch {
            console.error('ERROR: SCAM_SOURCES is not valid JSON.');
            process.exit(1);
        }

        if (!Array.isArray(sources) || sources.length === 0) {
            console.error('ERROR: SCAM_SOURCES must be a non-empty JSON array.');
            process.exit(1);
        }

        content = generateFromSources(sources);
    } else {
        console.log(
            'ℹ️  No SCAM_SOURCES provided. Generating general "Scam Watch Roundup".',
        );
        content = generateFallbackRoundup();
    }

    // Safety check
    validateContent(content);

    // Generate unique filename
    const date = new Date().toISOString().split('T')[0];
    const hash = crypto.randomBytes(3).toString('hex');

    // Extract title for slug
    const titleMatch = content.match(/^title:\s*"(.+)"/m);
    const titleSlug = titleMatch ? slugify(titleMatch[1]) : 'scam-alert';
    // Truncate slug to keep filenames reasonable
    const shortSlug = titleSlug.substring(0, 40).replace(/-$/, '');

    const filename = `${date}-${shortSlug}-${hash}.mdx`;
    const filepath = path.join(blogDir, filename);

    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`✅ Post generated: ${filepath}`);
}

main();
