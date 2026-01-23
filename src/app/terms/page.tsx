
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use | Is It a Scam?',
    description: 'Terms and conditions for using our service.',
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-slate">
            <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-bold mt-6 mb-2">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By accessing and using "Is It a Scam?", you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">2. Use of Service</h2>
            <p className="mb-4">
                This tool is provided for informational purposes only. It is designed to assist in identifying potential scams but is not a substitute for professional security advice or official verification from relevant authorities.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">3. Disclaimer of Warranties</h2>
            <p className="mb-4">
                The service is provided on an "as is" and "as available" basis. We do not warrant that the results provided will be completely accurate or error-free. You use this service at your own risk.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-2">4. Limitation of Liability</h2>
            <p className="mb-4">
                In no event shall "Is It a Scam?" or its owners be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the service.
            </p>
        </div>
    );
}
