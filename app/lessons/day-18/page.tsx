import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 18 - 30 Days Quran Learning',
  description: 'Day 18 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 18 - 30 Days Quran Learning',
    description: 'Day 18 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day18Page() {
  return (
    <LessonLayout
      dayNumber={18}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 18 will be added here.</p>
    </LessonLayout>
  )
}
