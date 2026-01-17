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
  // Row 1
  { bangla: 'বা + আলিফ', arabic: 'با' },
  { bangla: 'হা + বা', arabic: 'حب' },
  { bangla: 'জীম + হা', arabic: 'جح' },
  { bangla: 'জীম + লাম + আলিফ', arabic: 'جلا' },
  { bangla: 'মীম + আইন', arabic: 'مع' },
  { bangla: 'আইন + সাদ', arabic: 'عص' },
  // Row 2
  { bangla: 'য্বা + লাম', arabic: 'ظل' },
  { bangla: 'লাম + কাফ', arabic: 'لك' },
  { bangla: 'হা + ওয়াও', arabic: 'هو' },
  { bangla: 'লাম + হা', arabic: 'له' },
  { bangla: 'হা + মীম', arabic: 'حم' },
  { bangla: 'মীম + নূন', arabic: 'من' },
  // Row 3
  { bangla: 'লাম + আলিফ', arabic: 'لا' },
  { bangla: 'লাম + মীম + হা', arabic: 'لمح' },
  { bangla: 'হা + ইয়া', arabic: 'حي' },
  { bangla: 'ইয়া + সীন', arabic: 'يس' },
  { bangla: 'কাফ + বা', arabic: 'كب' },
  { bangla: 'ক্বফ + ওয়াও', arabic: 'قو' },
  // Row 4
  { bangla: 'হা + মীম', arabic: 'هم' },
  { bangla: 'বা + হা', arabic: 'به' },
  { bangla: 'ইয়া + হা', arabic: 'يه' },
  { bangla: 'তা + হা', arabic: 'ته' },
  { bangla: 'জীম + রা', arabic: 'جر' },
  { bangla: 'খা + যাল', arabic: 'خذ' },
  // Row 5
  { bangla: 'সাদ + আইন', arabic: 'صع' },
  { bangla: 'দাদ + গাইন', arabic: 'ضغ' },
  { bangla: 'দাদ + খা', arabic: 'ضخ' },
  { bangla: 'ইয়া + ফা', arabic: 'يف' },
  { bangla: 'লাম + হামযা', arabic: 'لؤ' },
  { bangla: 'জীম + হামযা', arabic: 'جئ' },
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