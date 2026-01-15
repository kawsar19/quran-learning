import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 29 - 30 Days Quran Learning',
  description: 'Day 29 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 29 - 30 Days Quran Learning',
    description: 'Day 29 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day29Page() {
  return (
    <LessonLayout
      dayNumber={29}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 29 will be added here.</p>
    </LessonLayout>
  )
}
