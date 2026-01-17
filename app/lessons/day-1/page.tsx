import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import ArabicAlphabetTable from '@/app/components/ArabicAlphabetTable'
import AlphabetQuiz from '@/app/components/AlphabetQuiz'

export const metadata: Metadata = {
  title: 'Day 1 - Arabic Alphabet | 30 Days Quran Learning',
  description: 'Learn the Arabic alphabet with audio pronunciation. Day 1 of the 30 Days Quran Learning program.',
  openGraph: {
    title: 'Day 1 - Arabic Alphabet | 30 Days Quran Learning',
    description: 'Learn the Arabic alphabet with audio pronunciation. Day 1 of the 30 Days Quran Learning program.',
  },
}

export default function Day1Page() {
  return (
    <LessonLayout
      dayNumber={1}
      title="Introduction to the Arabic Alphabet - আরবি বর্ণমালা পরিচিতি"
      loomId="47bc76adf2e74c6baf572e0124736875"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        The Arabic Alphabet | আরবি বর্ণমালা
      </h2>

      <div className="space-y-3 mb-6">
      
        <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
          আরবি বর্ণমালায় ২৮টি অক্ষর রয়েছে। ইংরেজির বিপরীতে, আরবি ডান থেকে বামে লেখা হয়।
          প্রতিটি অক্ষরের একটি নিজস্ব উচ্চারণ আছে। প্রতিটি অক্ষরের উচ্চারণ শুনতে &quot;Play&quot; বাটনে ক্লিক করুন।
        </p>
      </div>

   

      <ArabicAlphabetTable />

      {/* Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">?</span>
          কুইজ - নিজেকে যাচাই করুন
        </h2>
        <p className="text-gray-600 mb-6">
          আরবি অক্ষর দেখে সঠিক বাংলা নাম নির্বাচন করুন। ৩০টি প্রশ্নের উত্তর দিন।
        </p>
        <AlphabetQuiz />
      </div>
    </LessonLayout>
  )
}
