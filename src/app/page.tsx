
import { ScamChecker } from '@/components/ScamChecker';
import { FAQ } from '@/components/FAQ';
import { TrustSection } from '@/components/TrustSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Globe } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="bg-slate-50 py-12 md:py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Scam Checker
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Is it a scam? Analyse messages, emails and links instantly.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-text" className="gap-2">
                                <MessageSquare className="w-4 h-4 text-blue-500" />
                                Check a message
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-email" className="gap-2">
                                <Mail className="w-4 h-4 text-amber-500" />
                                Check an email
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full bg-white hover:bg-slate-100">
                            <Link href="/check-scam-link" className="gap-2">
                                <Globe className="w-4 h-4 text-green-500" />
                                Check a link
                            </Link>
                        </Button>
                    </div>

                    <a id="checker" className="scroll-mt-24"></a>
                    <ScamChecker />

                    <p className="text-sm text-slate-500 mt-6">
                        Disclaimer: This tool provides guidance based on common patterns but cannot guarantee 100% accuracy.
                    </p>
                </div>
            </section>

            {/* Trust Section */}
            <TrustSection />

            {/* Intent Links Section for SEO */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">Common Scam Checks</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/check-scam-text" className="group p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">Check Text Messages</h3>
                            <p className="text-slate-600 text-sm">Verify suspicious SMS, WhatsApp, or social media messages.</p>
                        </Link>
                        <Link href="/check-scam-email" className="group p-6 rounded-xl border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-600">Check Emails</h3>
                            <p className="text-slate-600 text-sm">Analyze emails for phishing signs, fake invoices, and fraud.</p>
                        </Link>
                        <Link href="/check-scam-link" className="group p-6 rounded-xl border border-slate-200 hover:border-green-200 hover:shadow-md transition-all">
                            <h3 className="font-semibold text-lg mb-2 group-hover:text-green-600">Check Links</h3>
                            <p className="text-slate-600 text-sm">Scan URLs and websites to see if they are safe or malicious.</p>
                        </Link>
                    </div>
                </div>
            </section>

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
