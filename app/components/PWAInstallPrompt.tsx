'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallButton, setShowInstallButton] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [showIOSPrompt, setShowIOSPrompt] = useState(false)

  useEffect(() => {
    // Check if running in standalone mode
    const standalone = window.matchMedia('(display-mode: standalone)').matches
    setIsStandalone(standalone)

    // Check if iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(ios)

    // Listen for beforeinstallprompt event (Chrome, Edge, etc.)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallButton(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.error('Service Worker registration failed:', error)
      })
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setShowInstallButton(false)
    }
    setDeferredPrompt(null)
  }

  // Don't show anything if already installed
  if (isStandalone) {
    return null
  }

  // Show iOS instructions
  if (isIOS && showIOSPrompt) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-emerald-700 text-white p-4 shadow-lg z-50">
        <div className="max-w-md mx-auto flex items-start gap-3">
          <div className="flex-1">
            <p className="font-medium mb-1">Install this app</p>
            <p className="text-sm opacity-90">
              Tap the share button <span className="inline-block">⎋</span> and then &quot;Add to Home Screen&quot; <span className="inline-block">➕</span>
            </p>
          </div>
          <button
            onClick={() => setShowIOSPrompt(false)}
            className="text-white/80 hover:text-white p-1"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    )
  }

  // Show install button for supported browsers
  if (showInstallButton || isIOS) {
    return (
      <button
        onClick={isIOS ? () => setShowIOSPrompt(true) : handleInstallClick}
        className="fixed bottom-4 right-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 transition-colors"
        aria-label="Install app"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Install App
      </button>
    )
  }

  return null
}
