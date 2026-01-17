import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './components/Header'
import PWAInstallPrompt from './components/PWAInstallPrompt'

export const metadata: Metadata = {
  title: '30 Days Quran Learning',
  description: 'Learn the Quran in 30 days with structured daily lessons',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '30 Days Quran Learning',
  },
  formatDetection: {
    telephone: false,
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Scheherazade+New&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <PWAInstallPrompt />
      </body>
    </html>
  )
}
