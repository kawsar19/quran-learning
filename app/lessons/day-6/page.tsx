import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import FathaWords from '@/app/components/FathaWords'
import KasraWords from '@/app/components/KasraWords'
import DammaWords from '@/app/components/DammaWords'
import MixedHarakatWords from '@/app/components/MixedHarakatWords'
import HarakatQuiz from '@/app/components/HarakatQuiz'

export const metadata: Metadata = {
  title: 'Day 6 - Mixed Harakat Practice (মিশ্র হরকত অনুশীলন) | 30 Days Quran Learning',
  description: 'Practice all three Harakat - Fatha, Kasra, Damma and mixed words with Bangla pronunciation.',
  openGraph: {
    title: 'Day 6 - Mixed Harakat Practice (মিশ্র হরকত অনুশীলন) | 30 Days Quran Learning',
    description: 'Practice all three Harakat - Fatha, Kasra, Damma and mixed words with Bangla pronunciation.',
  },
}

export default function Day6Page() {
  return (
    <LessonLayout
      dayNumber={6}
      title="Mixed Harakat Practice - মিশ্র হরকত অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">মিশ্র হরকত অনুশীলন</h2>
        <p className="text-purple-100">Mixed Harakat Practice | তিন হরকত একসাথে শেখা</p>
      </div>

      {/* Three Harakat Overview */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-red-600 mb-2"
            style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
          >
            ـَ
          </div>
          <h3 className="font-bold text-red-800 text-lg">ফাতহা (যবর)</h3>
          <p className="text-red-600 text-sm">Fatha = &quot;আ&quot; sound</p>
          <div className="mt-2 bg-red-100 rounded-lg p-2">
            <span className="text-2xl" style={{ fontFamily: "'Scheherazade New', serif" }}>بَ</span>
            <span className="mx-2">=</span>
            <span className="font-bold">বা</span>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-green-600 mb-2"
            style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
          >
            ـِ
          </div>
          <h3 className="font-bold text-green-800 text-lg">কাসরা (যের)</h3>
          <p className="text-green-600 text-sm">Kasra = &quot;ই&quot; sound</p>
          <div className="mt-2 bg-green-100 rounded-lg p-2">
            <span className="text-2xl" style={{ fontFamily: "'Scheherazade New', serif" }}>بِ</span>
            <span className="mx-2">=</span>
            <span className="font-bold">বি</span>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-blue-600 mb-2"
            style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
          >
            ـُ
          </div>
          <h3 className="font-bold text-blue-800 text-lg">দাম্মা (পেশ)</h3>
          <p className="text-blue-600 text-sm">Damma = &quot;উ&quot; sound</p>
          <div className="mt-2 bg-blue-100 rounded-lg p-2">
            <span className="text-2xl" style={{ fontFamily: "'Scheherazade New', serif" }}>بُ</span>
            <span className="mx-2">=</span>
            <span className="font-bold">বু</span>
          </div>
        </div>
      </div>

      {/* Color Legend */}
      <div className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-xl">
        <h3 className="font-bold text-gray-800 mb-3 text-center">রঙের নির্দেশিকা | Color Guide</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-red-500"></span>
            <span className="text-sm">ফাতহা (যবর) - Fatha</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-green-500"></span>
            <span className="text-sm">কাসরা (যের) - Kasra</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-blue-500"></span>
            <span className="text-sm">দাম্মা (পেশ) - Damma</span>
          </div>
        </div>
      </div>

      {/* Section 1: Fatha */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
          ফাতহা (যবর) অনুশীলন - Fatha Practice
        </h3>
        <div className="bg-red-50 border border-red-200 p-4 rounded-xl mb-4">
          <p className="text-gray-700 text-sm">
            ফাতহা অক্ষরের <strong>উপরে</strong> বসে এবং &quot;আ&quot; ধ্বনি তৈরি করে।
            যেমন: بَ = ব + আ = বা
          </p>
        </div>
        <FathaWords />
      </div>

      {/* Section 2: Kasra */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">২</span>
          কাসরা (যের) অনুশীলন - Kasra Practice
        </h3>
        <div className="bg-green-50 border border-green-200 p-4 rounded-xl mb-4">
          <p className="text-gray-700 text-sm">
            কাসরা অক্ষরের <strong>নিচে</strong> বসে এবং &quot;ই&quot; ধ্বনি তৈরি করে।
            যেমন: بِ = ব + ই = বি
          </p>
        </div>
        <KasraWords />
      </div>

      {/* Section 3: Damma */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">৩</span>
          দাম্মা (পেশ) অনুশীলন - Damma Practice
        </h3>
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mb-4">
          <p className="text-gray-700 text-sm">
            দাম্মা অক্ষরের <strong>উপরে</strong> ছোট &quot;و&quot; এর মত বসে এবং &quot;উ&quot; ধ্বনি তৈরি করে।
            যেমন: بُ = ব + উ = বু
          </p>
        </div>
        <DammaWords />
      </div>

      {/* Section 4: Mixed Harakat */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">৪</span>
          মিশ্র হরকত অনুশীলন - Mixed Harakat Practice
        </h3>
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl mb-4">
          <p className="text-gray-700 text-sm">
            এই শব্দগুলোতে তিন হরকত মিশ্রিত আছে। প্রতিটি অক্ষরের হরকত দেখে সঠিকভাবে পড়ুন।
            যেমন: كَتِبَ = কা + তি + বা = কাতিবা
          </p>
        </div>
        <MixedHarakatWords />
      </div>

      {/* Summary Box */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 p-5 rounded-xl mb-8">
        <h3 className="font-bold text-purple-800 mb-3 text-center text-lg">🎉 তিন হরকত সারাংশ</h3>
        <div className="grid grid-cols-3 gap-3 text-center mb-4">
          <div className="bg-white rounded-lg p-3">
            <div className="text-3xl mb-1" style={{ fontFamily: "'Scheherazade New', serif" }}>ـَ</div>
            <span className="text-red-500 font-bold">ফাতহা</span>
            <span className="text-gray-500 text-sm block">= আ (a)</span>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-3xl mb-1" style={{ fontFamily: "'Scheherazade New', serif" }}>ـِ</div>
            <span className="text-green-500 font-bold">কাসরা</span>
            <span className="text-gray-500 text-sm block">= ই (i)</span>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-3xl mb-1" style={{ fontFamily: "'Scheherazade New', serif" }}>ـُ</div>
            <span className="text-blue-500 font-bold">দাম্মা</span>
            <span className="text-gray-500 text-sm block">= উ (u)</span>
          </div>
        </div>
        <p className="text-center text-gray-600 text-sm">
          এই তিনটি হরকত দিয়ে আরবি পড়ার ভিত্তি তৈরি হয়ে গেছে!
        </p>
      </div>

      {/* Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">?</span>
          কুইজ - হরকত যাচাই করুন
        </h2>
        <p className="text-gray-600 mb-6">
          হরকত চিহ্নিত করুন এবং সঠিক উচ্চারণ নির্বাচন করুন। ২০টি প্রশ্নের উত্তর দিন।
        </p>
        <HarakatQuiz />
      </div>

      {/* Practice Tips */}
      <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-xl mt-8">
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
            <span>হরকতের অবস্থান দেখুন - উপরে নাকি নিচে</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>রঙ দেখে হরকত চিনুন, তারপর পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>পরের দিন তানউইন (নুনেশন) শিখবেন</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  )
}
