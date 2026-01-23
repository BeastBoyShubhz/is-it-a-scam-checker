
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scam Checker – Check if a Message, Email or Link Is a Scam",
    description: "Scam Checker helps you identify scams by analysing messages, emails and links in seconds. Free, private, and instant.",
    keywords: ["scam checker", "is this a scam", "check scam message", "scam email check", "is this link safe", "phishing detector"],
    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://scamchecker.app",
        title: "Scam Checker – Free Scam Detection Tool",
        description: "Check if a message, email, or link is a scam. Instant analysis to protect yourself from fraud.",
        siteName: "Scam Checker"
    },
    metadataBase: new URL('https://scamchecker.app'),
    alternates: {
        canonical: 'https://scamchecker.app',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Scam Checker",
                            "url": "https://scamchecker.app",
                            "logo": "https://scamchecker.app/icon.png",
                            "sameAs": ["https://shubhamsingla.tech"],
                            "founder": {
                                "@type": "Person",
                                "name": "Shubham Singla",
                                "url": "https://shubhamsingla.tech"
                            }
                        })
                    }}
                />
                <Footer />
            </body>
        </html>
    );
}
