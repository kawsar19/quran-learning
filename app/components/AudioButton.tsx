'use client'

import { useState } from 'react'

interface AudioButtonProps {
  audioUrl: string
}

export default function AudioButton({ audioUrl }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    const audio = new Audio(audioUrl)
    setIsPlaying(true)
    audio.play()
    audio.onended = () => setIsPlaying(false)
    audio.onerror = () => setIsPlaying(false)
  }

  return (
    <button
      onClick={playAudio}
      disabled={isPlaying}
      className={`${
        isPlaying
          ? 'bg-emerald-400 cursor-not-allowed'
          : 'bg-emerald-600 hover:bg-emerald-700'
      } text-white font-bold py-2 px-4 rounded-full shadow transition`}
    >
      {isPlaying ? '...' : 'Play'}
    </button>
  )
}
