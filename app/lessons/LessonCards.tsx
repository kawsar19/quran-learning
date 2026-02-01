"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface LessonInfo {
  day: number;
  title: string;
  desc: string;
  arabic: string;
}

export default function LessonCards({
  lessonData,
  totalDays,
}: {
  lessonData: LessonInfo[];
  totalDays: number;
}) {
  const [unlockedDay, setUnlockedDay] = useState<number>(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  useEffect(() => {
    fetch("/api/course/unlocked-day")
      .then((r) => r.json())
      .then((data) => setUnlockedDay(data.currentUnlockedDay))
      .catch(() => {});

    const saved = localStorage.getItem("user");
    if (saved) {
      const user = JSON.parse(saved);
      setCompletedDays(user.completedDays || []);
    }
  }, []);

  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {days.map((day) => {
        const lesson = lessonData.find((l) => l.day === day);
        const adminLocked = day > unlockedDay;
        const prevNotCompleted = day > 1 && !completedDays.includes(day - 1);
        const isLocked = adminLocked || prevNotCompleted;

        if (isLocked) {
          return (
            <div
              key={day}
              className="relative bg-white/60 rounded-2xl shadow-sm border border-gray-200 overflow-hidden opacity-70"
            >
              <div className="h-1 bg-gray-200" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-400 flex items-center justify-center font-black text-lg">
                      {day}
                    </div>
                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest">
                      দিন {day}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-400 mb-2 leading-snug">
                  {lesson?.title || `Day ${day} Lesson`}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-2">
                  {lesson?.desc || "এই পাঠটি এখনো আনলক হয়নি।"}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-gray-400 font-semibold text-sm">
                    লক করা আছে
                  </span>
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={day}
            href={`/lessons/day-${day}`}
            className="group relative bg-white rounded-2xl shadow-md shadow-gray-200/60 border border-gray-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden active:scale-[0.98]"
          >
            <div className="h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-lg group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {day}
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    দিন {day}
                  </span>
                </div>
                {lesson?.arabic && (
                  <span
                    className="text-xl text-emerald-200 group-hover:text-emerald-400 transition-colors"
                    dir="rtl"
                  >
                    {lesson.arabic}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                {lesson?.title || `Day ${day} Lesson`}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                {lesson?.desc ||
                  "এই দিনের পাঠে আমরা নতুন কিছু গুরুত্বপূর্ণ নিয়ম শিখবো ইনশাআল্লাহ।"}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  পাঠ শুরু করুন
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
