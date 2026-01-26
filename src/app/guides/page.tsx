
import Link from 'next/link';
import { guides } from '@/lib/guides';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Scam Guides – Learn to Spot Scams | Scam Checker',
    description: 'Comprehensive guides on identifying and avoiding scams in Australia. Learn about fake websites, phishing emails, text scams, and more.',
    alternates: {
        canonical: 'https://scamchecker.app/guides',
    },
};

export default function GuidesIndexPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-4xl font-bold mb-4 text-slate-900 text-center">Scam Awareness Guides</h1>
                <p className="text-xl text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                    Stay one step ahead of fraudsters with our guides on the latest scam tactics in Australia.
                </p>

                {/* Checker CTA Banner */}
                <div className="bg-gradient-to-r from-primary/10 to-emerald-50 border border-primary/20 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                        <div>
                            <h2 className="font-bold text-lg text-slate-900">Got a suspicious message right now?</h2>
                            <p className="text-slate-600">Use our free checker to get an instant verdict.</p>
                        </div>
                    </div>
                    <Button asChild size="lg" className="flex-shrink-0">
                        <Link href="/check" className="gap-2">
                            Use the Checker
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => (
                        <Link href={`/guides/${guide.slug}`} key={guide.slug} className="hover:no-underline block group">
                            <Card className="h-full transition-shadow hover:shadow-lg border-2 hover:border-primary/50 bg-white">
                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                                        {guide.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">{guide.excerpt}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/check">Check Any Message or Link</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
