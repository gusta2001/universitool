const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

const link = "https://pdf-lib.js.org/assets/with_large_page_count.pdf";

const pdf = mergePdfs(link);

async function mergePdfs(pdfsToMerge: string[]) {
    const mergedPdf = await PDFDocument.create();
    for (const pdfCopyDoc of pdfsToMerge) {
      const pdfBytes = fs.readFileSync(pdfCopyDoc);
      const pdf = await PDFDocument.load(pdfBytes);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page: string[]) => {
        mergedPdf.addPage(page);
      });
    }
    const mergedPdfFile = await mergedPdf.save();
    return mergedPdfFile;
}

export default mergePdfs;