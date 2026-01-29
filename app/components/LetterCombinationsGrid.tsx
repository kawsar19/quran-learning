"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const AUDIO_SRC = "/audios/Arabic 1.m4a";

// Map each base Arabic letter to its audio segment (start/end in seconds)
const LETTER_AUDIO: Record<string, { start: number; end: number }> = {
  ا: { start: 2, end: 3 },
  ب: { start: 3.5, end: 4.7 },
  ت: { start: 5, end: 6.8 },
  ث: { start: 6.8, end: 8.7 },
  ج: { start: 8.7, end: 10.5 },
  ح: { start: 10.6, end: 12.6 },
  خ: { start: 12.7, end: 14.6 },
  د: { start: 14.7, end: 16.6 },
  ذ: { start: 16.7, end: 18.6 },
  ر: { start: 18.7, end: 20.6 },
  ز: { start: 20.7, end: 22.6 },
  س: { start: 22.7, end: 24.6 },
  ش: { start: 24.7, end: 26.6 },
  ص: { start: 27, end: 30 },
  ض: { start: 30, end: 32.5 },
  ط: { start: 32.5, end: 34.5 },
  ظ: { start: 34.5, end: 36.5 },
  ع: { start: 36.5, end: 39 },
  غ: { start: 39, end: 42.5 },
  ف: { start: 42.5, end: 44.5 },
  ق: { start: 44.5, end: 47 },
  ك: { start: 47.2, end: 49 },
  ل: { start: 49, end: 52 },
  م: { start: 52, end: 55 },
  ن: { start: 55, end: 57 },
  ه: { start: 59.5, end: 62.5 },
  و: { start: 57.5, end: 59.7 },
  ي: { start: 66, end: 69 },
};

// Strip Arabic diacritics and connection marks to get base letter
function getBaseLetters(arabic: string): string[] {
  // Remove tatweel (ـ) and common diacritics
  const cleaned = arabic.replace(/\u0640/g, ""); // remove tatweel ـ
  const bases: string[] = [];
  for (const char of cleaned) {
    // Check if it's a real Arabic letter (not a diacritic/space)
    if (LETTER_AUDIO[char]) {
      bases.push(char);
    }
  }
  return bases;
}

interface LetterCombination {
  bangla: string;
  arabic: string;
}

interface LetterCombinationsGridProps {
  combinations: LetterCombination[];
}

export default function LetterCombinationsGrid({
  combinations,
}: LetterCombinationsGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chainRef = useRef<boolean>(false);

  const stopPlayback = useCallback(() => {
    chainRef.current = false;
    if (audioRef.current) audioRef.current.pause();
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(null);
  }, []);

  const playItem = useCallback(
    (index: number) => {
      // Toggle off if already playing
      if (activeIndex === index) {
        stopPlayback();
        return;
      }

      stopPlayback();
      setActiveIndex(index);

      const letters = getBaseLetters(combinations[index].arabic);
      if (letters.length === 0) return;

      if (!audioRef.current) {
        audioRef.current = new Audio(AUDIO_SRC);
      }
      const audio = audioRef.current;
      chainRef.current = true;

      // Play letters sequentially
      let i = 0;
      const playNext = () => {
        if (!chainRef.current || i >= letters.length) {
          setActiveIndex(null);
          chainRef.current = false;
          return;
        }
        const seg = LETTER_AUDIO[letters[i]];
        if (!seg) {
          i++;
          playNext();
          return;
        }
        audio.currentTime = seg.start;
        audio.play().catch(() => {
          setActiveIndex(null);
          chainRef.current = false;
        });
        const duration = (seg.end - seg.start) * 1000;
        timerRef.current = setTimeout(() => {
          audio.pause();
          i++;
          playNext();
        }, duration);
      };
      playNext();
    },
    [activeIndex, combinations, stopPlayback]
  );

  useEffect(() => {
    return () => {
      chainRef.current = false;
      if (audioRef.current) audioRef.current.pause();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      dir="rtl"
    >
      {combinations.map((item, index) => (
        <div
          key={index}
          onClick={() => playItem(index)}
          className={`group cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ${
            activeIndex === index
              ? "border-emerald-500 ring-2 ring-emerald-400 scale-105"
              : "border-gray-100 hover:border-emerald-300 hover:scale-105"
          } bg-white`}
        >
          {/* Number Badge */}
          <div
            className={`text-white px-3 py-1.5 flex items-center justify-between ${
              activeIndex === index
                ? "bg-gradient-to-r from-emerald-600 to-teal-600"
                : "bg-gradient-to-r from-emerald-500 to-teal-500"
            }`}
          >
            <span className="text-sm font-bold">{index + 1}</span>
            <div className="flex items-center gap-1">
              {activeIndex === index && (
                <div className="flex gap-0.5 mr-1">
                  <div
                    className="w-1 h-3 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="w-1 h-4 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-1 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              )}
              <span className="text-xs opacity-80">অক্ষর</span>
            </div>
          </div>

          {/* Arabic Letter - Large */}
          <div
            className={`py-6 px-4 text-center transition-colors ${
              activeIndex === index
                ? "bg-gradient-to-b from-emerald-50 to-white"
                : "bg-gradient-to-b from-gray-50 to-white group-hover:from-emerald-50 group-hover:to-white"
            }`}
            style={{
              fontFamily:
                "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
            }}
          >
            <span
              className={`text-5xl md:text-6xl transition-colors ${
                activeIndex === index
                  ? "text-emerald-700"
                  : "text-gray-800 group-hover:text-emerald-700"
              }`}
            >
              {item.arabic}
            </span>
          </div>

          {/* Bangla Text */}
          <div
            className={`px-3 py-3 text-center border-t border-gray-100 transition-colors ${
              activeIndex === index
                ? "bg-emerald-50"
                : "bg-gray-50 group-hover:bg-emerald-50"
            }`}
          >
            <p
              className={`text-sm md:text-base font-medium ${
                activeIndex === index
                  ? "text-emerald-700"
                  : "text-gray-600 group-hover:text-emerald-700"
              }`}
            >
              {item.bangla}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
