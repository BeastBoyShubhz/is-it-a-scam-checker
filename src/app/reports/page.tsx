import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Report } from '@prisma/client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertOctagon, BookOpen, ShieldCheck, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Community Scam Reports (Australia) | Scam Checker',
    description: 'Real-time feed of scams reported by Australians. See active phone numbers, URLs and message patterns. Help others by reporting what you receive.',
    alternates: {
        canonical: 'https://scamchecker.app/reports',
    },
    openGraph: {
        title: 'Community Scam Reports (Australia)',
        description: 'Real-time feed of scams reported by Australians. See active numbers, URLs and patterns.',
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
                                Community Scam Reports (Australia)
                            </h1>
                            <p className="text-slate-600 mt-2">
                                Real-time feed of scams reported by other Australians. Check if a number or link has been flagged.
                            </p>
                        </div>
                        <Button asChild variant="default" className="bg-red-600 hover:bg-red-700">
                            <Link href="/check">Report a Suspicious Message</Link>
                        </Button>
                    </div>
                </div>

                {/* Why Community Reports Matter */}
                <section className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-primary" />
                        <h2 className="text-xl font-bold text-slate-900">Why Community Reports Matter</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Scammers change phone numbers and URLs frequently to avoid detection. By sharing what you receive, you help others recognise active scam campaigns before they fall victim. These reports are anonymous and community-sourced.
                    </p>
                    <p className="text-slate-600">
                        If you spot a number or link you&apos;ve received, treat it with extra caution. If you&apos;ve received something suspicious that isn&apos;t listed here, use our <Link href="/check" className="text-primary hover:underline">scam checker tool</Link> to analyse it and add to our database.
                    </p>
                </section>

                {/* How to Use This Data */}
                <section className="bg-white p-6 rounded-xl border border-slate-200 mb-8">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">How to Use This Data</h2>
                    <ul className="text-slate-600 space-y-2">
                        <li>• <strong>Check incoming calls:</strong> Received a call from an unknown number? Search this list to see if others have reported it.</li>
                        <li>• <strong>Verify suspicious links:</strong> Before clicking a URL in a text, check here to see if it&apos;s been reported as malicious.</li>
                        <li>• <strong>Report what you receive:</strong> If you get a scam attempt, use our <Link href="/check" className="text-primary hover:underline">checker</Link> to analyse and report it.</li>
                        <li>• <strong>Stay informed:</strong> Browse recent reports to understand what scam patterns are active right now in Australia.</li>
                    </ul>
                </section>

                {/* Cross-linking CTAs */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
                        <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1">Got a suspicious message?</h3>
                            <p className="text-sm text-slate-600 mb-3">Paste it in the checker for an instant risk assessment.</p>
                            <Button asChild size="sm" variant="default">
                                <Link href="/check">Use the Scam Checker</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4">
                        <BookOpen className="w-10 h-10 text-amber-500 flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="font-semibold text-slate-900 mb-1">Learn to spot scams</h3>
                            <p className="text-sm text-slate-600 mb-3">Read our guides with real examples and advice.</p>
                            <Button asChild size="sm" variant="outline">
                                <Link href="/guides">Read Scam Guides</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Recent Reports */}
                <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Reports</h2>
                {error ? (
                    <div className="p-12 text-center bg-white rounded-lg border border-dashed text-slate-500">
                        Database connection is currently unavailable. Please check back later.
                    </div>
                ) : reports.length === 0 ? (
                    <div className="p-12 text-center bg-white rounded-lg border border-dashed text-slate-500">
                        No reports found yet. Be the first to <Link href="/check" className="text-primary hover:underline">report a scam</Link>!
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
