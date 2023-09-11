import React from 'react'
import { Document, Page, pdfjs } from "react-pdf";


const PdfViewer = ({pdf}) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <Document file={pdf}>
    <Page pageNumber={1}/>
  </Document>
  )
}

export default PdfViewer