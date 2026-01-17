import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import DammaWords from '@/app/components/DammaWords'

export const metadata: Metadata = {
  title: 'Day 8 - Damma Practice (দাম্মা অনুশীলন) | 30 Days Quran Learning',
  description: 'Practice reading Arabic words with Damma vowel marks. Learn common words with Bangla pronunciation.',
  openGraph: {
    title: 'Day 8 - Damma Practice (দাম্মা অনুশীলন) | 30 Days Quran Learning',
    description: 'Practice reading Arabic words with Damma vowel marks. Learn common words with Bangla pronunciation.',
  },
}

export default function Day8Page() {
  return (
    <LessonLayout
      dayNumber={8}
      title="Damma Practice - দাম্মা অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">দাম্মা অনুশীলন</h2>
        <p className="text-blue-100">Damma Practice | পেশ দিয়ে শব্দ পড়া</p>
      </div>

      {/* Damma Reminder */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center mb-8">
        <div
          className="text-5xl text-blue-600 mb-2"
          style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
        >
          ـُ
        </div>
        <h3 className="font-bold text-blue-800 text-lg">দাম্মা (পেশ) - Damma</h3>
        <p className="text-gray-600 mt-2">
          অক্ষরের উপরে ছোট ওয়াও (و) এর মত চিহ্ন বসে &quot;উ&quot; ধ্বনি তৈরি করে
        </p>
        <p className="text-gray-500 text-sm mt-1">
          A small curl above the letter creates &quot;u&quot; sound
        </p>
      </div>

      {/* All Three Harakat Comparison */}
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-amber-800 mb-3 text-center">তিন হরকত তুলনা</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <div
              className="text-3xl md:text-4xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              بَ
            </div>
            <div className="text-red-600 font-bold">বা</div>
            <div className="text-xs text-gray-500">ফাতহা</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <div
              className="text-3xl md:text-4xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              بِ
            </div>
            <div className="text-green-600 font-bold">বি</div>
            <div className="text-xs text-gray-500">কাসরা</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div
              className="text-3xl md:text-4xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              بُ
            </div>
            <div className="text-blue-600 font-bold">বু</div>
            <div className="text-xs text-gray-500">দাম্মা</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
          <span className="text-xl">📖</span> কিভাবে পড়বেন
        </h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>• প্রতিটি অক্ষরের উপরে দাম্মা (ـُ) চিহ্ন দেখুন</li>
          <li>• দাম্মা থাকলে অক্ষরের সাথে &quot;উ&quot; যোগ করে পড়ুন</li>
          <li>• যেমন: بُ = ব + উ = বু</li>
          <li>• নিচে অক্ষর বিশ্লেষণ দেখে practice করুন</li>
        </ul>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
        দাম্মা দিয়ে শব্দ অনুশীলন
      </h3>
      <p className="text-gray-600 mb-6">
        নিচের শব্দগুলোতে সব অক্ষরে দাম্মা আছে। প্রতিটি অক্ষর &quot;উ&quot; দিয়ে পড়ুন।
      </p>

      {/* Damma Words Component */}
      <DammaWords />

      {/* Summary Box */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 p-5 rounded-xl mt-8">
        <h3 className="font-bold text-purple-800 mb-3 text-center text-lg">🎉 অভিনন্দন! তিন হরকত শেখা সম্পন্ন</h3>
        <div className="grid grid-cols-3 gap-3 text-center mb-4">
          <div className="bg-white rounded-lg p-2">
            <span className="text-red-500 font-bold">ফাতহা</span>
            <span className="text-gray-500 text-sm block">= আ</span>
          </div>
          <div className="bg-white rounded-lg p-2">
            <span className="text-green-500 font-bold">কাসরা</span>
            <span className="text-gray-500 text-sm block">= ই</span>
          </div>
          <div className="bg-white rounded-lg p-2">
            <span className="text-blue-500 font-bold">দাম্মা</span>
            <span className="text-gray-500 text-sm block">= উ</span>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm">
          এই তিনটি হরকত দিয়ে আরবি পড়ার ভিত্তি তৈরি হয়ে গেছে!
        </p>
      </div>

      {/* Practice Tips */}
      <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-xl mt-6">
        <h3 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span> অনুশীলনের টিপস
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>প্রতিটি শব্দ ৩ বার করে জোরে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>দাম্মা দেখতে ছোট &quot;و&quot; এর মত - এটা মনে রাখুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>Day 6, 7, 8 এর শব্দগুলো আবার পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>পরের দিন তিন হরকত মিশ্রিত শব্দ শিখবেন</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  )
}
