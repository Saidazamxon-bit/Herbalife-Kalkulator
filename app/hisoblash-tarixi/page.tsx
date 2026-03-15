'use client';

import Link from 'next/link';
import { ArrowLeft, Trash2, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HistoryItem {
  id: string;
  date: string;
  totalVP: number;
  totalPrice: number;
  itemCount: number;
  items: Array<{ name: string; quantity: number; price: number }>;
}

export default function HisoblashTarihiPage() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('cartHistory');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Tarixni yuklashda xato:', e);
      }
    }
  }, []);

  const handleDelete = (id: string) => {
    const updated = history.filter(item => item.id !== id);
    setHistory(updated);
    localStorage.setItem('cartHistory', JSON.stringify(updated));
  };

  const handleClearAll = () => {
    if (confirm('Butun tarixni o\'chirib tashlamoqchimisiz?')) {
      setHistory([]);
      localStorage.removeItem('cartHistory');
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-green-200 dark:border-green-900 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900 transition-colors text-green-600 dark:text-green-400"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Hisoblash Tarixi</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {history.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-green-100 dark:border-green-900 p-12 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">Hisoblash tarixi bo'sh</p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Mahsulotlarga qaytish
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {history.length} ta saqlangan hisobot
              </h2>
              <button
                onClick={handleClearAll}
                className="px-4 py-2 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition-colors text-sm font-medium"
              >
                Hammasini o'chirish
              </button>
            </div>

            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-900 rounded-lg border border-green-100 dark:border-green-900 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.date}</p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.itemCount} ta mahsulot
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 dark:text-slate-400">Jami VP</p>
                      <p className="text-xl font-bold text-green-600 dark:text-green-400">
                        {item.totalVP.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg max-h-40 overflow-y-auto">
                    {item.items.map((product, idx) => (
                      <div key={idx} className="flex justify-between text-sm py-1 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                        <span className="text-slate-700 dark:text-slate-300">{product.name} x{product.quantity}</span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {(product.price * product.quantity).toLocaleString('uz-UZ')} so'm
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Jami narx</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.totalPrice.toLocaleString('uz-UZ')} so'm
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
                    >
                      <Trash2 size={16} />
                      O'chirish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}