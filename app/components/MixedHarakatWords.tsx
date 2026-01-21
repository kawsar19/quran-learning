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
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    text: 'text-rose-600',
    label: 'ফাতহা'
  },
  kasra: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    text: 'text-emerald-600',
    label: 'কাসরা'
  },
  damma: {
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    text: 'text-sky-600',
    label: 'দাম্মা'
  }
}

export default function MixedHarakatWords() {
  return (
    <div className="space-y-6">
      {mixedWords.map((word, index) => (
        <div
          key={index}
          className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
        >
          {/* Word Header - Premium Indigo/Violet Gradient */}
          <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20">
                {index + 1}
              </span>
              <span className="text-xl font-bold text-white tracking-tight leading-none group-hover:translate-x-1 transition-transform">
                {word.meaning}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-semibold bg-white/10 text-white px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest whitespace-nowrap">
                Mixed • {word.bangla}
              </span>
            </div>
          </div>

          {/* Word Content */}
          <div className="p-8">
            {/* Main Word Section */}
            <div className="flex flex-col items-center mb-10">
              <div
                dir="rtl"
                className="text-7xl md:text-8xl text-slate-800 mb-6 leading-tight transition-all duration-500 group-hover:scale-105 group-hover:text-indigo-950"
                style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
              >
                {word.arabic}
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-400 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative text-3xl font-black text-indigo-600 bg-indigo-50/50 px-6 py-2 rounded-2xl border border-indigo-100/50">
                  {word.bangla}
                </div>
              </div>
            </div>

            {/* Letter Breakdown with Color Coding */}
            <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-0.5 rounded-full border border-slate-100 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                অক্ষর বিশ্লেষণ • Breakdown
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4" dir="rtl">
                {word.breakdown.map((item, i) => {
                  const colors = harakatColors[item.harakat]
                  return (
                    <div
                      key={i}
                      className={`flex flex-col items-center ${colors.bg} rounded-2xl p-4 shadow-sm border ${colors.border} transition-all duration-300 min-w-[85px] hover:scale-105 hover:shadow-md`}
                    >
                      <div
                        className="text-4xl text-slate-800 mb-1"
                        style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                      >
                        {item.letter}
                      </div>
                      <div className={`text-sm font-bold ${colors.text} mb-1`}>
                        {item.sound}
                      </div>
                      <div className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-white/50 ${colors.text}`}>
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

