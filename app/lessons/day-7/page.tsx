import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import KasraWords from '@/app/components/KasraWords'

export const metadata: Metadata = {
  title: 'Day 7 - Kasra Practice (কাসরা অনুশীলন) | 30 Days Quran Learning',
  description: 'Practice reading Arabic words with Kasra vowel marks. Learn common words with Bangla pronunciation.',
  openGraph: {
    title: 'Day 7 - Kasra Practice (কাসরা অনুশীলন) | 30 Days Quran Learning',
    description: 'Practice reading Arabic words with Kasra vowel marks. Learn common words with Bangla pronunciation.',
  },
}

export default function Day7Page() {
  return (
    <LessonLayout
      dayNumber={7}
      title="Kasra Practice - কাসরা অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">কাসরা অনুশীলন</h2>
        <p className="text-green-100">Kasra Practice | যের দিয়ে শব্দ পড়া</p>
      </div>

      {/* Kasra Reminder */}
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 text-center mb-8">
        <div
          className="text-5xl text-green-600 mb-2"
          style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
        >
          ـِ
        </div>
        <h3 className="font-bold text-green-800 text-lg">কাসরা (যের) - Kasra</h3>
        <p className="text-gray-600 mt-2">
          অক্ষরের নিচে ছোট তির্যক রেখা বসে &quot;ই&quot; ধ্বনি তৈরি করে
        </p>
        <p className="text-gray-500 text-sm mt-1">
          A small diagonal line below the letter creates &quot;i&quot; sound
        </p>
      </div>

      {/* Comparison with Fatha */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-amber-800 mb-3 text-center">ফাতহা vs কাসরা তুলনা</h3>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <div
              className="text-4xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              بَ
            </div>
            <div className="text-red-600 font-bold">বা</div>
            <div className="text-xs text-gray-500">ফাতহা (উপরে)</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <div
              className="text-4xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              بِ
            </div>
            <div className="text-green-600 font-bold">বি</div>
            <div className="text-xs text-gray-500">কাসরা (নিচে)</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
          <span className="text-xl">📖</span> কিভাবে পড়বেন
        </h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>• প্রতিটি অক্ষরের নিচে কাসরা (ـِ) চিহ্ন দেখুন</li>
          <li>• কাসরা থাকলে অক্ষরের সাথে &quot;ই&quot; যোগ করে পড়ুন</li>
          <li>• যেমন: بِ = ব + ই = বি</li>
          <li>• নিচে অক্ষর বিশ্লেষণ দেখে practice করুন</li>
        </ul>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
        কাসরা দিয়ে শব্দ অনুশীলন
      </h3>
      <p className="text-gray-600 mb-6">
        নিচের শব্দগুলোতে সব অক্ষরে কাসরা আছে। প্রতিটি অক্ষর &quot;ই&quot; দিয়ে পড়ুন।
      </p>

      {/* Kasra Words Component */}
      <KasraWords />

      {/* Practice Tips */}
      <div className="bg-teal-50 border border-teal-200 p-5 rounded-xl mt-8">
        <h3 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span> অনুশীলনের টিপস
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>প্রতিটি শব্দ ৩ বার করে জোরে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>কাসরা সবসময় অক্ষরের নিচে থাকে - এটা মনে রাখুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>ফাতহা (আ) ও কাসরা (ই) এর পার্থক্য বুঝুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>পরের দিন দাম্মা (পেশ) শিখবেন</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  )
}
