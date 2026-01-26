import Link from 'next/link';
import { guides } from '@/lib/guides';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { ShieldCheck, ArrowRight, BookOpen, AlertTriangle, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Scam Identification Guides: Learn to Spot Phishing, Fraud and Online Threats',
    description: 'Comprehensive guides on identifying scams worldwide. Learn to recognise fake websites, phishing emails, SMS scams, payment fraud, and impersonation tactics with real examples.',
    alternates: {
        canonical: 'https://scamchecker.app/guides',
    },
    openGraph: {
        title: 'Scam Identification Guides: Learn to Spot Phishing, Fraud and Online Threats',
        description: 'Comprehensive guides on identifying scams with real examples and actionable protection advice.',
        url: 'https://scamchecker.app/guides',
    },
};

// Recommended starting guides
const startHereGuides = [
    'scam-text-message-examples',
    'email-phishing-examples',
    'is-this-website-legit',
    'bank-impersonation-scams',
    'how-to-spot-a-fake-link',
];

export default function GuidesIndexPage() {
    const topGuides = startHereGuides.map(slug => guides.find(g => g.slug === slug)).filter(Boolean);

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-4xl font-bold mb-4 text-slate-900 text-center">Scam Identification Guides: Learn to Spot Phishing, Fraud and Online Threats</h1>
                <p className="text-xl text-slate-600 text-center mb-4 max-w-3xl mx-auto">
                    Our guides explain how different scam types work, show you real message examples, and provide practical steps to protect yourself. Each guide is written in plain language with advice that applies regardless of where you live.
                </p>
                <p className="text-md text-slate-500 text-center mb-8 max-w-2xl mx-auto">
                    Scammers use the same psychological tactics worldwide. Learn to recognise the patterns and you will be protected no matter what platform or service they try to imitate.
                </p>

                {/* Instant Checker CTA */}
                <div className="bg-gradient-to-r from-primary/10 to-emerald-50 border border-primary/20 rounded-xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                        <div>
                            <h2 className="font-bold text-lg text-slate-900">Need to check something right now?</h2>
                            <p className="text-slate-600">Paste any suspicious message, email, or link for instant analysis.</p>
                        </div>
                    </div>
                    <Button asChild size="lg" className="flex-shrink-0">
                        <Link href="/check" className="gap-2">
                            Check a suspicious message or link now
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* How to Get the Most from These Guides */}
                <section className="mb-12 bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <BookOpen className="w-6 h-6 text-primary" />
                        <h2 className="text-xl font-bold text-slate-900">How to Get the Most from These Scam Prevention Guides</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Each guide focuses on a specific scam type. We explain the psychology behind the scam, show you what the fraudulent messages actually look like, and provide clear steps for both prevention and damage control. You will find real examples with identifying details removed so you can recognise the patterns yourself.
                    </p>
                    <p className="text-slate-600 mb-4">
                        If you have received a suspicious message, start by using our <Link href="/check" className="text-primary hover:underline">instant scam checker tool for automated analysis</Link>. Then read the relevant guide for deeper context — especially important if you have already clicked a link or provided information.
                    </p>
                    <p className="text-slate-600">
                        For ongoing protection, bookmark a few guides covering the scam types you encounter most often. The tactics evolve, but the underlying patterns remain consistent.
                    </p>
                </section>

                {/* Universal Warning Signs */}
                <section className="mb-12 bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-amber-500" />
                        <h2 className="text-xl font-bold text-slate-900">Universal Warning Signs That Apply to All Scam Types</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Regardless of the specific scam, certain red flags appear consistently. Train yourself to pause whenever you notice these patterns:
                    </p>
                    <ul className="text-slate-600 space-y-2">
                        <li>• <strong>Urgency without reason:</strong> Legitimate organisations give you time to verify important requests. Scammers create artificial deadlines.</li>
                        <li>• <strong>Unusual payment methods:</strong> Gift cards, cryptocurrency, and wire transfers are irreversible — exactly why scammers prefer them.</li>
                        <li>• <strong>Requests for security credentials:</strong> Banks and services never ask for passwords, PINs, or verification codes via email or text.</li>
                        <li>• <strong>Mismatched sender details:</strong> The display name says one thing, but the actual email address or phone number does not match.</li>
                        <li>• <strong>Links that do not match claims:</strong> Hover over links (without clicking) to see if the URL matches the organisation being impersonated.</li>
                    </ul>
                </section>

                {/* Why Scammers Succeed Globally */}
                <section className="mb-12 bg-white p-6 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-blue-500" />
                        <h2 className="text-xl font-bold text-slate-900">Why These Tactics Work on People Everywhere</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Scammers exploit universal human psychology. They trigger fear of loss, create urgency to bypass rational thinking, and impersonate trusted authorities to lower your guard. These tactics work equally well whether the scammer is impersonating a bank in Europe, a delivery service in Asia, or a government agency in the Americas.
                    </p>
                    <p className="text-slate-600">
                        Understanding why scams work helps you resist them. When you feel rushed, frightened, or pressured to act immediately — that is exactly when you should slow down and verify through official channels.
                    </p>
                </section>

                {/* Recommended Starting Guides */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Recommended: Start with These Essential Scam Guides</h2>
                    <p className="text-slate-600 mb-6">
                        New to scam awareness? These five guides cover the fraud types people encounter most frequently:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topGuides.map((guide) => guide && (
                            <Link href={`/guides/${guide.slug}`} key={guide.slug} className="hover:no-underline block group">
                                <Card className="h-full transition-shadow hover:shadow-lg border-2 hover:border-primary/50 bg-white">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                                            {guide.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm">{guide.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Complete Guide Directory */}
                <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Complete Directory of Scam Identification Guides</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {guides.map((guide) => (
                            <Link href={`/guides/${guide.slug}`} key={guide.slug} className="hover:no-underline block group">
                                <Card className="h-full transition-shadow hover:shadow-lg border-2 hover:border-primary/50 bg-white">
                                    <CardHeader>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                                            {guide.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm">{guide.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-600 mb-4">Have a specific message you want to verify?</p>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/check">Check any suspicious message, email, or link instantly</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
