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
