"use client";

const fathaWords = [
  {
    arabic: "قَرَأَ",
    bangla: "কারাআ",
    meaning: "পড়েছে / Read",
    breakdown: [
      { letter: "قَ", sound: "কা" },
      { letter: "رَ", sound: "রা" },
      { letter: "أَ", sound: "আ" },
    ],
  },
  {
    arabic: "ذَكَرَ",
    bangla: "যাকারা",
    meaning: "স্মরণ করেছে / Remembered",
    breakdown: [
      { letter: "ذَ", sound: "যা" },
      { letter: "كَرَ", sound: "কারা" },
    ],
  },

  {
    arabic: "سَجَدَ",
    bangla: "সাজাদা",
    meaning: "সিজদা করেছে",
    breakdown: [
      { letter: "سَ", sound: "সা" },
      { letter: "جَ", sound: "জা" },
      { letter: "دَ", sound: "দা" },
    ],
  },
  {
    arabic: "شَكَرَ",
    bangla: "শাকারা",
    meaning: "কৃতজ্ঞতা প্রকাশ করেছে",
    breakdown: [
      { letter: "شَ", sound: "শা" },
      { letter: "كَرَ", sound: "কারা" },
    ],
  },

  {
    arabic: "غَفَرَ",
    bangla: "গাফারা",
    meaning: "ক্ষমা করেছেন",
    breakdown: [
      { letter: "غَ", sound: "গা" },
      { letter: "فَرَ", sound: "ফারা" },
    ],
  },
  {
    arabic: "كَفَرَ",
    bangla: "কাফারা",
    meaning: "অস্বীকার করেছে",
    breakdown: [
      { letter: "كَ", sound: "কা" },
      { letter: "فَرَ", sound: "ফারা" },
    ],
  },

  {
    arabic: "ضَلَلَ",
    bangla: "দালালা",
    meaning: "পথভ্রষ্ট হয়েছে",
    breakdown: [
      { letter: "ضَ", sound: "দ্বা" },
      { letter: "لَ", sound: "লা" },
      { letter: "لَ", sound: "লা" },
    ],
  },

  {
    arabic: "نَفَعَ",
    bangla: "নাফাআ",
    meaning: "উপকার করেছে",
    breakdown: [
      { letter: "نَ", sound: "না" },
      { letter: "فَ", sound: "ফা" },
      { letter: "عَ", sound: "আ" },
    ],
  },
  {
    arabic: "ضَرَرَ",
    bangla: "দারারা",
    meaning: "ক্ষতি করেছে",
    breakdown: [
      { letter: "ضَ", sound: "দ্বা" },
      { letter: "رَ", sound: "রা" },
      { letter: "رَ", sound: "রা" },
    ],
  },

  {
    arabic: "أَمَرَ",
    bangla: "আমারা",
    meaning: "আদেশ দিয়েছেন",
    breakdown: [
      { letter: "أَ", sound: "আ" },
      { letter: "مَ", sound: "মা" },
      { letter: "رَ", sound: "রা" },
    ],
  },

  {
    arabic: "مَنَعَ",
    bangla: "মানাআ",
    meaning: "বাধা দিয়েছে",
    breakdown: [
      { letter: "مَ", sound: "মা" },
      { letter: "نَ", sound: "না" },
      { letter: "عَ", sound: "আ" },
    ],
  },

  {
    arabic: "حَكَمَ",
    bangla: "হাকামা",
    meaning: "ফয়সালা করেছেন",
    breakdown: [
      { letter: "حَ", sound: "হা" },
      { letter: "كَمَ", sound: "কামা" },
    ],
  },
  {
    arabic: "عَدَلَ",
    bangla: "আদালা",
    meaning: "ন্যায়বিচার করেছে",
    breakdown: [
      { letter: "عَ", sound: "আ" },
      { letter: "دَ", sound: "দা" },
      { letter: "لَ", sound: "লা" },
    ],
  },

  {
    arabic: "صَبَرَ",
    bangla: "সাবারা",
    meaning: "ধৈর্য ধরেছে",
    breakdown: [
      { letter: "صَ", sound: "সা" },
      { letter: "بَرَ", sound: "বারা" },
    ],
  },
  {
    arabic: "فَرِحَ",
    bangla: "ফারিহা",
    meaning: "খুশি হয়েছে",
    breakdown: [
      { letter: "فَ", sound: "ফা" },
      { letter: "رِ", sound: "রি" },
      { letter: "حَ", sound: "হা" },
    ],
  },

  {
    arabic: "ضَحِكَ",
    bangla: "দাহিকা",
    meaning: "হেসেছে",
    breakdown: [
      { letter: "ضَ", sound: "দ্বা" },
      { letter: "حِ", sound: "হি" },
      { letter: "كَ", sound: "কা" },
    ],
  },

  {
    arabic: "حَمِدَ",
    bangla: "হামিদা",
    meaning: "প্রশংসা করেছে",
    breakdown: [
      { letter: "حَ", sound: "হা" },
      { letter: "مِ", sound: "মি" },
      { letter: "دَ", sound: "দা" },
    ],
  },
  {
    arabic: "سَبَحَ",
    bangla: "সাবাহা",
    meaning: "তাসবিহ করেছে",
    breakdown: [
      { letter: "سَ", sound: "সা" },
      { letter: "بَ", sound: "বা" },
      { letter: "حَ", sound: "হা" },
    ],
  },

  {
    arabic: "دَعَا",
    bangla: "দাআ",
    meaning: "ডেকেছে / দোয়া করেছে",
    breakdown: [
      { letter: "دَ", sound: "দা" },
      { letter: "عَا", sound: "আ" },
    ],
  },
  {
    arabic: "رَجَا",
    bangla: "রাজা",
    meaning: "আশা করেছে",
    breakdown: [
      { letter: "رَ", sound: "রা" },
      { letter: "جَا", sound: "জা" },
    ],
  },

  {
    arabic: "خَشِيَ",
    bangla: "খাশিয়া",
    meaning: "ভয় করেছে",
    breakdown: [
      { letter: "خَ", sound: "খা" },
      { letter: "شِ", sound: "শি" },
      { letter: "يَ", sound: "ইয়া" },
    ],
  },
  {
    arabic: "أَمِنَ",
    bangla: "আমিনা",
    meaning: "নিরাপদ হয়েছে",
    breakdown: [
      { letter: "أَ", sound: "আ" },
      { letter: "مِ", sound: "মি" },
      { letter: "نَ", sound: "না" },
    ],
  },
  {
    arabic: "خَلَقَ",
    bangla: "খালাকা",
    meaning: "সৃষ্টি করেছেন",
    breakdown: [
      { letter: "خَ", sound: "খা" },
      { letter: "لَ", sound: "লা" },
      { letter: "قَ", sound: "কা" },
    ],
  },

  {
    arabic: "رَزَقَ",
    bangla: "রাযাকা",
    meaning: "রিজিক দিয়েছেন",
    breakdown: [
      { letter: "رَ", sound: "রা" },
      { letter: "زَ", sound: "যা" },
      { letter: "قَ", sound: "কা" },
    ],
  },

  {
    arabic: "نَصَرَ",
    bangla: "নাসারা",
    meaning: "সাহায্য করেছেন",
    breakdown: [
      { letter: "نَ", sound: "না" },
      { letter: "صَ", sound: "সা" },
      { letter: "رَ", sound: "রা" },
    ],
  },

  {
    arabic: "فَتَحَ",
    bangla: "ফাতাহা",
    meaning: "খুলেছেন",
    breakdown: [
      { letter: "فَ", sound: "ফা" },
      { letter: "تَ", sound: "তা" },
      { letter: "حَ", sound: "হা" },
    ],
  },

  {
    arabic: "جَعَلَ",
    bangla: "জাআলা",
    meaning: "বানিয়েছেন / করেছেন",
    breakdown: [
      { letter: "جَ", sound: "জা" },
      { letter: "عَ", sound: "আ" },
      { letter: "لَ", sound: "লা" },
    ],
  },

  {
    arabic: "عَلِمَ",
    bangla: "আলিমা",
    meaning: "জেনেছেন",
    breakdown: [
      { letter: "عَ", sound: "আ" },
      { letter: "لِ", sound: "লি" },
      { letter: "مَ", sound: "মা" },
    ],
  },

  {
    arabic: "سَمِعَ",
    bangla: "সামিআ",
    meaning: "শুনেছেন",
    breakdown: [
      { letter: "سَ", sound: "সা" },
      { letter: "مِ", sound: "মি" },
      { letter: "عَ", sound: "আ" },
    ],
  },

  {
    arabic: "رَفَعَ",
    bangla: "রাফাআ",
    meaning: "উঁচু করেছেন",
    breakdown: [
      { letter: "رَ", sound: "রা" },
      { letter: "فَ", sound: "ফা" },
      { letter: "عَ", sound: "আ" },
    ],
  },

  {
    arabic: "وَعَدَ",
    bangla: "ওয়াআদা",
    meaning: "প্রতিশ্রুতি দিয়েছেন",
    breakdown: [
      { letter: "وَ", sound: "ওয়া" },
      { letter: "عَ", sound: "আ" },
      { letter: "دَ", sound: "দা" },
    ],
  },

  {
    arabic: "أَجَابَ",
    bangla: "আজাবা",
    meaning: "জবাব দিয়েছেন",
    breakdown: [
      { letter: "أَ", sound: "আ" },
      { letter: "جَ", sound: "জা" },
      { letter: "بَ", sound: "বা" },
    ],
  },

  {
    arabic: "بَلَغَ",
    bangla: "বালাগা",
    meaning: "পৌঁছেছে",
    breakdown: [
      { letter: "بَ", sound: "বা" },
      { letter: "لَ", sound: "লা" },
      { letter: "غَ", sound: "গা" },
    ],
  },
  ,
  {
    arabic: "خُلِقَ",
    bangla: "খুলিকা",
    meaning: "সৃষ্টি করা হয়েছে",
    breakdown: [
      { letter: "خُ", sound: "খু" },
      { letter: "لِ", sound: "লি" },
      { letter: "قَ", sound: "কা" },
    ],
  },

  {
    arabic: "رُزِقَ",
    bangla: "রুজিকা",
    meaning: "রিজিক দেওয়া হয়েছে",
    breakdown: [
      { letter: "رُ", sound: "রু" },
      { letter: "زِ", sound: "জি" },
      { letter: "قَ", sound: "কা" },
    ],
  },

  {
    arabic: "كُتِبَ",
    bangla: "কুতিবা",
    meaning: "লিখে দেওয়া হয়েছে / ফরজ করা হয়েছে",
    breakdown: [
      { letter: "كُ", sound: "কু" },
      { letter: "تِ", sound: "তি" },
      { letter: "بَ", sound: "বা" },
    ],
  },

  {
    arabic: "نُصِرَ",
    bangla: "নুসিরা",
    meaning: "সাহায্য করা হয়েছে",
    breakdown: [
      { letter: "نُ", sound: "নু" },
      { letter: "صِ", sound: "সি" },
      { letter: "رَ", sound: "রা" },
    ],
  },

  {
    arabic: "غُفِرَ",
    bangla: "গুফিরা",
    meaning: "ক্ষমা করা হয়েছে",
    breakdown: [
      { letter: "غُ", sound: "গু" },
      { letter: "فِ", sound: "ফি" },
      { letter: "رَ", sound: "রা" },
    ],
  },

  {
    arabic: "عُلِمَ",
    bangla: "উলিমা",
    meaning: "জানা হয়েছে",
    breakdown: [
      { letter: "عُ", sound: "উ" },
      { letter: "لِ", sound: "লি" },
      { letter: "مَ", sound: "মা" },
    ],
  },

  {
    arabic: "ذُكِرَ",
    bangla: "যুকিরা",
    meaning: "স্মরণ করা হয়েছে",
    breakdown: [
      { letter: "ذُ", sound: "যু" },
      { letter: "كِ", sound: "কি" },
      { letter: "رَ", sound: "রা" },
    ],
  },

  {
    arabic: "شُكِرَ",
    bangla: "শুকিরা",
    meaning: "কৃতজ্ঞতা জানানো হয়েছে",
    breakdown: [
      { letter: "شُ", sound: "শু" },
      { letter: "كِ", sound: "কি" },
      { letter: "رَ", sound: "রা" },
    ],
  },

  {
    arabic: "فُتِحَ",
    bangla: "ফুতিহা",
    meaning: "খোলা হয়েছে",
    breakdown: [
      { letter: "فُ", sound: "ফু" },
      { letter: "تِ", sound: "তি" },
      { letter: "حَ", sound: "হা" },
    ],
  },

  {
    arabic: "عُبِدَ",
    bangla: "উবিদা",
    meaning: "ইবাদত করা হয়েছে",
    breakdown: [
      { letter: "عُ", sound: "উ" },
      { letter: "بِ", sound: "বি" },
      { letter: "دَ", sound: "দা" },
    ],
  },

  {
    arabic: "حُمِدَ",
    bangla: "হুমিদা",
    meaning: "প্রশংসা করা হয়েছে",
    breakdown: [
      { letter: "حُ", sound: "হু" },
      { letter: "مِ", sound: "মি" },
      { letter: "دَ", sound: "দা" },
    ],
  },

  {
    arabic: "سُجِدَ",
    bangla: "সুজিদা",
    meaning: "সিজদা করা হয়েছে",
    breakdown: [
      { letter: "سُ", sound: "সু" },
      { letter: "جِ", sound: "জি" },
      { letter: "دَ", sound: "দা" },
    ],
  },

  {
    arabic: "دُعِيَ",
    bangla: "দুইয়া",
    meaning: "ডাকা হয়েছে / দোয়া করা হয়েছে",
    breakdown: [
      { letter: "دُ", sound: "দু" },
      { letter: "عِ", sound: "ই" },
      { letter: "يَ", sound: "ইয়া" },
    ],
  },

  {
    arabic: "قُرِئَ",
    bangla: "কুরিয়া",
    meaning: "পড়া হয়েছে",
    breakdown: [
      { letter: "قُ", sound: "কু" },
      { letter: "رِ", sound: "রি" },
      { letter: "ئَ", sound: "আ" },
    ],
  },

  {
    arabic: "سُمِعَ",
    bangla: "সুমিআ",
    meaning: "শোনা হয়েছে",
    breakdown: [
      { letter: "سُ", sound: "সু" },
      { letter: "مِ", sound: "মি" },
      { letter: "عَ", sound: "আ" },
    ],
  },

  {
    arabic: "رُفِعَ",
    bangla: "রুফিআ",
    meaning: "উঁচু করা হয়েছে",
    breakdown: [
      { letter: "رُ", sound: "রু" },
      { letter: "فِ", sound: "ফি" },
      { letter: "عَ", sound: "আ" },
    ],
  },
];

