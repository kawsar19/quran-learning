import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 2 - 30 Days Quran Learning',
  description: 'Day 2 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 2 - 30 Days Quran Learning',
    description: 'Day 2 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day2Page() {
  return (
    <LessonLayout
      dayNumber={2}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 2 will be added here.</p>
    </LessonLayout>
  )
}
