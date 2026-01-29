"use client";

import { useState, useRef, useEffect } from "react";

const AUDIO_SRC = "/audios/Arabic 1.m4a";

interface ArabicLetter {
  name: string;
  start: number;
  end: number;
  independent: string;
  initial: string;
  medial: string;
  final: string;
}

const arabicLetters: ArabicLetter[] = [
  {
    name: "Alif",
    start: 2,
    end: 3,
    independent: "ا",
    initial: "—",
    medial: "—",
    final: "ـا",
  },
  {
    name: "Ba",
    start: 3.5,
    end: 4.7,
    independent: "ب",
    initial: "بـ",
    medial: "ـبـ",
    final: "ـب",
  },
  {
    name: "Ta",
    start: 5,
    end: 6.8,
    independent: "ت",
    initial: "تـ",
    medial: "ـتـ",
    final: "ـت",
  },
  {
    name: "Tha",
    start: 6.8,
    end: 8.7,
    independent: "ث",
    initial: "ثـ",
    medial: "ـثـ",
    final: "ـث",
  },
  {
    name: "Jim",
    start: 8.7,
    end: 10.5,
    independent: "ج",
    initial: "جـ",
    medial: "ـجـ",
    final: "ـج",
  },
  {
    name: "Ha",
    start: 10.6,
    end: 12.6,
    independent: "ح",
    initial: "حـ",
    medial: "ـحـ",
    final: "ـح",
  },
  {
    name: "Kha",
    start: 12.7,
    end: 14.6,
    independent: "خ",
    initial: "خـ",
    medial: "ـخـ",
    final: "ـخ",
  },
  {
    name: "Dal",
    start: 14.7,
    end: 16.6,
    independent: "د",
    initial: "—",
    medial: "—",
    final: "ـد",
  },
  {
    name: "Dhal",
    start: 16.7,
    end: 18.6,
    independent: "ذ",
    initial: "—",
    medial: "—",
    final: "ـذ",
  },
  {
    name: "Ra",
    start: 18.7,
    end: 20.6,
    independent: "ر",
    initial: "—",
    medial: "—",
    final: "ـر",
  },
  {
    name: "Zay",
    start: 20.7,
    end: 22.6,
    independent: "ز",
    initial: "—",
    medial: "—",
    final: "ـز",
  },
  {
    name: "Sin",
    start: 22.7,
    end: 24.6,
    independent: "س",
    initial: "سـ",
    medial: "ـسـ",
    final: "ـس",
  },
  {
    name: "Shin",
    start: 24.7,
    end: 26.6,
    independent: "ش",
    initial: "شـ",
    medial: "ـشـ",
    final: "ـش",
  },
  {
    name: "Sad",
    start: 27,
    end: 30,
    independent: "ص",
    initial: "صـ",
    medial: "ـصـ",
    final: "ـص",
  },
  {
    name: "Dad",
    start: 30,
    end: 32.5,
    independent: "ض",
    initial: "ضـ",
    medial: "ـضـ",
    final: "ـض",
  },
  {
    name: "Ta",
    start: 32.5,
    end: 34.5,
    independent: "ط",
    initial: "طـ",
    medial: "ـطـ",
    final: "ـط",
  },
  {
    name: "Dha",
    start: 34.5,
    end: 36.5,
    independent: "ظ",
    initial: "ظـ",
    medial: "ـظـ",
    final: "ـظ",
  },
  {
    name: "Ayn",
    start: 36.5,
    end: 39,
    independent: "ع",
    initial: "عـ",
    medial: "ـعـ",
    final: "ـع",
  },
  {
    name: "Ghayn",
    start: 39,
    end: 42.5,
    independent: "غ",
    initial: "غـ",
    medial: "ـغـ",
    final: "ـغ",
  },
  {
    name: "Fa",
    start: 42.5,
    end: 44.5,
    independent: "ف",
    initial: "فـ",
    medial: "ـفـ",
    final: "ـف",
  },
  {
    name: "Qaf",
    start: 44.5,
    end: 47,
    independent: "ق",
    initial: "قـ",
    medial: "ـقـ",
    final: "ـق",
  },
  {
    name: "Kaf",
    start: 47.2,
    end: 49,
    independent: "ك",
    initial: "كـ",
    medial: "ـكـ",
    final: "ـك",
  },
  {
    name: "Lam",
    start: 49,
    end: 52,
    independent: "ل",
    initial: "لـ",
    medial: "ـلـ",
    final: "ـل",
  },
  {
    name: "Mim",
    start: 52,
    end: 55,
    independent: "م",
    initial: "مـ",
    medial: "ـمـ",
    final: "ـم",
  },
  {
    name: "Nun",
    start: 55,
    end: 56.8,
    independent: "ن",
    initial: "نـ",
    medial: "ـنـ",
    final: "ـن",
  },
  {
    name: "Ha",
    start: 59.5,
    end: 62.5,
    independent: "ه",
    initial: "هـ",
    medial: "ـهـ",
    final: "ـه",
  },
  {
    name: "Waw",
    start: 57.5,
    end: 59.7,
    independent: "و",
    initial: "—",
    medial: "—",
    final: "ـو",
  },
  {
    name: "Ya",
    start: 66,
    end: 69,
    independent: "ي",
    initial: "يـ",
    medial: "ـيـ",
    final: "ـي",
  },
];

