import Tesseract from 'tesseract.js';
import * as mammoth from 'mammoth';

// Define worker path for PDF.js (checking both standard CDN and local options, sticking to CDN for simplicity in client-side)


export interface ExtractedData {
    text: string;
    error?: string;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function extractTextFromImage(file: File): Promise<ExtractedData> {
    if (file.size > MAX_FILE_SIZE) {
        return { text: '', error: 'File size exceeds 5MB limit.' };
    }

    try {
        const result = await Tesseract.recognize(
            file,
            'eng',
            { logger: m => console.log(m) } // Optional logger for progress
        );
        return { text: result.data.text };
    } catch (err) {
        console.error("OCR Error:", err);
        return { text: '', error: 'Failed to read text from image. Please paste manually.' };
    }
}

export async function extractTextFromFile(file: File): Promise<ExtractedData> {
    if (file.size > MAX_FILE_SIZE) {
        return { text: '', error: 'File size exceeds 5MB limit.' };
    }

    const extension = file.name.split('.').pop()?.toLowerCase();

    try {
        if (extension === 'txt') {
            return await readTextFile(file);
        } else if (extension === 'docx') {
            return await readDocxFile(file);
        } else if (extension === 'pdf') {
            return await readPdfFile(file);
        } else {
            return { text: '', error: 'Unsupported file type.' };
        }
    } catch (err) {
        console.error("Extraction Error:", err);
        return { text: '', error: 'Failed to extract text. Please paste manually.' };
    }
}

function readTextFile(file: File): Promise<ExtractedData> {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({ text: e.target?.result as string || '' });
        reader.onerror = () => resolve({ text: '', error: 'Error reading text file.' });
        reader.readAsText(file);
    });
}

async function readDocxFile(file: File): Promise<ExtractedData> {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                const arrayBuffer = e.target?.result as ArrayBuffer;
                const result = await mammoth.extractRawText({ arrayBuffer });
                resolve({ text: result.value });
            } catch (err) {
                resolve({ text: '', error: 'Error processing DOCX file.' });
            }
        };
        reader.readAsArrayBuffer(file);
    });
}

async function readPdfFile(file: File): Promise<ExtractedData> {
    try {
        // Dynamic import to avoid SSR issues with DOMMatrix/Canvas
        const pdfjsLib = await import('pdfjs-dist');
        // Set worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = '';

        // Limit to first 10 pages
        const maxPages = Math.min(pdf.numPages, 10);

        for (let i = 1; i <= maxPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item: any) => item.str).join(' ');
            fullText += pageText + '\n\n';
        }

        return { text: fullText };
    } catch (err) {
        console.error(err);
        return { text: '', error: 'Error processing PDF file.' };
    }
}
