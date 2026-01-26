import Link from 'next/link';
import { guides } from '@/lib/guides';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { ShieldCheck, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Scam Guides: Real Examples and What to Do Next | Scam Checker',
    description: 'Comprehensive guides on identifying scams in Australia. Learn to spot fake websites, phishing emails, text scams, PayID fraud, and more with real examples.',
    alternates: {
        canonical: 'https://scamchecker.app/guides',
    },
    openGraph: {
        title: 'Scam Guides: Real Examples and What to Do Next',
        description: 'Comprehensive guides on identifying scams in Australia with real examples and actionable advice.',
        url: 'https://scamchecker.app/guides',
    },
};

// Top 5 guides for "Start Here" section
const startHereGuides = [
    'scam-text-message-examples',
    'email-phishing-examples',
    'is-this-website-legit',
    'bank-impersonation-scams',
    'how-to-spot-a-fake-link',
];

export default function GuidesIndexPage() {
    const topGuides = startHereGuides.map(slug => guides.find(g => g.slug === slug)).filter(Boolean);

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-4xl font-bold mb-4 text-slate-900 text-center">Scam Guides: Real Examples and What to Do Next</h1>
                <p className="text-xl text-slate-600 text-center mb-4 max-w-2xl mx-auto">
                    Learn how to identify and protect yourself from the most common scams targeting Australians. Each guide includes real message examples, red flags to watch for, and step-by-step advice.
                </p>
                <p className="text-md text-slate-500 text-center mb-8 max-w-2xl mx-auto">
                    These guides are written in plain English with practical, actionable information — no jargon, no fluff.
                </p>

                {/* Checker CTA Banner */}
                <div className="bg-gradient-to-r from-primary/10 to-emerald-50 border border-primary/20 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                        <div>
                            <h2 className="font-bold text-lg text-slate-900">Got a suspicious message right now?</h2>
                            <p className="text-slate-600">Paste it into our free checker for an instant scam risk assessment.</p>
                        </div>
                    </div>
                    <Button asChild size="lg" className="flex-shrink-0">
                        <Link href="/check" className="gap-2">
                            Use the Scam Checker
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* How to Use These Guides */}
                <section className="mb-12 bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <h2 className="text-xl font-bold text-slate-900">How to Use These Guides</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Each guide focuses on a specific scam type you might encounter. We show you what the scam looks like, explain why it works on so many people, and give you clear steps to protect yourself. You&apos;ll find real message examples (with identifying details removed) so you can recognise the patterns.
                    </p>
                    <p className="text-slate-600">
                        If you&apos;ve received a suspicious message, start by using our <Link href="/check" className="text-primary hover:underline">scam checker tool</Link> for an instant assessment. Then read the relevant guide for deeper context and advice on what to do next — especially if you&apos;ve already clicked a link or given out information.
                    </p>
                </section>

                {/* Australia-Specific Quick Tips */}
                <section className="mb-12 bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-amber-500" />
                        <h2 className="text-xl font-bold text-slate-900">Australia-Specific Scam Quick Tips</h2>
                    </div>
                    <ul className="text-slate-600 space-y-2">
                        <li>• <strong>ATO and myGov</strong> never send links via SMS. Real messages come through your myGov inbox at my.gov.au only.</li>
                        <li>• <strong>AusPost</strong> doesn&apos;t charge redelivery fees via text. If you get a parcel fee SMS, it&apos;s a scam.</li>
                        <li>• <strong>Banks</strong> never ask you to move money to a &quot;safe account&quot; or read 2FA codes over the phone.</li>
                        <li>• <strong>PayID</strong> has no upgrade fees. If a buyer asks you to pay anything, it&apos;s fraud.</li>
                        <li>• <strong>Report scams</strong> to Scamwatch (scamwatch.gov.au) and forward scam SMS to 0429 999 888.</li>
                    </ul>
                </section>

                {/* Common Scam Patterns */}
                <section className="mb-12 bg-white p-6 rounded-xl border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Common Scam Patterns to Recognise</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-2">Urgency Tactics</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• &quot;Act within 24 hours&quot;</li>
                                <li>• &quot;Your account will be suspended&quot;</li>
                                <li>• &quot;Immediate action required&quot;</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-2">Impersonation</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Fake bank caller ID</li>
                                <li>• Tax refund messages</li>
                                <li>• &quot;Hi Mum/Dad&quot; texts</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-2">Payment Red Flags</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Gift card requests</li>
                                <li>• Crypto payments</li>
                                <li>• Unusual bank transfers</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-2">Suspicious Links</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Lookalike domains</li>
                                <li>• URL shorteners</li>
                                <li>• Non-Australian TLDs</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Start Here Section */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Start Here: Most Common Scams</h2>
                    <p className="text-slate-600 mb-6">
                        New to scam awareness? These five guides cover the scams Australians encounter most often:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topGuides.map((guide) => guide && (
                            <Link href={`/guides/${guide.slug}`} key={guide.slug} className="hover:no-underline block group">
                                <Card className="h-full transition-shadow hover:shadow-lg border-2 hover:border-primary/50 bg-white">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
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
                </section>

                {/* All Guides */}
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">All Scam Guides</h2>
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
                </section>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/check">Check Any Suspicious Message or Link</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
