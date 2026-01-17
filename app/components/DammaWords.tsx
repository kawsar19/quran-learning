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
    <div className="space-y-4">
      {dammaWords.map((word, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow"
        >
          {/* Word Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 flex items-center justify-between">
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
              <div className="text-2xl font-bold text-blue-600">{word.bangla}</div>
            </div>

            {/* Letter Breakdown */}
            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-blue-700 mb-3 text-center">অক্ষর বিশ্লেষণ (Letter Breakdown)</h4>
              <div className="flex flex-wrap justify-center gap-3" dir="rtl">
                {word.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-3 text-center shadow-sm border border-blue-200 min-w-[60px]"
                  >
                    <div
                      className="text-3xl text-gray-800"
                      style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                    >
                      {item.letter}
                    </div>
                    {item.sound && (
                      <div className="text-sm font-bold text-blue-600 mt-1">{item.sound}</div>
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
