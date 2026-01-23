
import { Metadata } from 'next';
import { Search, ShieldAlert, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'How It Works | Is It a Scam?',
    description: 'Understand how our scam detection algorithm works to keep you safe.',
};

export default function HowItWorksPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">How It Works</h1>

            <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="bg-blue-100 p-6 rounded-full text-blue-600 flex-shrink-0">
                        <Search className="w-10 h-10" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">1. Analyze Key Patterns</h2>
                        <p className="text-lg text-slate-700">
                            When you paste a URL, email, or text message, our system scans the text for specific "signals". These include high-pressure language ("act now"), known scam keywords (like "gift card" payments), and attempts to impersonate legitimate organizations (like banks or government agencies).
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="bg-orange-100 p-6 rounded-full text-orange-600 flex-shrink-0">
                        <ShieldAlert className="w-10 h-10" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">2. Check for Red Flags</h2>
                        <p className="text-lg text-slate-700">
                            We cross-reference the content against a database of known suspicious patterns. For example, if a message claims to be from "Australia Post" but asks you to pay a fee via a strange link, that's a massive red flag. We also check technical details like URL structures to spot fake websites.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="bg-green-100 p-6 rounded-full text-green-600 flex-shrink-0">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">3. Instant Safety Score</h2>
                        <p className="text-lg text-slate-700">
                            Based on these findings, we give you a simple risk score: <strong>Low</strong>, <strong>Medium</strong>, or <strong>High</strong>. We also explain exactly <em>why</em> we gave that score and provide clear, actionable steps on what to do next (like "block the number" or "contact your bank").
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
