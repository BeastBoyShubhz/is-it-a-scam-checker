
import type { Metadata } from 'next';
import { ScamChecker } from '@/components/ScamChecker';
import { TrustSection } from '@/components/TrustSection';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Check if a Text Message Is a Scam | Scam Checker",
    description: "Received a suspicious SMS or WhatsApp message? Use our free tool to instantly check if a text message is a scam. Protect yourself from smishing.",
    alternates: {
        canonical: 'https://scamchecker.app/check-scam-text',
    },
};

export default function CheckScamTextPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-6 text-sm text-slate-500">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 font-medium">Check Text Message</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Check if a Text Message Is a Scam
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Paste any suspicious SMS, WhatsApp, or social media message below to spot hidden red flags instantly.
                    </p>

                    <ScamChecker defaultTab="text" />
                </div>
            </section>

            <TrustSection />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">How to Spot a Scam Text Message</h2>
                    <div className="space-y-6 text-slate-700">
                        <p>
                            Scam text messages, also known as "smishing," are increasingly common. They often pretend to be from trusted sources like your bank, the post office, or a family member.
                        </p>
                        <h3 className="text-xl font-semibold text-slate-900 mt-8">Common Signs of a Text Scam</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Unexpected Delivery Issues:</strong> "We missed your delivery, click here to reschedule."</li>
                            <li><strong>"Hi Mum" Scams:</strong> Messages claiming a child has lost their phone and needs money.</li>
                            <li><strong>Urgent Warnings:</strong> "Your bank account has been suspended."</li>
                            <li><strong>Job Offers:</strong> "You've been selected for a job," linking to WhatsApp.</li>
                        </ul>
                        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                            <p className="font-medium text-blue-900">
                                Tip: Never click links in unexpected text messages. Always verify by contacting the company directly through their official website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
