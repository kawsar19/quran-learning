import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import ArabicAlphabetShapes from '@/app/components/ArabicAlphabetShapes'
import ArabicShapesQuiz from '@/app/components/ArabicShapesQuiz'

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

      {/* Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">?</span>
          কুইজ - অক্ষরের রূপ চিনুন
        </h2>
        <p className="text-gray-600 mb-6">
          আরবি অক্ষর দেখে কোন রূপে আছে তা বলুন - স্বতন্ত্র, শুরু, মধ্য নাকি শেষ। ২০টি প্রশ্নের উত্তর দিন।
        </p>
        <ArabicShapesQuiz />
      </div>
    </LessonLayout>
  )
}
