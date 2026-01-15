import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 24 - 30 Days Quran Learning',
  description: 'Day 24 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 24 - 30 Days Quran Learning',
    description: 'Day 24 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day24Page() {
  return (
    <LessonLayout
      dayNumber={24}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 24 will be added here.</p>
    </LessonLayout>
  )
}
