const { exec } = require('child_process');

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
const routes = [
    '/',
    '/check',
    '/guides',
    '/reports',
];

async function checkRoute(route) {
    const url = `${baseUrl}${route}`;
    try {
        const res = await fetch(url);
        if (res.status === 200) {
            console.log(`✅ ${route} returned 200`);
            return true;
        } else {
            console.error(`❌ ${route} returned ${res.status}`);
            return false;
        }
    } catch (error) {
        console.error(`❌ ${route} failed to fetch: ${error.message}`);
        return false;
    }
}

async function run() {
    console.log(`Checking routes on ${baseUrl}...`);

    // Wait for server to be ready if running in CI? 
    // For this script we assume server is running or we just check.

    let allPassed = true;
    for (const route of routes) {
        const passed = await checkRoute(route);
        if (!passed) allPassed = false;
    }

    if (allPassed) {
        console.log('All routes passed!');
        process.exit(0);
    } else {
        console.error('Some routes failed.');
        process.exit(1);
    }
}

run();
