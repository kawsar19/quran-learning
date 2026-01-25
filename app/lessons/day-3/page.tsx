import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import LetterCombinationsQuiz from '@/app/components/LetterCombinationsQuiz'

export const metadata: Metadata = {
  title: 'Day 3 - Letter Combinations | 30 Days Quran Learning',
  description: 'Practice combining Arabic letters to form two-letter words. Day 3 of the 30 Days Quran Learning program.',
  openGraph: {
    title: 'Day 3 - Letter Combinations | 30 Days Quran Learning',
    description: 'Practice combining Arabic letters to form two-letter words. Day 3 of the 30 Days Quran Learning program.',
  },
}

const letterCombinations = [
  // Row 1 (শুধু হরফের রূপ)
  { bangla: 'বা (শুরুর রূপ)', arabic: 'بـ' },
  { bangla: 'জীম (শুরুর রূপ)', arabic: 'جـ' },
  { bangla: 'ফা (শুরুর রূপ)', arabic: 'فـ' },
  { bangla: 'সাদ (শুরুর রূপ)', arabic: 'صـ' },
  { bangla: 'মীম (শুরুর রূপ)', arabic: 'مـ' },
  { bangla: 'হা (শুরুর রূপ)', arabic: 'هـ' },

  // Row 2
  { bangla: 'কাফ (শুরুর রূপ)', arabic: 'كـ' },
  { bangla: 'শীন (শুরুর রূপ)', arabic: 'شـ' },
  { bangla: 'আইন (শুরুর রূপ)', arabic: 'عـ' },
  { bangla: 'লাম (শুরুর রূপ)', arabic: 'لـ' },
  { bangla: 'বা (শুরুর রূপ)', arabic: 'بـ' },
  { bangla: 'গাইন (শুরুর রূপ)', arabic: 'غـ' },

  // Row 3
  { bangla: 'লাম + আলিফ', arabic: 'لا' },
  { bangla: 'ক্বাফ (শুরুর রূপ)', arabic: 'قـ' },
  { bangla: 'সীন (শুরুর রূপ)', arabic: 'سـ' },
  { bangla: 'হা (শুরুর রূপ)', arabic: 'حـ' },
  { bangla: 'তা (শুরুর রূপ)', arabic: 'تـ' },
  { bangla: 'মীম (শুরুর রূপ)', arabic: 'مـ' },

  // Row 4
  { bangla: 'দাদ (শুরুর রূপ)', arabic: 'ضـ' },
  { bangla: 'খা (শুরুর রূপ)', arabic: 'خـ' },
  { bangla: 'জীম (শুরুর রূপ)', arabic: 'جـ' },
  { bangla: 'ইয়া (শুরুর রূপ)', arabic: 'يـ' },
  { bangla: 'ছা (শুরুর রূপ)', arabic: 'ثـ' },
  { bangla: 'হা (শুরুর রূপ)', arabic: 'هـ' },

  // Row 5 (মাঝের রূপ)
  { bangla: 'হা (মাঝের রূপ)', arabic: 'ـهـ' },
  { bangla: 'দাদ + গাইন', arabic: 'ضغ' },
  { bangla: 'গাইন (মাঝের রূপ)', arabic: 'ـغـ' },
  { bangla: 'ফা (মাঝের রূপ)', arabic: 'ـفـ' },
  { bangla: 'নূন (মাঝের রূপ)', arabic: 'ـنـ' },
  { bangla: 'আইন (মাঝের রূপ)', arabic: 'ـعـ' },

  // শব্দ (Words)
  { bangla: 'হা + বা', arabic: 'حب' },
  { bangla: 'হা + জীম', arabic: 'حج' },
  { bangla: 'জীম + লাম + দাল', arabic: 'جلد' },
  { bangla: 'মীম + আইন', arabic: 'مع' },
  { bangla: 'আইন + সাদ', arabic: 'عص' },

  { bangla: 'যা + লাম', arabic: 'ظل' },
  { bangla: 'লাম + কাফ', arabic: 'لك' },
  { bangla: 'হা + ওয়াও', arabic: 'هو' },
  { bangla: 'লাম + হা', arabic: 'له' },
  { bangla: 'হা + মীম', arabic: 'حم' },
  { bangla: 'মীম + নূন', arabic: 'من' },

  { bangla: 'লাম + আলিফ', arabic: 'لا' },
  { bangla: 'লাম + কাফ', arabic: 'لك' },
  { bangla: 'কাফ + মীম', arabic: 'كم' },
  { bangla: 'হা + ইয়া', arabic: 'حي' },
  { bangla: 'লাম + ইয়া + সীন', arabic: 'ليس' },
  { bangla: 'কাফ + বা', arabic: 'كب' },

    { bangla: 'ছোয়াদ + লাম + হা', arabic: 'صلح' },
  { bangla: 'বা + ছোয়াদ + লাম', arabic: 'بصل' },
  { bangla: 'খা + লাম + ছোয়াদ', arabic: 'خلص' },
  { bangla: 'আইন + নূন + কাফ', arabic: 'عنك' },

  { bangla: 'লাম + আইন + নূন', arabic: 'لعن' },
  { bangla: 'শীন + ফা + আইন', arabic: 'شفع' },
  { bangla: 'তা + জীম + দাল', arabic: 'تجد' },
  { bangla: 'ফা + তা + হা', arabic: 'فتح' },
  { bangla: 'নূন + আইন + তা', arabic: 'نعت' },

  { bangla: 'ইয়া + সাদ + লাম', arabic: 'يصل' },
  { bangla: 'খা + বা + রা', arabic: 'خبر' },
  { bangla: 'কাফ + সীন + বা', arabic: 'كسب' },
  { bangla: 'সীন + আইন + দাল', arabic: 'سعد' },
  { bangla: 'ইয়া + সীন + রা', arabic: 'يسر' },

  { bangla: 'নূন + ফা + সীন', arabic: 'نفس' },
  { bangla: 'তা + লাম + বা', arabic: 'تلب' },
  { bangla: 'মীম + তা + রা', arabic: 'متر' },
  { bangla: 'হা + বা + তা', arabic: 'هبت' },
  { bangla: 'আইন + লাম + মীম', arabic: 'علم' },

  { bangla: 'ক্বাফ + লাম + মীম', arabic: 'قلم' },
  { bangla: 'গাইন + লাম + কাফ', arabic: 'غلك' },
  { bangla: 'হা + লাম + কাফ', arabic: 'هلك' },
  { bangla: 'সীন + হা + মীম', arabic: 'سهم' },
  { bangla: 'সীন + ফা + হা', arabic: 'سفه' },

  { bangla: 'কাফ + নূন + তা', arabic: 'كنت' },
  { bangla: 'সীন + কাফ + নূন', arabic: 'سكن' },
  { bangla: 'দাদ + হা + কাফ', arabic: 'ضحك' },
  { bangla: 'ইয়া + তা + লাম + ওয়াও', arabic: 'يتلو' },
  { bangla: 'নূন + গাইন + মীম + তা', arabic: 'نغمت' },

  { bangla: 'মীম + কাফ + তা + আইন', arabic: 'مكتع' },
  { bangla: 'সীন + ক্বাফ + লাম + তা', arabic: 'سقلت' },
]


export default function Day3Page() {
  return (
    <LessonLayout
      dayNumber={3}
      title="অক্ষর সংযোগ"
      videoId="VIDEO_ID_HERE"
    >
      


    
      {/* Letter Combinations Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" dir='rtl'>
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

      {/* Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">?</span>
          কুইজ 
        </h2>
        <LetterCombinationsQuiz />
      </div>
    </LessonLayout>
  )
}