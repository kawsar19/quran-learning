import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 6 - 30 Days Quran Learning',
  description: 'Day 6 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 6 - 30 Days Quran Learning',
    description: 'Day 6 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day6Page() {
  return (
    <LessonLayout
      dayNumber={6}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 6 will be added here.</p>
    </LessonLayout>
  )
}
