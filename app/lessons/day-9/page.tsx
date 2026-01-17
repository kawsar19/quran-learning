import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import MixedHarakatWords from '@/app/components/MixedHarakatWords'

export const metadata: Metadata = {
  title: 'Day 9 - Mixed Harakat Practice (মিশ্র হরকত অনুশীলন) | 30 Days Quran Learning',
  description: 'Practice reading Arabic words with mixed Fatha, Kasra, and Damma vowel marks together.',
  openGraph: {
    title: 'Day 9 - Mixed Harakat Practice (মিশ্র হরকত অনুশীলন) | 30 Days Quran Learning',
    description: 'Practice reading Arabic words with mixed Fatha, Kasra, and Damma vowel marks together.',
  },
}

export default function Day9Page() {
  return (
    <LessonLayout
      dayNumber={9}
      title="Mixed Harakat - মিশ্র হরকত অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">মিশ্র হরকত অনুশীলন</h2>
        <p className="text-purple-100">Mixed Harakat Practice | তিন হরকত একসাথে</p>
      </div>

      {/* Color Legend */}
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-gray-800 mb-3 text-center">রঙের নির্দেশিকা (Color Guide)</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-red-100 rounded-lg p-3 border-2 border-red-300">
            <div
              className="text-3xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              ـَ
            </div>
            <div className="text-red-600 font-bold text-sm">ফাতহা = আ</div>
          </div>
          <div className="bg-green-100 rounded-lg p-3 border-2 border-green-300">
            <div
              className="text-3xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              ـِ
            </div>
            <div className="text-green-600 font-bold text-sm">কাসরা = ই</div>
          </div>
          <div className="bg-blue-100 rounded-lg p-3 border-2 border-blue-300">
            <div
              className="text-3xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              ـُ
            </div>
            <div className="text-blue-600 font-bold text-sm">দাম্মা = উ</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
          <span className="text-xl">📖</span> কিভাবে পড়বেন
        </h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>• প্রতিটি অক্ষরের হরকত দেখুন (উপরে বা নিচে)</li>
          <li>• <span className="text-red-600 font-medium">লাল</span> = ফাতহা (আ), <span className="text-green-600 font-medium">সবুজ</span> = কাসরা (ই), <span className="text-blue-600 font-medium">নীল</span> = দাম্মা (উ)</li>
          <li>• প্রতিটি অক্ষর তার হরকত অনুযায়ী পড়ুন</li>
          <li>• যেমন: كَتِبَ = কা + তি + বা = কাতিবা</li>
        </ul>
      </div>

      {/* Challenge Box */}
      <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
          <span className="text-xl">🎯</span> আজকের চ্যালেঞ্জ
        </h3>
        <p className="text-gray-700 text-sm">
          নিচের শব্দগুলোতে বিভিন্ন হরকত মিশ্রিত আছে। রঙ দেখে চিনুন কোন হরকত, তারপর সঠিকভাবে পড়ুন।
          এই অনুশীলন কোরআন পড়ার প্রস্তুতির জন্য খুবই গুরুত্বপূর্ণ!
        </p>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
        মিশ্র হরকত শব্দ অনুশীলন
      </h3>

      {/* Mixed Harakat Words Component */}
      <MixedHarakatWords />

      {/* Pattern Recognition */}
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 p-5 rounded-xl mt-8">
        <h3 className="font-bold text-indigo-800 mb-3 text-center text-lg">📊 প্যাটার্ন চিনুন</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-700 mb-2">فَعِلَ (ফা-ই-লা) প্যাটার্ন</h4>
            <p className="text-sm text-gray-600">
              প্রথম অক্ষরে ফাতহা, দ্বিতীয়তে কাসরা, তৃতীয়তে ফাতহা।
              <br />
              যেমন: عَلِمَ، سَمِعَ، فَهِمَ
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-bold text-gray-700 mb-2">فَعَلَ (ফা-আ-লা) প্যাটার্ন</h4>
            <p className="text-sm text-gray-600">
              তিনটি অক্ষরেই ফাতহা।
              <br />
              যেমন: جَلَسَ، دَخَلَ، خَرَجَ
            </p>
          </div>
        </div>
      </div>

      {/* Practice Tips */}
      <div className="bg-teal-50 border border-teal-200 p-5 rounded-xl mt-6">
        <h3 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span> অনুশীলনের টিপস
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>প্রতিটি শব্দ ধীরে ধীরে অক্ষর ধরে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>হরকতের রঙ দেখে আগে চিনে নিন, তারপর পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>Day 6, 7, 8 এর শব্দগুলো আবার রিভিশন করুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-500 mt-1">✓</span>
            <span>পরের দিন তানউইন (নুনেশন) শিখবেন</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  )
}
