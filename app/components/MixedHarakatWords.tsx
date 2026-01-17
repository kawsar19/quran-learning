'use client'

// Types for harakat
type HarakatType = 'fatha' | 'kasra' | 'damma'

interface LetterBreakdown {
  letter: string
  sound: string
  harakat: HarakatType
}

interface MixedWord {
  arabic: string
  bangla: string
  meaning: string
  breakdown: LetterBreakdown[]
}

const mixedWords: MixedWord[] = [
  {
    arabic: 'كَتِبَ',
    bangla: 'কাতিবা',
    meaning: 'লেখক / Writer',
    breakdown: [
      { letter: 'كَ', sound: 'কা', harakat: 'fatha' },
      { letter: 'تِ', sound: 'তি', harakat: 'kasra' },
      { letter: 'بَ', sound: 'বা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'عَلِمَ',
    bangla: 'আলিমা',
    meaning: 'জানল / Knew',
    breakdown: [
      { letter: 'عَ', sound: 'আ', harakat: 'fatha' },
      { letter: 'لِ', sound: 'লি', harakat: 'kasra' },
      { letter: 'مَ', sound: 'মা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'سَمِعَ',
    bangla: 'সামিআ',
    meaning: 'শুনল / Heard',
    breakdown: [
      { letter: 'سَ', sound: 'সা', harakat: 'fatha' },
      { letter: 'مِ', sound: 'মি', harakat: 'kasra' },
      { letter: 'عَ', sound: 'আ', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'فَهِمَ',
    bangla: 'ফাহিমা',
    meaning: 'বুঝল / Understood',
    breakdown: [
      { letter: 'فَ', sound: 'ফা', harakat: 'fatha' },
      { letter: 'هِ', sound: 'হি', harakat: 'kasra' },
      { letter: 'مَ', sound: 'মা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'نَصُرَ',
    bangla: 'নাসুরা',
    meaning: 'সাহায্য করল / Helped',
    breakdown: [
      { letter: 'نَ', sound: 'না', harakat: 'fatha' },
      { letter: 'صُ', sound: 'সু', harakat: 'damma' },
      { letter: 'رَ', sound: 'রা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'كُتِبَ',
    bangla: 'কুতিবা',
    meaning: 'লেখা হয়েছে / Was written',
    breakdown: [
      { letter: 'كُ', sound: 'কু', harakat: 'damma' },
      { letter: 'تِ', sound: 'তি', harakat: 'kasra' },
      { letter: 'بَ', sound: 'বা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'عُلِمَ',
    bangla: 'উলিমা',
    meaning: 'জানা হয়েছে / Was known',
    breakdown: [
      { letter: 'عُ', sound: 'উ', harakat: 'damma' },
      { letter: 'لِ', sound: 'লি', harakat: 'kasra' },
      { letter: 'مَ', sound: 'মা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'جَلَسَ',
    bangla: 'জালাসা',
    meaning: 'বসল / Sat',
    breakdown: [
      { letter: 'جَ', sound: 'জা', harakat: 'fatha' },
      { letter: 'لَ', sound: 'লা', harakat: 'fatha' },
      { letter: 'سَ', sound: 'সা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'دَخَلَ',
    bangla: 'দাখালা',
    meaning: 'প্রবেশ করল / Entered',
    breakdown: [
      { letter: 'دَ', sound: 'দা', harakat: 'fatha' },
      { letter: 'خَ', sound: 'খা', harakat: 'fatha' },
      { letter: 'لَ', sound: 'লা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'خَرَجَ',
    bangla: 'খারাজা',
    meaning: 'বের হল / Exited',
    breakdown: [
      { letter: 'خَ', sound: 'খা', harakat: 'fatha' },
      { letter: 'رَ', sound: 'রা', harakat: 'fatha' },
      { letter: 'جَ', sound: 'জা', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'حَسُنَ',
    bangla: 'হাসুনা',
    meaning: 'সুন্দর হল / Became beautiful',
    breakdown: [
      { letter: 'حَ', sound: 'হা', harakat: 'fatha' },
      { letter: 'سُ', sound: 'সু', harakat: 'damma' },
      { letter: 'نَ', sound: 'না', harakat: 'fatha' },
    ]
  },
  {
    arabic: 'كَبُرَ',
    bangla: 'কাবুরা',
    meaning: 'বড় হল / Became big',
    breakdown: [
      { letter: 'كَ', sound: 'কা', harakat: 'fatha' },
      { letter: 'بُ', sound: 'বু', harakat: 'damma' },
      { letter: 'رَ', sound: 'রা', harakat: 'fatha' },
    ]
  },
]

const harakatColors = {
  fatha: {
    bg: 'bg-red-100',
    border: 'border-red-300',
    text: 'text-red-600',
    label: 'ফাতহা'
  },
  kasra: {
    bg: 'bg-green-100',
    border: 'border-green-300',
    text: 'text-green-600',
    label: 'কাসরা'
  },
  damma: {
    bg: 'bg-blue-100',
    border: 'border-blue-300',
    text: 'text-blue-600',
    label: 'দাম্মা'
  }
}

export default function MixedHarakatWords() {
  return (
    <div className="space-y-4">
      {mixedWords.map((word, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow"
        >
          {/* Word Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 flex items-center justify-between">
            <span className="text-lg font-bold">{index + 1}. {word.meaning}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{word.bangla}</span>
            </div>
          </div>

          {/* Word Content */}
          <div className="p-5">
            {/* Main Word */}
            <div className="text-center mb-6">
              <div
                dir="rtl"
                className="text-6xl md:text-7xl text-gray-800 mb-3"
                style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
              >
                {word.arabic}
              </div>
              <div className="text-2xl font-bold text-purple-600">{word.bangla}</div>
            </div>

            {/* Letter Breakdown with Color Coding */}
            <div className="bg-purple-50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-purple-700 mb-3 text-center">অক্ষর বিশ্লেষণ (Letter Breakdown)</h4>
              <div className="flex flex-wrap justify-center gap-3" dir="rtl">
                {word.breakdown.map((item, i) => {
                  const colors = harakatColors[item.harakat]
                  return (
                    <div
                      key={i}
                      className={`${colors.bg} rounded-lg p-3 text-center shadow-sm border-2 ${colors.border} min-w-[70px]`}
                    >
                      <div
                        className="text-3xl text-gray-800"
                        style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                      >
                        {item.letter}
                      </div>
                      <div className={`text-sm font-bold ${colors.text} mt-1`}>
                        {item.sound}
                      </div>
                      <div className={`text-xs ${colors.text} mt-1 opacity-75`}>
                        {colors.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
