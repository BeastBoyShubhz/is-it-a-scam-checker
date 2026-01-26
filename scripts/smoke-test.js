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
];

// Links that must exist on specific pages
const requiredLinks = {
    '/': ['/guides', '/check'],
    '/guides': [
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
    ],
};

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

function checkLinksInHtml(html, requiredPaths, pageName) {
    let allFound = true;
    for (const path of requiredPaths) {
        // Check for href containing the path
        if (html.includes(`href="${path}"`) || html.includes(`href="${path}/"`)) {
            console.log(`  ✅ ${pageName} contains link to ${path}`);
        } else {
            console.error(`  ❌ ${pageName} missing link to ${path}`);
            allFound = false;
        }
    }
    return allFound;
}

async function run() {
    console.log(`\n🔍 Checking routes on ${baseUrl}...\n`);

    let allPassed = true;
    const pageHtmlCache = {};

    // Check all routes return 200
    console.log('--- Route Status Checks ---\n');
    for (const route of routes) {
        const result = await checkRoute(route);
        if (!result.passed) allPassed = false;
        if (result.html) pageHtmlCache[route] = result.html;
    }

    // Check required links exist on pages
    console.log('\n--- Required Link Checks ---\n');
    for (const [page, links] of Object.entries(requiredLinks)) {
        if (pageHtmlCache[page]) {
            console.log(`Checking links on ${page}:`);
            const linksOk = checkLinksInHtml(pageHtmlCache[page], links, page);
            if (!linksOk) allPassed = false;
        } else {
            console.error(`⚠️ Cannot check links on ${page} - page not fetched`);
        }
    }

    console.log('\n--- Summary ---\n');
    if (allPassed) {
        console.log('✅ All checks passed!\n');
        process.exit(0);
    } else {
        console.error('❌ Some checks failed.\n');
        process.exit(1);
    }
}

run();
