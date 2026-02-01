"use client";

import { useState, useRef, useCallback } from "react";

const fathaWords = [
  {
    arabic: "قَرَأَ",
    bangla: "কারাআ",
    meaning: "পড়েছে",
    start: 0,
    end: 8,
    breakdown: [
      { letter: "قَ", sound: "কা" },
      { letter: "رَ", sound: "রা" },
      { letter: "أَ", sound: "আ" },
    ],
  },
  {
    arabic: "ذَكَرَ",
    bangla: "যাকারা",
    meaning: "স্মরণ করেছে",
    start: 8,
    end: 16,
    breakdown: [
      { letter: "ذَ", sound: "যা" },
      { letter: "كَرَ", sound: "কারা" },
    ],
  },
  {
    arabic: "سَجَدَ",
    bangla: "সাজাদা",
    meaning: "সিজদা করেছে",
    start: 16,
    end: 24,
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
    start: 24,
    end: 32,
    breakdown: [
      { letter: "شَ", sound: "শা" },
      { letter: "كَرَ", sound: "কারা" },
    ],
  },
  {
    arabic: "غَفَرَ",
    bangla: "গাফারা",
    meaning: "ক্ষমা করেছেন",
    start: 32,
    end: 39,
    breakdown: [
      { letter: "غَ", sound: "গা" },
      { letter: "فَرَ", sound: "ফারা" },
    ],
  },
  {
    arabic: "كَفَرَ",
    bangla: "কাফারা",
    meaning: "অস্বীকার করেছে",
    start: 39,
    end: 47,
    breakdown: [
      { letter: "كَ", sound: "কা" },
      { letter: "فَرَ", sound: "ফারা" },
    ],
  },
  {
    arabic: "ضَلَلَ",
    bangla: "দালালা",
    meaning: "পথভ্রষ্ট হয়েছে",
    start: 47,
    end: 54,
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
    start: 54,
    end: 61.5,
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
    start: 61.5,
    end: 69,
    breakdown: [
      { letter: "ضَ", sound: "দ্বা" },
      { letter: "رَ", sound: "রা" },
      { letter: "رَ", sound: "রা" },
    ],
  },
  {
    arabic: "أَمَرَ",
    bangla: "আমারা",
    meaning: "আদেশ দিয়েছেন",
    start: 69,
    end: 76,
    breakdown: [
      { letter: "أَ", sound: "আ" },
      { letter: "مَ", sound: "মা" },
      { letter: "رَ", sound: "রা" },
    ],
  },
  {
    arabic: "مَنَعَ",
    bangla: "মানাআ",
    meaning: "বাধা দিয়েছে",
    start: 76,
    end: 84,
    breakdown: [
      { letter: "مَ", sound: "মা" },
      { letter: "نَ", sound: "না" },
      { letter: "عَ", sound: "আ" },
    ],
  },
  {
    arabic: "حَكَمَ",
    bangla: "হাকামা",
    meaning: "ফয়সালা করেছেন",
    start: 84,
    end: 93,
    breakdown: [
      { letter: "حَ", sound: "হা" },
      { letter: "كَمَ", sound: "কামা" },
    ],
  },
  {
    arabic: "عَدَلَ",
    bangla: "আদালা",
    meaning: "ন্যায়বিচার করেছে",
    start: 93,
    end: 101,
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
    start: 101,
    end: 110,
    breakdown: [
      { letter: "صَ", sound: "সা" },
      { letter: "بَرَ", sound: "বারা" },
    ],
  },
  {
    arabic: "فَرِحَ",
    bangla: "ফারিহা",
    meaning: "খুশি হয়েছে",
    start: 110,
    end: 117,
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
    start: 117,
    end: 126,
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
    start: 126,
    end: 134,
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
    start: 133,
    end: 141,
    breakdown: [
      { letter: "سَ", sound: "সা" },
      { letter: "بَ", sound: "বা" },
      { letter: "حَ", sound: "হা" },
    ],
  },
  {
    arabic: "دَعَا",
    bangla: "দাআ",
    meaning: "দোয়া করেছে",
    start: 141,
    end: 149,
    breakdown: [
      { letter: "دَ", sound: "দা" },
      { letter: "عَا", sound: "আ" },
    ],
  },
  {
    arabic: "رَجَا",
    bangla: "রাজা",
    meaning: "আশা করেছে",
    start: 149,
    end: 156,
    breakdown: [
      { letter: "رَ", sound: "রা" },
      { letter: "جَا", sound: "জা" },
    ],
  },
  {
    arabic: "خَشِيَ",
    bangla: "খাশিয়া",
    meaning: "ভয় করেছে",
    start: 156,
    end: 164,
    breakdown: [
      { letter: "خَ", sound: "খা" },
      { letter: "شِ", sound: "শি" },
      { letter: "يَ", sound: "ইয়া" },
    ],
  },
  {
    arabic: "أَمِنَ",
    bangla: "আমিনা",
    meaning: "নিরাপদ হয়েছে",
    start: 164,
    end: 171,
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
    start: 171,
    end: 178,
    breakdown: [
      { letter: "خَ", sound: "খা" },
      { letter: "لَ", sound: "লা" },
      { letter: "قَ", sound: "কা" },
    ],
  },
  {
    arabic: "رَزَقَ",
    bangla: "রাযাকা",
    meaning: "রিজিক দিয়েছেন",
    start: 178,
    end: 185,
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
    start: 185,
    end: 193,
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
    start: 193,
    end: 200,
    breakdown: [
      { letter: "فَ", sound: "ফা" },
      { letter: "تَ", sound: "তা" },
      { letter: "حَ", sound: "হা" },
    ],
  },
  {
    arabic: "جَعَلَ",
    bangla: "জাআলা",
    meaning: "বানিয়েছেন",
    start: 200,
    end: 209,
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
    start: 209,
    end: 218,
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
    start: 218,
    end: 225,
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
    start: 225,
    end: 234,
    breakdown: [
      { letter: "রَ", sound: "রা" },
      { letter: "فَ", sound: "ফা" },
      { letter: "عَ", sound: "আ" },
    ],
  },
  {
    arabic: "وَعَدَ",
    bangla: "ওয়াআদা",
    meaning: "প্রতিশ্রুতি দিয়েছেন",
    start: 234,
    end: 242,
    breakdown: [
      { letter: "وَ", sound: "ওয়া" },
      { letter: "عَ", sound: "আ" },
      { letter: "دَ", sound: "দা" },
    ],
  },
  {
    arabic: "أَجَابَ",
    bangla: "আজাবা",
    meaning: "জবাব দিয়েছেন",
    start: 242,
    end: 252,
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
    start: 252,
    end: 260,
    breakdown: [
      { letter: "بَ", sound: "বা" },
      { letter: "لَ", sound: "লা" },
      { letter: "غَ", sound: "গা" },
    ],
  },
  {
    arabic: "خُلِقَ",
    bangla: "খুলিকা",
    meaning: "সৃষ্টি করা হয়েছে",
    start: 260,
    end: 267,
    breakdown: [
      { letter: "خُ", sound: "খু" },
      { letter: "لِ", sound: "লি" },
      { letter: "قَ", sound: "কা" },
    ],
  },
  {
    arabic: "رُزِقَ",
    bangla: "রুজিকা",
    meaning: "রিজিক দেওয়া হয়েছে",
    start: 267,
    end: 274,
    breakdown: [
      { letter: "رُ", sound: "রু" },
      { letter: "زِ", sound: "জি" },
      { letter: "قَ", sound: "কা" },
    ],
  },
  {
    arabic: "كُتِبَ",
    bangla: "কুতিবা",
    meaning: "ফরজ করা হয়েছে",
    start: 274,
    end: 281,
    breakdown: [
      { letter: "كُ", sound: "কু" },
      { letter: "تِ", sound: "তি" },
      { letter: "بَ", sound: "বা" },
    ],
  },
  {
    arabic: "نُصِرَ",
    bangla: "নুসিরা",
    meaning: "সাহায্য করা হয়েছে",
    start: 281,
    end: 288,
    breakdown: [
      { letter: "نُ", sound: "নু" },
      { letter: "صِ", sound: "সি" },
      { letter: "رَ", sound: "রা" },
    ],
  },
  {
    arabic: "غُفِرَ",
    bangla: "গুফিরা",
    meaning: "ক্ষমা করা হয়েছে",
    start: 288,
    end: 297,
    breakdown: [
      { letter: "غُ", sound: "গু" },
      { letter: "فِ", sound: "ফি" },
      { letter: "رَ", sound: "রা" },
    ],
  },
  {
    arabic: "عُلِمَ",
    bangla: "উলিমা",
    meaning: "জানা হয়েছে",
    start: 297,
    end: 306,
    breakdown: [
      { letter: "عُ", sound: "উ" },
      { letter: "لِ", sound: "লি" },
      { letter: "مَ", sound: "মা" },
    ],
  },
  {
    arabic: "ذُكِرَ",
    bangla: "যুকিরা",
    meaning: "স্মরণ করা হয়েছে",
    start: 306,
    end: 315,
    breakdown: [
      { letter: "ذُ", sound: "যু" },
      { letter: "كِ", sound: "কি" },
      { letter: "رَ", sound: "রা" },
    ],
  },
  {
    arabic: "شُكِرَ",
    bangla: "শুকিরা",
    meaning: "কৃতজ্ঞতা জানানো হয়েছে",
    start: 336,
    end: 344,
    breakdown: [
      { letter: "شُ", sound: "শু" },
      { letter: "كِ", sound: "কি" },
      { letter: "رَ", sound: "রা" },
    ],
  },
  {
    arabic: "فُتِحَ",
    bangla: "ফুতিহা",
    meaning: "খোলা হয়েছে",
    start: 343,
    end: 350,
    breakdown: [
      { letter: "فُ", sound: "ফু" },
      { letter: "تِ", sound: "তি" },
      { letter: "حَ", sound: "হা" },
    ],
  },
  {
    arabic: "عُبِدَ",
    bangla: "উবিদা",
    meaning: "ইবাদত করা হয়েছে",
    start: 350,
    end: 359,
    breakdown: [
      { letter: "عُ", sound: "উ" },
      { letter: "بِ", sound: "বি" },
      { letter: "دَ", sound: "দা" },
    ],
  },
  {
    arabic: "حُمِدَ",
    bangla: "হুমিদা",
    meaning: "প্রশংসা করা হয়েছে",
    start: 358,
    end: 367,
    breakdown: [
      { letter: "حُ", sound: "হু" },
      { letter: "مِ", sound: "মি" },
      { letter: "دَ", sound: "দা" },
    ],
  },
  {
    arabic: "سُجِدَ",
    bangla: "সুজিদা",
    meaning: "সিজদা করা হয়েছে",
    start: 366,
    end: 375,
    breakdown: [
      { letter: "سُ", sound: "সু" },
      { letter: "جِ", sound: "জি" },
      { letter: "دَ", sound: "দা" },
    ],
  },

  {
    arabic: "قُرِئَ",
    bangla: "কুরিয়া",
    meaning: "পড়া হয়েছে",
    start: 375,
    end: 384,
    breakdown: [
      { letter: "قُ", sound: "কু" },
      { letter: "رِ", sound: "রি" },
      { letter: "ئَ", sound: "আ" },
    ],
  },
  {
    arabic: "سُمِعَ",
    bangla: "সুমিআ",
    meaning: "শোনা হয়েছে",
    start: 384,
    end: 393,
    breakdown: [
      { letter: "سُ", sound: "সু" },
      { letter: "مِ", sound: "মি" },
      { letter: "عَ", sound: "আ" },
    ],
  },
  {
    arabic: "رُفِعَ",
    bangla: "রুফিআ",
    meaning: "উঁচু করা হয়েছে",
    start: 391,
    end: 402,
    breakdown: [
      { letter: "رُ", sound: "রু" },
      { letter: "فِ", sound: "ফি" },
      { letter: "عَ", sound: "আ" },
    ],
  },
];

