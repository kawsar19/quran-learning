import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'

export const metadata: Metadata = {
  title: '30 Days Quran Learning',
  description: 'Learn the Quran in 30 days with structured daily lessons',
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
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
