import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 9 - 30 Days Quran Learning',
  description: 'Day 9 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 9 - 30 Days Quran Learning',
    description: 'Day 9 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day9Page() {
  return (
    <LessonLayout
      dayNumber={9}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 9 will be added here.</p>
    </LessonLayout>
  )
}
