const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

// All routes that must return 200
const routes = [
    // Core pages
    '/',
    '/check',
    '/guides',
    '/reports',
    '/about',
    '/how-it-works',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/check-scam-text',
    '/check-scam-email',
    '/check-scam-link',
    '/have-i-been-scammed',

    // All 10 guide pages
    '/guides/is-this-website-legit',
    '/guides/how-to-spot-a-fake-link',
    '/guides/scam-text-message-examples',
    '/guides/whatsapp-scams-examples',
    '/guides/email-phishing-examples',
    '/guides/payid-scams-australia',
    '/guides/ato-scam-text-email',
    '/guides/bank-impersonation-scams',
    '/guides/facebook-marketplace-scams',
    '/guides/parcel-delivery-scams-australia',
    '/guides/what-to-do-if-youve-been-scammed',
];

// Pages to check for heading structure and OG tags
const seoCheckPages = [
    '/',
    '/check',
    '/guides',
    '/reports',
    '/about',
    '/how-it-works',
    '/privacy',
    '/disclaimer',
    '/contact',
    '/have-i-been-scammed',
    '/guides/what-to-do-if-youve-been-scammed',
];

async function checkRoute(route) {
    const url = `${baseUrl}${route}`;
    try {
        const res = await fetch(url);
        if (res.status === 200) {
            console.log(`✅ ${route} returned 200`);
            return { passed: true, html: await res.text() };
        } else {
            console.error(`❌ ${route} returned ${res.status}`);
            return { passed: false, html: null };
        }
    } catch (error) {
        console.error(`❌ ${route} failed to fetch: ${error.message}`);
        return { passed: false, html: null };
    }
}

function checkHeadingStructure(html, pageName) {
    let passed = true;

    // Count H1 tags
    const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
    if (h1Matches.length === 0) {
        console.error(`  ❌ ${pageName}: Missing H1 heading`);
        passed = false;
    } else if (h1Matches.length > 1) {
        console.error(`  ❌ ${pageName}: Multiple H1 headings found (${h1Matches.length})`);
        passed = false;
    } else {
        console.log(`  ✅ ${pageName}: Has exactly one H1`);
    }

    // Count H2 tags
    const h2Matches = html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || [];
    if (h2Matches.length < 2) {
        console.error(`  ❌ ${pageName}: Less than 2 H2 headings (found ${h2Matches.length})`);
        passed = false;
    } else {
        console.log(`  ✅ ${pageName}: Has ${h2Matches.length} H2 headings`);
    }

    return passed;
}

function checkOgCanonicalMatch(html, pageName, expectedPath) {
    let passed = true;

    // Extract canonical URL
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const canonical = canonicalMatch ? canonicalMatch[1] : null;

    // Extract og:url (can be in meta content or property)
    const ogUrlMatch = html.match(/<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["']/i)
        || html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:url["']/i);
    const ogUrl = ogUrlMatch ? ogUrlMatch[1] : null;

    if (canonical && ogUrl) {
        if (canonical === ogUrl) {
            console.log(`  ✅ ${pageName}: canonical and og:url match`);
        } else {
            console.error(`  ❌ ${pageName}: canonical (${canonical}) != og:url (${ogUrl})`);
            passed = false;
        }
    } else {
        if (!canonical) console.error(`  ❌ ${pageName}: Missing canonical URL`);
        if (!ogUrl) console.error(`  ❌ ${pageName}: Missing og:url`);
        passed = false;
    }

    return passed;
}

function checkNoHttpW3Org(html, pageName) {
    // Remove all standard W3C namespace URLs (SVG, XHTML, MathML, XLink)
    // We treat them as strings to remove, regardless of context (attributes, JSON, etc)
    const cleanHtml = html
        .replace(/http:\/\/www\.w3\.org\/2000\/svg/g, '')
        .replace(/http:\/\/www\.w3\.org\/1999\/xhtml/g, '')
        .replace(/http:\/\/www\.w3\.org\/1998\/Math\/MathML/g, '')
        .replace(/http:\/\/www\.w3\.org\/1999\/xlink/g, '');

    if (cleanHtml.includes('http://www.w3.org')) {
        console.error(`  ❌ ${pageName}: Contains suspicious http://www.w3.org (should be https)`);
        // Debugging: Print a snippet around the match
        const index = cleanHtml.indexOf('http://www.w3.org');
        const snippet = cleanHtml.substring(Math.max(0, index - 50), Math.min(cleanHtml.length, index + 50));
        console.log(`     Context: ...${snippet}...`);
        return false;
    }
    console.log(`  ✅ ${pageName}: No suspicious http://www.w3.org references`);
    return true;
}

async function checkFavicon() {
    try {
        const faviconRes = await fetch(`${baseUrl}/icon.png`);
        if (faviconRes.ok) {
            console.log('✅ Favicon (icon.png) exists');
            return true;
        }
    } catch (e) { }

    try {
        const icoRes = await fetch(`${baseUrl}/favicon.ico`);
        if (icoRes.ok) {
            console.log('✅ Favicon (favicon.ico) exists');
            return true;
        }
    } catch (e) { }

    console.error('❌ No favicon found (checked icon.png and favicon.ico)');
    return false;
}

async function checkOgImage() {
    try {
        const ogRes = await fetch(`${baseUrl}/og-default.png`);
        if (ogRes.ok) {
            console.log('✅ OG Image (og-default.png) exists');
            return true;
        }
    } catch (e) { }

    console.error('❌ OG default image not found');
    return false;
}

async function run() {
    console.log(`\n🔍 Sitechecker SEO Validation for ${baseUrl}\n`);

    let allPassed = true;
    const pageHtmlCache = {};

    // Check all routes return 200
    console.log('=== Route Status Checks ===\n');
    for (const route of routes) {
        const result = await checkRoute(route);
        if (!result.passed) allPassed = false;
        if (result.html) pageHtmlCache[route] = result.html;
    }

    // Check heading structure and OG/canonical alignment
    console.log('\n=== SEO Structure Checks ===\n');
    for (const page of seoCheckPages) {
        if (pageHtmlCache[page]) {
            console.log(`Checking ${page}:`);
            if (!checkHeadingStructure(pageHtmlCache[page], page)) allPassed = false;
            if (!checkOgCanonicalMatch(pageHtmlCache[page], page, page)) allPassed = false;
            if (!checkNoHttpW3Org(pageHtmlCache[page], page)) allPassed = false;
        } else {
            console.error(`⚠️ Cannot check SEO structure for ${page} - page not fetched`);
        }
    }

    // Check static assets
    console.log('\n=== Static Asset Checks ===\n');
    if (!await checkFavicon()) allPassed = false;
    if (!await checkOgImage()) allPassed = false;

    console.log('\n=== Summary ===\n');
    if (allPassed) {
        console.log('✅ All checks passed!\n');
        process.exit(0);
    } else {
        console.error('❌ Some checks failed.\n');
        process.exit(1);
    }
}

run();
