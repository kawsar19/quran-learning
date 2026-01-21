'use client'

const kasraWords = [
  {
    arabic: 'بِرِ',
    bangla: 'বিরি',
    meaning: 'সৎকর্ম / Righteousness',
    breakdown: [
      { letter: 'بِ', sound: 'বি' },
      { letter: 'رِ', sound: 'রি' },
    ]
  },
  {
    arabic: 'فِلِ',
    bangla: 'ফিলি',
    meaning: 'হাতি / Elephant',
    breakdown: [
      { letter: 'فِ', sound: 'ফি' },
      { letter: 'لِ', sound: 'লি' },
    ]
  },
  {
    arabic: 'سِرِ',
    bangla: 'সিরি',
    meaning: 'গোপন / Secret',
    breakdown: [
      { letter: 'سِ', sound: 'সি' },
      { letter: 'رِ', sound: 'রি' },
    ]
  },
  {
    arabic: 'مِنِ',
    bangla: 'মিনি',
    meaning: 'থেকে / From',
    breakdown: [
      { letter: 'مِ', sound: 'মি' },
      { letter: 'نِ', sound: 'নি' },
    ]
  },
  {
    arabic: 'جِبِ',
    bangla: 'জিবি',
    meaning: 'পাহাড় / Mountain',
    breakdown: [
      { letter: 'جِ', sound: 'জি' },
      { letter: 'بِ', sound: 'বি' },
    ]
  },
  {
    arabic: 'عِلِمِ',
    bangla: 'ইলিমি',
    meaning: 'জ্ঞান / Knowledge',
    breakdown: [
      { letter: 'عِ', sound: 'ই' },
      { letter: 'لِ', sound: 'লি' },
      { letter: 'مِ', sound: 'মি' },
    ]
  },
  {
    arabic: 'كِتِبِ',
    bangla: 'কিতিবি',
    meaning: 'বই / Book',
    breakdown: [
      { letter: 'كِ', sound: 'কি' },
      { letter: 'تِ', sound: 'তি' },
      { letter: 'بِ', sound: 'বি' },
    ]
  },
  {
    arabic: 'شِرِبِ',
    bangla: 'শিরিবি',
    meaning: 'পান করল / Drank',
    breakdown: [
      { letter: 'شِ', sound: 'শি' },
      { letter: 'رِ', sound: 'রি' },
      { letter: 'بِ', sound: 'বি' },
    ]
  },
  {
    arabic: 'سِمِعِ',
    bangla: 'সিমিই',
    meaning: 'শুনল / Heard',
    breakdown: [
      { letter: 'سِ', sound: 'সি' },
      { letter: 'مِ', sound: 'মি' },
      { letter: 'عِ', sound: 'ই' },
    ]
  },
  {
    arabic: 'فِهِمِ',
    bangla: 'ফিহিমি',
    meaning: 'বুঝল / Understood',
    breakdown: [
      { letter: 'فِ', sound: 'ফি' },
      { letter: 'هِ', sound: 'হি' },
      { letter: 'مِ', sound: 'মি' },
    ]
  },
  {
    arabic: 'حِفِظِ',
    bangla: 'হিফিযি',
    meaning: 'মুখস্থ করল / Memorized',
    breakdown: [
      { letter: 'حِ', sound: 'হি' },
      { letter: 'فِ', sound: 'ফি' },
      { letter: 'ظِ', sound: 'যি' },
    ]
  },
  {
    arabic: 'رِزِقِ',
    bangla: 'রিযিক্বি',
    meaning: 'রিজিক / Provision',
    breakdown: [
      { letter: 'رِ', sound: 'রি' },
      { letter: 'زِ', sound: 'যি' },
      { letter: 'قِ', sound: 'ক্বি' },
    ]
  },
]

export default function KasraWords() {
  return (
    <div className="space-y-6">
      {kasraWords.map((word, index) => (
        <div
          key={index}
          className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
        >
          {/* Word Header - Premium Emerald Gradient */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20">
                {index + 1}
              </span>
              <span className="text-xl font-bold text-white tracking-tight leading-none group-hover:translate-x-1 transition-transform">
                {word.meaning}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-semibold bg-emerald-900/20 text-emerald-50 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest whitespace-nowrap">
                Kasra • {word.bangla}
              </span>
            </div>
          </div>

          {/* Word Content */}
          <div className="p-8">
            {/* Main Word Section */}
            <div className="flex flex-col items-center mb-10">
              <div
                dir="rtl"
                className="text-7xl md:text-8xl text-slate-800 mb-6 leading-tight transition-all duration-500 group-hover:scale-105 group-hover:text-emerald-950"
                style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
              >
                {word.arabic}
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative text-3xl font-black text-emerald-600 bg-emerald-50/50 px-6 py-2 rounded-2xl border border-emerald-100/50">
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
                    className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0,03)] border border-white hover:border-emerald-300 hover:shadow-emerald-100 transition-all duration-300 min-w-[80px]"
                  >
                    <div
                      className="text-4xl text-slate-700 mb-2"
                      style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                    >
                      {item.letter}
                    </div>
                    {item.sound && (
                      <div className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-0.5 rounded-lg border border-emerald-100/50">
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

