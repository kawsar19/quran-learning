import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 3 - Letter Combinations | 30 Days Quran Learning',
  description: 'Practice combining Arabic letters to form two-letter words. Day 3 of the 30 Days Quran Learning program.',
  openGraph: {
    title: 'Day 3 - Letter Combinations | 30 Days Quran Learning',
    description: 'Practice combining Arabic letters to form two-letter words. Day 3 of the 30 Days Quran Learning program.',
  },
}

const letterCombinations = [
  { bangla: 'বা + সীন', arabic: 'بس' },
  { bangla: 'ক্বফ + দাল', arabic: 'قد' },
  { bangla: 'হা + লাম', arabic: 'هل' },
  { bangla: 'মীম + নূন', arabic: 'من' },
  { bangla: 'লাম + মীম', arabic: 'لم' },
  { bangla: 'কাফ + নূন', arabic: 'كن' },
  { bangla: 'আইন + নূন', arabic: 'عن' },
  { bangla: 'ফা + ইয়া', arabic: 'في' },
  { bangla: 'আলিফ + নূন', arabic: 'أن' },
  { bangla: 'বা + লাম', arabic: 'بل' },
  { bangla: 'ক্বফ + লাম', arabic: 'قل' },
  { bangla: 'হা + ওয়াও', arabic: 'هو' },
  { bangla: 'যাল + ওয়াও', arabic: 'ذو' },
  { bangla: 'লাম + ওয়াও', arabic: 'لو' },
  { bangla: 'মীম + আলিফ', arabic: 'ما' },
  { bangla: 'ইয়া + আলিফ', arabic: 'يا' },
  { bangla: 'ক্বফ + মীম', arabic: 'قم' },
  { bangla: 'বা + কাফ', arabic: 'بك' },
  { bangla: 'কাফ + আলিফ', arabic: 'كا' },
  { bangla: 'আলিফ + যাল', arabic: 'إذ' },
  { bangla: 'সীন + আলিফ', arabic: 'سا' },
  { bangla: 'শীন + আলিফ', arabic: 'شا' },
  { bangla: 'সাদ + আলিফ', arabic: 'صا' },
  { bangla: 'দাদ + আলিফ', arabic: 'ضا' },
  { bangla: 'ত্বা + আলিফ', arabic: 'طا' },
  { bangla: 'য্বা + আলিফ', arabic: 'ظا' },
  { bangla: 'আইন + আলিফ', arabic: 'عا' },
  { bangla: 'গাইন + আলিফ', arabic: 'غا' },
  { bangla: 'ফা + আলিফ', arabic: 'فا' },
  { bangla: 'ক্বফ + আলিফ', arabic: 'قا' },
]

export default function Day3Page() {
  return (
    <LessonLayout
      dayNumber={3}
      title="Letter Combinations - অক্ষর সংযোগ"
      videoId="VIDEO_ID_HERE"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Joining Letters Together | অক্ষর একসাথে যুক্ত করা
      </h2>


    
      {/* Letter Combinations Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {letterCombinations.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-300 hover:scale-105"
          >
            {/* Number Badge */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 flex items-center justify-between">
              <span className="text-sm font-bold">{index + 1}</span>
              <span className="text-xs opacity-80">অক্ষর</span>
            </div>

            {/* Arabic Letter - Large */}
            <div
              className="py-6 px-4 text-center bg-gradient-to-b from-gray-50 to-white group-hover:from-emerald-50 group-hover:to-white transition-colors"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
            >
              <span className="text-5xl md:text-6xl text-gray-800 group-hover:text-emerald-700 transition-colors">
                {item.arabic}
              </span>
            </div>

            {/* Bangla Text */}
            <div className="bg-gray-50 group-hover:bg-emerald-50 px-3 py-3 text-center border-t border-gray-100 transition-colors">
              <p className="text-sm md:text-base font-medium text-gray-600 group-hover:text-emerald-700">
                {item.bangla}
              </p>
            </div>
          </div>
        ))}
      </div>

 

    

   
    </LessonLayout>
  )
}
