"use client";

import { useState, useRef, useCallback } from "react";

// Placeholder times — update with real start/end seconds from the audio files
const JABAR_AUDIO: Record<string, { start: number; end: number }> = {
  ا: { start: 0, end: 3 },
  ب: { start: 3, end: 5 },
  ت: { start: 5, end: 7 },
  ث: { start: 7, end: 9 },
  ج: { start: 9, end: 12 },
  ح: { start: 11.5, end: 14 },
  خ: { start: 14.8, end: 17 },
  د: { start: 17, end: 20 },
  ذ: { start: 20, end: 22 },
  ر: { start: 22, end: 25 },
  ز: { start: 25, end: 27 },
  س: { start: 27, end: 30 },
  ش: { start: 30, end: 33 },
  ص: { start: 33, end: 35.5 },
  ض: { start: 35.6, end: 38 },
  ط: { start: 38, end: 40.5 },
  ظ: { start: 40.5, end: 43 },
  ع: { start: 43, end: 45.5 },
  غ: { start: 45.6, end: 48 },
  ف: { start: 48, end: 50.5 },
  ق: { start: 50.6, end: 53 },
  ك: { start: 53, end: 55.5 },
  ل: { start: 55.6, end: 57.5 },
  م: { start: 57.6, end: 59.5 },
  ن: { start: 59.6, end: 61.9 },
  ه: { start: 62, end: 64.5 },
  و: { start: 64.6, end: 66.5 },
  ي: { start: 66.6, end: 68.5 },
};

const JER_AUDIO: Record<string, { start: number; end: number }> = {
  ا: { start: 0.5, end: 3 },
  ب: { start: 3.1, end: 4.9 },
  ت: { start: 4.9, end: 6.6 },
  ث: { start: 6.7, end: 8.4 },
  ج: { start: 8.5, end: 11 },
  ح: { start: 11, end: 13 },
  خ: { start: 13.1, end: 15 },
  د: { start: 15.1, end: 17 },
  ذ: { start: 17.1, end: 20 },
  ر: { start: 20.1, end: 22 },
  ز: { start: 22.1, end: 25 },
  س: { start: 25, end: 27 },
  ش: { start: 27, end: 29 },
  ص: { start: 29, end: 31 },
  ض: { start: 31, end: 34 },
  ط: { start: 34, end: 35.7 },
  ظ: { start: 35.5, end: 37.5 },
  ع: { start: 37.6, end: 40 },
  غ: { start: 40.1, end: 42.5 },
  ف: { start: 42.6, end: 45 },
  ق: { start: 45.1, end: 47.3 },
  ك: { start: 47.4, end: 49.3 },
  ل: { start: 49.4, end: 51.3 },
  م: { start: 51.4, end: 53.8 },
  ن: { start: 53.9, end: 55.8 },
  ه: { start: 55.9, end: 57.8 },
  و: { start: 57.9, end: 60 },
  ي: { start: 60.1, end: 63 },
};

interface Letter {
  base: string;
  name: string;
  fatha: string;
  fathaSound: string;
  kasra: string;
  kasraSound: string;
  damma: string;
  dammaSound: string;
}

type HarakatType = "fatha" | "kasra";

interface HarakatAudioGridProps {
  letters: Letter[];
  type: HarakatType;
}

const config = {
  fatha: {
    audioSrc: "/audios/jabar.m4a",
    segments: JABAR_AUDIO,
    letterKey: "fatha" as const,
    soundKey: "fathaSound" as const,
    colors: {
      bg: "from-red-50 to-rose-50",
      border: "border-red-100",
      hoverBorder: "hover:border-red-300",
      text: "text-red-600",
      activeBg: "from-red-100 to-rose-100",
      activeBorder: "border-red-400",
      ring: "ring-red-300",
    },
  },
  kasra: {
    audioSrc: "/audios/jer.m4a",
    segments: JER_AUDIO,
    letterKey: "kasra" as const,
    soundKey: "kasraSound" as const,
    colors: {
      bg: "from-emerald-50 to-teal-50",
      border: "border-emerald-100",
      hoverBorder: "hover:border-emerald-300",
      text: "text-emerald-600",
      activeBg: "from-emerald-100 to-teal-100",
      activeBorder: "border-emerald-400",
      ring: "ring-emerald-300",
    },
  },
};

export default function HarakatAudioGrid({
  letters,
  type,
}: HarakatAudioGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { audioSrc, segments, letterKey, soundKey, colors } = config[type];

  const stopPlayback = useCallback(() => {
    if (audioRef.current) audioRef.current.pause();
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveIndex(null);
  }, []);

  const playLetter = useCallback(
    (index: number, base: string) => {
      // Toggle off if same letter clicked
      if (activeIndex === index) {
        stopPlayback();
        return;
      }

      stopPlayback();
      setActiveIndex(index);

      const seg = segments[base];
      if (!seg) {
        setActiveIndex(null);
        return;
      }

      if (!audioRef.current) {
        audioRef.current = new Audio(audioSrc);
      }
      const audio = audioRef.current;
      audio.currentTime = seg.start;
      audio.play().catch(() => setActiveIndex(null));

      timerRef.current = setTimeout(
        () => {
          audio.pause();
          setActiveIndex(null);
        },
        (seg.end - seg.start) * 1000,
      );
    },
    [activeIndex, segments, audioSrc, stopPlayback],
  );

  return (
    <div
      className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3"
      dir="rtl"
    >
      {letters.map((letter, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={index}
            type="button"
            onClick={() => playLetter(index, letter.base)}
            className={`bg-gradient-to-br ${
              isActive
                ? `${colors.activeBg} ${colors.activeBorder} ring-2 ${colors.ring}`
                : `${colors.bg} ${colors.border} ${colors.hoverBorder}`
            } border rounded-xl p-3 text-center hover:shadow-lg transition-all cursor-pointer`}
          >
            <div
              className={`text-3xl md:text-4xl text-gray-800 mb-2 ${
                isActive ? "animate-pulse" : ""
              }`}
              style={{
                fontFamily: "'Scheherazade New', 'Amiri', serif",
                lineHeight: "2",
              }}
            >
              {letter[letterKey]}
            </div>
            <div
              className={`text-sm font-bold ${colors.text} bg-white rounded-lg py-1 px-2`}
            >
              {letter[soundKey]}
            </div>
          </button>
        );
      })}
    </div>
  );
}
