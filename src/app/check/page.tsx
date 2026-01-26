import { Metadata } from 'next';
import { ScamChecker } from '@/components/ScamChecker';
import { TrustSection } from '@/components/TrustSection';
import { LatestScams } from '@/components/LatestScams';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
    title: 'Check a Scam | Instant Message, Email & Link Analysis',
    description: 'Not sure if it\'s a scam? Paste the message, email, or link into our free checker to get an instant safety analysis.',
    alternates: {
        canonical: 'https://scamchecker.app/check',
    },
};

export default function CheckPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Check a Scam
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Paste the suspicious content below. We'll analyze it for red flags.
                    </p>

                    <ScamChecker />

                    <p className="text-sm text-slate-500 mt-6 max-w-lg mx-auto leading-relaxed">
                        <strong>Privacy Note:</strong> We don't store what you paste (except for anonymous analytics).
                        <br />
                        This tool provides guidance, not certainty. Always verify with the official source.
                    </p>
                </div>
            </section>

            {/* Trust Section */}
            <TrustSection />

            <LatestScams />

            <FAQ />
        </div>
    );
}
