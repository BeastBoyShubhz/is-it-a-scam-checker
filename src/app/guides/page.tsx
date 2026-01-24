
import Link from 'next/link';
import { guides } from '@/lib/guides';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Scam Guides & Resources | Is It a Scam?',
    description: 'Learn how to identify and avoid common scams with our detailed guides.',
};

export default function GuidesIndexPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">Scam Awareness Guides</h1>
                <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                    Stay one step ahead of fraudsters with our expert guides on the latest scam tactics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guides.map((guide) => (
                        <Link href={`/guides/${guide.slug}`} key={guide.slug} className="hover:no-underline block group">
                            <Card className="h-full transition-shadow hover:shadow-lg border-2 hover:border-primary/50 bg-white">
                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{guide.title}</CardTitle>
                                    <CardDescription>{new Date(guide.date).toLocaleDateString()}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm">{guide.excerpt}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
