'use client'

interface SukunWord {
  arabic: string
  bangla: string
  meaning: string
  spelled: string // বাংলায় স্পেলিং
  breakdown: {
    letter: string
    sound: string
    hasSukun: boolean
  }[]
}

const sukunWords: SukunWord[] = [
  {
    arabic: 'مِنْ',
    bangla: 'মিন',
    meaning: 'থেকে / From',
    spelled: 'মিম নুন জের মিন',
    breakdown: [
      { letter: 'مِ', sound: 'মি', hasSukun: false },
      { letter: 'نْ', sound: 'ন্', hasSukun: true },
    ]
  },
  {
    arabic: 'عَنْ',
    bangla: 'আন',
    meaning: 'সম্পর্কে / About',
    spelled: 'আইন নুন জবর আন',
    breakdown: [
      { letter: 'عَ', sound: 'আ', hasSukun: false },
      { letter: 'نْ', sound: 'ন্', hasSukun: true },
    ]
  },
  {
    arabic: 'أَنْ',
    bangla: 'আন',
    meaning: 'যে / That',
    spelled: 'আলিফ নুন জবর আন',
    breakdown: [
      { letter: 'أَ', sound: 'আ', hasSukun: false },
      { letter: 'نْ', sound: 'ন্', hasSukun: true },
    ]
  },
  {
    arabic: 'لَمْ',
    bangla: 'লাম',
    meaning: 'নি / Did not',
    spelled: 'লাম মিম জবর লাম',
    breakdown: [
      { letter: 'لَ', sound: 'লা', hasSukun: false },
      { letter: 'مْ', sound: 'ম্', hasSukun: true },
    ]
  },
  {
    arabic: 'كَمْ',
    bangla: 'কাম',
    meaning: 'কত / How many',
    spelled: 'কাফ মিম জবর কাম',
    breakdown: [
      { letter: 'كَ', sound: 'কা', hasSukun: false },
      { letter: 'مْ', sound: 'ম্', hasSukun: true },
    ]
  },
  {
    arabic: 'قَدْ',
    bangla: 'ক্বাদ',
    meaning: 'নিশ্চয়ই / Indeed',
    spelled: 'ক্বাফ দাল জবর ক্বাদ',
    breakdown: [
      { letter: 'قَ', sound: 'ক্বা', hasSukun: false },
      { letter: 'دْ', sound: 'দ্', hasSukun: true },
    ]
  },
  {
    arabic: 'هَلْ',
    bangla: 'হাল',
    meaning: 'কি? / Is it?',
    spelled: 'হা লাম জবর হাল',
    breakdown: [
      { letter: 'هَ', sound: 'হা', hasSukun: false },
      { letter: 'لْ', sound: 'ল্', hasSukun: true },
    ]
  },
  {
    arabic: 'بَلْ',
    bangla: 'বাল',
    meaning: 'বরং / Rather',
    spelled: 'বা লাম জবর বাল',
    breakdown: [
      { letter: 'بَ', sound: 'বা', hasSukun: false },
      { letter: 'لْ', sound: 'ল্', hasSukun: true },
    ]
  },
  {
    arabic: 'قُلْ',
    bangla: 'ক্বুল',
    meaning: 'বলো / Say',
    spelled: 'ক্বাফ লাম পেশ ক্বুল',
    breakdown: [
      { letter: 'قُ', sound: 'ক্বু', hasSukun: false },
      { letter: 'لْ', sound: 'ল্', hasSukun: true },
    ]
  },
  {
    arabic: 'رَبْ',
    bangla: 'রাব',
    meaning: 'রব / Lord',
    spelled: 'রা বা জবর রাব',
    breakdown: [
      { letter: 'رَ', sound: 'রা', hasSukun: false },
      { letter: 'بْ', sound: 'ব্', hasSukun: true },
    ]
  },
  {
    arabic: 'حَقْ',
    bangla: 'হাক্ব',
    meaning: 'সত্য / Truth',
    spelled: 'হা ক্বাফ জবর হাক্ব',
    breakdown: [
      { letter: 'حَ', sound: 'হা', hasSukun: false },
      { letter: 'قْ', sound: 'ক্ব্', hasSukun: true },
    ]
  },
  {
    arabic: 'خَلْق',
    bangla: 'খালক্ব',
    meaning: 'সৃষ্টি / Creation',
    spelled: 'খা লাম ক্বাফ জবর খালক্ব',
    breakdown: [
      { letter: 'خَ', sound: 'খা', hasSukun: false },
      { letter: 'لْ', sound: 'ল্', hasSukun: true },
      { letter: 'ق', sound: 'ক্ব', hasSukun: false },
    ]
  },
]


