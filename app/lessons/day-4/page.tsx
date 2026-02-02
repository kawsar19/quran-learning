import type { Metadata } from "next";
import LessonLayout from "@/app/components/LessonLayout";
import LetterCombinationsGrid from "@/app/components/LetterCombinationsGrid";
import LetterCombinationsQuiz from "@/app/components/LetterCombinationsQuiz";

export const metadata: Metadata = {
  title: "Day 4 - Letter Combinations Practice | 30 Days Quran Learning",
  description:
    "Practice recognizing Arabic letters and their combinations. Day 4 of the 30 Days Quran Learning program.",
  openGraph: {
    title: "Day 4 - Letter Combinations Practice | 30 Days Quran Learning",
    description:
      "Practice recognizing Arabic letters and their combinations. Day 4 of the 30 Days Quran Learning program.",
  },
};

const letterCombinations = [
  // হরফ চেনার অনুশীলন - শুরুর রূপ
  { bangla: "নূন (শুরুর রূপ)", arabic: "نـ" },
  { bangla: "তা (শুরুর রূপ)", arabic: "تـ" },
  { bangla: "ছা (শুরুর রূপ)", arabic: "ثـ" },
  { bangla: "ইয়া (শুরুর রূপ)", arabic: "يـ" },
  { bangla: "ক্বাফ (শুরুর রূপ)", arabic: "قـ" },
  { bangla: "ফা (শুরুর রূপ)", arabic: "فـ" },

  { bangla: "দাদ (শুরুর রূপ)", arabic: "ضـ" },
  { bangla: "সাদ (শুরুর রূপ)", arabic: "صـ" },
  { bangla: "শীন (শুরুর রূপ)", arabic: "شـ" },
  { bangla: "সীন (শুরুর রূপ)", arabic: "سـ" },
  { bangla: "খা (শুরুর রূপ)", arabic: "خـ" },
  { bangla: "হা (শুরুর রূপ)", arabic: "حـ" },

  { bangla: "জীম (শুরুর রূপ)", arabic: "جـ" },
  { bangla: "কাফ (শুরুর রূপ)", arabic: "كـ" },
  { bangla: "আইন (শুরুর রূপ)", arabic: "عـ" },
  { bangla: "গাইন (শুরুর রূপ)", arabic: "غـ" },
  { bangla: "মীম (শুরুর রূপ)", arabic: "مـ" },
  { bangla: "হা (শুরুর রূপ)", arabic: "هـ" },

  // মাঝের রূপ
  { bangla: "বা (মাঝের রূপ)", arabic: "ـبـ" },
  { bangla: "তা (মাঝের রূপ)", arabic: "ـتـ" },
  { bangla: "ছা (মাঝের রূপ)", arabic: "ـثـ" },
  { bangla: "জীম (মাঝের রূপ)", arabic: "ـجـ" },
  { bangla: "হা (মাঝের রূপ)", arabic: "ـحـ" },
  { bangla: "খা (মাঝের রূপ)", arabic: "ـخـ" },

  { bangla: "সীন (মাঝের রূপ)", arabic: "ـسـ" },
  { bangla: "শীন (মাঝের রূপ)", arabic: "ـشـ" },
  { bangla: "সাদ (মাঝের রূপ)", arabic: "ـصـ" },
  { bangla: "দাদ (মাঝের রূপ)", arabic: "ـضـ" },
  { bangla: "আইন (মাঝের রূপ)", arabic: "ـعـ" },
  { bangla: "গাইন (মাঝের রূপ)", arabic: "ـغـ" },

  { bangla: "ফা (মাঝের রূপ)", arabic: "ـفـ" },
  { bangla: "ক্বাফ (মাঝের রূপ)", arabic: "ـقـ" },
  { bangla: "কাফ (মাঝের রূপ)", arabic: "ـكـ" },
  { bangla: "লাম (মাঝের রূপ)", arabic: "ـلـ" },
  { bangla: "মীম (মাঝের রূপ)", arabic: "ـمـ" },
  { bangla: "নূন (মাঝের রূপ)", arabic: "ـنـ" },

  { bangla: "হা (মাঝের রূপ)", arabic: "ـهـ" },
  { bangla: "ইয়া (মাঝের রূপ)", arabic: "ـيـ" },

  // হরফ সংযোগ অনুশীলন - দুই অক্ষরের শব্দ
  { bangla: "বা + রা", arabic: "بر" },
  { bangla: "শীন + রা", arabic: "شر" },
  { bangla: "খা + লাম", arabic: "خل" },
  { bangla: "আইন + মীম", arabic: "عم" },
  { bangla: "ফা + মীম", arabic: "فم" },
  { bangla: "ক্বাফ + লাম", arabic: "قل" },

  { bangla: "নূন + রা", arabic: "نر" },
  { bangla: "তা + বা", arabic: "تب" },
  { bangla: "জীম + রা", arabic: "جر" },
  { bangla: "সীন + রা", arabic: "سر" },
  { bangla: "দাল + মীম", arabic: "دم" },
  { bangla: "ওয়াও + লাম", arabic: "ول" },

  // তিন অক্ষরের শব্দ
  { bangla: "কাফ + তা + বা", arabic: "كتب" },
  { bangla: "ক্বাফ + লাম + বা", arabic: "قلب" },
  { bangla: "আইন + লাম + মীম", arabic: "علم" },
  { bangla: "সীন + মীম + আইন", arabic: "سمع" },
  { bangla: "ফা + হা + মীম", arabic: "فهم" },
  { bangla: "নূন + সাদ + রা", arabic: "نصر" },

  { bangla: "জীম + মীম + আইন", arabic: "جمع" },
  { bangla: "খা + লাম + ক্বাফ", arabic: "خلق" },
  { bangla: "দাল + খা + লাম", arabic: "دخل" },
  { bangla: "ফা + তা + হা", arabic: "فتح" },
  { bangla: "শীন + কাফ + রা", arabic: "شكر" },
  { bangla: "সাদ + বা + রা", arabic: "صبر" },

  // চার অক্ষরের শব্দ
  { bangla: "কাফ + তা + বা + তা", arabic: "كتبت" },
  { bangla: "ইয়া + কাফ + তা + বা", arabic: "يكتب" },
  { bangla: "ইয়া + আইন + লাম + মীম", arabic: "يعلم" },
  { bangla: "ইয়া + সীন + মীম + আইন", arabic: "يسمع" },
  { bangla: "নূন + ক্বাফ + রা + আলিফ", arabic: "نقرا" },
  { bangla: "ইয়া + ফা + হা + মীম", arabic: "يفهم" },
];

export default function Day4Page() {
  return (
    <LessonLayout
      dayNumber={4}
      title="অক্ষর চেনা ও সংযোগ অনুশীলন"
      videoId="mBF9r_HzrmMshlKX"
      
    >
      {/* Letter Combinations Grid */}
      <LetterCombinationsGrid combinations={letterCombinations} />

      {/* Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">
            ?
          </span>
          কুইজ - হরফ সংযোগ অনুশীলন
        </h2>
        <LetterCombinationsQuiz />
      </div>
    </LessonLayout>
  );
}
