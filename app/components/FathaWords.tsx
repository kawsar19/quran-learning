'use client'
const fathaWords = [
  { arabic: 'قَرَأَ', bangla: 'কারাআ', meaning: 'পড়েছে / Read', breakdown: [{letter:'قَ',sound:'কা'},{letter:'رَ',sound:'রা'},{letter:'أَ',sound:'আ'}] },
  { arabic: 'ذَكَرَ', bangla: 'যাকারা', meaning: 'স্মরণ করেছে / Remembered', breakdown: [{letter:'ذَ',sound:'যা'},{letter:'كَرَ',sound:'কারা'}] },

  { arabic: 'سَجَدَ', bangla: 'সাজাদা', meaning: 'সিজদা করেছে', breakdown: [{letter:'سَ',sound:'সা'},{letter:'جَ',sound:'জা'},{letter:'دَ',sound:'দা'}] },
  { arabic: 'شَكَرَ', bangla: 'শাকারা', meaning: 'কৃতজ্ঞতা প্রকাশ করেছে', breakdown: [{letter:'شَ',sound:'শা'},{letter:'كَرَ',sound:'কারা'}] },

  { arabic: 'غَفَرَ', bangla: 'গাফারা', meaning: 'ক্ষমা করেছেন', breakdown: [{letter:'غَ',sound:'গা'},{letter:'فَرَ',sound:'ফারা'}] },
  { arabic: 'كَفَرَ', bangla: 'কাফারা', meaning: 'অস্বীকার করেছে', breakdown: [{letter:'كَ',sound:'কা'},{letter:'فَرَ',sound:'ফারা'}] },

  { arabic: 'هَدَى', bangla: 'হাদা', meaning: 'পথ দেখিয়েছেন', breakdown: [{letter:'هَ',sound:'হা'},{letter:'دَى',sound:'দা'}] },
  { arabic: 'ضَلَلَ', bangla: 'দালালা', meaning: 'পথভ্রষ্ট হয়েছে', breakdown: [{letter:'ضَ',sound:'দ্বা'},{letter:'لَ',sound:'লা'},{letter:'لَ',sound:'লা'}] },

  { arabic: 'نَفَعَ', bangla: 'নাফাআ', meaning: 'উপকার করেছে', breakdown: [{letter:'نَ',sound:'না'},{letter:'فَ',sound:'ফা'},{letter:'عَ',sound:'আ'}] },
  { arabic: 'ضَرَرَ', bangla: 'দারারা', meaning: 'ক্ষতি করেছে', breakdown: [{letter:'ضَ',sound:'দ্বা'},{letter:'رَ',sound:'রা'},{letter:'رَ',sound:'রা'}] },

  { arabic: 'أَمَرَ', bangla: 'আমারা', meaning: 'আদেশ দিয়েছেন', breakdown: [{letter:'أَ',sound:'আ'},{letter:'مَ',sound:'মা'},{letter:'رَ',sound:'রা'}] },
  { arabic: 'نَهَى', bangla: 'নাহা', meaning: 'নিষেধ করেছেন', breakdown: [{letter:'نَ',sound:'না'},{letter:'هَى',sound:'হা'}] },

  { arabic: 'عَطَى', bangla: 'আতা', meaning: 'দান করেছেন', breakdown: [{letter:'عَ',sound:'আ'},{letter:'طَى',sound:'তা'}] },
  { arabic: 'مَنَعَ', bangla: 'মানাআ', meaning: 'বাধা দিয়েছে', breakdown: [{letter:'مَ',sound:'মা'},{letter:'نَ',sound:'না'},{letter:'عَ',sound:'আ'}] },

  { arabic: 'حَكَمَ', bangla: 'হাকামা', meaning: 'ফয়সালা করেছেন', breakdown: [{letter:'حَ',sound:'হা'},{letter:'كَمَ',sound:'কামা'}] },
  { arabic: 'عَدَلَ', bangla: 'আদালা', meaning: 'ন্যায়বিচার করেছে', breakdown: [{letter:'عَ',sound:'আ'},{letter:'دَ',sound:'দা'},{letter:'لَ',sound:'লা'}] },

  { arabic: 'صَبَرَ', bangla: 'সাবারা', meaning: 'ধৈর্য ধরেছে', breakdown: [{letter:'صَ',sound:'সা'},{letter:'بَرَ',sound:'বারা'}] },
  { arabic: 'فَرِحَ', bangla: 'ফারিহা', meaning: 'খুশি হয়েছে', breakdown: [{letter:'فَ',sound:'ফা'},{letter:'رِ',sound:'রি'},{letter:'حَ',sound:'হা'}] },

  { arabic: 'بَكَى', bangla: 'বাকা', meaning: 'কেঁদেছে', breakdown: [{letter:'بَ',sound:'বা'},{letter:'كَى',sound:'কা'}] },
  { arabic: 'ضَحِكَ', bangla: 'দাহিকা', meaning: 'হেসেছে', breakdown: [{letter:'ضَ',sound:'দ্বা'},{letter:'حِ',sound:'হি'},{letter:'كَ',sound:'কা'}] },

  { arabic: 'حَمِدَ', bangla: 'হামিদা', meaning: 'প্রশংসা করেছে', breakdown: [{letter:'حَ',sound:'হা'},{letter:'مِ',sound:'মি'},{letter:'دَ',sound:'দা'}] },
  { arabic: 'سَبَحَ', bangla: 'সাবাহা', meaning: 'তাসবিহ করেছে', breakdown: [{letter:'سَ',sound:'সা'},{letter:'بَ',sound:'বা'},{letter:'حَ',sound:'হা'}] },

  { arabic: 'دَعَا', bangla: 'দাআ', meaning: 'ডেকেছে / দোয়া করেছে', breakdown: [{letter:'دَ',sound:'দা'},{letter:'عَا',sound:'আ'}] },
  { arabic: 'رَجَا', bangla: 'রাজা', meaning: 'আশা করেছে', breakdown: [{letter:'رَ',sound:'রা'},{letter:'جَا',sound:'জা'}] },

  { arabic: 'خَشِيَ', bangla: 'খাশিয়া', meaning: 'ভয় করেছে', breakdown: [{letter:'خَ',sound:'খা'},{letter:'شِ',sound:'শি'},{letter:'يَ',sound:'ইয়া'}] },
  { arabic: 'أَمِنَ', bangla: 'আমিনা', meaning: 'নিরাপদ হয়েছে', breakdown: [{letter:'أَ',sound:'আ'},{letter:'مِ',sound:'মি'},{letter:'نَ',sound:'না'}] }
];



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
                className="text-6xl md:text-7xl text-gray-800 mb-3 leading-[1.6]"
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
