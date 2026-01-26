import { Metadata } from 'next';
import { LatestScams } from '@/components/LatestScams';
import { ScamChecker } from '@/components/ScamChecker';
import { FAQ } from '@/components/FAQ';
import { TrustSection } from '@/components/TrustSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Globe, ArrowRight, BookOpen, ShieldCheck, AlertTriangle, Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Free Scam Checker: Analyse Messages, Emails and Links Instantly | Australia',
    description: 'Check if a message, email or link is a scam. Free, private scam detection tool for Australians. Instant analysis of suspicious texts, phishing emails and dodgy URLs.',
    alternates: {
        canonical: 'https://scamchecker.app',
    },
    openGraph: {
        title: 'Free Scam Checker: Analyse Messages, Emails and Links Instantly',
        description: 'Check if a message, email or link is a scam. Free, private scam detection for Australians.',
        url: 'https://scamchecker.app',
    },
};

const popularGuides = [
    { slug: 'is-this-website-legit', title: 'Is This Website Legit?', description: 'Quick checks before entering card details' },
    { slug: 'how-to-spot-a-fake-link', title: 'How to Spot a Fake Link', description: 'Subdomain tricks and lookalike domains' },
    { slug: 'scam-text-message-examples', title: 'Scam Text Message Examples', description: 'SMS templates, urgency, parcel scams' },
    { slug: 'whatsapp-scams-examples', title: 'WhatsApp Scam Examples', description: '"Hi Mum/Dad" and crypto group scams' },
    { slug: 'email-phishing-examples', title: 'Email Phishing Examples', description: 'Invoice scams and login traps' },
    { slug: 'payid-scams-australia', title: 'PayID Scams Australia', description: 'Overpayment tricks and fake upgrades' },
    { slug: 'ato-scam-text-email', title: 'ATO Scam Text & Email', description: 'Tax refund and myGov red flags' },
    { slug: 'bank-impersonation-scams', title: 'Bank Impersonation Scams', description: 'Fake NAB/CommBank/Westpac calls' },
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Free Scam Checker: Analyse Messages, Emails and Links Instantly
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
                        Not sure if that text, email or website is legitimate? Paste it below and get an instant risk assessment. We check for common fraud patterns used in Australia — from fake AusPost delivery notifications to dodgy investment schemes.
                    </p>
                    <p className="text-md text-slate-500 mb-8 max-w-2xl mx-auto">
                        This tool is free, private, and requires no sign-up. Your content is analysed in real-time and never stored.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-text" className="gap-2">
                                <MessageSquare className="w-4 h-4 text-blue-500" />
                                Check a suspicious text message
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-email" className="gap-2">
                                <Mail className="w-4 h-4 text-amber-500" />
                                Check a suspicious email
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-link" className="gap-2">
                                <Globe className="w-4 h-4 text-green-500" />
                                Check a suspicious link
                            </Link>
                        </Button>
                    </div>

                    <a id="checker" className="scroll-mt-24"></a>
                    <ScamChecker />

                    <p className="text-sm text-slate-500 mt-6 max-w-lg mx-auto leading-relaxed">
                        <strong>Privacy Note:</strong> We don&apos;t store what you paste. Community reports are anonymised.
                        <br />
                        This tool provides guidance, not certainty. Always verify with the official source.
                    </p>
                </div>
            </section>

            {/* Trust Section */}
            <TrustSection />

            {/* How It Works Section - SSR Content */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-slate-900">How Scam Checker Works</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                        Our tool analyses text for patterns commonly used by scammers. Here&apos;s what happens when you paste content:
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-900">Pattern Detection</h3>
                            <p className="text-slate-600 text-sm">We scan for urgency language, suspicious URLs, requests for money or personal details, and impersonation of trusted brands like AusPost, ATO, or major banks.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <AlertTriangle className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-900">Risk Assessment</h3>
                            <p className="text-slate-600 text-sm">Based on the red flags found, we calculate a risk score: Low, Medium, or High. Each flag is explained so you understand exactly why something looks suspicious.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ShieldCheck className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-900">Actionable Advice</h3>
                            <p className="text-slate-600 text-sm">We tell you what to do next — whether that&apos;s ignoring the message, verifying with the real company, or reporting to Scamwatch if you&apos;ve already been affected.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Check For Section - SSR Content */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-slate-900">What We Check For</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                        Scammers use predictable tactics. Our checker looks for these common red flags targeting Australians:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Urgency and Pressure Tactics</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• &quot;Act now or your account will be suspended&quot;</li>
                                <li>• &quot;You have 24 hours to respond&quot;</li>
                                <li>• &quot;Immediate action required&quot;</li>
                                <li>• Threats of legal action or arrest</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Suspicious Payment Requests</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Requests for gift cards or crypto</li>
                                <li>• PayID overpayment or &quot;upgrade&quot; scams</li>
                                <li>• Unusual bank transfer requests</li>
                                <li>• Fake invoice attachments</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Brand Impersonation</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Fake AusPost delivery notifications</li>
                                <li>• Fake ATO/myGov tax refund messages</li>
                                <li>• Bank impersonation (CommBank, NAB, Westpac, ANZ)</li>
                                <li>• Toll road fee scams (Linkt, E-Toll)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-semibold text-lg mb-3 text-slate-900">Dodgy Links and URLs</h3>
                            <ul className="text-slate-600 text-sm space-y-2">
                                <li>• Lookalike domains (commbank-secure.net)</li>
                                <li>• Subdomain tricks (auspost.scam-site.com)</li>
                                <li>• URL shorteners hiding the real destination</li>
                                <li>• Non-Australian domains for AU services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Scam Checks */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">Types of Scams You Can Check</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/check-scam-text" className="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Check Suspicious Text Messages</h3>
                            <p className="text-slate-600 text-sm">Verify SMS, WhatsApp, or Facebook Messenger messages that seem off. Common examples: parcel delivery scams, &quot;Hi Mum&quot; scams, and fake bank alerts.</p>
                        </Link>
                        <Link href="/check-scam-email" className="group p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600">Check Suspicious Emails</h3>
                            <p className="text-slate-600 text-sm">Analyse emails for phishing signs, fake invoices, and credential theft attempts. We check sender details, links, and content patterns.</p>
                        </Link>
                        <Link href="/check-scam-link" className="group p-6 rounded-xl border border-slate-200 hover:border-green-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Check Suspicious Links or Websites</h3>
                            <p className="text-slate-600 text-sm">Scan URLs before clicking. We check for lookalike domains, newly registered sites, and known scam patterns.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Popular Scam Checks Section */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-slate-800">Popular Scam Guides</h2>
                    </div>
                    <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
                        Learn how to spot the most common scams targeting Australians right now. Each guide includes real examples and step-by-step advice.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {popularGuides.map((guide) => (
                            <Link
                                key={guide.slug}
                                href={`/guides/${guide.slug}`}
                                className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all"
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
                                View All Scam Guides
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
                                        "name": "Is this a scam?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Scam Checker analyses your message, email, or link for common fraud patterns like urgency, suspicious URLs, and request for money to give you an instant risk assessment."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "How can I tell if a message is a scam?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Look for urgency ('act now'), unknown senders, generic greetings, requests for personal info, and suspicious links. Our tool helps highlight these red flags automatically."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Can scam links steal my information?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, clicking a malicious link can lead to phishing sites designed to steal passwords or banking details, or install malware on your device."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is Scam Checker free to use?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Yes, Scam Checker is 100% free, private, and secure to help protect you from online fraud."
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
