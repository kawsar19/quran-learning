import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import ArabicAlphabetTable from '@/app/components/ArabicAlphabetTable'

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

   
    </LessonLayout>
  )
}
