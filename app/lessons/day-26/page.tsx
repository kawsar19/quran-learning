import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 26 - 30 Days Quran Learning',
  description: 'Day 26 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 26 - 30 Days Quran Learning',
    description: 'Day 26 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day26Page() {
  return (
    <LessonLayout
      dayNumber={26}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 26 will be added here.</p>
    </LessonLayout>
  )
}
