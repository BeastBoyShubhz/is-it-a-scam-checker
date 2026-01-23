
import { getGuideBySlug, guides } from '@/lib/guides';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return guides.map((guide) => ({
        slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const guide = getGuideBySlug(params.slug);
    if (!guide) return { title: 'Not Found' };

    return {
        title: `${guide.title} | Is It a Scam?`,
        description: guide.excerpt,
        openGraph: {
            title: guide.title,
            description: guide.excerpt,
            type: 'article',
            publishedTime: guide.date,
        }
    };
}

export default function GuidePage({ params }: Props) {
    const guide = getGuideBySlug(params.slug);

    if (!guide) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-12 max-w-3xl">
            <Link href="/guides" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Guides
            </Link>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{guide.title}</h1>
            <p className="text-slate-500 mb-8">Published on {new Date(guide.date).toLocaleDateString()}</p>

            <div
                className="prose prose-slate max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: guide.content }}
            />

            <div className="bg-slate-100 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-4">Suspicious about a message you received?</h3>
                <p className="mb-6 text-slate-600">Don't guess. Check it instantly with our free tool.</p>
                <Button asChild size="lg">
                    <Link href="/#checker">Check for Scam</Link>
                </Button>
            </div>
        </article>
    );
}
