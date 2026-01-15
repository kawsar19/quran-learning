import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 23 - 30 Days Quran Learning',
  description: 'Day 23 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 23 - 30 Days Quran Learning',
    description: 'Day 23 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day23Page() {
  return (
    <LessonLayout
      dayNumber={23}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 23 will be added here.</p>
    </LessonLayout>
  )
}
