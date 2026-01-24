# Portfolio Entry: Scam Checker

**Project Name:** Scam Checker
**Tagline:** Instant AI-powered scam analysis for text messages, emails, and websites.
**Live Link:** [Pending Deployment]
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Prisma, Postgres, Vercel

## Key Features
- **Real-time Risk Analysis:** Uses advanced heuristics and lookalike domain detection (Levenshtein distance) to spot phishing attempts.
- **Privacy-First:** Analyzes sensitive content (texts, invoices) entirely client-side or securely in-memory without storage.
- **Community Reporting:** Integrated reporting system allowing users to flag new scams, contributing to a shared threat intelligence database.
- **Multi-Format Support:** Scans URLs, Text Messages, Emails, Screenshots (OCR), and PDF Invoices.
- **Responsive Design:** Premium UI with glassmorphism effects, smooth animations, and mobile-first layout.

## What I Considered (Technical Decisions)
- **Security vs Functionality:** I deliberately chose client-side Regex/Heuristics for the initial scan to ensure user privacy (no data leaves the browser unnecessarily). The server is only queried for reputation checks on specific identifiers (URLs/Phones).
- **Performance:** Used `tldts` for robust domain parsing because standard URL construction isn't enough for spotting sub-domain impersonation (e.g. `commbank.secure-login.com`).
- **Abuse Prevention:** Implemented IP-based hashing and rate limiting for the reporting API to prevent spam without requiring user login.

## How it was built
I noticed a gap in easy-to-use tools for non-technical users to verify suspicious messages. Most tools are too complex or require sign-up. I built Scam Checker to be an "instant answer" engine.

The core is a weighted scoring engine (`scamScorer.ts`) that evaluates text patterns (e.g. "urgent", "cvv") and domain risks. For the upgrade, I added a community feedback loop: when users report a scam, it's indexed in a Postgres database. Subsequent scans check this database, creating a network effect where one user's report protects everyone else.

UI/UX was a priority—I wanted it to feel like a modern security app, not a government form. I used Tailwind for rapid styling and Framer Motion (or CSS animations) for feedback.

## Quality & Testing
- ✅ **Automated Tests:** Comprehensive unit tests for the scoring logic, covering edge cases like typosquatting (`co.m.bank`).
- ✅ **Security:** Inputs are sanitized. No sensitive user text is stored. Keys are managed via Vercel env vars.
- ✅ **Error Handling:** Graceful fallbacks for database unavailability (UI continues to work in "offline" mode).
