import type { Metadata } from "next";
import LessonLayout from "@/app/components/LessonLayout";
import MixedPractice from "@/app/components/MixedPractice";
import MixedQuiz from "@/app/components/MixedQuiz";

export const metadata: Metadata = {
  title: "Day 8 - Harakat & Tanween Mixed Practice | 30 Days Quran Learning",
  description:
    "Extensive practice of words combining Harakat and Tanween for better fluency.",
};

export default function Day8Page() {
  return (
    <LessonLayout
      dayNumber={8}
      title="Harakat & Tanween Practice - হরকত ও তানউইন অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-8 rounded-3xl shadow-xl text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">হরকত ও তানউইন অনুশীলন</h2>
        <p className="text-emerald-50 text-lg opacity-90">
          Mixed Practice: Harakat & Tanween Combined
        </p>
      </div>

      {/* Goal of the Day */}
      <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 mb-10 shadow-sm">
        <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎯</span> আজকের লক্ষ্য
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          গত কয়েকদিনে আমরা হরকত (যবর, যের, পেশ) এবং তানউইন (দুই যবর, দুই যের,
          দুই পেশ) শিখেছি। আজকের দিনে আমরা এই দুটি বিষয় একসাথে মিলে যে শব্দগুলো
          গঠিত হয়, সেগুলো বেশি বেশি করে অনুশীলন করব। এটি আপনার পড়ার গতি এবং
          নির্ভুলতা বাড়াতে সাহায্য করবে।
        </p>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-emerald-200"></div>
        <h3 className="text-2xl font-bold text-gray-800">
          শব্দ অনুশীলন (Practice Words)
        </h3>
        <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-emerald-200"></div>
      </div>

      <p className="text-center text-gray-500 mb-8 text-lg">
        নিচের শব্দগুলো জোরে জোরে পড়ার চেষ্টা করুন
      </p>

      {/* Mixed Practice Grid */}
      <MixedPractice />

      {/* Quiz Section */}
      <div className="mt-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 tracking-tight">
            মিশ্র অনুশীলন কুইজ
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            হরকত ও তানউইন মিশ্রিত শব্দ চিনতে পারছেন কিনা যাচাই করুন
          </p>
        </div>
        <MixedQuiz />
      </div>
    </LessonLayout>
  );
}
