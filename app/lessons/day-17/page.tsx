import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 17 - 30 Days Quran Learning',
  description: 'Day 17 lesson of the 30 Days Quran Learning program',
  openGraph: {
    title: 'Day 17 - 30 Days Quran Learning',
    description: 'Day 17 lesson of the 30 Days Quran Learning program',
  },
}

export default function Day17Page() {
  return (
    <LessonLayout
      dayNumber={17}
      title="Lesson Title"
      videoId="VIDEO_ID_HERE"
    >
      {/* Lesson content goes here */}
      <p>Lesson content for Day 17 will be added here.</p>
    </LessonLayout>
  )
}
