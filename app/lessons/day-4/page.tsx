import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 4 - 30 Days Quran Learning',
  description: 'Day 4 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 4 - 30 Days Quran Learning',
    description: 'Day 4 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day4Page() {
  return (
    <LessonLayout
      dayNumber={4}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 4 will be added here.</p>
    </LessonLayout>
  )
}
