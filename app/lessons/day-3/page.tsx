import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 3 - 30 Days Quran Learning',
  description: 'Day 3 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 3 - 30 Days Quran Learning',
    description: 'Day 3 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day3Page() {
  return (
    <LessonLayout
      dayNumber={3}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 3 will be added here.</p>
    </LessonLayout>
  )
}