export default function ArabicAlphabetShapes() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playSound = (index: number) => {
    const { start, end } = arabicLetters[index];

    if (playingIndex === index && audioRef.current) {
      audioRef.current.pause();
      if (timerRef.current) clearTimeout(timerRef.current);
      setPlayingIndex(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (timerRef.current) clearTimeout(timerRef.current);

    setPlayingIndex(index);

    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_SRC);
    }

    const audio = audioRef.current;
    audio.currentTime = start;
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
      setPlayingIndex(null);
    });

    const duration = (end - start) * 1000;
    timerRef.current = setTimeout(() => {
      audio.pause();
      setPlayingIndex(null);
    }, duration);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-visible rounded-2xl border border-gray-100 bg-white">
        <table className="w-full" dir="rtl">
          <thead className="z-20">
            <tr className="text-white">
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-emerald-600 first:rounded-tr-2xl">
                মূল রূপ
              </th>
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-emerald-600">
                শুরুর রূপ
              </th>
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-teal-600">
                মাঝের রূপ
              </th>
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-teal-600 last:rounded-tl-2xl">
                শেষের রূপ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {arabicLetters.map((letter, index) => (
              <tr
                key={index}
                className={`transition-all duration-300 cursor-pointer ${
                  playingIndex === index
                    ? "bg-emerald-100 scale-[1.01]"
                    : "hover:bg-emerald-50"
                }`}
                onClick={() => playSound(index)}
              >
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      playingIndex === index
                        ? "bg-emerald-500 text-white shadow-lg scale-110"
                        : "bg-gray-50 hover:bg-emerald-100 hover:shadow-md"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span className="text-5xl">{letter.independent}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      letter.initial === "—"
                        ? "bg-gray-100 text-gray-400"
                        : playingIndex === index
                          ? "bg-teal-500 text-white shadow-lg scale-110"
                          : "bg-gray-50 hover:bg-teal-100 hover:shadow-md"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span
                      className={
                        letter.initial === "—" ? "text-2xl" : "text-5xl"
                      }
                    >
                      {letter.initial}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      letter.medial === "—"
                        ? "bg-gray-100 text-gray-400"
                        : playingIndex === index
                          ? "bg-cyan-500 text-white shadow-lg scale-110"
                          : "bg-gray-50 hover:bg-cyan-100 hover:shadow-md"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span
                      className={
                        letter.medial === "—" ? "text-2xl" : "text-5xl"
                      }
                    >
                      {letter.medial}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      playingIndex === index
                        ? "bg-blue-500 text-white shadow-lg scale-110"
                        : "bg-gray-50 hover:bg-blue-100 hover:shadow-md"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span className="text-5xl">{letter.final}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {arabicLetters.map((letter, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
              playingIndex === index
                ? "ring-4 ring-emerald-400 scale-[1.02]"
                : ""
            }`}
            onClick={() => playSound(index)}
          >
            {/* Letter Shapes Grid */}
            <div className="p-5">
              <div className="grid grid-cols-4 gap-3">
                {/* Independent */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    মূল রূপ
                  </p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      playingIndex === index
                        ? "bg-emerald-500 text-white"
                        : "bg-emerald-50"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span className="text-4xl">{letter.independent}</span>
                  </div>
                </div>

                {/* Initial */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    শুরুর রূপ
                  </p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      letter.initial === "—"
                        ? "bg-gray-100 text-gray-400"
                        : playingIndex === index
                          ? "bg-teal-500 text-white"
                          : "bg-teal-50"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span
                      className={
                        letter.initial === "—" ? "text-xl" : "text-4xl"
                      }
                    >
                      {letter.initial}
                    </span>
                  </div>
                </div>

                {/* Medial */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    মাঝের রূপ
                  </p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      letter.medial === "—"
                        ? "bg-gray-100 text-gray-400"
                        : playingIndex === index
                          ? "bg-cyan-500 text-white"
                          : "bg-cyan-50"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span
                      className={letter.medial === "—" ? "text-xl" : "text-4xl"}
                    >
                      {letter.medial}
                    </span>
                  </div>
                </div>

                {/* Final */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    শেষের রূপ
                  </p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      playingIndex === index
                        ? "bg-blue-500 text-white"
                        : "bg-blue-50"
                    }`}
                    style={{
                      fontFamily:
                        "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif",
                    }}
                  >
                    <span className="text-4xl">{letter.final}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
