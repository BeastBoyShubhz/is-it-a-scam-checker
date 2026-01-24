export function extractUrls(text: string): string[] {
    // Regex for matching URLs (http/https and widespread www/domain patterns)
    const urlRegex = /((https?:\/\/)|(www\.))[^\s/$.?#].[^\s]*/gi;
    // A slightly more permissive one to catch things like "google.com" without http
    // But let's stick to standard extraction to avoid false positives in random text.
    // Actually, scammers often send "commbank-recover.com/login".
    // Let's use a robust pattern.
    const broadUrlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+\.(com|net|org|edu|gov|io|co|au|uk|info|site|online|xyz|top)[^\s]*)/gi;

    const matches = text.match(broadUrlRegex);
    return matches ? Array.from(new Set(matches)) : [];
}
