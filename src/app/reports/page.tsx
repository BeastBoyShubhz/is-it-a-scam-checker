import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { Report } from '@prisma/client';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertOctagon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Live Scam Reports | Is It a Scam?',
    description: 'Real-time feed of reported scams, phishing attempts, and fraudulent numbers reported by the community.',
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
                    <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors mb-4 inline-block">&larr; Back to Checker</Link>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                                <AlertOctagon className="w-8 h-8 text-red-600" />
                                Community Reports
                            </h1>
                            <p className="text-slate-600 mt-2">
                                Recent scam activity reported by users. Use this to check if a number or link is active.
                            </p>
                        </div>
                        <Button asChild variant="default" className="bg-red-600 hover:bg-red-700">
                            <Link href="/#checker">Report a Scam</Link>
                        </Button>
                    </div>
                </div>

                {error ? (
                    <div className="p-12 text-center bg-white rounded-lg border border-dashed text-slate-500">
                        Database connection is currently unavailable. Please check back later.
                    </div>
                ) : reports.length === 0 ? (
                    <div className="p-12 text-center bg-white rounded-lg border border-dashed text-slate-500">
                        No reports found yet. Be the first to report a scam!
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
                                                    "{r.notes}"
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
