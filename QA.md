# QA Checklist

## Automated Checks
- [ ] **Lint**: `npm run lint` passes.
- [ ] **Tests**: `npm test` passes (Vitest).
- [ ] **Type Check**: `npm run type-check` passes.

## Manual Checks
- [ ] **OCR Functionality**: Upload a clear text image and verify text extraction.
- [ ] **PDF Parsing**: Upload a standard PDF invoice and verify text extraction.
- [ ] **Responsive UI**: Check tool cards on mobile layout.
- [ ] **Privacy**: Verify network tab shows no file uploads to backend.