export default function FathaWords() {
  return (
    <div className="space-y-6">
      {fathaWords.map((word, index) => {
        if (!word) return null;
        return (
          <div
            key={index}
            className="group bg-white rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden"
          >
            {/* Word Header - Premium Rose Gradient */}
            <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 text-white font-bold backdrop-blur-sm border border-white/20">
                  {index + 1}
                </span>
                <span className="text-xl font-bold text-white tracking-tight leading-none group-hover:translate-x-1 transition-transform">
                  {word.meaning}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-xs font-semibold bg-rose-900/20 text-rose-50 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest whitespace-nowrap">
                  Fatha • {word.bangla}
                </span>
              </div>
            </div>

            {/* Word Content */}
            <div className="p-8">
              {/* Main Word Section */}
              <div className="flex flex-col items-center mb-10">
                <div
                  dir="rtl"
                  className="text-7xl md:text-8xl text-slate-800 mb-6 leading-[1.9] transition-all duration-500 group-hover:scale-105 group-hover:text-rose-950"
                  style={{
                    fontFamily: "'Amiri Quran', serif",
                  }}
                >
                  {word.arabic}
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-rose-400 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative text-3xl font-black text-rose-600 bg-rose-50/50 px-6 py-2 rounded-2xl border border-rose-100/50">
                    {word.bangla}
                  </div>
                </div>
              </div>

              {/* Letter Breakdown - Premium Cards */}
              <div className="bg-slate-50/50 rounded-3xl p-6 border border-slate-100 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-0.5 rounded-full border border-slate-100 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                  অক্ষর বিশ্লেষণ • Breakdown
                </div>

                <div
                  className="flex flex-wrap justify-center gap-4 pt-2"
                  dir="rtl"
                >
                  {word.breakdown.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0,03)] border border-white hover:border-rose-300 hover:shadow-rose-100 transition-all duration-300 min-w-[80px]"
                    >
                      <div
                        className="text-4xl text-slate-700 mb-2 leading-[2]"
                        style={{
                          fontFamily: "'Amiri Quran', serif",
                        }}
                      >
                        {item.letter}
                      </div>
                      {item.sound && (
                        <div className="text-sm font-bold text-rose-600 bg-rose-50 px-3 py-0.5 rounded-lg border border-rose-100/50">
                          {item.sound}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
