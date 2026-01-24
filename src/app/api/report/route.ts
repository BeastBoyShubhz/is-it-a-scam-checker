import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { normalizeScamValue } from '@/lib/normalization';
import crypto from 'crypto';

function hashIp(ip: string) {
    return crypto.createHash('sha256').update(ip + (process.env.IP_SALT || 'salt')).digest('hex');
}

function maskValue(type: string, val: string) {
    if (!val) return '';
    if (type === 'phone' || type === 'sms') {
        // Show last 4 or first few? "04...1234"
        if (val.length < 5) return val;
        return val.substring(0, 3) + '****' + val.substring(val.length - 3);
    }
    if (type === 'email') {
        const [u, d] = val.split('@');
        if (!d) return val.substring(0, 3) + '...';
        return (u.substring(0, 2) + '***@' + d);
    }
    // URL: Show domain only? Or partial?
    // Usually full URL is OK to show if it is a SCAM. 
    // But to be safe, maybe just domain?
    return val;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { type, value, notes, country, website_check } = body;

        // Basic validation
        if (!type || !value) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        if (notes && notes.length > 1000) return NextResponse.json({ error: 'Notes too long' }, { status: 400 });

        // Honeypot check
        if (website_check) return NextResponse.json({ success: true });

        // Normalization
        const value_normalised = normalizeScamValue(type, value);

        // IP Hash
        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
        const ip_hash = hashIp(ip);
        const user_agent = req.headers.get('user-agent') || 'unknown';
        const user_agent_hash = crypto.createHash('md5').update(user_agent).digest('hex');

        // Rate limit: 10 per hour
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

        try {
            const recentReports = await prisma.report.count({
                where: {
                    ip_hash,
                    created_at: { gt: oneHourAgo }
                }
            });

            if (recentReports >= 10) {
                return NextResponse.json({ error: 'Too many reports from this device today. Thanks for helping!' }, { status: 429 });
            }

            // Save
            const report = await prisma.report.create({
                data: {
                    type,
                    value_raw: value.substring(0, 500),
                    value_normalised,
                    notes: notes ? notes.substring(0, 1000) : null,
                    country: country || 'AU',
                    ip_hash,
                    user_agent_hash
                }
            });

            return NextResponse.json({ success: true, id: report.id });
        } catch (dbError) {
            console.error('Database connection error:', dbError);
            // Return success to the UI even if DB fails, to not discourage user? 
            // Or return proper error?
            // "Use a lightweight DB that works well".
            return NextResponse.json({ error: 'Database service unavailable' }, { status: 503 });
        }

    } catch (error) {
        console.error('Report error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(req: Request) {
    // Get latest reports
    try {
        const reports = await prisma.report.findMany({
            take: 20,
            orderBy: { created_at: 'desc' },
            select: {
                id: true,
                type: true,
                value_raw: true,
                created_at: true,
                country: true
            }
        });

        const masked = reports.map(r => ({
            id: r.id,
            type: r.type,
            value: maskValue(r.type, r.value_raw),
            timeAgo: r.created_at, // Client can format
            country: r.country
        }));

        return NextResponse.json({ reports: masked });

    } catch (e) {
        console.error("GET reports error", e);
        // Fallback or empty
        return NextResponse.json({ reports: [] });
    }
}
