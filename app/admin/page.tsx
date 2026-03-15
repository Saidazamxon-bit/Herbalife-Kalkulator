'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AdminPage() {
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Admin Panel</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-green-100 dark:border-green-900 p-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">Admin panel hozircha ishlab turitgan emas</p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </main>
  );
}