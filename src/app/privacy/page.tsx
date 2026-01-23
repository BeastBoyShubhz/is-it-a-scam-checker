
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Is It a Scam?',
    description: 'Our privacy policy regarding how we handle your data.',
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-slate">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-bold mt-6 mb-2">1. Data Collection</h2>
            <p className="mb-4">
                We prioritize your privacy. When you use our scam checker tool, the text check runs primarily in your browser. We do not store the content of the messages or emails you paste into the checker unless explicitly stated otherwise for improving our service (which we are not doing at this stage).
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">2. Analytics</h2>
            <p className="mb-4">
                We use privacy-friendly analytics (e.g., Google Analytics or similar) to track aggregate usage statistics, such as the number of checks performed and pages visited. This data is anonymized and does not contain personal information.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">3. User Data</h2>
            <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">4. Changes</h2>
            <p className="mb-4">
                We may update this privacy policy from time to time. We encourage users to check this page frequently for any changes.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">5. Contact</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us via our contact page.
            </p>
        </div>
    );
}
