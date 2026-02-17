import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Flag, Globe, Shield, Phone, Mail } from 'lucide-react';
import { TrustSection } from '@/components/TrustSection';

export const metadata: Metadata = {
    title: "Where to Report Scams Globally (2025 Guide) | Scam Checker",
    description: "Official scam reporting contacts for Australia, USA, UK, Canada, and India. Report fraud to government agencies and stop scammers.",
    alternates: {
        canonical: 'https://scamchecker.app/global-scam-reporting',
    },
};

export default function GlobalReportingPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="py-12 md:py-20 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                        Official Resources
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Where to Report Scams Globally
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Reporting fraud helps authorities shut down scam networks and warn others.
                        Find the official reporting channel for your country below.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Australia */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">🇦🇺</span>
                            <h2 className="text-3xl font-bold text-slate-900">Australia</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReportingCard
                                title="Scamwatch (ACCC)"
                                description="The primary reporting body for all scams in Australia."
                                link="https://www.scamwatch.gov.au/report-a-scam"
                                action="Report Online"
                            />
                            <ReportingCard
                                title="ReportCyber"
                                description="For cybercrimes like hacking, malware, and identity theft."
                                link="https://www.cyber.gov.au/report-and-recover/report"
                                action="Report Cybercrime"
                            />
                            <ReportingCard
                                title="IDCARE"
                                description="Support case managers for identity theft victims. Free service."
                                link="https://www.idcare.org/"
                                action="Get Support"
                                subtext="Call 1800 595 160"
                            />
                        </div>
                    </div>

                    {/* USA */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">🇺🇸</span>
                            <h2 className="text-3xl font-bold text-slate-900">United States</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReportingCard
                                title="Federal Trade Commission (FTC)"
                                description="Report fraud, scams, and bad business practices."
                                link="https://reportfraud.ftc.gov/"
                                action="Report to FTC"
                            />
                            <ReportingCard
                                title="IC3 (FBI)"
                                description="Internet Crime Complaint Center for serious cybercrimes."
                                link="https://www.ic3.gov/"
                                action="File Complaint"
                            />
                        </div>
                    </div>

                    {/* UK */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">🇬🇧</span>
                            <h2 className="text-3xl font-bold text-slate-900">United Kingdom</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReportingCard
                                title="Action Fraud"
                                description="The UK's national reporting centre for fraud and cybercrime."
                                link="https://www.actionfraud.police.uk/"
                                action="Report Fraud"
                            />
                            <ReportingCard
                                title="NCSC"
                                description="Report suspicious emails (phishing) directly."
                                link="https://www.ncsc.gov.uk/collection/phishing-scams"
                                action="Report Phishing"
                                subtext="Forward emails to report@phishing.gov.uk"
                            />
                        </div>
                    </div>

                    {/* Canada */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-4xl">🇨🇦</span>
                            <h2 className="text-3xl font-bold text-slate-900">Canada</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ReportingCard
                                title="Canadian Anti-Fraud Centre"
                                description="Collects information on fraud and identity theft."
                                link="https://antifraudcentre-centreantifraude.ca/report-signalez-eng.htm"
                                action="Report Fraud"
                            />
                        </div>
                    </div>

                    {/* Tech Platforms */}
                    <div className="mt-20 pt-12 border-t border-slate-200">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Report to the Platform</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <PlatformCard
                                icon={<Globe className="w-8 h-8 text-blue-600" />}
                                title="Google"
                                link="https://safebrowsing.google.com/safebrowsing/report_phish/"
                                text="Report Phishing Page"
                            />
                            <PlatformCard
                                icon={<Mail className="w-8 h-8 text-red-600" />}
                                title="Gmail"
                                link="https://support.google.com/mail/answer/8253"
                                text="Report Scam Email"
                            />
                            <PlatformCard
                                icon={<Phone className="w-8 h-8 text-green-600" />}
                                title="WhatsApp"
                                link="https://faq.whatsapp.com/1142481766359885/"
                                text="Report a Contact"
                            />
                            <PlatformCard
                                icon={<Shield className="w-8 h-8 text-blue-500" />}
                                title="Facebook"
                                link="https://www.facebook.com/help/fakeaccount"
                                text="Report Fake Profile"
                            />
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">Not sure if it's a scam yet?</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Use our free tools to verify a suspicious message or link before you report it.
                        </p>
                        <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                            <Link href="/check">Check for Scams Now</Link>
                        </Button>
                    </div>

                </div>
            </section>

            <TrustSection />
        </div>
    );
}

function ReportingCard({ title, description, link, action, subtext }: { title: string, description: string, link: string, action: string, subtext?: string }) {
    return (
        <Card className="h-full border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex flex-col bg-white">
            <CardHeader>
                <CardTitle className="text-xl text-slate-900">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
                <p className="text-slate-600 mb-6 flex-1">{description}</p>
                {subtext && <p className="text-sm font-medium text-slate-900 mb-4 bg-slate-100 p-2 rounded text-center">{subtext}</p>}
                <Button asChild variant="outline" className="w-full border-slate-300 hover:bg-slate-50 text-slate-700">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        {action} <ExternalLink className="w-4 h-4" />
                    </a>
                </Button>
            </CardContent>
        </Card>
    );
}

function PlatformCard({ icon, title, link, text }: { icon: any, title: string, link: string, text: string }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-center h-full">
                <div className="mb-4 flex justify-center">{icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <span className="text-sm text-blue-600 font-medium group-hover:underline">{text}</span>
            </div>
        </a>
    );
}
