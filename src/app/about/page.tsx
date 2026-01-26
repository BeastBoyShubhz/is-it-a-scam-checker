import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Scam Checker: Our Mission to Stop Online Fraud | Australia',
    description: 'Learn about Scam Checker, a free tool helping Australians identify scam messages, phishing emails, and fraudulent websites.',
    alternates: {
        canonical: 'https://scamchecker.app/about',
    },
    openGraph: {
        title: 'About Scam Checker: Our Mission to Stop Online Fraud',
        description: 'Learn about Scam Checker, a free tool helping Australians identify scam messages, phishing emails, and fraudulent websites.',
        url: 'https://scamchecker.app/about',
    },
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-900">About Scam Checker: Our Mission to Stop Online Fraud</h1>

            <div className="space-y-6 text-lg text-slate-700">
                <p>
                    Scam Checker was built with a simple mission: <strong>to help everyday Australians spot scams before it&apos;s too late.</strong>
                </p>

                <p>
                    In a world where phishing emails, fake text messages, and fraudulent websites are becoming increasingly sophisticated, it&apos;s hard to know who to trust. We wanted to create a fast, free, and privacy-first tool that gives you a second opinion instantly — no sign-up required, no data sold.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Our Approach</h2>
                <p>
                    We believe in simplicity. You shouldn&apos;t need a degree in cybersecurity to know if a message is safe. Our tool looks for the common red flags that scammers use — like urgency, requests for unusual payment methods, and suspicious links — and translates them into plain English for you.
                </p>
                <p>
                    We focus on the scams that target Australians most: fake AusPost delivery notifications, ATO refund scams, bank impersonation calls, PayID overpayment tricks, and the ever-present &quot;Hi Mum/Dad&quot; message. Our detection patterns are updated regularly to keep pace with evolving tactics.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Privacy First</h2>
                <p>
                    When you paste content into the checker, the analysis happens in your browser. We don&apos;t store your messages, emails, or personal information. If you choose to report a scam to help others, that data is anonymised before being added to our community database.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Who Built This</h2>
                <p>
                    Scam Checker is developed and maintained by <a href="https://shubhamsingla.tech" className="text-primary hover:underline">Shubham Singla</a>, a software engineer passionate about using technology for social good. The project is independent and not affiliated with any financial institution or government agency.
                </p>
            </div>
        </div>
    );
}
