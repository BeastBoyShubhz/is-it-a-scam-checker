import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { normalizeScamValue } from '@/lib/normalization';

export async function POST(req: Request) {
    try {
        const { items } = await req.json(); // Expecting [{ type: 'url', value: '...' }]

        if (!items || !Array.isArray(items)) {
            return NextResponse.json({ results: [] });
        }

        const results = [];

        for (const item of items) {
            if (!item.value || !item.type) continue;

            const norm = normalizeScamValue(item.type, item.value);

            // We could optimize with a findMany using OR, but loop is fine for small number of items (usually 1-2 URLs).
            try {
                const count = await prisma.report.count({
                    where: {
                        type: item.type.toLowerCase(),
                        value_normalised: norm
                    }
                });

                if (count > 0) {
                    results.push({
                        value: item.value,
                        count
                    });
                }
            } catch (dbErr) {
                // ignore individual item error
            }
        }

        return NextResponse.json({ results });
    } catch (e) {
        console.error("Check reputation error:", e);
        return NextResponse.json({ results: [] });
    }
}
