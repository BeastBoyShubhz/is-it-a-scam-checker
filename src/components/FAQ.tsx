
'use client';

// Wait, I don't have accordion component installed. I should implement a simple one or use radix if I installed it.
// I didn't install radix primitives. I'll just build a simple FAQ component with state.

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function FAQ() {
    const faqs = [
        {
            question: "Is this a scam?",
            answer: "Scam Checker analyses your message, email, or link for common fraud patterns like urgency, suspicious URLs, and request for money to give you an instant risk assessment."
        },
        {
            question: "How can I tell if a message is a scam?",
            answer: "Look for urgency ('act now'), unknown senders, generic greetings, requests for personal info, and suspicious links. Our tool helps highlight these red flags automatically."
        },
        {
            question: "Can scam links steal my information?",
            answer: "Yes, clicking a malicious link can lead to phishing sites designed to steal passwords or banking details, or install malware on your device."
        },
        {
            question: "I accidentally clicked a scam link, what should I do?",
            answer: "Don't panic. If you didn't enter any information, you are likely safe. Disconnect from the internet, run a virus scan, and watch out for follow-up scam messages. If you entered passwords, change them immediately."
        },
        {
            question: "I sent money to a scammer, can I get it back?",
            answer: "Contact your bank immediately. If you paid by credit card, you may be able to chargeback. Bank transfers are harder but sometimes recallable if acted on fast. Never pay 'recovery agents' who claim they can hack the money back."
        },
        {
            question: "I replied to a scam message, am I in danger?",
            answer: "Replying confirms your number works, so you will likely receive more spam. Do not reply further. Block the number. If you didn't share personal info, you are physically safe."
        },
        {
            question: "Is Scam Checker free to use?",
            answer: "Yes, Scam Checker is 100% free, private, and secure to help protect you from online fraud."
        }
    ];

    return (
        <section className="py-12 bg-slate-50" id="faq">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className="border shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
            >
                <span className="font-semibold text-lg">{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
            </button>
            {isOpen && (
                <div className="px-4 pb-4 text-muted-foreground">
                    {answer}
                </div>
            )}
        </Card>
    )
}
