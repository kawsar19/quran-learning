import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 16 - 30 Days Quran Learning',
  description: 'Day 16 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 16 - 30 Days Quran Learning',
    description: 'Day 16 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day16Page() {
  return (
    <LessonLayout
      dayNumber={16}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 16 will be added here.</p>
    </LessonLayout>
  )
}
