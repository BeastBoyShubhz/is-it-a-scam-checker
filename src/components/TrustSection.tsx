
import { ShieldCheck, Lock, Zap } from 'lucide-react';

export function TrustSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Pattern Detection</h3>
                        <p className="text-muted-foreground">
                            We analyze thousands of scam reports to identify common keywords, phrasing, and technical tricks used by fraudsters.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                        <p className="text-muted-foreground">
                            Your data is analyzed securely. We don't store your personal messages, emails, or the URLs you check.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Instant Results</h3>
                        <p className="text-muted-foreground">
                            Get an immediate risk assessment. No sign-ups, no waiting, and no technical jargon. Just clear advice.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
