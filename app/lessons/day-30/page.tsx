import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 30 - 30 Days Quran Learning',
  description: 'Day 30 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 30 - 30 Days Quran Learning',
    description: 'Day 30 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day30Page() {
  return (
    <LessonLayout
      dayNumber={30}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 30 will be added here.</p>
    </LessonLayout>
  )
}
