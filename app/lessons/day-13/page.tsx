import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 13 - 30 Days Quran Learning',
  description: 'Day 13 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 13 - 30 Days Quran Learning',
    description: 'Day 13 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day13Page() {
  return (
    <LessonLayout
      dayNumber={13}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 13 will be added here.</p>
    </LessonLayout>
  )
}
