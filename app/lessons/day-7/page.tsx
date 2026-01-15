import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 7 - 30 Days Quran Learning',
  description: 'Day 7 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 7 - 30 Days Quran Learning',
    description: 'Day 7 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day7Page() {
  return (
    <LessonLayout
      dayNumber={7}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 7 will be added here.</p>
    </LessonLayout>
  )
}
