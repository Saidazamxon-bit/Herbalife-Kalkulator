'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

export default function SozlamalarPage() {
  const { language, changeLanguage, translations } = useLanguage();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {translations[language]['settings']}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="space-y-6">
          {/* Language Settings */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-green-100 dark:border-green-900 p-6 shadow-sm hover:shadow-md transition-shadow">
            <label htmlFor="language" className="block text-slate-700 dark:text-slate-300 mb-2">
              {translations[language]['selectLanguage']}
            </label>
            <select
              id="language"
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            >
              <option value="uz-latn">Uzbek (Latin)</option>
              <option value="uz-cyrl">Uzbek (Cyrillic)</option>
              <option value="ru">Russian</option>
              <option value="en">English</option>
            </select>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              {translations[language]['languageChangeInfo']}
            </p>
          </div>

          {/* Theme Settings Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-green-100 dark:border-green-900 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {theme === 'dark' ? (
                  <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-950 flex items-center justify-center">
                    <Moon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-950 flex items-center justify-center">
                    <Sun className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                )}
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Tungi rejim
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {theme === 'dark'
                      ? 'Tungi rejim faol'
                      : 'Kunduzgi rejim faol'}
                  </p>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-green-600'
                    : 'bg-slate-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                    theme === 'dark' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Yangi imkoniyatlar
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: 'Til sozlamalari',
                  description: 'Interfeys tilini o\'zgartirish',
                  icon: '🌐',
                },
                {
                  title: 'Bildirishnomalar',
                  description: 'Yangiliklar va taklif haqida xabarnomalar',
                  icon: '🔔',
                },
                {
                  title: 'Xususiylik',
                  description: 'Shaxsiy ma\'lumotlarni boshqarish',
                  icon: '🔒',
                },
                {
                  title: 'Hisobot',
                  description: 'Sotish va foydali mahsulotlarning hisoboti',
                  icon: '📊',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-lg border border-green-100 dark:border-green-900 p-4 hover:border-green-300 dark:hover:border-green-700 transition-colors"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Herbalife Mahsulotlar Katalogi
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
              Versiya 2.0 - Modernizlangan interfeys va chizmalar bilan
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              © 2024-2026 Herbalife Nutrition. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
