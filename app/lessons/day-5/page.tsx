import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import HarakatLetters from '@/app/components/HarakatLetters'
import HarakatQuiz from '@/app/components/HarakatQuiz'

export const metadata: Metadata = {
  title: 'Day 5 - Harakat (Vowel Marks) | 30 Days Quran Learning',
  description: 'Learn Arabic vowel marks - Fatha, Kasra, and Damma with Bangla pronunciation. Day 5 of the 30 Days Quran Learning program.',
  openGraph: {
    title: 'Day 5 - Harakat (Vowel Marks) | 30 Days Quran Learning',
    description: 'Learn Arabic vowel marks - Fatha, Kasra, and Damma with Bangla pronunciation. Day 5 of the 30 Days Quran Learning program.',
  },
}

export default function Day5Page() {
  return (
    <LessonLayout
      dayNumber={5}
      title="Harakat (Vowel Marks) - হরকত (স্বরচিহ্ন)"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">হরকত - Harakat</h2>
        <p className="text-purple-100">Arabic Vowel Marks | আরবি স্বরচিহ্ন</p>
      </div>

     

      {/* Three Harakat Explanation */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-red-600 mb-2"
            style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
          >
            ـَ
          </div>
          <h3 className="font-bold text-red-800 text-lg">ফাতহা (যবর)</h3>
          <p className="text-red-600 text-sm">Fatha (Zabar)</p>
          <p className="text-gray-600 mt-2 text-sm">
            অক্ষরের উপরে বসে<br />
            &quot;আ&quot; ধ্বনি তৈরি করে
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Placed above the letter<br />
            Creates &quot;a&quot; sound
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-green-600 mb-2"
            style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
          >
            ـِ
          </div>
          <h3 className="font-bold text-green-800 text-lg">কাসরা (যের)</h3>
          <p className="text-green-600 text-sm">Kasra (Zer)</p>
          <p className="text-gray-600 mt-2 text-sm">
            অক্ষরের নিচে বসে<br />
            &quot;ই&quot; ধ্বনি তৈরি করে
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Placed below the letter<br />
            Creates &quot;i&quot; sound
          </p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-blue-600 mb-2"
            style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
          >
            ـُ
          </div>
          <h3 className="font-bold text-blue-800 text-lg">দাম্মা (পেশ)</h3>
          <p className="text-blue-600 text-sm">Damma (Pesh)</p>
          <p className="text-gray-600 mt-2 text-sm">
            অক্ষরের উপরে বসে<br />
            &quot;উ&quot; ধ্বনি তৈরি করে
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Placed above the letter<br />
            Creates &quot;u&quot; sound
          </p>
        </div>
      </div>

      {/* Color Legend */}
      <div className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-xl">
        <h3 className="font-bold text-gray-800 mb-3 text-center">Color Guide | রঙের নির্দেশিকা</h3>
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

      {/* All Letters with Harakat */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        All Letters with Harakat | সকল অক্ষর হরকতসহ
      </h3>

      <HarakatLetters />

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
    </LessonLayout>
  )
}
