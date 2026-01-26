import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy: How We Protect Your Data | Scam Checker',
    description: 'Our privacy policy explaining how Scam Checker handles your data. We prioritise privacy - your content is analysed locally and not stored.',
    alternates: {
        canonical: 'https://scamchecker.app/privacy',
    },
    openGraph: {
        title: 'Privacy Policy: How We Protect Your Data',
        description: 'Our privacy policy explaining how Scam Checker handles your data.',
        url: 'https://scamchecker.app/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-slate">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy: How We Protect Your Data</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2026</p>

            <h2 className="text-xl font-bold mt-6 mb-2">1. Data Collection</h2>
            <p className="mb-4">
                We prioritise your privacy. When you use our scam checker tool, the text analysis runs primarily in your browser. We do not store the content of the messages or emails you paste into the checker unless you explicitly choose to report a scam to help others.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">2. Community Reports</h2>
            <p className="mb-4">
                If you choose to submit a community report, we store an anonymised version of the flagged content (e.g., phone numbers, URLs) to help warn other users. This data does not include any personal identifiers about you.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">3. Analytics</h2>
            <p className="mb-4">
                We use privacy-friendly analytics to track aggregate usage statistics, such as the number of checks performed and pages visited. This data is anonymised and does not contain personal information.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">4. No Data Sales</h2>
            <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Ever.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">5. Cookies</h2>
            <p className="mb-4">
                We use minimal cookies required for the site to function. We do not use tracking cookies for advertising purposes.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">6. Changes</h2>
            <p className="mb-4">
                We may update this privacy policy from time to time. We encourage users to check this page periodically for any changes.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">7. Contact</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us via our <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
        </div>
    );
}
