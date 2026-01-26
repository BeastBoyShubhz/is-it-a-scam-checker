import { Metadata } from 'next';
import { ScamChecker } from '@/components/ScamChecker';
import { TrustSection } from '@/components/TrustSection';
import { LatestScams } from '@/components/LatestScams';
import { FAQ } from '@/components/FAQ';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Is This a Scam? Check Any Message, Email or Link Instantly | Scam Checker',
    description: 'Paste a suspicious message, email or website link to get an instant fraud risk assessment. Free tool that detects phishing patterns, fake sender tactics, and malicious URLs.',
    alternates: {
        canonical: 'https://scamchecker.app/check',
    },
    openGraph: {
        title: 'Is This a Scam? Check Any Message, Email or Link Instantly',
        description: 'Paste suspicious content for instant fraud risk assessment. Free, private, no sign-up.',
        url: 'https://scamchecker.app/check',
    },
};

export default function CheckPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Is This a Scam? Check Any Message, Email or Link Instantly
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
                        Not sure whether to trust that text, email, or website? Paste the content below and our tool will analyse it for common fraud patterns. We check for phishing tactics, malicious URLs, impersonation attempts, and urgency-based manipulation.
                    </p>
                    <p className="text-md text-slate-500 mb-8 max-w-2xl mx-auto">
                        Analysis happens in your browser. We do not store what you paste. Results are instant.
                    </p>

                    <ScamChecker />

                    <p className="text-sm text-slate-500 mt-6 max-w-lg mx-auto leading-relaxed">
                        <strong>Privacy guarantee:</strong> Your content is analysed locally and never transmitted to our servers.
                        <br />
                        This tool provides guidance. Always verify requests through official channels when in doubt.
                    </p>
                </div>
            </section>

            {/* Step-by-Step: How to Use This Scam Checker */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Step-by-Step: How to Use This Scam Detection Tool</h2>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-4">
                            Using the checker is simple. Copy the suspicious content — whether it is a text message, the body of an email, or a URL someone sent you — and paste it into the input box above. Analysis begins automatically.
                        </p>
                        <p className="text-slate-600 mb-4">
                            Within seconds, you will receive a risk rating (Low, Medium, or High) along with specific red flags we detected. Each flag is explained in plain language so you understand exactly why something appears suspicious.
                        </p>
                        <p className="text-slate-600">
                            No automated tool is perfect. If you remain uncertain after checking, contact the supposed sender through official channels. For example, if someone claims to be your bank, call the number on your card — not the number in the suspicious message.
                        </p>
                    </div>
                </div>
            </section>

            {/* What This Tool Scans For */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Fraud Patterns and Warning Signs This Tool Detects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Urgency and Threat Language</h3>
                            <p className="text-slate-600 text-sm mb-2">Scammers create panic to prevent clear thinking:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• &quot;Act immediately or lose access to your account&quot;</li>
                                <li>• &quot;Your package will be returned if you do not pay now&quot;</li>
                                <li>• Threats of arrest, lawsuits, or account termination</li>
                                <li>• Artificial deadlines (&quot;respond within 24 hours&quot;)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Unusual Payment and Information Requests</h3>
                            <p className="text-slate-600 text-sm mb-2">Legitimate organisations do not operate this way:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Requests for passwords, PINs, or security codes</li>
                                <li>• Payment via gift cards, cryptocurrency, or wire transfer</li>
                                <li>• Asking you to read back a verification code</li>
                                <li>• Requests to download software for &quot;security&quot;</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Brand and Authority Impersonation</h3>
                            <p className="text-slate-600 text-sm mb-2">Fraudsters exploit trust in known organisations:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Banks and financial services (Chase, HSBC, PayPal)</li>
                                <li>• Delivery companies (DHL, FedEx, UPS, postal services)</li>
                                <li>• Government agencies (tax authorities, immigration)</li>
                                <li>• Technology companies (Microsoft, Apple, Amazon)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-5 rounded-lg border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Suspicious URL Structures</h3>
                            <p className="text-slate-600 text-sm mb-2">Malicious links often have telltale patterns:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Misspelled domains (e.g., paypa1.com, arnazon.com)</li>
                                <li>• Real brand in subdomain (paypal.scam-domain.com)</li>
                                <li>• URL shorteners hiding the actual destination</li>
                                <li>• Unusual top-level domains for known brands</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Do If You Already Interacted */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Already Clicked the Link or Responded to the Message?</h2>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <p className="text-slate-700 mb-4">
                            If you have already engaged with a suspicious message, take these steps immediately:
                        </p>
                        <ul className="text-slate-700 space-y-3 mb-4">
                            <li><strong>Entered credentials on a fake site?</strong> Change that password immediately on the real website. Enable two-factor authentication if available. Use a unique password for each account.</li>
                            <li><strong>Provided payment card details?</strong> Contact your bank or card issuer immediately. Request a new card number. Monitor statements for unauthorised charges.</li>
                            <li><strong>Sent money to a scammer?</strong> Contact your bank or payment service immediately. File a report with local law enforcement. Report the scam to consumer protection agencies.</li>
                            <li><strong>Gave remote access to your device?</strong> Disconnect from the internet. Run a full antivirus scan. Change all passwords from a different device. Consider professional malware removal.</li>
                        </ul>
                        <p className="text-slate-600 text-sm">
                            Reporting scams helps protect others. Consider reporting to your local consumer protection agency and the platform where you received the scam.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clear Next Steps After Checking */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">What to Do After Checking Your Suspicious Content</h2>
                    <ol className="space-y-4 text-slate-700">
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</span>
                            <div>
                                <strong>Review the risk assessment above.</strong> If the result shows Medium or High risk, treat the message as potentially fraudulent. Do not click links, call numbers, or reply to the sender.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</span>
                            <div>
                                <strong>Verify through official channels.</strong> If the message claims to be from a company or organisation, contact them directly using contact information from their official website — never from the suspicious message itself.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</span>
                            <div>
                                <strong>Avoid clicking embedded links.</strong> Instead of clicking, type the official website address directly into your browser. Scammers rely on you automattically clicking without examining the destination.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</span>
                            <div>
                                <strong>Block and report the sender.</strong> Most messaging platforms allow you to report scam messages. This helps protect other users from the same campaign.
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</span>
                            <div>
                                <strong>Learn more about specific scam types.</strong> Read our <Link href="/guides" className="text-primary hover:underline">comprehensive guides on identifying phishing, impersonation, and online fraud</Link> to recognise future threats.
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
