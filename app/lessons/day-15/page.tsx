import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 15 - 30 Days Quran Learning',
  description: 'Day 15 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 15 - 30 Days Quran Learning',
    description: 'Day 15 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day15Page() {
  return (
    <LessonLayout
      dayNumber={15}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 15 will be added here.</p>
    </LessonLayout>
  )
}
