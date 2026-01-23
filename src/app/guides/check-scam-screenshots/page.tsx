
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Check Scam Screenshots | Is It a Scam?',
    description: 'Upload screenshots of suspicious texts, emails, or websites to check if they are scams. Our free tool analyzes text from images instantly.',
};

export default function CheckScamScreenshots() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6 text-slate-900">How to Check Scam Screenshots</h1>

            <div className="prose prose-lg max-w-none mb-10 text-slate-700">
                <p>
                    Scammers often send messages via SMS, WhatsApp, or instant messengers that are hard to copy-paste.
                    Taking a screenshot is a quick way to capture the evidence. Our Scam Checker tool can now read text
                    directly from your screenshots to analyze them for danger signs.
                </p>

                <h3>How it works</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Take a screenshot:</strong> Capture the message, email, or website.</li>
                    <li><strong>Upload to our tool:</strong> Select the "Image" tab on the homepage.</li>
                    <li><strong>Instant Analysis:</strong> We extract the text in your browser (privately) and scan it for keywords like "urgent," "verify," or payment demands.</li>
                </ul>

                <div className="my-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="text-xl font-bold text-blue-900 mb-2">Try it now</h4>
                    <p className="mb-4 text-blue-800">Got a suspicious screenshot? Check it immediately for free.</p>
                    <Link href="/">
                        <Button size="lg" className="w-full sm:w-auto">Go to Scam Checker</Button>
                    </Link>
                </div>

                <h3>Common Screenshot Scams</h3>
                <p>
                    <strong>"Wrong Number" Crypto Scams:</strong> A random person texts you, acts friendly, and then tries to get you to move to WhatsApp to discuss "investments."
                </p>
                <p>
                    <strong>Delivery Flubs:</strong> Messages saying "delivery failed" with a link, often sent as iMessage or RCS to look official.
                </p>
                <p>
                    <strong>Tech Support Popups:</strong> Screenshots of your phone or computer showing a "Virus Detected" warning with a phone number to call.
                </p>
            </div>
        </div>
    );
}
