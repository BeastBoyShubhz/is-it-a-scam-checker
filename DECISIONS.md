# Architectural Decisions Log

## ADR-001: Client-Side Processing

### Context
We needed to decide how to handle OCR and file parsing for scam detection.

### Decision
We chose **Client-Side Processing** using Web Workers, Tesseract.js, and PDF.js.

### Consequences
- **Positive**: Enhanced privacy (no data uploaded), lower server costs.
- **Negative**: Heavier initial bundle size, performance depends on client device.

## ADR-002: Gemini AI for Blog Content Generation

### Context
The automated blog system needs to produce daily, original content about current scam threats. The previous static template generator produced identical generic content every run.

### Decision
We chose **Google Gemini 2.0 Flash** over alternatives (OpenAI GPT, Claude, local LLMs):
- **Free tier** with generous rate limits (sufficient for 2 posts/day)
- **Fast generation** (~3-5 seconds per post)
- **Good at following structured output** (JSON format)
- **Built-in knowledge** of recent events

### Anti-AI Strategy
Instead of trying to make AI "write naturally" (which doesn't work), we:
1. Maintain a blocklist of 50+ known AI phrases and strip them post-generation
2. Use a highly specific prompt that demands journalistic conventions (short paragraphs, active voice, specific details, rhetorical questions)
3. Enforce topic specificity — the AI must write about a SPECIFIC current scam, not generic advice
4. Detect duplicate topics against existing posts to keep content fresh

### Consequences
- **Positive**: Fresh, SEO-optimised content daily without manual research. Anti-AI-pattern system makes content harder to detect as AI-generated.
- **Negative**: Requires a GEMINI_API_KEY secret. Source URLs may occasionally be hallucinated (reviewers should verify before merging). API outages would skip that day's post.
