import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 28 - 30 Days Quran Learning',
  description: 'Day 28 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 28 - 30 Days Quran Learning',
    description: 'Day 28 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day28Page() {
  return (
    <LessonLayout
      dayNumber={28}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 28 will be added here.</p>
    </LessonLayout>
  )
}
