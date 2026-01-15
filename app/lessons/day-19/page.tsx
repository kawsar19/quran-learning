import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 19 - 30 Days Quran Learning',
  description: 'Day 19 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 19 - 30 Days Quran Learning',
    description: 'Day 19 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day19Page() {
  return (
    <LessonLayout
      dayNumber={19}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 19 will be added here.</p>
    </LessonLayout>
  )
}
