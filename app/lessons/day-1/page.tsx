import type { Metadata } from "next";
import LessonLayout from "@/app/components/LessonLayout";
import ArabicAlphabetTable from "@/app/components/ArabicAlphabetTable";
import AlphabetQuiz from "@/app/components/AlphabetQuiz";

export const metadata: Metadata = {
  title: "Day 1 - Arabic Alphabet | 30 Days Quran Learning",
  description:
    "Learn the Arabic alphabet with audio pronunciation. Day 1 of the 30 Days Quran Learning program.",
  openGraph: {
    title: "Day 1 - Arabic Alphabet | 30 Days Quran Learning",
    description:
      "Learn the Arabic alphabet with audio pronunciation. Day 1 of the 30 Days Quran Learning program.",
  },
};

export default function Day1Page() {
  return (
    <LessonLayout
      dayNumber={1}
      title="আরবি বর্ণমালা পরিচিতি"
      jumpshareId="jaWwq9h2Qvvn6n9LBpEV"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">হরফের পরিচয়</h2>

      <div className="space-y-4 mb-8">
        {/* Question 1 */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-emerald-700 font-semibold mb-2">
            প্রশ্ন : হরফ কাকে বলে?
          </p>
          <p className="text-gray-700 bg-white/70 p-3 rounded-lg">
            উত্তর : আরবী বর্ণকে হরফ বলে।
          </p>
        </div>

        {/* Question 2 */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-emerald-700 font-semibold mb-2">
            প্রশ্ন : হরফ মোট কয়টি?
          </p>
          <p className="text-gray-700 bg-white/70 p-3 rounded-lg">
            উত্তর : ২৯ টি
          </p>
        </div>

        {/* Question 3 */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-4">
          <p className="text-emerald-700 font-semibold mb-2">
            প্রশ্ন : নুকতা কাকে বলে?
          </p>
          <p className="text-gray-700 bg-white/70 p-3 rounded-lg">
            উত্তর : হরফের উপরে অথবা নিচে এক বা একাধিক যে বিন্দু থাকে তাকে নুকতা
            বলে।
          </p>
        </div>
      </div>

      <ArabicAlphabetTable />

      {/* Quiz Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">
            ?
          </span>
          কুইজ - নিজেকে যাচাই করুন
        </h2>
        <p className="text-gray-600 mb-6">
          আরবি অক্ষর দেখে সঠিক বাংলা নাম নির্বাচন করুন। ৩০টি প্রশ্নের উত্তর দিন।
        </p>
        <AlphabetQuiz />
      </div>
    </LessonLayout>
  );
}
