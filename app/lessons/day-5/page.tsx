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
      title="Harakat (Vowel Marks) - হরকত (স্বরচিহ্ন)"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header with Glassmorphism */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl mb-12">
        <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">হরকত - Harakat</h2>
            <p className="text-indigo-100 text-lg md:text-xl font-medium opacity-90">আরবি স্বরচিহ্ন ও সঠিক উচ্চারণ পদ্ধতি</p>
        </div>
        {/* Abstract background shapes for premium look */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </div>

      {/* Goal Section */}
      <div className="bg-white border border-indigo-50 rounded-3xl p-8 mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg text-lg">💡</span>
          আজকের পাঠ
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          আরবি ভাষার প্রাণ হলো হরকত। যবর, যের এবং পেশ—এই তিনটি চিহ্ন ব্যবহার করে আমরা অক্ষরকে শব্দে রূপান্তর করি। 
          আজ আমরা শিখবো কিভাবে প্রতিটি অক্ষরের সাথে এই হরকতগুলো যুক্ত হয়ে নতুন ধ্বনি তৈরি করে। 
          মনোযোগ দিয়ে প্রতিটি অক্ষরের উচ্চারণ শুনুন এবং অনুশীলন করুন।
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

      {/* Pro Tip Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-1 rounded-3xl mb-20 shadow-xl">
        <div className="bg-white rounded-[1.4rem] p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="text-6xl">🔥</div>
                <div className="flex-1">
                    <h4 className="text-2xl font-black text-gray-800 mb-2">প্রো টিপ (Pro Tip)</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        হরকত পড়ার সময় খেয়াল রাখবেন উচ্চারণ যেন খুব বেশি লম্বা না হয়। 
                        হরকত এক আলিফ পরিমাণ টানার প্রয়োজন নেই, এটি দ্রুত ও স্পষ্ট উচ্চারণ করতে হয়। 
                        সঠিক উচ্চারণ শিখতে নিচের কুইজটি দিয়ে নিজেকে যাচাই করুন।
                    </p>
                </div>
            </div>
        </div>
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

      {/* Final Encouragement */}
      <div className="mt-24 text-center py-12 px-6 bg-gray-50 rounded-[3rem] border border-gray-100">
          <div className="text-4xl mb-4">⭐</div>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.3em] mb-2 font-mono">End of Lesson</p>
          <h3 className="text-2xl font-black text-gray-800">আপনি এগিয়ে যাচ্ছেন!</h3>
          <p className="text-gray-500 mt-2">পরবর্তী পাঠে আমরা একই সাথে একাধিক হরকতের ব্যবহার শিখবো।</p>
      </div>
    </LessonLayout>
  )
}
