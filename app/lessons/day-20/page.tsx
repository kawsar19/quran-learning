import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 20 - 30 Days Quran Learning',
  description: 'Day 20 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 20 - 30 Days Quran Learning',
    description: 'Day 20 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day20Page() {
  return (
    <LessonLayout
      dayNumber={20}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 20 will be added here.</p>
    </LessonLayout>
  )
}
