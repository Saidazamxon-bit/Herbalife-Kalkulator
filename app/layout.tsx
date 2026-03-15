'use client';

import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import { Inter, Fira_Code } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['700', '800', '900'],
});

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}