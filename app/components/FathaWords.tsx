'use client'

const fathaWords = [
  {
    arabic: 'بَبَ',
    bangla: 'বাবা',
    meaning: 'বাবা / Father',
    breakdown: [
      { letter: 'بَ', sound: 'বা' },
      { letter: 'بَ', sound: 'বা' },
    ]
  },
  {
    arabic: 'مَمَ',
    bangla: 'মামা',
    meaning: 'মামা / Uncle',
    breakdown: [
      { letter: 'مَ', sound: 'মা' },
      { letter: 'مَ', sound: 'মা' },
    ]
  },
  {
    arabic: 'دَدَ',
    bangla: 'দাদা',
    meaning: 'দাদা / Grandfather',
    breakdown: [
      { letter: 'دَ', sound: 'দা' },
      { letter: 'دَ', sound: 'দা' },
    ]
  },
  {
    arabic: 'نَنَ',
    bangla: 'নানা',
    meaning: 'নানা / Maternal Grandfather',
    breakdown: [
      { letter: 'نَ', sound: 'না' },
      { letter: 'نَ', sound: 'না' },
    ]
  },
  {
    arabic: 'خَلَ',
    bangla: 'খালা',
    meaning: 'খালা / Aunt',
    breakdown: [
      { letter: 'خَ', sound: 'খা' },
      { letter: 'لَ', sound: 'লা' },
    ]
  },
  {
    arabic: 'كَمَلَ',
    bangla: 'কামালা',
    meaning: 'পূর্ণ করা / Complete',
    breakdown: [
      { letter: 'كَ', sound: 'কা' },
      { letter: 'مَ', sound: 'মা' },
      { letter: 'لَ', sound: 'লা' },
    ]
  },
  {
    arabic: 'سَلَمَ',
    bangla: 'সালামা',
    meaning: 'শান্তি / Peace',
    breakdown: [
      { letter: 'سَ', sound: 'সা' },
      { letter: 'لَ', sound: 'লা' },
      { letter: 'مَ', sound: 'মা' },
    ]
  },
  {
    arabic: 'قَلَمَ',
    bangla: 'ক্বালামা',
    meaning: 'কলম / Pen',
    breakdown: [
      { letter: 'قَ', sound: 'ক্বা' },
      { letter: 'لَ', sound: 'লা' },
      { letter: 'مَ', sound: 'মা' },
    ]
  },
  {
    arabic: 'كَتَبَ',
    bangla: 'কাতাবা',
    meaning: 'লিখেছে / Wrote',
    breakdown: [
      { letter: 'كَ', sound: 'কা' },
      { letter: 'تَ', sound: 'তা' },
      { letter: 'بَ', sound: 'বা' },
    ]
  },
  {
    arabic: 'ذَهَبَ',
    bangla: 'যাহাবা',
    meaning: 'গেল / Went',
    breakdown: [
      { letter: 'ذَ', sound: 'যা' },
      { letter: 'هَ', sound: 'হা' },
      { letter: 'بَ', sound: 'বা' },
    ]
  },
  {
    arabic: 'فَتَحَ',
    bangla: 'ফাতাহা',
    meaning: 'খুলল / Opened',
    breakdown: [
      { letter: 'فَ', sound: 'ফা' },
      { letter: 'تَ', sound: 'তা' },
      { letter: 'حَ', sound: 'হা' },
    ]
  },
  {
    arabic: 'نَصَرَ',
    bangla: 'নাসারা',
    meaning: 'সাহায্য করল / Helped',
    breakdown: [
      { letter: 'نَ', sound: 'না' },
      { letter: 'صَ', sound: 'সা' },
      { letter: 'رَ', sound: 'রা' },
    ]
  },
]

export default function FathaWords() {
  return (
    <div className="space-y-4">
      {fathaWords.map((word, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-red-100 hover:shadow-xl transition-shadow"
        >
          {/* Word Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-3 flex items-center justify-between">
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
              <div className="text-2xl font-bold text-red-600">{word.bangla}</div>
            </div>

            {/* Letter Breakdown */}
            <div className="bg-red-50 rounded-xl p-4">
              <h4 className="text-sm font-bold text-red-700 mb-3 text-center">অক্ষর বিশ্লেষণ (Letter Breakdown)</h4>
              <div className="flex flex-wrap justify-center gap-3" dir="rtl">
                {word.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-3 text-center shadow-sm border border-red-200 min-w-[60px]"
                  >
                    <div
                      className="text-3xl text-gray-800"
                      style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                    >
                      {item.letter}
                    </div>
                    {item.sound && (
                      <div className="text-sm font-bold text-red-600 mt-1">{item.sound}</div>
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
