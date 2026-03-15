import React from 'react';
import { saveAs } from 'file-saver';
import { generatePDF } from '../utils/pdf-export';

export const PdfExportButton: React.FC = () => {
  const handleExport = async () => {
    const pdfBlob = await generatePDF();
    saveAs(pdfBlob, 'product-list.pdf');
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Export as PDF
    </button>
  );
};