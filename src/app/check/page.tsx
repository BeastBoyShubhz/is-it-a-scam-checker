import { Metadata } from 'next';
import { ScamChecker } from '@/components/ScamChecker';
import { TrustSection } from '@/components/TrustSection';
import { LatestScams } from '@/components/LatestScams';
import { FAQ } from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Check a Link, Email or Message for Scam Red Flags | Scam Checker',
    description: 'Paste a suspicious message, email or link to get an instant scam risk assessment. Free, private, no sign-up required. Built for Australians.',
    alternates: {
        canonical: 'https://scamchecker.app/check',
    },
    openGraph: {
        title: 'Check a Link, Email or Message for Scam Red Flags',
        description: 'Paste a suspicious message, email or link to get an instant scam risk assessment. Free and private.',
        url: 'https://scamchecker.app/check',
    },
};

export default function CheckPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Check a Link, Email or Message for Scam Red Flags
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
                        Received something suspicious? Paste the content below and we&apos;ll analyse it for common scam patterns used in Australia. Works for SMS, WhatsApp, emails, and website links.
                    </p>
                    <p className="text-md text-slate-500 mb-8 max-w-2xl mx-auto">
                        Your content is checked in real-time. We don&apos;t store what you paste.
                    </p>

                    <ScamChecker />

                    <p className="text-sm text-slate-500 mt-6 max-w-lg mx-auto leading-relaxed">
                        <strong>Privacy Note:</strong> We don&apos;t store what you paste (except for anonymous analytics).
                        <br />
                        This tool provides guidance, not certainty. Always verify with the official source.
                    </p>
                </div>
            </section>

            {/* How to Use This Checker */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">How to Use This Scam Checker</h2>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-4">
                            Using the checker is straightforward. Copy the suspicious content — whether it&apos;s a text message, email body, or URL — and paste it into the box above. The analysis happens in your browser within seconds.
                        </p>
                        <p className="text-slate-600 mb-4">
                            You&apos;ll receive a risk rating (Low, Medium, or High) along with specific red flags we detected. Each red flag is explained in plain English so you understand why something looks suspicious.
                        </p>
                        <p className="text-slate-600">
                            Remember: no automated tool is perfect. If you&apos;re ever unsure, contact the supposed sender through official channels — for example, call your bank using the number on the back of your card, not a number from a suspicious message.
                        </p>
                    </div>
                </div>
            </section>

            {/* Red Flags We Detect */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Red Flags We Detect</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Urgency and Threats</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• &quot;Act immediately or lose access&quot;</li>
                                <li>• &quot;Your account will be suspended&quot;</li>
                                <li>• Threats of arrest or legal action</li>
                                <li>• Artificial time limits (&quot;24 hours only&quot;)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Suspicious Requests</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Requests for passwords or PINs</li>
                                <li>• Requests for gift card payments</li>
                                <li>• Unusual bank transfer requests</li>
                                <li>• 2FA codes (&quot;read me the code we sent&quot;)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Impersonation Patterns</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Fake government agency messages (ATO, myGov)</li>
                                <li>• Fake delivery notifications (AusPost, DHL)</li>
                                <li>• Fake bank alerts (CommBank, NAB, Westpac)</li>
                                <li>• &quot;Hi Mum/Dad&quot; family impersonation</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Suspicious Links</h3>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Lookalike domains (e.g., paypa1.com)</li>
                                <li>• Subdomain tricks (bank.scam-site.com)</li>
                                <li>• URL shorteners hiding destinations</li>
                                <li>• Non-.gov.au domains for government services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* If You Already Clicked */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">If You&apos;ve Already Clicked or Responded</h2>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <p className="text-slate-700 mb-4">
                            If you&apos;ve already engaged with a suspicious message, here&apos;s what to do immediately:
                        </p>
                        <ul className="text-slate-700 space-y-2 mb-4">
                            <li><strong>Changed a password on a fake site?</strong> Change it immediately on the real website. Enable two-factor authentication.</li>
                            <li><strong>Entered card details?</strong> Call your bank now using the number on your card. Request a new card.</li>
                            <li><strong>Sent money?</strong> Contact your bank immediately. Report to police via <a href="https://www.cyber.gov.au/report" className="text-primary hover:underline">ReportCyber</a>.</li>
                            <li><strong>Gave remote access?</strong> Disconnect from the internet. Run a full antivirus scan. Change all passwords from a different device.</li>
                        </ul>
                        <p className="text-slate-600 text-sm">
                            Report scams to <a href="https://www.scamwatch.gov.au" className="text-primary hover:underline">Scamwatch</a> to help warn others.
                        </p>
                    </div>
                </div>
            </section>

            {/* What to Do Next */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">What to Do Next</h2>
                    <ol className="space-y-4 text-slate-700">
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                            <div>
                                <strong>Check the result above.</strong> If it shows Medium or High risk, treat the message as suspicious.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                            <div>
                                <strong>Verify independently.</strong> Contact the organisation directly using official contact details from their real website — not from the message.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                            <div>
                                <strong>Don&apos;t click links.</strong> Type the official website address directly into your browser.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</span>
                            <div>
                                <strong>Report suspicious messages.</strong> Forward scam SMS to 0429 999 888. Report online at <a href="https://www.scamwatch.gov.au" className="text-primary hover:underline">Scamwatch</a>.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</span>
                            <div>
                                <strong>Learn more.</strong> Read our <Link href="/guides" className="text-primary hover:underline">scam guides</Link> for detailed examples and advice.
                            </div>
                        </li>
                    </ol>
                </div>
            </section>

            {/* Trust Section */}
            <TrustSection />

            <LatestScams />

            <FAQ />
        </div>
    );
}
