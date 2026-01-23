
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Contact Us | Is It a Scam?',
    description: 'Get in touch with the Is It a Scam? team.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">Contact Us</h1>

            <p className="text-center text-slate-600 mb-8">
                Have suggestions, questions, or want to report a bug? We'd love to hear from you.
            </p>

            <Card>
                <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <Textarea id="message" placeholder="How can we help?" className="min-h-[120px]" />
                        </div>
                        <Button className="w-full">Send Message</Button>
                        <p className="text-xs text-muted-foreground text-center pt-2">
                            (This form is a demo in this version)
                        </p>
                    </form>
                </CardContent>
            </Card>

            <div className="mt-8 text-center">
                <p className="text-slate-600">
                    You can also reach me directly via <a href="https://shubhamsingla.tech" className="text-primary hover:underline">my website</a>.
                </p>
            </div>
        </div>
    );
}
