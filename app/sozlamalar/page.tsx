'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function SozlamalarPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const handleThemeToggle = () => {
    if (!mounted) return;
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.settings}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-6">
        {/* Theme Card */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-green-100 dark:border-green-900 p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-950 flex items-center justify-center">
                {isDarkMode ? (
                  <Moon className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <Sun className="w-6 h-6 text-green-600 dark:text-green-400" />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{t.settingsThemeTitle}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {isDarkMode ? t.settingsThemeOn : t.settingsThemeOff}
                </p>
              </div>
            </div>
            <button
              onClick={handleThemeToggle}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isDarkMode ? 'bg-green-600' : 'bg-slate-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-green-100 dark:border-green-900 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{t.language}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {([
              { value: 'uz-latn', label: t.uzbekLatin },
              { value: 'uz-cyrl', label: t.uzbekCyrillic },
              { value: 'ru', label: t.russian },
              { value: 'en', label: t.english },
            ] as const).map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLanguage(option.value)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  language === option.value
                    ? 'border-green-500 bg-green-50 dark:bg-green-950 text-green-800 dark:text-green-200'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-green-400 dark:hover:border-green-600'
                }`}
              >
                <span>{option.label}</span>
                {language === option.value && (
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">Active</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}