import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Lessons - 30 Days Quran Learning",
  description:
    "Browse all 30 days of Quran learning lessons. Start your journey today.",
};

const lessonData = [
  {
    day: 1,
    title: "হরফ পরিচিতি",
    desc: "আরবি ২৯টি হরফের শুদ্ধ উচ্চারণ ও পরিচয়।",
    arabic: "الحروف",
  },
  {
    day: 2,
    title: "হরফের বিভিন্ন রূপ",
    desc: "শুরু, মধ্য ও শেষে হরফের আকৃতি পরিবর্তন।",
    arabic: "أشكال الحروف",
  },
  {
    day: 3,
    title: "অক্ষর সংযোগ",
    desc: "একাধিক হরফ একসাথে যুক্ত হয়ে পড়ার নিয়ম।",
    arabic: "وصل الحروف",
  },
  {
    day: 4,
    title: "সূরা আল-ফাতিহা",
    desc: "সূরা আল-ফাতিহা হরফের বিভিন্ন রূপ ও পরিচয়।",
    arabic: "الفاتحة",
  },
  {
    day: 5,
    title: "হরকত (যবর, যের, পেশ)",
    desc: "আরবি স্বরচিহ্ন বা হরকতের ব্যবহার ও নিয়ম।",
    arabic: "الحركات",
  },
  {
    day: 6,
    title: "তানউইন পরিচয়",
    desc: "দুই যবর, দুই যের ও দুই পেশের ব্যবহার।",
    arabic: "التنوين",
  },
  {
    day: 7,
    title: "তানউইন প্র্যাকটিস",
    desc: "তানউইনযুক্ত শব্দের বিস্তারিত অনুশীলন।",
    arabic: "تمرين التنوين",
  },
  {
    day: 8,
    title: "হরকত ও তানউইন মাস্ক",
    desc: "হরকত ও তানউইনের সমন্বিত অনুশীলন।",
    arabic: "الحركات والتنوين",
  },
  {
    day: 9,
    title: "সুকুন বা জজম",
    desc: "সুকুন বা জজম এর নিয়ম ও উচ্চারণ পদ্ধতি।",
    arabic: "السكون",
  },
];

export default function LessonsPage() {
  const totalDays = 9;
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 text-white pt-20 pb-28 px-4 overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-8 left-1/4 text-[120px] leading-none select-none">
            بِسْمِ
          </div>
          <div className="absolute bottom-4 right-1/4 text-[100px] leading-none select-none">
            ٱللَّهِ
          </div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-emerald-100 text-sm font-medium">
            {totalDays}টি পাঠ প্রকাশিত
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">
            কুরআন শিক্ষার ৩০ দিন
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            সহজ উপায়ে কুরআন শেখার একটি পূর্ণাঙ্গ কোর্স। প্রতিটি দিন ধাপে ধাপে
            নতুন কিছু শিখুন।
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="container mx-auto max-w-5xl px-4 -mt-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {days.map((day) => {
            const lesson = lessonData.find((l) => l.day === day);
            return (
              <Link
                key={day}
                href={`/lessons/day-${day}`}
                className="group relative bg-white rounded-2xl shadow-md shadow-gray-200/60 border border-gray-100 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden active:scale-[0.98]"
              >
                {/* Top accent bar */}
                <div className="h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6">
                  {/* Day number + Arabic */}
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

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {lesson?.title || `Day ${day} Lesson`}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {lesson?.desc ||
                      "এই দিনের পাঠে আমরা নতুন কিছু গুরুত্বপূর্ণ নিয়ম শিখবো ইনশাআল্লাহ।"}
                  </p>

                  {/* CTA */}
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
      </div>

      {/* Hadith Quote */}
      <div className="container mx-auto max-w-3xl px-4 mt-20 text-center">
        <div className="relative py-8">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-[2px] bg-emerald-200 rounded-full" />
          <p className="text-gray-400 text-base leading-relaxed italic mt-4">
            &ldquo;তোমাদের মধ্যে সেই সর্বোত্তম, যে কুরআন শেখে এবং অন্যকে
            শেখায়।&rdquo;
          </p>
          <p className="text-gray-300 text-xs mt-2 font-medium">
            — সহীহ বুখারী
          </p>
        </div>
      </div>
    </div>
  );
}
