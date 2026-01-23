
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer | Is It a Scam?',
    description: 'Legal disclaimer for our analysis tool.',
};

export default function DisclaimerPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-slate">
            <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>

            <p className="mb-4 text-lg">
                The "Is It a Scam?" tool provides automated analysis based on common patterns and user-submitted data. <strong>It is not a guarantee of safety or danger.</strong>
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">Not Professional Advice</h2>
            <p className="mb-4">
                The information provided by this website does not constitute legal, financial, or cybersecurity advice. You should not rely solely on our analysis to make financial decisions or share personal information.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">False Positives/Negatives</h2>
            <p className="mb-4">
                Our system may occasionally flag legitimate messages as suspicious (false positive) or fail to detect a new or sophisticated scam (false negative). Always verify sensitive requests through official channels (e.g., by calling the bank directly using a number from their website).
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">Third-Party Links</h2>
            <p className="mb-4">
                Our analysis may contain links to third-party websites for verification purposes. We are not responsible for the content or privacy practices of these external sites.
            </p>
        </div>
    );
}
