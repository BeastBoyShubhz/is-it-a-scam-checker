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

## 📝 AI-Powered Blog System

The repo includes a fully automatic blog publishing system that generates original, SEO-optimised scam alert posts using **Google Gemini AI** and commits them directly to `main`.

### How It Works

1. A **GitHub Action** (`.github/workflows/auto-blog.yml`) runs twice daily (6AM + 6PM UTC) and on manual dispatch.
2. It calls **Gemini AI** (with model fallback: 2.5 Flash → 2.0 Flash → 2.0 Flash Lite) to research current scam/cybersecurity threats and write an original blog post.
3. The script strips AI-sounding language using a blocklist of 150+ known chatbot phrases.
4. Duplicate topics are detected and skipped to keep content fresh.
5. Posts are committed directly to `main` and **Vercel auto-deploys** — fully hands-off.

### Setup

1. Get a free Gemini API key at [aistudio.google.com](https://aistudio.google.com/apikey)
2. Add it as a GitHub repository secret named `GEMINI_API_KEY`
3. In repo Settings → Actions → General → set "Read and write permissions"

### Local Testing

```bash
# Generate a draft post locally (requires GEMINI_API_KEY env var)
GEMINI_API_KEY=your-key npm run generate-blog

# Run dev server and visit http://localhost:3000/blog
npm run dev

# Build to verify no errors
npm run build
```

### Post Structure

Every post uses MDX with required frontmatter (`title`, `date`, `summary`, `tags`, `sources`) and follows a journalistic structure: opening hook, how the scam works, who is targeted, red flags, action steps, reporting links, and a closing CTA.

### Safety Guardrails

- Posts include a mandatory disclaimer: *"This post is for informational purposes only and does not constitute legal or financial advice."*
- A lint check rejects posts containing dangerous phrases outside of clearly labelled warning contexts.
- AI-sounding phrases are automatically stripped from generated content.
- Duplicate topics are detected and skipped.


