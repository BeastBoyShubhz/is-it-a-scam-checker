
import type { Metadata } from 'next';
import { ScamChecker } from '@/components/ScamChecker';
import { TrustSection } from '@/components/TrustSection';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Check if an Email Is a Scam | Scam Checker",
    description: "Not sure about an email? Paste it here to check for phishing scams, fake invoices, and imposter emails. Free instant email analysis.",
    alternates: {
        canonical: 'https://scamchecker.app/check-scam-email',
    },
};

export default function CheckScamEmailPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-6 text-sm text-slate-500">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 font-medium">Check Email</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Check if an Email Is a Scam
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Analyze suspicious emails for phishing attempts, fake invoices, or impersonation fraud.
                    </p>

                    <ScamChecker defaultTab="email" />
                </div>
            </section>

            <TrustSection />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Identifying Scam Emails</h2>
                    <div className="space-y-6 text-slate-700">
                        <p>
                            Phishing emails are designed to look like they come from real companies (like Netflix, Amazon, or ATO) to steal your passwords or credit card numbers.
                        </p>
                        <h3 className="text-xl font-semibold text-slate-900 mt-8">Red Flags in Emails</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Generic Greetings:</strong> "Dear Customer" instead of your name.</li>
                            <li><strong>Strange Sender Address:</strong> Emails from <em>support@amazon-security-alert.xyz</em> instead of <em>amazon.com.</em></li>
                            <li><strong>Urgency:</strong> "Your account will be deleted in 24 hours."</li>
                            <li><strong>Invoices for Unbought Items:</strong> "Here is your invoice for $499.99 Norton AntiVirus."</li>
                        </ul>
                        <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
                            <p className="font-medium text-amber-900">
                                Safety First: If an email asks you to "Login to Verify Account," do not click. Go to the service's website directly in your browser.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
