import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 5 - 30 Days Quran Learning',
  description: 'Day 5 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 5 - 30 Days Quran Learning',
    description: 'Day 5 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day5Page() {
  return (
    <LessonLayout
      dayNumber={5}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 5 will be added here.</p>
    </LessonLayout>
  )
}
