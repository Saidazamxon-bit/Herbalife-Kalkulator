'use client';

import { useState } from 'react';
import { Copy, Share2, FileText, Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import jsPDF from 'jspdf';

interface CartItem {
  name: string;
  vp: number;
  price: number;
  quantity: number;
}

interface CopyShareButtonsProps {
  cartItems: CartItem[];
  totalVP: number;
  totalPrice: number;
}

export function CopyShareButtons({
  cartItems,
  totalVP,
  totalPrice,
}: CopyShareButtonsProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const formatCartText = () => {
    let text = '';

    cartItems.forEach((item) => {
      text += `Product: ${item.name}\n`;
      text += `Quantity: ${item.quantity}\n`;
      text += `VP: ${(item.vp * item.quantity).toFixed(2)}\n`;
      text += `Price: ${(item.price * item.quantity).toLocaleString()} so'm\n\n`;
    });

    text += `Total VP: ${totalVP.toFixed(2)}\n`;
    text += `Total Price: ${totalPrice.toLocaleString()} so'm\n`;

    return text;
  };

  const handleCopy = async () => {
    const text = formatCartText();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const handleShare = async () => {
    const text = formatCartText();
    const shareData = {
      title: 'Herbalife Products',
      text: text,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers without Share API
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Share failed:', error);
      }
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    let yPosition = 15;

    // Header
    doc.setFontSize(18);
    doc.setTextColor(22, 163, 74); // Green color
    doc.text('HERBALIFE', 105, yPosition, { align: 'center' });

    yPosition += 8;
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('Mahsulotlar ro\'yxati', 105, yPosition, { align: 'center' });

    yPosition += 12;

    // Products Table
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    // Table Header
    doc.setFillColor(22, 163, 74);
    doc.setTextColor(255, 255, 255);
    doc.rect(15, yPosition, 180, 7, 'F');
    doc.text('Mahsulot', 20, yPosition + 5);
    doc.text('Qty', 120, yPosition + 5);
    doc.text('VP', 140, yPosition + 5);
    doc.text('Narx', 160, yPosition + 5);

    yPosition += 8;
    doc.setTextColor(0, 0, 0);

    // Table Rows
    cartItems.forEach((item, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 15;
      }

      const itemVP = (item.vp * item.quantity).toFixed(2);
      const itemPrice = (item.price * item.quantity).toLocaleString();

      if (index % 2 === 0) {
        doc.setFillColor(240, 240, 240);
        doc.rect(15, yPosition, 180, 6, 'F');
      }

      doc.text(item.name.substring(0, 40), 20, yPosition + 4);
      doc.text(item.quantity.toString(), 120, yPosition + 4);
      doc.text(itemVP, 140, yPosition + 4);
      doc.text(itemPrice, 160, yPosition + 4);

      yPosition += 7;
    });

    // Summary
    yPosition += 3;
    doc.setFillColor(22, 163, 74);
    doc.setTextColor(255, 255, 255);
    doc.rect(15, yPosition, 180, 7, 'F');
    doc.text('JAMI', 20, yPosition + 5);
    doc.text('', 120, yPosition + 5);
    doc.text(totalVP.toFixed(2), 140, yPosition + 5);
    doc.text(totalPrice.toLocaleString() + ' so\'m', 160, yPosition + 5);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Herbalife Nutrition - © 2026', 105, 290, { align: 'center' });

    doc.save('herbalife-mahsulotlar.pdf');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
          copied
            ? 'bg-green-600 text-white'
            : 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900'
        }`}
      >
        {copied ? (
          <>
            <Check className="w-5 h-5" />
            <span>{t.copied}</span>
          </>
        ) : (
          <>
            <Copy className="w-5 h-5" />
            <span>{t.copy}</span>
          </>
        )}
      </button>

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900"
      >
        <Share2 className="w-5 h-5" />
        <span>{t.share}</span>
      </button>

      {/* PDF Button */}
      <button
        onClick={handleDownloadPDF}
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900"
      >
        <FileText className="w-5 h-5" />
        <span>{t.downloadPDF}</span>
      </button>
    </div>
  );
}
