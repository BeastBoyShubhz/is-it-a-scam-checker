'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";

type FaqAnswer = string | React.ReactNode;

export function FAQ() {
    const faqs: { question: string; answer: FaqAnswer }[] = [
        {
            question: 'How can I tell if a message is a scam?',
            answer: (
                <>
                    Look for urgency phrases (&quot;act now&quot;), unknown senders, generic
                    greetings, requests for personal information, and suspicious links.
                    For an automated check, paste the message into the{' '}
                    <Link
                        href="/check"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        free scam checker tool
                    </Link>
                    . If you have already replied or clicked anything, follow the{' '}
                    <Link
                        href="/have-i-been-scammed"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        Have I been scammed damage-control checklist
                    </Link>
                    .
                </>
            ),
        },
        {
            question: 'Can a suspicious link steal my information?',
            answer: (
                <>
                    Yes. Malicious links can lead to phishing pages designed to capture
                    passwords, banking details, and one-time codes, or trigger malware
                    downloads. Before clicking, run the URL through the{' '}
                    <Link
                        href="/check-scam-link"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        suspicious link checker
                    </Link>{' '}
                    or read{' '}
                    <Link
                        href="/guides/how-to-spot-a-fake-link"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        how to spot a fake or malicious link
                    </Link>
                    .
                </>
            ),
        },
        {
            question: 'I accidentally clicked a scam link, what should I do?',
            answer: (
                <>
                    Don&apos;t panic. If you didn&apos;t enter any information, you are
                    likely safe. Disconnect from the internet, run a virus scan, and
                    watch for follow-up scam messages. If you entered passwords or card
                    details, follow the full{' '}
                    <Link
                        href="/guides/what-to-do-if-youve-been-scammed"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        recovery guide for scam victims
                    </Link>{' '}
                    immediately.
                </>
            ),
        },
        {
            question: 'I sent money to a scammer — can I get it back?',
            answer: (
                <>
                    Contact your bank immediately. If you paid by credit card, you may
                    be able to chargeback. Bank transfers are harder but sometimes
                    recallable if reported within minutes. Never pay &quot;recovery
                    agents&quot; who claim they can hack the money back. The{' '}
                    <Link
                        href="/global-scam-reporting"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        global scam reporting directory
                    </Link>{' '}
                    lists official channels for your country.
                </>
            ),
        },
        {
            question: 'I replied to a scam message, am I in danger?',
            answer: (
                <>
                    Replying confirms your number is active, so you will likely receive
                    more spam. Block the number and don&apos;t engage further. If you
                    shared personal information, see the{' '}
                    <Link
                        href="/i-got-a-scam-message"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        I got a scam message — what to do next
                    </Link>{' '}
                    page for next steps.
                </>
            ),
        },
        {
            question: 'How does this scam checker actually work?',
            answer: (
                <>
                    The tool scans pasted text for known scam patterns — urgency
                    language, unusual payment requests, lookalike domains, and
                    impersonation phrasing — and returns a Low, Medium, or High risk
                    score with explanations. The{' '}
                    <Link
                        href="/how-it-works"
                        className="text-blue-700 underline-offset-2 hover:underline font-medium"
                    >
                        how our scam detection works
                    </Link>{' '}
                    page has the full breakdown.
                </>
            ),
        },
        {
            question: 'Is Scam Checker free to use?',
            answer:
                'Yes. Scam Checker is 100% free, requires no sign-up, and never stores your message content. Analysis runs in your browser.',
        },
    ];

    return (
        <section className="py-12 bg-slate-50" id="faq" aria-label="Frequently asked questions">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({
    question,
    answer,
}: {
    question: string;
    answer: FaqAnswer;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="border shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-lg">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
            </button>
            {isOpen && (
                <div className="px-4 pb-4 text-muted-foreground leading-relaxed">
                    {answer}
                </div>
            )}
        </Card>
    );
}
