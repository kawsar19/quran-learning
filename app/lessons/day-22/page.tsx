import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 22 - 30 Days Quran Learning',
  description: 'Day 22 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 22 - 30 Days Quran Learning',
    description: 'Day 22 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day22Page() {
  return (
    <LessonLayout
      dayNumber={22}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 22 will be added here.</p>
    </LessonLayout>
  )
}