const threeLetterWords: SukunWord[] = [
  {
    arabic: 'مُسْلِم',
    bangla: 'মুসলিম',
    meaning: 'মুসলিম / Muslim',
    spelled: 'মীম পেশ মু সীন সুকুন স্ লাম জের লি মীম',
    breakdown: [
      { letter: 'مُ', sound: 'মু', hasSukun: false },
      { letter: 'سْ', sound: 'স্', hasSukun: true },
      { letter: 'لِ', sound: 'লি', hasSukun: false },
      { letter: 'م', sound: 'ম', hasSukun: false },
    ]
  },
  {
    arabic: 'مَسْجِد',
    bangla: 'মাসজিদ',
    meaning: 'মসজিদ / Mosque',
    spelled: 'মীম জবর মা সীন সুকুন স্ জীম জের জি দাল',
    breakdown: [
      { letter: 'مَ', sound: 'মা', hasSukun: false },
      { letter: 'سْ', sound: 'স্', hasSukun: true },
      { letter: 'جِ', sound: 'জি', hasSukun: false },
      { letter: 'د', sound: 'দ', hasSukun: false },
    ]
  },
  {
    arabic: 'مَكْتَب',
    bangla: 'মাকতাব',
    meaning: 'অফিস / Office',
    spelled: 'মীম জবর মা কাফ সুকুন ক্ তা জবর তা বা',
    breakdown: [
      { letter: 'مَ', sound: 'মা', hasSukun: false },
      { letter: 'كْ', sound: 'ক্', hasSukun: true },
      { letter: 'تَ', sound: 'তা', hasSukun: false },
      { letter: 'ب', sound: 'ব', hasSukun: false },
    ]
  },
  {
    arabic: 'مَدْرَسَة',
    bangla: 'মাদরাসা',
    meaning: 'বিদ্যালয় / School',
    spelled: 'মীম জবর মা দাল সুকুন দ্ রা জবর রা সীন জবর সা তা মারবুতা',
    breakdown: [
      { letter: 'مَ', sound: 'মা', hasSukun: false },
      { letter: 'دْ', sound: 'দ্', hasSukun: true },
      { letter: 'رَ', sound: 'রা', hasSukun: false },
      { letter: 'سَ', sound: 'সা', hasSukun: false },
      { letter: 'ة', sound: '', hasSukun: false },
    ]
  },
  {
    arabic: 'أَكْبَر',
    bangla: 'আকবার',
    meaning: 'সবচেয়ে বড় / Greatest',
    spelled: 'আলিফ জবর আ কাফ সুকুন ক্ বা জবর বা রা',
    breakdown: [
      { letter: 'أَ', sound: 'আ', hasSukun: false },
      { letter: 'كْ', sound: 'ক্', hasSukun: true },
      { letter: 'بَ', sound: 'বা', hasSukun: false },
      { letter: 'ر', sound: 'র', hasSukun: false },
    ]
  },
  {
    arabic: 'أَصْغَر',
    bangla: 'আসগার',
    meaning: 'সবচেয়ে ছোট / Smallest',
    spelled: 'আলিফ জবর আ সোয়াদ সুকুন স্ গাইন জবর গা রা',
    breakdown: [
      { letter: 'أَ', sound: 'আ', hasSukun: false },
      { letter: 'صْ', sound: 'স্', hasSukun: true },
      { letter: 'غَ', sound: 'গা', hasSukun: false },
      { letter: 'ر', sound: 'র', hasSukun: false },
    ]
  },
  {
    arabic: 'يَعْلَم',
    bangla: "ইয়া'লাম",
    meaning: 'সে জানে / He knows',
    spelled: "ইয়া জবর ইয়া আইন সুকুন ' লাম জবর লা মীম",
    breakdown: [
      { letter: 'يَ', sound: 'ইয়া', hasSukun: false },
      { letter: 'عْ', sound: "'", hasSukun: true },
      { letter: 'لَ', sound: 'লা', hasSukun: false },
      { letter: 'م', sound: 'ম', hasSukun: false },
    ]
  },
  {
    arabic: 'يَسْمَع',
    bangla: 'ইয়াসমাউ',
    meaning: 'সে শোনে / He hears',
    spelled: 'ইয়া জবর ইয়া সীন সুকুন স্ মীম জবর মা আইন',
    breakdown: [
      { letter: 'يَ', sound: 'ইয়া', hasSukun: false },
      { letter: 'سْ', sound: 'স্', hasSukun: true },
      { letter: 'مَ', sound: 'মা', hasSukun: false },
      { letter: 'ع', sound: 'উ', hasSukun: false },
    ]
  },
]

interface WordCardProps {
  word: SukunWord
}

function WordCard({ word }: WordCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-4 py-2">
        <span className="text-sm font-medium">{word.meaning}</span>
      </div>
      <div className="p-4">
        <div className="text-center mb-4">
          <div
            dir="rtl"
            className="text-5xl text-gray-800 mb-2"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
          >
            {word.arabic}
          </div>
          <div className="text-xl font-bold text-slate-600">{word.bangla}</div>
        </div>

        {/* Bengali Spelling */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-3 mb-4">
          <p className="text-emerald-800 text-sm font-medium text-center leading-relaxed">
            {word.spelled}
          </p>
        </div>

        {/* Letter Breakdown */}
        <div className="flex flex-wrap justify-center gap-2" dir="rtl">
          {word.breakdown.map((item, i) => (
            <div
              key={i}
              className={`rounded-lg p-2 text-center min-w-[50px] ${
                item.hasSukun
                  ? 'bg-amber-100 border-2 border-amber-400'
                  : 'bg-gray-100 border border-gray-300'
              }`}
            >
              <div
                className="text-2xl text-gray-800"
                style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
              >
                {item.letter}
              </div>
              <div className={`text-xs font-bold ${item.hasSukun ? 'text-amber-700' : 'text-gray-600'}`}>
                {item.sound}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SukunWords() {
  return (
    <div className="space-y-10">
      {/* Two Letter Words */}
      <div>
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-4 rounded-xl mb-4">
          <h3 className="text-xl font-bold">দুই অক্ষরের শব্দ</h3>
          <p className="text-slate-300 text-sm">Two Letter Words with Sukun</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sukunWords.map((word, index) => (
            <WordCard key={index} word={word} />
          ))}
        </div>
      </div>

      {/* Three+ Letter Words */}
      <div>
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-xl mb-4">
          <h3 className="text-xl font-bold">বড় শব্দে সুকুন</h3>
          <p className="text-indigo-200 text-sm">Sukun in Longer Words</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {threeLetterWords.map((word, index) => (
            <WordCard key={index} word={word} />
          ))}
        </div>
      </div>
    </div>
  )
}
