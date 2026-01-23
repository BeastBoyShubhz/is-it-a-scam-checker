
import type { Metadata } from 'next';
import { ScamChecker } from '@/components/ScamChecker';
import { TrustSection } from '@/components/TrustSection';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Check if a Link or URL Is a Scam | Scam Checker",
    description: "Suspicious link? Check if a website URL is safe or a scam. Detect malicious sites and shortened links instantly.",
    alternates: {
        canonical: 'https://scamchecker.app/check-scam-link',
    },
};

export default function CheckScamLinkPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-6 text-sm text-slate-500">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-900 font-medium">Check Website URL</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Check if a Link or URL Is a Scam
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Paste any link, URL, or website address to check if it's safe before you click.
                    </p>

                    <ScamChecker defaultTab="url" />
                </div>
            </section>

            <TrustSection />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">How to Spot a Fake Website Link</h2>
                    <div className="space-y-6 text-slate-700">
                        <p>
                            Scammers create fake websites that look identical to real ones (like online banking or shopping sites) to capture your login details.
                        </p>
                        <h3 className="text-xl font-semibold text-slate-900 mt-8">Warning Signs in URLs</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Misspelled Domains:</strong> <em>netflex.com</em> instead of <em>netflix.com</em>.</li>
                            <li><strong>Different Top-Level Domains:</strong> Using <em>.xyz</em> or <em>.top</em> for a major bank instead of <em>.com</em> or <em>.com.au</em>.</li>
                            <li><strong>Shortened Links:</strong> Unsolicited links using bit.ly or tinyurl when you didn't ask for them.</li>
                            <li><strong>Unsecure Sites:</strong> Browsers warning "Not Secure" (though many scam sites now use HTTPS too).</li>
                        </ul>
                        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-100">
                            <p className="font-medium text-green-900">
                                Pro Tip: Inspect the URL carefully. If it looks strange or too long with random characters, check it here first.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