export default function FathaWords() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopPlayback = useCallback(() => {
    if (audioRef.current) audioRef.current.pause();
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(null);
  }, []);

  const playWord = useCallback(
    (index: number) => {
      if (activeIndex === index) {
        stopPlayback();
        return;
      }
      stopPlayback();
      setActiveIndex(index);

      const word = fathaWords[index];
      if (!audioRef.current) {
        audioRef.current = new Audio("/audios/lesson-6.m4a");
      }
      const audio = audioRef.current;
      audio.currentTime = word.start;
      audio.play().catch(() => setActiveIndex(null));

      timerRef.current = setTimeout(
        () => {
          audio.pause();
          setActiveIndex(null);
        },
        (word.end - word.start) * 1000,
      );
    },
    [activeIndex, stopPlayback],
  );

  return (
    <div className="space-y-3">
      {fathaWords.map((word, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            type="button"
            onClick={() => playWord(index)}
            className={`w-full text-left rounded-xl border p-4 transition-all ${
              isActive
                ? "bg-rose-50 border-rose-400 ring-2 ring-rose-200 shadow-md"
                : "bg-white border-slate-100 hover:border-rose-200 hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Number */}
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive
                    ? "bg-rose-500 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {index + 1}
              </span>

              {/* Arabic */}
              <div
                dir="rtl"
                className={`text-3xl md:text-4xl flex-shrink-0 ${isActive ? "animate-pulse" : ""}`}
                style={{
                  fontFamily: "'Amiri Quran', serif",
                  lineHeight: "1.8",
                }}
              >
                {word.arabic}
              </div>

              {/* Bangla + Meaning */}
              <div className="flex-1 min-w-0">
                <div className="text-lg font-bold text-rose-600">
                  {word.bangla}
                </div>
                <div className="text-xs text-slate-500 truncate">
                  {word.meaning}
                </div>
              </div>

              {/* Breakdown */}
              <div className="hidden sm:flex items-center gap-1.5" dir="rtl">
                {word.breakdown.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-slate-50 border border-slate-100 rounded-md px-2.5 py-0.5"
                  >
                    <span style={{ fontFamily: "'Amiri Quran', serif" }}>
                      {item.letter}
                    </span>
                    <span className="text-rose-500 ml-1 mr-2.5">
                      {item.sound}
                    </span>
                  </span>
                ))}
              </div>

              {/* Play icon */}
              <span
                className={`flex-shrink-0 text-lg ${isActive ? "text-rose-500" : "text-slate-300"}`}
              >
                {isActive ? "⏸" : "▶"}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
