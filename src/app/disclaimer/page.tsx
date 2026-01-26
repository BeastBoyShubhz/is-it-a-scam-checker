import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer: Limitations of Automated Scam Detection | Scam Checker',
    description: 'Legal disclaimer for Scam Checker. Our automated analysis provides guidance, not certainty. Always verify with official sources.',
    alternates: {
        canonical: 'https://scamchecker.app/disclaimer',
    },
    openGraph: {
        title: 'Disclaimer: Limitations of Automated Scam Detection',
        description: 'Legal disclaimer for Scam Checker. Our analysis provides guidance, not certainty.',
        url: 'https://scamchecker.app/disclaimer',
    },
};

export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-slate">
            <h1 className="text-3xl font-bold mb-4">Disclaimer: Limitations of Automated Scam Detection</h1>

            <p className="mb-4 text-lg">
                The Scam Checker tool provides automated analysis based on common patterns and known scam tactics. <strong>It is not a guarantee of safety or danger.</strong>
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">Not Professional Advice</h2>
            <p className="mb-4">
                The information provided by this website does not constitute legal, financial, or cybersecurity advice. You should not rely solely on our analysis to make financial decisions or share personal information. When in doubt, contact the supposed sender through official channels.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">False Positives and False Negatives</h2>
            <p className="mb-4">
                Our system may occasionally flag legitimate messages as suspicious (false positive) or fail to detect a new or sophisticated scam (false negative). Always verify sensitive requests through official channels — for example, call your bank directly using the number from their official website or the back of your card.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">Third-Party Links</h2>
            <p className="mb-4">
                Our analysis may contain links to third-party websites for verification purposes (such as Scamwatch or official bank websites). We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">Limitation of Liability</h2>
            <p className="mb-4">
                Scam Checker is provided &quot;as is&quot; without warranty of any kind. We are not liable for any damages or losses arising from your use of this tool or reliance on its results. Use at your own risk and exercise independent judgement.
            </p>
        </div>
    );
}
