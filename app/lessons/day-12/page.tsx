import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 12 - 30 Days Quran Learning',
  description: 'Day 12 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 12 - 30 Days Quran Learning',
    description: 'Day 12 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day12Page() {
  return (
    <LessonLayout
      dayNumber={12}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 12 will be added here.</p>
    </LessonLayout>
  )
}
