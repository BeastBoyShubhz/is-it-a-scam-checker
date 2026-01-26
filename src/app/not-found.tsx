
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found | Scam Checker',
    description: 'The page you are looking for does not exist. Return to the homepage or check a suspicious message instantly.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
            <p className="text-slate-600 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                    <Link href="/">Back to Home</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="/check">Check a Scam</Link>
                </Button>
            </div>
        </div>
    );
}
