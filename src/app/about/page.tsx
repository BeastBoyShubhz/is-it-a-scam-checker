
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Is It a Scam?',
    description: 'Learn about our mission to protect people from online scams, phishing, and fraud.',
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-900">About Is It a Scam?</h1>

            <div className="space-y-6 text-lg text-slate-700">
                <p>
                    "Is It a Scam?" was built with a simple mission: <strong>to help everyday people spotting scams before it's too late.</strong>
                </p>

                <p>
                    In a world where phishing emails, fake text messages, and fraudulent websites are becoming increasingly sophisticated, it's hard to know who to trust. We wanted to create a fast, free, and privacy-first tool that gives you a second opinion instantly.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Our Approach</h2>
                <p>
                    We believe in simplicity. You shouldn't need a degree in cybersecurity to know if a message is safe. Our tool looks for the common red flags that scammers use—like urgency, requests for unusual payment methods, and suspicious links—and translates them into plain English for you.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900">Who We Are</h2>
                <p>
                    This project is developed and owned by <a href="https://shubhamsingla.tech" className="text-primary hover:underline">Shubham Singla</a>, a software engineer passionate about using technology for social good.
                </p>
            </div>
        </div>
    );
}
