import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Scam Checker: Our Mission to Help People Avoid Online Fraud',
    description: 'Learn about Scam Checker, a free tool helping people worldwide identify scam messages, phishing emails, and fraudulent websites.',
    alternates: {
        canonical: 'https://scamchecker.app/about',
    },
    openGraph: {
        title: 'About Scam Checker: Our Mission to Help People Avoid Online Fraud',
        description: 'Free tool helping people worldwide identify scam messages, phishing emails, and fraudulent websites.',
        url: 'https://scamchecker.app/about',
    },
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-900">About Scam Checker: Our Mission to Help People Avoid Online Fraud</h1>

            <div className="space-y-6 text-lg text-slate-700">
                <p>
                    Scam Checker was built with a simple mission: <strong>to help everyday people spot scams before it&apos;s too late.</strong>
                </p>

                <p>
                    In a world where phishing emails, fake text messages, and fraudulent websites are becoming increasingly sophisticated, it&apos;s hard to know who to trust. We wanted to create a fast, free, and privacy-first tool that gives you a second opinion instantly — no sign-up required, no data sold.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">How We Approach Scam Detection</h2>
                <p>
                    We believe in simplicity. You should not need a degree in cybersecurity to know if a message is safe. Our tool looks for the common red flags that scammers use worldwide — like urgency tactics, requests for unusual payment methods, and suspicious links — and translates them into plain language for you.
                </p>
                <p>
                    We focus on the scams that target people most frequently: fake delivery notifications, bank impersonation calls, tax authority threats, payment platform overpayment tricks, and family impersonation messages. Our detection patterns are updated regularly to keep pace with evolving tactics.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Your Privacy Matters</h2>
                <p>
                    When you paste content into the checker, the analysis happens in your browser. We do not store your messages, emails, or personal information. If you choose to report a scam to help others, that data is anonymised before being added to our community database.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Who Built This</h2>
                <p>
                    Scam Checker is developed and maintained by <a href="https://shubhamsingla.tech" className="text-primary hover:underline">Shubham Singla</a>, a software engineer passionate about using technology for social good. The project is independent and not affiliated with any financial institution or government agency.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Why Scams Are a Global Problem</h2>
                <p>
                    Online fraud does not respect borders. Scammers use the same psychological tactics regardless of where their targets live: urgency, fear, authority, and trust exploitation work on humans everywhere. That is why we built a tool that works for scam patterns used globally, not just in one country.
                </p>
                <p>
                    Whether you receive a suspicious text claiming to be from your bank in London, a fake delivery notification in Sydney, a tax refund email in New York, or a family impersonation message in Mumbai — the underlying patterns are recognisable. Our checker helps you see through the facade.
                </p>
            </div>
        </div>
    );
}
