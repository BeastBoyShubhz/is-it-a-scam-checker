import { prisma } from '@/lib/db';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Report } from '@prisma/client';

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
    if (val.length > 40) return val.substring(0, 37) + '...';
    return val;
}

export async function LatestScams() {
    let reports: Report[] = [];
    try {
        reports = await prisma.report.findMany({
            take: 6,
            orderBy: { created_at: 'desc' },
        });
    } catch (e) {
        // DB not connected or error
        return null;
    }

    if (reports.length === 0) return null;

    return (
        <section className="py-12 bg-slate-50 border-t">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">
                        Recently Reported Scams
                    </h2>
                    <Link href="/reports" className="text-blue-600 hover:underline text-sm font-medium">
                        View All Reports &rarr;
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reports.map(r => (
                        <Card key={r.id} className="border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow bg-white">
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-red-600 uppercase bg-red-50 px-2 py-0.5 rounded">
                                        {r.type}
                                    </span>
                                    <span className="text-xs text-slate-400">
                                        {new Date(r.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="font-mono text-sm break-all text-slate-800 mb-1">
                                    {maskValue(r.type, r.value_raw)}
                                </div>
                                {r.notes && (
                                    <p className="text-xs text-slate-500 line-clamp-1 italic">
                                        "{r.notes}"
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
