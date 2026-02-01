"use client";

import { useState, useRef, useCallback } from "react";

const WORDS = [
  { arabic: "قَرَأَ", bangla: "কারাআ", start: 0, end: 3 },
  { arabic: "ذَكَرَ", bangla: "যাকারা", start: 3, end: 6 },
  { arabic: "سَجَدَ", bangla: "সাজাদা", start: 6, end: 9 },
  { arabic: "شَكَرَ", bangla: "শাকারা", start: 9, end: 12 },
  { arabic: "غَفَرَ", bangla: "গাফারা", start: 12, end: 15 },
  { arabic: "كَفَرَ", bangla: "কাফারা", start: 15, end: 18 },
  { arabic: "ضَلَلَ", bangla: "দালালা", start: 18, end: 21 },
  { arabic: "نَفَعَ", bangla: "নাফাআ", start: 21, end: 24 },
  { arabic: "ضَرَرَ", bangla: "দারারা", start: 24, end: 27 },
  { arabic: "أَمَرَ", bangla: "আমারা", start: 27, end: 30 },
  { arabic: "مَنَعَ", bangla: "মানাআ", start: 30, end: 33 },
  { arabic: "حَكَمَ", bangla: "হাকামা", start: 33, end: 36 },
  { arabic: "عَدَلَ", bangla: "আদালা", start: 36, end: 39 },
  { arabic: "صَبَرَ", bangla: "সাবারা", start: 39, end: 42 },
  { arabic: "فَرِحَ", bangla: "ফারিহা", start: 42, end: 45 },
  { arabic: "ضَحِكَ", bangla: "দাহিকা", start: 45, end: 48 },
  { arabic: "حَمِدَ", bangla: "হামিদা", start: 48, end: 51 },
  { arabic: "سَبَحَ", bangla: "সাবাহা", start: 51, end: 54 },
  { arabic: "دَعَا", bangla: "দাআ", start: 54, end: 57 },
  { arabic: "رَجَا", bangla: "রাজা", start: 57, end: 60 },
  { arabic: "خَشِيَ", bangla: "খাশিয়া", start: 60, end: 63 },
  { arabic: "أَمِنَ", bangla: "আমিনা", start: 63, end: 66 },
  { arabic: "خَلَقَ", bangla: "খালাকা", start: 66, end: 69 },
  { arabic: "رَزَقَ", bangla: "রাযাকা", start: 69, end: 72 },
  { arabic: "نَصَرَ", bangla: "নাসারা", start: 72, end: 75 },
  { arabic: "فَتَحَ", bangla: "ফাতাহা", start: 75, end: 78 },
  { arabic: "جَعَلَ", bangla: "জাআলা", start: 78, end: 81 },
  { arabic: "عَلِمَ", bangla: "আলিমা", start: 81, end: 84 },
  { arabic: "سَمِعَ", bangla: "সামিআ", start: 84, end: 87 },
  { arabic: "رَفَعَ", bangla: "রাফাআ", start: 87, end: 90 },
  { arabic: "وَعَدَ", bangla: "ওয়াআদা", start: 90, end: 93 },
  { arabic: "أَجَابَ", bangla: "আজাবা", start: 93, end: 96 },
  { arabic: "بَلَغَ", bangla: "বালাগা", start: 96, end: 99 },
  { arabic: "خُلِقَ", bangla: "খুলিকা", start: 99, end: 102 },
  { arabic: "رُزِقَ", bangla: "রুজিকা", start: 102, end: 105 },
  { arabic: "كُتِبَ", bangla: "কুতিবা", start: 105, end: 108 },
  { arabic: "نُصِرَ", bangla: "নুসিরা", start: 108, end: 111 },
  { arabic: "غُفِرَ", bangla: "গুফিরা", start: 111, end: 114 },
  { arabic: "عُلِمَ", bangla: "উলিমা", start: 114, end: 117 },
  { arabic: "ذُكِرَ", bangla: "যুকিরা", start: 117, end: 120 },
  { arabic: "شُكِرَ", bangla: "শুকিরা", start: 120, end: 123 },
  { arabic: "فُتِحَ", bangla: "ফুতিহা", start: 123, end: 126 },
  { arabic: "عُبِدَ", bangla: "উবিদা", start: 126, end: 129 },
  { arabic: "حُمِدَ", bangla: "হুমিদা", start: 129, end: 132 },
  { arabic: "سُجِدَ", bangla: "সুজিদা", start: 132, end: 135 },
  { arabic: "دُعِيَ", bangla: "দুইয়া", start: 135, end: 138 },
  { arabic: "قُرِئَ", bangla: "কুরিয়া", start: 138, end: 141 },
  { arabic: "سُمِعَ", bangla: "সুমিআ", start: 141, end: 144 },
  { arabic: "رُفِعَ", bangla: "রুফিআ", start: 144, end: 147 },
  { arabic: "وُعِدَ", bangla: "উইদা", start: 147, end: 150 },
];

export default function WordAudioPlayer() {
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

      const word = WORDS[index];
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
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3" dir="rtl">
      {WORDS.map((word, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            type="button"
            onClick={() => playWord(index)}
            className={`${
              isActive
                ? "bg-gradient-to-br from-rose-100 to-pink-100 border-rose-400 ring-2 ring-rose-300"
                : "bg-gradient-to-br from-white to-rose-50 border-rose-100 hover:border-rose-300"
            } border rounded-xl p-3 text-center hover:shadow-lg transition-all cursor-pointer`}
          >
            <div
              className={`text-2xl md:text-3xl text-gray-800 mb-1 ${
                isActive ? "animate-pulse" : ""
              }`}
              style={{
                fontFamily: "'Amiri Quran', serif",
                lineHeight: "2",
              }}
            >
              {word.arabic}
            </div>
            <div className="text-xs font-bold text-rose-600 bg-white rounded-lg py-1 px-2">
              {word.bangla}
            </div>
          </button>
        );
      })}
    </div>
  );
}
