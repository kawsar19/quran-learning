import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import ArabicAlphabetShapes from '@/app/components/ArabicAlphabetShapes'

export const metadata: Metadata = {
  title: 'Day 2 - Arabic Letter Shapes | 30 Days Quran Learning',
  description: 'Learn the different shapes of Arabic letters - Independent, Initial, Medial, and Final forms. Day 2 of the 30 Days Quran Learning program.',
  openGraph: {
    title: 'Day 2 - Arabic Letter Shapes | 30 Days Quran Learning',
    description: 'Learn the different shapes of Arabic letters - Independent, Initial, Medial, and Final forms. Day 2 of the 30 Days Quran Learning program.',
  },
}

export default function Day2Page() {
  return (
    <LessonLayout
      dayNumber={2}
      title="Arabic Letter Shapes - আরবি অক্ষরের রূপ"
      videoId="VIDEO_ID_HERE"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Understanding Letter Shapes | অক্ষরের রূপ বোঝা
      </h2>

    


      <ArabicAlphabetShapes />

    
    </LessonLayout>
  )
}
