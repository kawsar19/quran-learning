'use client'

interface PracticeWord {
  arabic: string
  bangla: string
  meaning: string
  type: string
}

const practiceWords: PracticeWord[] = [
  // Combined Harakat and Tanween
  { arabic: 'رَجُلٌ', bangla: 'রাজুলুন', meaning: 'একজন লোক', type: 'mixed' },
  { arabic: 'قَمَرٌ', bangla: 'ক্বামারুন', meaning: 'চাঁদ', type: 'mixed' },
  { arabic: 'شَمْسٌ', bangla: 'শামসুন', meaning: 'সূর্য', type: 'mixed' },
  { arabic: 'عَلِيْمٌ', bangla: 'আলীমুন', meaning: 'সর্বজ্ঞ', type: 'mixed' },
  { arabic: 'خَبِيْرٌ', bangla: 'খাবীরুন', meaning: 'সম্যক অবগত', type: 'mixed' },
  { arabic: 'غَفُوْرٌ', bangla: 'গাফূরুন', meaning: 'ক্ষমাশীল', type: 'mixed' },
  { arabic: 'رَحِيْمٌ', bangla: 'রাহীমুন', meaning: 'পরম দয়ালু', type: 'mixed' },
  { arabic: 'سَمِيْعٌ', bangla: 'সামীউন', meaning: 'সর্বশ্রোতা', type: 'mixed' },
  { arabic: 'بَصِيْرٌ', bangla: 'বাইনুন', meaning: 'সর্বদ্রষ্টা', type: 'mixed' },
  { arabic: 'قَدِيْرٌ', bangla: 'ক্বদীরুন', meaning: 'সর্বশক্তিমান', type: 'mixed' },
  { arabic: 'لَطِيْفٌ', bangla: 'লাতীফুন', meaning: 'মেহেরবান', type: 'mixed' },
  { arabic: 'كَرِيْمٌ', bangla: 'কারীমুন', meaning: 'সম্মানিত', type: 'mixed' },
  { arabic: 'حَكِيْمٌ', bangla: 'হাকীমুন', meaning: 'প্রজ্ঞাময়', type: 'mixed' },
  { arabic: 'عَظِيْمٌ', bangla: 'আযীমুন', meaning: 'মহান', type: 'mixed' },
  { arabic: 'شَكُوْرٌ', bangla: 'শাকূরুন', meaning: 'গুণগ্রাহী', type: 'mixed' },
  { arabic: 'حَلِيْمٌ', bangla: 'হালীমুন', meaning: 'ধৈর্যশীল', type: 'mixed' },
  { arabic: 'خَالِقٌ', bangla: 'খালিক্বুন', meaning: 'সৃষ্টিকর্তা', type: 'mixed' },
  { arabic: 'رَازِقٌ', bangla: 'রাযিক্বুন', meaning: 'রিযিকদাতা', type: 'mixed' },
  { arabic: 'شَاهِدٌ', bangla: 'শাহিদুন', meaning: 'সাক্ষী', type: 'mixed' },
  { arabic: 'صَابِرٌ', bangla: 'সবিরুন', meaning: 'ধৈর্যশীল', type: 'mixed' },
  { arabic: 'غَافِرٌ', bangla: 'গাফিরুন', meaning: 'ক্ষমাকারী', type: 'mixed' },
  { arabic: 'نَاصِرٌ', bangla: 'নাসিরুন', meaning: 'সাহায্যকারী', type: 'mixed' },
  { arabic: 'كَافِرٌ', bangla: 'কাফিরুন', meaning: 'অবিশ্বাসী', type: 'mixed' },
  { arabic: 'مُسْلِمٌ', bangla: 'মুসলিমুন', meaning: 'মুসলিম', type: 'mixed' },
  { arabic: 'مُؤْمِنٌ', bangla: 'মুমিনুন', meaning: 'মুমিন', type: 'mixed' },
  { arabic: 'صَالِحٌ', bangla: 'সালিহুন', meaning: 'নেককার', type: 'mixed' },
  { arabic: 'عَالِمٌ', bangla: 'আলিমুন', meaning: 'জ্ঞানী', type: 'mixed' },
  { arabic: 'جَاهِلٌ', bangla: 'জাহিলুন', meaning: 'মূর্খ', type: 'mixed' },
  { arabic: 'طَيِّبٌ', bangla: 'তাইয়্যেবুন', meaning: 'পবিত্র/ভালো', type: 'mixed' },
  { arabic: 'خَبِيْثٌ', bangla: 'খাব্বীছুন', meaning: 'অপাংক্তেয়/খারাপ', type: 'mixed' },
]

export default function MixedPractice() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {practiceWords.map((word, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl p-6 shadow-md border-2 border-emerald-50 hover:border-emerald-200 transition-all text-center group"
        >
          <div 
            dir="rtl"
            className="text-4xl md:text-5xl text-gray-800 mb-3 group-hover:scale-110 transition-transform"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
          >
            {word.arabic}
          </div>
          <div className="text-xl font-bold text-emerald-600 mb-1">{word.bangla}</div>
          <div className="text-sm text-gray-500">{word.meaning}</div>
        </div>
      ))}
    </div>
  )
}
