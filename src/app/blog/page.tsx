import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { ArrowRight, Newspaper, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog – Latest Scam Alerts & Safety Advice | Scam Checker',
    description:
        'Stay informed with the latest scam alerts, fraud trends, and safety tips. Updated regularly to help you recognise and avoid new threats.',
    alternates: {
        canonical: 'https://scamchecker.app/blog',
    },
    openGraph: {
        title: 'Blog – Latest Scam Alerts & Safety Advice | Scam Checker',
        description:
            'Stay informed with the latest scam alerts, fraud trends, and safety tips.',
        url: 'https://scamchecker.app/blog',
    },
};

export default function BlogIndexPage() {
    const posts = getAllPosts();

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <header className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 text-primary mb-4">
                        <Newspaper className="w-6 h-6" />
                        <span className="text-sm font-semibold uppercase tracking-wider">
                            Scam Checker Blog
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
                        Latest Scam Alerts &amp; Safety Advice
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Stay ahead of scammers with timely alerts, trend analyses, and
                        practical advice to protect yourself online.
                    </p>
                </header>

                {/* Instant Checker CTA */}
                <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-16 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <ShieldCheck className="w-64 h-64 text-blue-600" />
                    </div>
                    <div className="flex items-start gap-6 relative z-10">
                        <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="font-bold text-2xl text-slate-900 mb-2">
                                Received something suspicious?
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Paste it into our free scam checker for an instant analysis.
                            </p>
                        </div>
                    </div>
                    <Button
                        asChild
                        size="lg"
                        className="flex-shrink-0 relative z-10 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
                    >
                        <Link href="/check" className="gap-2">
                            Check Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>

                {/* Posts */}
                {posts.length === 0 ? (
                    <div className="text-center py-16 text-slate-500">
                        <p className="text-lg">No posts yet. Check back soon!</p>
                    </div>
                ) : (
                    <section>
                        <div className="flex items-center gap-3 mb-8">
                            <Newspaper className="w-7 h-7 text-slate-700" />
                            <h2 className="text-3xl font-bold text-slate-900">
                                All Posts
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {posts.map((post) => (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    key={post.slug}
                                    className="hover:no-underline block h-full"
                                >
                                    <Card className="h-full border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex flex-col">
                                        <CardHeader>
                                            <div className="flex items-center gap-2 mb-2">
                                                <time
                                                    dateTime={post.frontmatter.date}
                                                    className="text-xs font-medium text-slate-500"
                                                >
                                                    {new Date(
                                                        post.frontmatter.date,
                                                    ).toLocaleDateString('en-AU', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric',
                                                    })}
                                                </time>
                                            </div>
                                            <CardTitle className="text-xl text-slate-900 leading-tight">
                                                {post.frontmatter.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-1">
                                            <p className="text-slate-600 text-sm mb-4">
                                                {post.frontmatter.summary}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {post.frontmatter.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <div className="px-6 pb-6 pt-0 mt-auto">
                                            <span className="text-sm font-medium text-blue-600 flex items-center gap-1">
                                                Read Article{' '}
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Footer CTA */}
                <div className="bg-slate-900 rounded-3xl p-12 text-center text-white mt-16">
                    <h2 className="text-3xl font-bold mb-6">Stay Ahead of Scammers</h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Scams evolve daily. Bookmark this page and check back for the
                        latest alerts.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-slate-900 hover:bg-slate-100"
                        >
                            <Link href="/check">Run a Scam Check</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-slate-700 text-white hover:bg-slate-800 hover:text-white"
                        >
                            <Link href="/guides">Read Guides</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
