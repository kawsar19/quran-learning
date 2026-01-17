import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import FathaWords from '@/app/components/FathaWords'

export const metadata: Metadata = {
  title: 'Day 6 - Fatha Practice (ফাতহা অনুশীলন) | 30 Days Quran Learning',
  description: 'Practice reading Arabic words with Fatha vowel marks. Learn common words like baba, mama, dada with Bangla pronunciation.',
  openGraph: {
    title: 'Day 6 - Fatha Practice (ফাতহা অনুশীলন) | 30 Days Quran Learning',
    description: 'Practice reading Arabic words with Fatha vowel marks. Learn common words like baba, mama, dada with Bangla pronunciation.',
  },
}

export default function Day6Page() {
  return (
    <LessonLayout
      dayNumber={6}
      title="Fatha Practice - ফাতহা অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">ফাতহা অনুশীলন</h2>
        <p className="text-red-100">Fatha Practice | যবর দিয়ে শব্দ পড়া</p>
      </div>

      {/* Fatha Reminder */}
      <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center mb-8">
        <div
          className="text-5xl text-red-600 mb-2"
          style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
        >
          ـَ
        </div>
        <h3 className="font-bold text-red-800 text-lg">ফাতহা (যবর) - Fatha</h3>
        <p className="text-gray-600 mt-2">
          অক্ষরের উপরে ছোট তির্যক রেখা বসে &quot;আ&quot; ধ্বনি তৈরি করে
        </p>
        <p className="text-gray-500 text-sm mt-1">
          A small diagonal line above the letter creates &quot;a&quot; sound
        </p>
      </div>

      {/* Instructions */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
          <span className="text-xl">📖</span> কিভাবে পড়বেন
        </h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>• প্রতিটি অক্ষরের উপরে ফাতহা (ـَ) চিহ্ন দেখুন</li>
          <li>• ফাতহা থাকলে অক্ষরের সাথে &quot;আ&quot; যোগ করে পড়ুন</li>
          <li>• যেমন: بَ = ব + আ = বা</li>
          <li>• নিচে অক্ষর বিশ্লেষণ দেখে practice করুন</li>
        </ul>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
        পরিচিত শব্দ দিয়ে অনুশীলন
      </h3>
      <p className="text-gray-600 mb-6">
        নিচের শব্দগুলো বাংলা শব্দের মতো শোনায়। এগুলো পড়ে ফাতহা বুঝতে সহজ হবে।
      </p>

      {/* Fatha Words Component */}
      <FathaWords />

      {/* Practice Tips */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl mt-8">
        <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span> অনুশীলনের টিপস
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-1">✓</span>
            <span>প্রতিটি শব্দ ৩ বার করে জোরে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-1">✓</span>
            <span>Letter breakdown দেখে প্রতিটি অক্ষর আলাদা করে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-1">✓</span>
            <span>বাংলা উচ্চারণ মিলিয়ে দেখুন সঠিক হচ্ছে কিনা</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-500 mt-1">✓</span>
            <span>পরের দিন কাসরা (যের) শিখবেন</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  )
}
