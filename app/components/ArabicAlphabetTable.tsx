"use client";
import { useState, useRef, useEffect } from "react";

const AUDIO_SRC = "/audios/Arabic 1.m4a";

const arabicLetters = [
  { letter: "ا", name: "Alif", bnName: "আলিফ", start: 2, end: 3 },
  { letter: "ب", name: "Ba", bnName: "বা", start: 3.5, end: 4.7 },
  { letter: "ت", name: "Ta", bnName: "তা", start: 5, end: 6.8 },
  { letter: "ث", name: "Tha", bnName: "ছা", start: 6.8, end: 8.7 },
  { letter: "ج", name: "Jim", bnName: "জীম", start: 8.7, end: 10.5 },
  { letter: "ح", name: "Ha", bnName: "হা", start: 10.6, end: 12.6 },
  { letter: "خ", name: "Kha", bnName: "খা", start: 12.7, end: 14.6 },
  { letter: "د", name: "Dal", bnName: "দাল", start: 14.7, end: 16.6 },
  { letter: "ذ", name: "Dhal", bnName: "যাল", start: 16.7, end: 18.6 },
  { letter: "ر", name: "Ra", bnName: "র", start: 18.7, end: 20.6 },
  { letter: "ز", name: "Zay", bnName: "ঝা", start: 20.7, end: 22.6 },
  { letter: "س", name: "Sin", bnName: "সীন", start: 22.7, end: 24.6 },
  { letter: "ش", name: "Shin", bnName: "শীন", start: 24.7, end: 26.6 },
  { letter: "ص", name: "Sad", bnName: "সোয়াদ", start: 27, end: 30 },
  { letter: "ض", name: "Dad", bnName: "দোয়াদ", start: 30, end: 32.5 },
  { letter: "ط", name: "Ta", bnName: "তয়া", start: 32.5, end: 34.5 },
  { letter: "ظ", name: "Za", bnName: "জয়া", start: 34.5, end: 36.5 },
  { letter: "ع", name: "Ayn", bnName: "আইন", start: 36.5, end: 39 },
  { letter: "غ", name: "Ghayn", bnName: "গাইন", start: 39, end: 42.5 },
  { letter: "ف", name: "Fa", bnName: "ফা", start: 42.5, end: 44.5 },
  { letter: "ق", name: "Qaf", bnName: "ক্বফ", start: 44.5, end: 47.5 },
  { letter: "ك", name: "Kaf", bnName: "কাফ", start: 47.2, end: 50 },
  { letter: "ل", name: "Lam", bnName: "লাম", start: 49, end: 52 },
  { letter: "م", name: "Mim", bnName: "মীম", start: 52, end: 55 },
  { letter: "ن", name: "Nun", bnName: "নুন", start: 55, end: 58 },
  { letter: "ه", name: "Ha", bnName: "হা", start: 59.5, end: 62.5 },
  { letter: "و", name: "Waw", bnName: "ওয়াও", start: 57.5, end: 59.7 },
  { letter: "ي", name: "Ya", bnName: "ইয়া", start: 66, end: 69 },
];

export default function ArabicAlphabetTable() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playSegment = (index: number) => {
    const { start, end } = arabicLetters[index];

    // If clicking the same letter that is playing, stop it
    if (activeIndex === index && audioRef.current) {
      audioRef.current.pause();
      if (timerRef.current) clearTimeout(timerRef.current);
      setActiveIndex(null);
      return;
    }

    // Stop previous
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (timerRef.current) clearTimeout(timerRef.current);

    setActiveIndex(index);

    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_SRC);
    }

    const audio = audioRef.current;
    audio.currentTime = start;
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
      setActiveIndex(null);
    });

    const duration = (end - start) * 1000;
    timerRef.current = setTimeout(() => {
      audio.pause();
      setActiveIndex(null);
    }, duration);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative group">
        {/* Modern decorative glass background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl   overflow-hidden">
          {/* Header section of the table */}

          <div className="p-4 sm:p-8">
            <div
              className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-7 gap-3 sm:gap-4"
              dir="rtl"
            >
              {arabicLetters.map((item, index) => (
                <button
                  key={index}
                  onClick={() => playSegment(index)}
                  className={`
                    group/letter
                    relative aspect-square
                    flex flex-col items-center justify-center
                    rounded-xl border-2 transition-all duration-300
                    ${
                      activeIndex === index
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105 z-10"
                        : "bg-white border-emerald-50 text-gray-800 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1"
                    }
                  `}
                >
                  <span
                    className={`
                    arabic text-4xl sm:text-5xl md:text-6xl mb-1
                    transition-transform duration-300
                    ${activeIndex === index ? "scale-110" : "group-hover/letter:scale-105"}
                  `}
                  >
                    {item.letter}
                  </span>

                  {/* Name labels */}
                  <div
                    className={`
                    flex flex-col items-center
                    transition-opacity duration-300
                    ${activeIndex === index ? "opacity-100" : "opacity-60 group-hover/letter:opacity-100"}
                  `}
                  >
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium opacity-80">
                      {item.bnName}
                    </span>
                  </div>

                  {/* Audio indicator icon (subtle) */}
                  {activeIndex === index && (
                    <div className="absolute top-2 left-2 flex gap-0.5">
                      <div
                        className="w-1 h-3 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="w-1 h-4 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
