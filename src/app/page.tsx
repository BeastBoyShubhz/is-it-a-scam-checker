import { Metadata } from 'next';
import { LatestScams } from '@/components/LatestScams';
import { ScamChecker } from '@/components/ScamChecker';
import { FAQ } from '@/components/FAQ';
import { TrustSection } from '@/components/TrustSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Globe, ArrowRight, BookOpen, ShieldCheck, AlertTriangle, Search, Lock, Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free Online Scam Checker: Detect Phishing Messages, Emails and Suspicious Links',
    description: 'Instantly check if a message, email or link is a scam. Our free tool analyses text for fraud patterns, phishing attempts and suspicious URLs. No sign-up required.',
    alternates: {
        canonical: 'https://scamchecker.app',
    },
    openGraph: {
        title: 'Free Online Scam Checker: Detect Phishing Messages, Emails and Suspicious Links',
        description: 'Instantly check if a message, email or link is a scam. Free, private fraud detection.',
        url: 'https://scamchecker.app',
    },
};

const popularGuides = [
    { slug: 'is-this-website-legit', title: 'How to Tell If a Website Is Legitimate', description: 'Before entering payment details, check these signs' },
    { slug: 'how-to-spot-a-fake-link', title: 'Recognising Fake and Malicious Links', description: 'Subdomain tricks and lookalike domains explained' },
    { slug: 'scam-text-message-examples', title: 'Common SMS Scam Patterns and Examples', description: 'Parcel fees, bank alerts, and urgency tactics' },
    { slug: 'whatsapp-scams-examples', title: 'WhatsApp and Messaging App Scams', description: 'Family impersonation and investment frauds' },
    { slug: 'email-phishing-examples', title: 'Email Phishing: Real Examples and Red Flags', description: 'Invoice scams, credential theft, and fake alerts' },
    { slug: 'payid-scams-australia', title: 'Payment Platform Scams and Overpayment Tricks', description: 'PayID, Zelle, Venmo, and similar platforms' },
    { slug: 'bank-impersonation-scams', title: 'Bank Impersonation Scams: How Fraudsters Pose as Your Bank', description: 'Phone calls, texts, and emails claiming to be your bank' },
    { slug: 'facebook-marketplace-scams', title: 'Marketplace Scams: Facebook, eBay, and Classified Sites', description: 'Buyer and seller fraud tactics' },
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Free Online Scam Checker: Detect Phishing Messages, Emails and Suspicious Links
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
                        Received a suspicious text, email, or link? Paste it below for an instant fraud risk assessment. Our tool analyses content for common scam patterns — from fake delivery notifications and bank impersonation to phishing attempts and investment frauds.
                    </p>
                    <p className="text-md text-slate-500 mb-8 max-w-2xl mx-auto">
                        Completely free, requires no sign-up, and your content is never stored. Works for scams targeting users worldwide.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-text" className="gap-2">
                                <MessageSquare className="w-4 h-4 text-blue-500" />
                                Analyse a suspicious text message
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-email" className="gap-2">
                                <Mail className="w-4 h-4 text-amber-500" />
                                Analyse a suspicious email
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-link" className="gap-2">
                                <Globe className="w-4 h-4 text-green-500" />
                                Check a suspicious link or URL
                            </Link>
                        </Button>
                    </div>

                    <a id="checker" className="scroll-mt-24"></a>
                    <ScamChecker />

                    <p className="text-sm text-slate-500 mt-6 max-w-lg mx-auto leading-relaxed">
                        <strong>Your privacy matters:</strong> Content is analysed in your browser and never stored on our servers.
                        <br />
                        This tool provides guidance based on known patterns. Always verify suspicious requests through official channels.
                    </p>
                </div>
            </section>

            {/* Trust Section */}
            <TrustSection />

            {/* How Our Scam Detection Works */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-slate-900">How Our Scam Detection Technology Works</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        When you paste content into the checker, our system scans for patterns that scammers commonly use. Here is what happens behind the scenes:
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-900">Text Pattern Analysis</h3>
                            <p className="text-slate-600 text-sm">We scan for urgency language, threats, requests for money or personal information, and impersonation of trusted organisations like banks, delivery services, and government agencies.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-900">URL and Link Verification</h3>
                            <p className="text-slate-600 text-sm">Links are checked for lookalike domains, suspicious subdomains, URL shorteners hiding malicious destinations, and domains that do not match the claimed sender.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShieldCheck className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-900">Risk Assessment and Guidance</h3>
                            <p className="text-slate-600 text-sm">Based on the red flags found, you receive a risk score (Low, Medium, or High) with explanations and specific advice on what to do next.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Fraud Patterns We Detect */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-slate-900">Fraud Patterns and Scam Tactics We Detect</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                        Scammers worldwide use predictable tactics. Our checker looks for these common warning signs:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Urgency and Pressure Tactics</h3>
                            <p className="text-slate-600 text-sm mb-2">Scammers create panic to prevent you from thinking clearly:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• &quot;Act now or your account will be suspended&quot;</li>
                                <li>• &quot;You have 24 hours to respond&quot;</li>
                                <li>• Threats of arrest, legal action, or financial penalties</li>
                                <li>• Claims that you have won a prize that expires soon</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Suspicious Payment Requests</h3>
                            <p className="text-slate-600 text-sm mb-2">Legitimate organisations never ask for payment this way:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Gift cards, cryptocurrency, or wire transfers</li>
                                <li>• Overpayment scams asking you to refund the difference</li>
                                <li>• Requests to send money to &quot;verify&quot; your account</li>
                                <li>• Fake invoices for services you did not order</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Organisation Impersonation</h3>
                            <p className="text-slate-600 text-sm mb-2">Fraudsters pose as trusted entities to steal your information:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Banks and financial institutions</li>
                                <li>• Delivery companies (DHL, FedEx, UPS, postal services)</li>
                                <li>• Tax authorities and government agencies</li>
                                <li>• Technology companies (Microsoft, Apple, Google)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Malicious Links and Fake Websites</h3>
                            <p className="text-slate-600 text-sm mb-2">Designed to steal credentials or install malware:</p>
                            <ul className="text-slate-600 text-sm space-y-1">
                                <li>• Lookalike domains (e.g., paypa1.com, amaz0n-secure.com)</li>
                                <li>• Legitimate brand in subdomain (paypal.scam-site.com)</li>
                                <li>• URL shorteners hiding the real destination</li>
                                <li>• Newly registered domains with no history</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Scams You Can Analyse */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">Types of Suspicious Content You Can Analyse</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/check-scam-text" className="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Check Text Messages for Scam Signs</h3>
                            <p className="text-slate-600 text-sm">Verify SMS, WhatsApp, Telegram, or social media messages that seem suspicious. Common examples include fake delivery alerts, bank warnings, and family impersonation scams.</p>
                        </Link>
                        <Link href="/check-scam-email" className="group p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600">Analyse Emails for Phishing Attempts</h3>
                            <p className="text-slate-600 text-sm">Check emails for phishing signs, fake invoices, credential theft attempts, and business email compromise. We analyse sender patterns, link destinations, and content signatures.</p>
                        </Link>
                        <Link href="/check-scam-link" className="group p-6 rounded-xl border border-slate-200 hover:border-green-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Verify Website URLs Before Clicking</h3>
                            <p className="text-slate-600 text-sm">Scan links and URLs before visiting. We check for lookalike domains, recently registered sites, and URL patterns associated with phishing and malware distribution.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Scams Work Worldwide */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-6 text-slate-900">Why Online Scams Are So Effective</h2>
                    <p className="text-slate-600 mb-6">
                        Scammers exploit universal human psychology. They create urgency to prevent rational thinking, impersonate trusted authorities to lower your guard, and use fear of loss to push you toward quick decisions. These tactics work regardless of where you live.
                    </p>
                    <p className="text-slate-600 mb-6">
                        Modern scams are sophisticated. They use real company logos, mimic official communication styles, and register domains that look legitimate at first glance. Even experienced internet users can be fooled when they are distracted, tired, or stressed.
                    </p>
                    <p className="text-slate-600">
                        That is why automated checking tools are valuable. They apply consistent analysis without the emotional reactions that scammers exploit. When you receive something suspicious, let our tool provide a second opinion before you act.
                    </p>
                </div>
            </section>

            {/* Popular Scam Guides Section */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-slate-800">Learn to Identify Specific Scam Types</h2>
                    </div>
                    <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                        Our guides explain how different scam types work, show real examples, and provide step-by-step advice on protecting yourself.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {popularGuides.map((guide) => (
                            <Link
                                key={guide.slug}
                                href={`/guides/${guide.slug}`}
                                className="group p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all"
                            >
                                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                    {guide.title}
                                </h3>
                                <p className="text-slate-500 text-sm">{guide.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/guides" className="gap-2">
                                Browse all scam identification guides
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <LatestScams />

            {/* FAQ Section */}
            <FAQ />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebSite",
                                "name": "Scam Checker",
                                "url": "https://scamchecker.app",
                                "potentialAction": {
                                    "@type": "SearchAction",
                                    "target": "https://scamchecker.app/?q={search_term_string}",
                                    "query-input": "required name=search_term_string"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "How can I tell if a message is a scam?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Look for urgency language, requests for unusual payment methods, unknown senders, generic greetings, and suspicious links. Paste the message into our checker for automated analysis."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is this website scam checker free to use?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Scam Checker is completely free, requires no sign-up, and does not store your content. Analysis happens in your browser."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can clicking a suspicious link steal my information?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes. Malicious links can lead to phishing sites designed to capture passwords and financial details, or trigger malware downloads. Always verify links before clicking."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "What should I do if I already clicked a scam link?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Change any passwords you entered, contact your bank if you shared financial details, run antivirus software, and monitor your accounts for unusual activity."
                                        }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

        </div>
    );
}
