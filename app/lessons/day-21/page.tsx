import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 21 - 30 Days Quran Learning',
  description: 'Day 21 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 21 - 30 Days Quran Learning',
    description: 'Day 21 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day21Page() {
  return (
    <LessonLayout
      dayNumber={21}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 21 will be added here.</p>
    </LessonLayout>
  )
}
