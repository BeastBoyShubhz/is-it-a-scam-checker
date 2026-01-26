import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Report } from '@prisma/client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertOctagon, BookOpen, ShieldCheck, Users, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Live Scam Reports: Real-Time Feed of Reported Fraud Attempts',
    description: 'See scams reported by users in real-time. Check if a phone number, URL or sender has been flagged. Community-powered fraud detection.',
    alternates: {
        canonical: 'https://scamchecker.app/reports',
    },
    openGraph: {
        title: 'Live Scam Reports: Real-Time Feed of Reported Fraud Attempts',
        description: 'See scams reported by users in real-time. Community-powered fraud detection.',
        url: 'https://scamchecker.app/reports',
    },
};

export const dynamic = 'force-dynamic';


function maskValue(type: string, val: string) {
    if (!val) return '';
    const t = type.toLowerCase();
    if (t === 'phone' || t === 'sms' || t === 'text') {
        if (val.length < 5) return val;
        return val.substring(0, 3) + '****' + val.substring(val.length - 3);
    }
    if (t === 'email') {
        const [u, d] = val.split('@');
        if (!d) return val.substring(0, 3) + '...';
        return (u.substring(0, 2) + '***@' + d);
    }
    // URL
    if (val.length > 60) return val.substring(0, 57) + '...';
    return val;
}

export default async function ReportsPage() {
    let reports: Report[] = [];
    let error = false;

    try {
        reports = await prisma.report.findMany({
            take: 50,
            orderBy: { created_at: 'desc' },
        });
    } catch (e) {
        error = true;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
                    <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors mb-4 inline-block">&larr; Back to Home</Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                                <AlertOctagon className="w-8 h-8 text-red-600" />
                                Live Scam Reports: Real-Time Feed of Reported Fraud Attempts
                            </h1>
                            <p className="text-slate-600 mt-2">
                                See what others are reporting. Check if a number, URL, or sender has already been flagged as suspicious.
                            </p>
                        </div>
                        <Button asChild variant="default" className="bg-red-600 hover:bg-red-700">
                            <Link href="/check">Report a suspicious message or link</Link>
                        </Button>
                    </div>
                </div>

                {/* Why Community Reports Matter */}
                <section className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-primary" />
                        <h2 className="text-xl font-bold text-slate-900">How Community Reports Help Everyone Stay Safe</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Scammers frequently change phone numbers, domains, and tactics to avoid detection. By sharing what you receive, you help others recognise active fraud campaigns before they become victims. Every report contributes to a collective defence network.
                    </p>
                    <p className="text-slate-600">
                        If you see a number or link here that matches something you received, treat it with extra caution. If you have received something suspicious that is not yet listed, use our <Link href="/check" className="text-primary hover:underline">scam checker tool to analyse it and contribute to the database</Link>.
                    </p>
                </section>

                {/* How to Use This Report Data */}
                <section className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="w-6 h-6 text-blue-500" />
                        <h2 className="text-xl font-bold text-slate-900">Practical Ways to Use This Real-Time Scam Data</h2>
                    </div>
                    <ul className="text-slate-600 space-y-2">
                        <li>• <strong>Verify incoming calls:</strong> Received a call from an unknown number? Search this list to see if others have reported it as fraudulent.</li>
                        <li>• <strong>Check links before clicking:</strong> Before visiting a URL in a text or email, check here to see if it has been flagged as malicious.</li>
                        <li>• <strong>Identify active campaigns:</strong> Browse recent reports to understand what scam patterns are circulating right now.</li>
                        <li>• <strong>Contribute your experience:</strong> If you received a scam attempt, <Link href="/check" className="text-primary hover:underline">analyse and report it to help protect others</Link>.</li>
                    </ul>
                </section>

                {/* Cross-linking CTAs */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
                        <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1">Received something suspicious?</h3>
                            <p className="text-sm text-slate-600 mb-3">Paste it in our checker for instant fraud risk assessment.</p>
                            <Button asChild size="sm" variant="default">
                                <Link href="/check">Analyse a suspicious message or link</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
                        <BookOpen className="w-10 h-10 text-amber-500 flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1">Learn to identify scam patterns</h3>
                            <p className="text-sm text-slate-600 mb-3">Read our guides with real examples and protection advice.</p>
                            <Button asChild size="sm" variant="outline">
                                <Link href="/guides">Browse scam identification guides</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Recent Reports */}
                <h2 className="text-xl font-bold text-slate-900 mb-4">Most Recent Fraud Reports from the Community</h2>
                {error ? (
                    <div className="p-12 text-center bg-white rounded-lg border border-dashed text-slate-500">
                        Report database is temporarily unavailable. Please check back later.
                    </div>
                ) : reports.length === 0 ? (
                    <div className="p-12 text-center bg-white rounded-lg border border-dashed text-slate-500">
                        No reports yet. Be the first to <Link href="/check" className="text-primary hover:underline">report a suspicious message or link</Link>!
                    </div>
                ) : (
                    <div className="space-y-4">
                        {reports.map(r => (
                            <Card key={r.id} className="bg-white hover:border-red-200 transition-colors shadow-sm">
                                <CardContent className="p-5">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2 py-0.5 rounded text-xs font-bold uppercase bg-slate-100 text-slate-600">
                                                    {r.type}
                                                </span>
                                                <span className="text-xs text-slate-400">
                                                    {new Date(r.created_at).toLocaleDateString()} at {new Date(r.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                                <span className="text-xs text-slate-300">
                                                    From {r.country}
                                                </span>
                                            </div>
                                            <div className="font-mono text-sm md:text-base text-slate-800 break-all mb-2">
                                                {maskValue(r.type, r.value_raw)}
                                            </div>
                                            {r.notes && (
                                                <p className="text-sm text-slate-600 italic border-l-2 border-slate-200 pl-3">
                                                    &quot;{r.notes}&quot;
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
