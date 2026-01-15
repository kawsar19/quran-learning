import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 14 - 30 Days Quran Learning',
  description: 'Day 14 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 14 - 30 Days Quran Learning',
    description: 'Day 14 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day14Page() {
  return (
    <LessonLayout
      dayNumber={14}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 14 will be added here.</p>
    </LessonLayout>
  )
}
