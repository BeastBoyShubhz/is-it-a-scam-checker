# Architectural Decisions Log

## ADR-001: Client-Side Processing

### Context
We needed to decide how to handle OCR and file parsing for scam detection.

### Decision
We chose **Client-Side Processing** using Web Workers, Tesseract.js, and PDF.js.

### Consequences
- **Positive**: Enhanced privacy (no data uploaded), lower server costs.
- **Negative**: Heavier initial bundle size, performance depends on client device.
