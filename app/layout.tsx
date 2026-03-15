import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ServiceWorkerRegister } from '@/components/service-worker-register'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Herbalife Nutrition - Mahsulotlar Katalogi',
  description: 'Herbalife sog\'lik va oziqlanish mahsulotlarining eng katta tanloviga ega. Qavat chegirmalar va kosmitika mahsulotlari.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  themeColor: '#16a34a',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-light-32x32.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <ServiceWorkerRegister />
        <Analytics />
      </body>
    </html>
  )
}
