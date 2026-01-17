'use client'

interface SukunWord {
  arabic: string
  bangla: string
  meaning: string
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
    breakdown: [
      { letter: 'مِ', sound: 'মি', hasSukun: false },
      { letter: 'نْ', sound: 'ন্', hasSukun: true },
    ]
  },
  {
    arabic: 'عَنْ',
    bangla: 'আন',
    meaning: 'সম্পর্কে / About',
    breakdown: [
      { letter: 'عَ', sound: 'আ', hasSukun: false },
      { letter: 'نْ', sound: 'ন্', hasSukun: true },
    ]
  },
  {
    arabic: 'أَنْ',
    bangla: 'আন',
    meaning: 'যে / That',
    breakdown: [
      { letter: 'أَ', sound: 'আ', hasSukun: false },
      { letter: 'نْ', sound: 'ন্', hasSukun: true },
    ]
  },
  {
    arabic: 'لَمْ',
    bangla: 'লাম',
    meaning: 'নি / Did not',
    breakdown: [
      { letter: 'لَ', sound: 'লা', hasSukun: false },
      { letter: 'مْ', sound: 'ম্', hasSukun: true },
    ]
  },
  {
    arabic: 'كَمْ',
    bangla: 'কাম',
    meaning: 'কত / How many',
    breakdown: [
      { letter: 'كَ', sound: 'কা', hasSukun: false },
      { letter: 'مْ', sound: 'ম্', hasSukun: true },
    ]
  },
  {
    arabic: 'قَدْ',
    bangla: 'ক্বাদ',
    meaning: 'নিশ্চয়ই / Indeed',
    breakdown: [
      { letter: 'قَ', sound: 'ক্বা', hasSukun: false },
      { letter: 'دْ', sound: 'দ্', hasSukun: true },
    ]
  },
  {
    arabic: 'هَلْ',
    bangla: 'হাল',
    meaning: 'কি? / Is it?',
    breakdown: [
      { letter: 'هَ', sound: 'হা', hasSukun: false },
      { letter: 'لْ', sound: 'ল্', hasSukun: true },
    ]
  },
  {
    arabic: 'بَلْ',
    bangla: 'বাল',
    meaning: 'বরং / Rather',
    breakdown: [
      { letter: 'بَ', sound: 'বা', hasSukun: false },
      { letter: 'لْ', sound: 'ল্', hasSukun: true },
    ]
  },
  {
    arabic: 'قُلْ',
    bangla: 'ক্বুল',
    meaning: 'বলো / Say',
    breakdown: [
      { letter: 'قُ', sound: 'ক্বু', hasSukun: false },
      { letter: 'لْ', sound: 'ল্', hasSukun: true },
    ]
  },
  {
    arabic: 'رَبْ',
    bangla: 'রাব',
    meaning: 'রব / Lord',
    breakdown: [
      { letter: 'رَ', sound: 'রা', hasSukun: false },
      { letter: 'بْ', sound: 'ব্', hasSukun: true },
    ]
  },
  {
    arabic: 'حَقْ',
    bangla: 'হাক্ব',
    meaning: 'সত্য / Truth',
    breakdown: [
      { letter: 'حَ', sound: 'হা', hasSukun: false },
      { letter: 'قْ', sound: 'ক্ব্', hasSukun: true },
    ]
  },
  {
    arabic: 'خَلْق',
    bangla: 'খালক্ব',
    meaning: 'সৃষ্টি / Creation',
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
