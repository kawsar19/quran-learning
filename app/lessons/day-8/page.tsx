import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 8 - 30 Days Quran Learning',
  description: 'Day 8 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 8 - 30 Days Quran Learning',
    description: 'Day 8 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day8Page() {
  return (
    <LessonLayout
      dayNumber={8}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 8 will be added here.</p>
    </LessonLayout>
  )
}
