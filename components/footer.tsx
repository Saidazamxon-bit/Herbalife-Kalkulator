'use client';

import Link from 'next/link';
import { Phone, Send } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-900 dark:to-slate-950 text-slate-300 py-8 sm:py-12 mt-12 sm:mt-16 border-t border-green-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                <img
                  src="/icon-512.png"
                  alt="Herbalife logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold">
                <span className="text-sky-400">PrintWorkPro</span>
                <span className="text-green-600 dark:text-green-400">-Herbalife</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Sog'lik va oziqlanish bo'yicha eng yaxshi mahsulotlar
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Navigatsiya</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Mahsulotlar
                </Link>
              </li>
              <li>
                <Link href="/yangiliklar" className="hover:text-green-400 transition-colors">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link href="/sozlamalar" className="hover:text-green-400 transition-colors">
                  Sozlamalar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Aloqa</h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <a
                href="tel:+998882700707"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+998 88 270 0707</span>
              </a>
              <a
                href="tel:+998907702299"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+998 90 770 2299</span>
              </a>
              <a
                href="https://t.me/PrintWork_pro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram kanal: @PrintWork_pro</span>
              </a>
              <a
                href="https://t.me/Printwork_hlf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram lichka: @Printwork_hlf</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-slate-500">
            Mualliflik huquqi © {currentYear} Herbalife. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
