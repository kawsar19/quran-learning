import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Lessons - 30 Days Quran Learning',
  description: 'Browse all 30 days of Quran learning lessons. Start your journey today.',
}

const lessonData = [
  { day: 1, title: 'হরফ পরিচিতি', desc: 'আরবি ২৯টি হরফের শুদ্ধ উচ্চারণ ও পরিচয়।' },
  { day: 2, title: 'হরফের বিভিন্ন রূপ', desc: 'শুরু, মধ্য ও শেষে হরফের আকৃতি পরিবর্তন।' },
  { day: 3, title: 'যুক্তাক্ষর ও প্র্যাকটিস', desc: 'একাধিক হরফ একসাথে যুক্ত হয়ে পড়ার নিয়ম।' },
  { day: 4, title: 'মাকরাজ (উচ্চারণ স্থান)', desc: '২৭টি মাকরাজ ও হরফ উচ্চারণের সঠিক স্থান।' },
  { day: 5, title: 'হরকত (যবর, যের, পেশ)', desc: 'আরবি স্বরচিহ্ন বা হরকতের ব্যবহার ও নিয়ম।' },
  { day: 6, title: 'তানউইন পরিচয়', desc: 'দুই যবর, দুই যের ও দুই পেশের ব্যবহার।' },
  { day: 7, title: 'তানউইন প্র্যাকটিস', desc: 'তানউইনযুক্ত শব্দের বিস্তারিত অনুশীলন।' },
  { day: 8, title: 'হরকত ও তানউইন মাস্ক', desc: 'হরকত ও তানউইনের সমন্বিত অনুশীলন।' },
  { day: 9, title: 'সুকুন বা জজম', desc: 'সুকুন বা জজম এর নিয়ম ও উচ্চারণ পদ্ধতি।' },
]

export default function LessonsPage() {
  const totalDays = 30
  const days = Array.from({ length: totalDays }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-20 pb-28 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">কুরআন শিক্ষার ৩০ দিন</h1>
          <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-wide">
            সহজ উপায়ে কুরআন শেখার একটি পূর্ণাঙ্গ কোর্স। প্রতিটি দিন ধাপে ধাপে নতুন কিছু শিখুন।
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 -mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {days.map((day) => {
            const lesson = lessonData.find(l => l.day === day)
            return (
              <Link
                key={day}
                href={`/lessons/day-${day}`}
                className="group relative bg-white rounded-3xl p-7 shadow-md border-2 border-gray-100 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden active:scale-[0.98]"
              >
                {/* Background Number Decal */}
                <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 group-hover:text-emerald-50 transition-colors pointer-events-none">
                  {day}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      {day}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-emerald-500 uppercase tracking-widest leading-none mb-1.5">Lesson</span>
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
                        {lesson?.title || `Day ${day} Lesson`}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-7 line-clamp-2 tracking-wide">
                    {lesson?.desc || 'এই দিনের পাঠে আমরা নতুন কিছু গুরুত্বপূর্ণ নিয়ম শিখবো ইনশাআল্লাহ।'}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      শুরু করুন
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    
                    {day <= 9 && (
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 mt-20 text-center">
          <p className="text-gray-500 text-lg font-medium italic leading-relaxed tracking-wide">
            &ldquo;তোমাদের মধ্যে সেই সর্বোত্তম, যে কুরআন শেখে এবং অন্যকে শেখায়।&rdquo;
          </p>
      </div>
    </div>
  )
}
