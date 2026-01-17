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
    <div className="space-y-4">
      {kasraWords.map((word, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-shadow"
        >
          {/* Word Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-3 flex items-center justify-between">
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
              <div className="text-2xl font-bold text-green-600">{word.bangla}</div>
            </div>

            {/* Letter Breakdown */}
            <div className="bg-green-50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-green-700 mb-3 text-center">অক্ষর বিশ্লেষণ (Letter Breakdown)</h4>
              <div className="flex flex-wrap justify-center gap-3" dir="rtl">
                {word.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-3 text-center shadow-sm border border-green-200 min-w-[60px]"
                  >
                    <div
                      className="text-3xl text-gray-800"
                      style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                    >
                      {item.letter}
                    </div>
                    {item.sound && (
                      <div className="text-sm font-bold text-green-600 mt-1">{item.sound}</div>
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
