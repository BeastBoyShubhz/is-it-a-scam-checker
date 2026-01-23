
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <ShieldAlert className="w-6 h-6" />
                    <span>Scam Checker</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link>
                    <Link href="/guides" className="hover:text-primary transition-colors">Guides</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Button asChild variant="default" size="sm">
                        <Link href="/#checker">Check for Free</Link>
                    </Button>
                </nav>
            </div>
        </header>
    );
}
