
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Check Fake Invoice Scams (PDF/Word) | Is It a Scam?',
    description: 'Received a suspicious invoice or document? Upload PDF or Word files to scan for fake invoice scams and payment fraud signals.',
};

export default function CheckScamInvoices() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-6 text-slate-900">Check Fake Invoice Scams (PDF / Docs)</h1>

            <div className="prose prose-lg max-w-none mb-10 text-slate-700">
                <p>
                    Fake invoices are a massive threat to businesses and freelancers. Scammers send authentic-looking
                    PDF or Word documents claiming you owe money for services like Norton AntiVirus, Geek Squad, or
                    domain renewals.
                </p>

                <h3>Signs of a Fake Invoice</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Urgency:</strong> Claims your account will be charged "within 24 hours" if you don't act.</li>
                    <li><strong>Phone Numbers:</strong> Instead of a link, they ask you to call a support number to "cancel" the charge.</li>
                    <li><strong>Generic Greetings:</strong> "Dear Customer" instead of your name.</li>
                    <li><strong>Personal Gmail/Yahoo addresses:</strong> Instead of official company domains.</li>
                </ul>

                <div className="my-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
                    <h4 className="text-xl font-bold text-orange-900 mb-2">Scan a Document</h4>
                    <p className="mb-4 text-orange-800">Upload any suspicious PDF or DOCX file to check for fraud signals.</p>
                    <Link href="/">
                        <Button size="lg" variant="default" className="w-full sm:w-auto">Open Document Scanner</Button>
                    </Link>
                </div>

                <h3>Safety First</h3>
                <p>
                    Our tool processes files <strong>entirely in your browser</strong>. We do not upload your sensitive financial documents to any server.
                    The text is extracted locally and scanned for keywords, then deleted from memory.
                </p>
            </div>
        </div>
    );
}
