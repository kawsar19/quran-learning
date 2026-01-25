import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import HarakatLetters from '@/app/components/HarakatLetters'
import HarakatQuiz from '@/app/components/HarakatQuiz'

export const metadata: Metadata = {
  title: 'Day 5 - Harakat (Vowel Marks) | 30 Days Quran Learning',
  description: 'Learn Arabic vowel marks - Fatha, Kasra, and Damma with Bangla pronunciation. Day 5 of the 30 Days Quran Learning program.',
}

export default function Day5Page() {
  return (
    <LessonLayout
      dayNumber={5}
      title=" হরকত"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header with Glassmorphism */}
     

      {/* Goal Section */}
      <div className="bg-white border border-indigo-50 rounded-3xl p-8 mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg text-lg">💡</span>
          হরকত কাকে বলে?
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          এক যবর, এক যের, এক পেশকে হরকত বলে। হরকতের উচ্চারণ তাড়াতাড়ি পড়িতে হয়।
        </p>
      </div>

      {/* Three Harakat Explanation Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12" dir='rtl'>
        {/* Fatha */}
        <div className="group bg-white hover:bg-red-50/50 border border-gray-100 hover:border-red-200 rounded-[2rem] p-8 text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
          <div className="w-20 h-20 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-5xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform shadow-inner" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>
            ـَ
          </div>
          <h3 className="font-black text-gray-800 text-xl mb-1">ফাতহা (যবর)</h3>
          <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-4">Fatha</p>
          <div className="h-px w-12 bg-gray-100 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm leading-relaxed">অক্ষরের উপরে বসে <strong>&quot;আ&quot;</strong> ধ্বনি তৈরি করে।</p>
        </div>

        {/* Kasra */}
        <div className="group bg-white hover:bg-emerald-50/50 border border-gray-100 hover:border-emerald-200 rounded-[2rem] p-8 text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-5xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform shadow-inner" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>
            ـِ
          </div>
          <h3 className="font-black text-gray-800 text-xl mb-1">কাসরা (যের)</h3>
          <p className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-4">Kasra</p>
          <div className="h-px w-12 bg-gray-100 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm leading-relaxed">অক্ষরের নিচে বসে <strong>&quot;ই&quot;</strong> ধ্বনি তৈরি করে।</p>
        </div>

        {/* Damma */}
        <div className="group bg-white hover:bg-blue-50/50 border border-gray-100 hover:border-blue-200 rounded-[2rem] p-8 text-center transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-5xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform shadow-inner" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>
            ـُ
          </div>
          <h3 className="font-black text-gray-800 text-xl mb-1">দাম্মা (পেশ)</h3>
          <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4">Damma</p>
          <div className="h-px w-12 bg-gray-100 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm leading-relaxed">অক্ষরের উপরে বসে <strong>&quot;উ&quot;</strong> ধ্বনি তৈরি করে।</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-800">অক্ষর ও উচ্চারণ অনুশীলন</h3>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                Interactive Lesson
            </div>
        </div>
        <HarakatLetters />
      </div>

   
      {/* Quiz Section with Premium Header */}
      <div className="mt-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">স্ব-মূল্যায়ন কুইজ</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-medium text-lg">
                আপনি হরকত কতটা শিখতে পেরেছেন তা যাচাই করতে নিচের ২০টি প্রশ্নের সঠিক উত্তর দিন।
            </p>
        </div>
        
        <HarakatQuiz />
      </div>

   
    </LessonLayout>
  )
}
