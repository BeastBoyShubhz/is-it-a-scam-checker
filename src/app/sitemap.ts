
import { MetadataRoute } from 'next'
import { guides } from '@/lib/guides'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://scamchecker.app'

    const guideUrls = guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        lastModified: new Date(guide.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const staticRoutes = [
        '',
        '/about',
        '/how-it-works',
        '/contact',
        '/privacy',
        '/terms',
        '/disclaimer',
        '/guides',
        '/check-scam-text',
        '/check-scam-email',
        '/check-scam-link',
        '/check',
        '/have-i-been-scammed',
        '/reports',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.6,
    }))

    return [...staticRoutes, ...guideUrls]
}
