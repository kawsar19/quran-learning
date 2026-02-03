import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from './components/Header'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import AuthProvider from './components/AuthProvider'

const geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'easyQuran.bd - সহজভাবে শুদ্ধ কুরআন শিক্ষা',
  description: 'কম সময়ে সহজ উপায়ে সঠিক পদ্ধতিতে কুরআন শিখুন। মাত্র ২৪ ঘণ্টায় ফ্রিতে অভিজ্ঞ মেন্টরের সাথে কুরআন শেখার যাত্রা শুরু করুন।',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'easyQuran.bd',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#047857',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Tiro+Bangla:ital@0;1&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${geist.className} min-h-screen bg-background text-foreground antialiased`}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <PWAInstallPrompt />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
