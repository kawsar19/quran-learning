'use client'

const dammaWords = [
  {
    arabic: 'بُبُ',
    bangla: 'বুবু',
    meaning: 'বুবু / Sister',
    breakdown: [
      { letter: 'بُ', sound: 'বু' },
      { letter: 'بُ', sound: 'বু' },
    ]
  },
  {
    arabic: 'فُلُ',
    bangla: 'ফুলু',
    meaning: 'ফুল / Flower',
    breakdown: [
      { letter: 'فُ', sound: 'ফু' },
      { letter: 'لُ', sound: 'লু' },
    ]
  },
  {
    arabic: 'نُرُ',
    bangla: 'নুরু',
    meaning: 'আলো / Light',
    breakdown: [
      { letter: 'نُ', sound: 'নু' },
      { letter: 'رُ', sound: 'রু' },
    ]
  },
  {
    arabic: 'سُرُ',
    bangla: 'সুরু',
    meaning: 'আনন্দ / Joy',
    breakdown: [
      { letter: 'سُ', sound: 'সু' },
      { letter: 'رُ', sound: 'রু' },
    ]
  },
  {
    arabic: 'كُلُ',
    bangla: 'কুলু',
    meaning: 'সব / All',
    breakdown: [
      { letter: 'كُ', sound: 'কু' },
      { letter: 'لُ', sound: 'লু' },
    ]
  },
  {
    arabic: 'كُتُبُ',
    bangla: 'কুতুবু',
    meaning: 'বইসমূহ / Books',
    breakdown: [
      { letter: 'كُ', sound: 'কু' },
      { letter: 'تُ', sound: 'তু' },
      { letter: 'بُ', sound: 'বু' },
    ]
  },
  {
    arabic: 'رُسُلُ',
    bangla: 'রুসুলু',
    meaning: 'রাসূলগণ / Messengers',
    breakdown: [
      { letter: 'رُ', sound: 'রু' },
      { letter: 'سُ', sound: 'সু' },
      { letter: 'لُ', sound: 'লু' },
    ]
  },
  {
    arabic: 'جُمُعُ',
    bangla: 'জুমুউ',
    meaning: 'জুমা / Friday',
    breakdown: [
      { letter: 'جُ', sound: 'জু' },
      { letter: 'مُ', sound: 'মু' },
      { letter: 'عُ', sound: 'উ' },
    ]
  },
  {
    arabic: 'دُخُلُ',
    bangla: 'দুখুলু',
    meaning: 'প্রবেশ / Entry',
    breakdown: [
      { letter: 'دُ', sound: 'দু' },
      { letter: 'خُ', sound: 'খু' },
      { letter: 'لُ', sound: 'লু' },
    ]
  },
  {
    arabic: 'خُرُجُ',
    bangla: 'খুরুজু',
    meaning: 'বের হওয়া / Exit',
    breakdown: [
      { letter: 'خُ', sound: 'খু' },
      { letter: 'رُ', sound: 'রু' },
      { letter: 'جُ', sound: 'জু' },
    ]
  },
  {
    arabic: 'نُزُلُ',
    bangla: 'নুযুলু',
    meaning: 'অবতরণ / Descend',
    breakdown: [
      { letter: 'نُ', sound: 'নু' },
      { letter: 'زُ', sound: 'যু' },
      { letter: 'لُ', sound: 'লু' },
    ]
  },
  {
    arabic: 'سُجُدُ',
    bangla: 'সুজুদু',
    meaning: 'সিজদা / Prostration',
    breakdown: [
      { letter: 'سُ', sound: 'সু' },
      { letter: 'جُ', sound: 'জু' },
      { letter: 'دُ', sound: 'দু' },
    ]
  },
]

export default function DammaWords() {
  return (
    <div className="space-y-6">
      {dammaWords.map((word, index) => (
        <div
          key={index}
          className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
        >
          {/* Word Header - Premium Sky Gradient */}
          <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20">
                {index + 1}
              </span>
              <span className="text-xl font-bold text-white tracking-tight leading-none group-hover:translate-x-1 transition-transform">
                {word.meaning}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-semibold bg-sky-900/20 text-sky-50 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest whitespace-nowrap">
                Damma • {word.bangla}
              </span>
            </div>
          </div>

          {/* Word Content */}
          <div className="p-8">
            {/* Main Word Section */}
            <div className="flex flex-col items-center mb-10">
              <div
                dir="rtl"
                className="text-7xl md:text-8xl text-slate-800 mb-6 leading-tight transition-all duration-500 group-hover:scale-105 group-hover:text-sky-950"
                style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
              >
                {word.arabic}
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-sky-400 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative text-3xl font-black text-sky-600 bg-sky-50/50 px-6 py-2 rounded-2xl border border-sky-100/50">
                  {word.bangla}
                </div>
              </div>
            </div>

            {/* Letter Breakdown - Premium Cards */}
            <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-0.5 rounded-full border border-slate-100 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                অক্ষর বিশ্লেষণ • Breakdown
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 pt-2" dir="rtl">
                {word.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0,03)] border border-white hover:border-sky-300 hover:shadow-sky-100 transition-all duration-300 min-w-[80px]"
                  >
                    <div
                      className="text-4xl text-slate-700 mb-2"
                      style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                    >
                      {item.letter}
                    </div>
                    {item.sound && (
                      <div className="text-sm font-bold text-sky-600 bg-sky-50 px-3 py-0.5 rounded-lg border border-sky-100/50">
                        {item.sound}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

