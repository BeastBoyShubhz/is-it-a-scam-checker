# Is It a Scam? - Scam Detection Tool

This project is a modern, privacy-first tool designed to help users identify potential scams in URLs, Emails, Text Messages, and now **Images/Screenshots** and **Documents (PDF/DOCX)**.

## 🚀 Features

- **Multi-Channel Detection**: Check Website URLs, Emails, SMS/Texts.
- **[NEW] Image Scanning (OCR)**: Upload screenshots of suspicious messages. Text is extracted locally using Tesseract.js.
- **[NEW] Document Scanning**: Upload PDFs or Word documents to check for fake invoices or contract scams.
- **Advanced Scoring**: Weighted scoring system that identifies specific signals like "Urgency", "Payment Requests", and "Bank Impersonation".
- **Privacy First**: All processing happens **in your browser**. No files or text are uploaded to our servers.
- **Responsive Design**: Built for mobile and desktop using Tailwind CSS v4.
- **SEO Optimized**: Includes programmatic guides and structured data.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Text Extraction**: Tesseract.js (OCR), PDF.js, Mammoth.js
- **Testing**: Vitest

## 🏃‍♂️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/is-it-a-scam-checker.git
    cd is-it-a-scam-checker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to [http://localhost:3000](http://localhost:3000).

## 🧪 Running Tests

Run unit tests for the detection logic:
```bash
npm test
```

## 📦 Deployment

This project is optimized for deployment on Vercel.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  Deploy! (No environment variables required for core features).

## 🛡️ Privacy Note

We take privacy seriously.
- **Client-Side Processing**: All file analysis (OCR, PDF reading) is done in the user's browser via Web Workers.
- **No Persistence**: Nothing you upload is saved to a database.

## 📝 Automated Blog Drafts

The repo includes an automated blog posting system that generates draft scam-alert posts via a GitHub Action and opens a PR for review.

### How It Works

1. A **GitHub Action** (`.github/workflows/auto-blog.yml`) runs daily at 08:00 UTC (and on manual dispatch).
2. It runs `scripts/generate-scam-post.ts` which produces an MDX post in `content/blog/`.
3. The action opens a **Pull Request** — posts are never auto-published directly to `main`.
4. A reviewer checks the content, verifies sources, previews via Vercel deploy preview, and merges.
5. **Vercel deploys** the updated site automatically on merge.

### Local Testing

```bash
# Generate a draft post locally
npm run generate-blog

# Generate with custom sources
SCAM_SOURCES='[{"title":"Test Scam","url":"https://example.com","snippet":"A test scam report."}]' npm run generate-blog

# Run dev server and visit http://localhost:3000/blog
npm run dev

# Build to verify no errors
npm run build
```

### Post Structure

Every post uses MDX with required frontmatter (`title`, `date`, `summary`, `tags`, `sources`) and follows a consistent template with sections: Quick Take, How the Con Works, Red Flags, What to Do, Report It, and References.

### Safety Guardrails

- Posts include a mandatory disclaimer: *"This is general information, not legal or financial advice."*
- A lint check rejects posts containing dangerous phrases outside of clearly labelled warning contexts.
- Without external sources, the generator produces a safe "Scam Watch Roundup" with general advice only.

