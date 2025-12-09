"use client"
import { Document, Page, pdfjs } from 'react-pdf';
// @ts-expect-error - side-effect CSS import has no type declarations
import 'react-pdf/dist/Page/AnnotationLayer.css'
// @ts-expect-error - side-effect CSS import has no type declarations
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PdfViewer = () => {
  return (
      <Document file="files/resume.pdf">
          <Page pageNumber={1}  renderTextLayer renderAnnotationLayer />
      </Document>
  )
}

export default PdfViewer
