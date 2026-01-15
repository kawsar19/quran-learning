import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 11 - 30 Days Quran Learning',
  description: 'Day 11 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 11 - 30 Days Quran Learning',
    description: 'Day 11 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day11Page() {
  return (
    <LessonLayout
      dayNumber={11}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 11 will be added here.</p>
    </LessonLayout>
  )
}
