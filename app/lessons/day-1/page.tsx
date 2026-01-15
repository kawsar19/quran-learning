import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import ArabicAlphabetTable from '@/app/components/ArabicAlphabetTable'

export const metadata: Metadata = {
  title: 'Day 1 - Arabic Alphabet | 30 Days Quran Learning',
  description: 'Learn the Arabic alphabet with audio pronunciation. Day 1 of the 30 Days Quran Learning program.',
  openGraph: {
    title: 'Day 1 - Arabic Alphabet | 30 Days Quran Learning',
    description: 'Learn the Arabic alphabet with audio pronunciation. Day 1 of the 30 Days Quran Learning program.',
  },
}

export default function Day1Page() {
  return (
    <LessonLayout
      dayNumber={1}
      title="Introduction to the Arabic Alphabet"
      videoId="VIDEO_ID_HERE"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">The Arabic Alphabet</h2>
      <p className="mb-4">
        The Arabic alphabet consists of 28 letters. Unlike English, Arabic is written from right to left.
        Each letter has a unique sound. Click the &quot;Play&quot; button to hear the pronunciation of each letter.
      </p>
      <p className="mb-6">
        Today we will focus on recognizing the independent form of each letter.
        Practice saying each letter out loud as you listen to the audio.
      </p>

      <ArabicAlphabetTable />

      <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">Practice Tips</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Listen to each letter multiple times</li>
          <li>Try to repeat the sound after hearing it</li>
          <li>Focus on letters that sound different from English</li>
          <li>Practice writing each letter while saying its name</li>
        </ul>
      </div>
    </LessonLayout>
  )
}
