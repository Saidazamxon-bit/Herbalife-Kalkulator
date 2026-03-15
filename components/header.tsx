'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Settings, Newspaper } from 'lucide-react';

interface HeaderProps {
  catalogType: 'mahsulotlar' | 'kosmetika' | 'boshqa';
  onCatalogChange: (type: 'mahsulotlar' | 'kosmetika' | 'boshqa') => void;
  discount: number;
  onDiscountChange: (discount: number) => void;
}

const CATALOG_OPTIONS = [
  { value: 'mahsulotlar', label: 'Mahsulotlar' },
  { value: 'kosmetika', label: 'Kosmetika' },
  { value: 'boshqa', label: 'Boshqa' },
] as const;

const DISCOUNT_OPTIONS = [
  { value: 0, label: 'Chegirma yo\'q' },
  { value: 25, label: '25% Chegirma' },
  { value: 35, label: '35% Chegirma' },
  { value: 42, label: '42% Chegirma' },
  { value: 50, label: '50% Chegirma' },
];

export function Header({
  catalogType,
  onCatalogChange,
  discount,
  onDiscountChange,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-green-200 dark:border-green-900 shadow-sm">
      <div className="mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between mb-3">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
              <img
                src="/icon-512.png"
                alt="Herbalife logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold hidden sm:block">
              <span className="text-sky-500">PW</span>
              <span className="text-green-700 dark:text-green-400">-Herbalife</span>
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 md:gap-4">
            <Link
              href="/yangiliklar"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-950 transition-colors text-sm md:text-base font-medium"
            >
              <Newspaper size={18} />
              <span className="hidden sm:inline">Yangiliklar</span>
            </Link>
            <Link
              href="/sozlamalar"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-950 transition-colors text-sm md:text-base font-medium"
            >
              <Settings size={18} />
              <span className="hidden sm:inline">Sozlamalar</span>
            </Link>
          </nav>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
          <select
            value={catalogType}
            onChange={(e) => onCatalogChange(e.target.value as 'mahsulotlar' | 'kosmetika' | 'boshqa')}
            className="flex-1 px-3 py-2 border-2 border-green-500 rounded-lg font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-sm"
          >
            {CATALOG_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            value={discount}
            onChange={(e) => onDiscountChange(parseInt(e.target.value))}
            className="flex-1 px-3 py-2 border-2 border-green-500 rounded-lg font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950 hover:bg-green-100 dark:hover:bg-green-900 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-sm"
          >
            {DISCOUNT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
