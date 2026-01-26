
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-slate-300 py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <h3 className="text-white font-bold text-lg mb-4">Scam Checker</h3>
                        <p className="text-sm mb-4">
                            Free tool to check if a website, email, or message is safe. We use pattern recognition to help potential victims identify scams before it&apos;s too late.
                        </p>
                        <p className="text-sm font-medium text-emerald-400">
                            Free, privacy-first scam checks. No sign-up.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/check" className="hover:text-white font-medium">Check a Scam</Link></li>
                            <li><Link href="/guides" className="hover:text-white">Scam Guides</Link></li>
                            <li><Link href="/reports" className="hover:text-white">Community Reports</Link></li>
                            <li><Link href="/how-it-works" className="hover:text-white">How it Works</Link></li>
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
                            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-700 pt-8 text-center text-sm">
                    <p className="mb-2">Developed and owned by <a href="https://shubhamsingla.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">shubhamsingla.tech</a></p>
                    <p>© {new Date().getFullYear()} Scam Checker. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
