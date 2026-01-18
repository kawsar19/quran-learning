import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Lessons - 30 Days Quran Learning',
  description: 'Browse all 30 days of Quran learning lessons. Start your journey today.',
}

const lessonData = [
  { day: 1, title: 'আরবি হরফ পরিচিতি', desc: 'আরবি ২৯টি হরফের শুদ্ধ উচ্চারণ ও পরিচয়।' },
  { day: 2, title: 'হরফের বিভিন্ন রূপ', desc: 'শুরু, মধ্য ও শেষে হরফের আকৃতি পরিবর্তন।' },
  { day: 3, title: 'যুক্তাক্ষর ও প্র্যাকটিস', desc: 'একাধিক হরফ একসাথে যুক্ত হয়ে পড়ার নিয়ম।' },
  { day: 4, title: 'মাকরাজ (উচ্চারণ স্থান)', desc: '২৭টি মাকরাজ ও হরফ উচ্চারণের সঠিক স্থান।' },
  { day: 5, title: 'হরকত (যবর, যের, পেশ)', desc: 'আরবি স্বরচিহ্ন বা হরকতের ব্যবহার ও নিয়ম।' },
  { day: 6, title: 'তানউইন পরিচয়', desc: 'দুই যবর, দুই যের ও দুই পেশের ব্যবহার।' },
  { day: 7, title: 'তানউইন প্র্যাকটিস', desc: 'তানউইনযুক্ত শব্দের বিস্তারিত অনুশীলন।' },
  { day: 8, title: 'হরকত ও তানউইন মাস্ক', desc: 'হরকত ও তানউইনের সমন্বিত অনুশীলন।' },
  { day: 9, title: 'সুকুন বা জজম', desc: 'সুকুন বা জজম এর নিয়ম ও উচ্চারণ পদ্ধতি।' },
]

export default function LessonsPage() {
  const totalDays = 30
  const days = Array.from({ length: totalDays }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-16 pb-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">কুরআন শিক্ষার ৩০ দিন</h1>
          <p className="text-emerald-100 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            সহজ উপায়ে কুরআন শেখার একটি পূর্ণাঙ্গ কোর্স। প্রতিটি দিন ধাপে ধাপে নতুন কিছু শিখুন।
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="container mx-auto max-w-6xl px-4 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.map((day) => {
            const lesson = lessonData.find(l => l.day === day)
            return (
              <Link
                key={day}
                href={`/lessons/day-${day}`}
                className="group relative bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden active:scale-[0.98]"
              >
                {/* Background Number Decal */}
                <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 group-hover:text-emerald-50 transition-colors pointer-events-none">
                  {day}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      {day}
                    </div>
                    <div>
                      <span className="block text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-none mb-1">Lesson</span>
                      <h3 className="text-xl font-bold text-gray-800 leading-tight">
                        {lesson?.title || `Day ${day} Lesson`}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {lesson?.desc || 'এই দিনের পাঠে আমরা নতুন কিছু গুরুত্বপূর্ণ নিয়ম শিখবো ইনশাআল্লাহ।'}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      শুরু করুন
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    
                    {day <= 9 && (
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto max-w-6xl px-4 mt-16 text-center">
          <p className="text-gray-400 font-medium italic">
            &ldquo;তোমাদের মধ্যে সেই সর্বোত্তম, যে কুরআন শেখে এবং অন্যকে শেখায়।&rdquo;
          </p>
      </div>
    </div>
  )
}
