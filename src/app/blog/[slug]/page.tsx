import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'Not Found' };

    return {
        title: `${post.frontmatter.title} | Scam Checker Blog`,
        description: post.frontmatter.summary,
        alternates: {
            canonical: `https://scamchecker.app/blog/${slug}`,
        },
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.summary,
            type: 'article',
            publishedTime: post.frontmatter.date,
            url: `https://scamchecker.app/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            <article className="container mx-auto px-4 py-12 max-w-3xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Link>

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                    {post.frontmatter.title}
                </h1>
                <p className="text-slate-500 mb-8">
                    Published{' '}
                    {new Date(post.frontmatter.date).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {post.frontmatter.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Article JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Article',
                            headline: post.frontmatter.title,
                            description: post.frontmatter.summary,
                            datePublished: post.frontmatter.date,
                            dateModified: post.frontmatter.date,
                            author: {
                                '@type': 'Person',
                                name: 'Shubham Singla',
                                url: 'https://shubhamsingla.tech',
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'Scam Checker',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: 'https://scamchecker.app/icon.png',
                                },
                            },
                            mainEntityOfPage: {
                                '@type': 'WebPage',
                                '@id': `https://scamchecker.app/blog/${slug}`,
                            },
                        }),
                    }}
                />

                {/* Breadcrumb JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: 'https://scamchecker.app',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: 'Blog',
                                    item: 'https://scamchecker.app/blog',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 3,
                                    name: post.frontmatter.title,
                                    item: `https://scamchecker.app/blog/${slug}`,
                                },
                            ],
                        }),
                    }}
                />

                {/* MDX content */}
                <div
                    className="prose prose-slate max-w-none mb-12
                        prose-headings:text-slate-900
                        prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                        prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                        prose-p:text-slate-700 prose-p:leading-relaxed
                        prose-ul:my-4 prose-li:text-slate-700
                        prose-ol:my-4
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
                >
                    <MDXRemote source={post.content} />
                </div>

                {/* Sources */}
                {post.frontmatter.sources && post.frontmatter.sources.length > 0 && (
                    <div className="border-t border-slate-200 pt-8 mb-12">
                        <h2 className="text-lg font-bold text-slate-900 mb-4">Sources</h2>
                        <ul className="space-y-2">
                            {post.frontmatter.sources.map((source, i) => (
                                <li key={i}>
                                    <a
                                        href={source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-600 hover:underline break-all"
                                    >
                                        {source}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="bg-gradient-to-r from-primary/10 to-emerald-50 p-8 rounded-xl text-center border border-primary/20">
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                        Suspicious about a message you received?
                    </h3>
                    <p className="mb-6 text-slate-600">
                        Don&apos;t guess. Check it instantly with our free tool.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/check">Check for Scam</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
