import type { Metadata } from "next";
import LessonLayout from "@/app/components/LessonLayout";
import LeenQuiz from "@/app/components/LeenQuiz";

export const metadata: Metadata = {
  title: "Day 12 - Leen Letters (লীন এর হরফ) | 30 Days Quran Learning",
  description:
    "Learn about Huruf al-Leen (Letters of Softness) - Waw Leen and Ya Leen with examples from Quran.",
  openGraph: {
    title: "Day 12 - Leen Letters (লীন এর হরফ) | 30 Days Quran Learning",
    description:
      "Learn about Huruf al-Leen (Letters of Softness) - Waw Leen and Ya Leen with examples from Quran.",
  },
};

// Leen examples with Waw
const wawLeenWords = [
  { arabic: "خَوْفٌ", bangla: "খাওফুন", meaning: "ভয়" },
  { arabic: "قَوْمٌ", bangla: "ক্বাওমুন", meaning: "জাতি" },
  { arabic: "يَوْمٌ", bangla: "ইয়াওমুন", meaning: "দিন" },
  { arabic: "صَوْمٌ", bangla: "সাওমুন", meaning: "রোজা" },
  { arabic: "نَوْمٌ", bangla: "নাওমুন", meaning: "ঘুম" },
  { arabic: "لَوْحٌ", bangla: "লাওহুন", meaning: "ফলক" },
  { arabic: "فَوْزٌ", bangla: "ফাওযুন", meaning: "সাফল্য" },
  { arabic: "حَوْلٌ", bangla: "হাওলুন", meaning: "চারপাশ" },
  { arabic: "مَوْتٌ", bangla: "মাওতুন", meaning: "মৃত্যু" },
  { arabic: "سَوْفٌ", bangla: "সাওফুন", meaning: "শীঘ্রই" },
  { arabic: "ضَوْءٌ", bangla: "দাওউন", meaning: "আলো" },
  { arabic: "جَوْرٌ", bangla: "জাওরুন", meaning: "অত্যাচার" },

  // নতুন উদাহরণ
  { arabic: "نَوْرٌ", bangla: "নাওরুন", meaning: "আলো" },
  { arabic: "سَوْسٌ", bangla: "সাওসুন", meaning: "সরাসরি শব্দ" },
  { arabic: "رَوْحٌ", bangla: "রাওহুন", meaning: "প্রাণ / আত্মা" },
  { arabic: "دَوْلٌ", bangla: "দাওলুন", meaning: "রাষ্ট্র / দেশ" },
  { arabic: "بَوْسٌ", bangla: "বাওসুন", meaning: "চুম্বন" },
];

// Leen examples with Ya
const yaLeenWords = [
  { arabic: "بَيْتٌ", bangla: "বাইতুন", meaning: "ঘর" },
  { arabic: "لَيْلٌ", bangla: "লাইলুন", meaning: "রাত" },
  { arabic: "خَيْرٌ", bangla: "খাইরুন", meaning: "কল্যাণ" },
  { arabic: "عَيْنٌ", bangla: "আইনুন", meaning: "চোখ" },
  { arabic: "غَيْبٌ", bangla: "গাইবুন", meaning: "অদৃশ্য" },
  { arabic: "شَيْء", bangla: "শাই", meaning: "জিনিস" }, // Tanween নেই
  { arabic: "زَيْتٌ", bangla: "যাইতুন", meaning: "তেল" },
  { arabic: "صَيْفٌ", bangla: "সাইফুন", meaning: "গ্রীষ্ম" },
  { arabic: "سَيْفٌ", bangla: "সাইফুন", meaning: "তলোয়ার" },
  { arabic: "كَيْف", bangla: "কাইফ", meaning: "কিভাবে" }, // Tanween নেই
  { arabic: "رَيْبٌ", bangla: "রাইবুন", meaning: "সন্দেহ" },
  { arabic: "غَيْرٌ", bangla: "গাইরুন", meaning: "ছাড়া" },

  // নতুন উদাহরণ
  { arabic: "مَيْلٌ", bangla: "মাইলুন", meaning: "ঝোঁক / ঝক্কর" },
  { arabic: "نَيْلٌ", bangla: "নাইলুন", meaning: "প্রাপ্তি" },
  { arabic: "حَيْرٌ", bangla: "হাইরুন", meaning: "সঙ্কট / বিভ্রান্তি" },
  { arabic: "رَيْح", bangla: "রাইহ", meaning: "গন্ধ / বাতাস" }, // Tanween নেই
];

export default function Day12Page() {
  return (
    <LessonLayout
      dayNumber={12}
      title="লীন এর হরফ - Leen Letters"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white p-8 rounded-3xl shadow-xl text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">حُرُوْفُ اللِّيْن</h2>
        <p className="text-amber-100 text-lg">
          লীন এর হরফ - Letters of Softness
        </p>
      </div>

      {/* What is Leen */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 mb-10">
        <h3 className="font-bold text-amber-800 text-xl mb-4 flex items-center gap-2">
          <span className="text-2xl">📚</span> লীন কী?
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
          <strong className="text-amber-700">লীন</strong> শব্দের অর্থ{" "}
          <strong>নরম</strong> বা <strong>কোমল</strong>। যখন{" "}
          <span
            className="text-2xl text-orange-600 mx-1"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            وْ
          </span>{" "}
          (ওয়াও সাকিন) অথবা{" "}
          <span
            className="text-2xl text-orange-600 mx-1"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            يْ
          </span>{" "}
          (ইয়া সাকিন) এর আগে{" "}
          <strong className="text-red-600">যবর (ফাতহা)</strong> থাকে, তখন এদেরকে{" "}
          <strong className="text-amber-700">লীন এর হরফ</strong> বলে।
        </p>
        <div className="bg-white rounded-xl p-4 border border-amber-200">
          <p className="text-gray-600 text-center">
            <strong>সূত্র:</strong> যবর + ওয়াও/ইয়া সাকিন = লীন
          </p>
        </div>
      </div>

      {/* Two Leen Letters */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Waw Leen */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
          <div
            className="text-7xl text-blue-600 mb-4"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            وْ
          </div>
          <h3 className="font-bold text-blue-800 text-xl mb-2">ওয়াও লীন</h3>
          <p className="text-blue-600 font-medium mb-4">Waw Leen</p>
          <div className="bg-white rounded-xl p-4 border border-blue-200">
            <p className="text-gray-700">
              <span className="text-red-500 font-bold">যবর</span> এর পরে{" "}
              <span className="text-blue-600 font-bold">ওয়াও সাকিন</span>
            </p>
            <p className="text-2xl font-bold text-blue-700 mt-2">= আও / aw</p>
          </div>
          <div className="mt-4 bg-blue-100 rounded-lg p-3">
            <p className="text-sm text-blue-700">
              উদাহরণ:{" "}
              <span
                className="text-xl"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                خَوْف
              </span>{" "}
              = খাওফ
            </p>
          </div>
        </div>

        {/* Ya Leen */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 text-center">
          <div
            className="text-7xl text-purple-600 mb-4"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            يْ
          </div>
          <h3 className="font-bold text-purple-800 text-xl mb-2">ইয়া লীন</h3>
          <p className="text-purple-600 font-medium mb-4">Ya Leen</p>
          <div className="bg-white rounded-xl p-4 border border-purple-200">
            <p className="text-gray-700">
              <span className="text-red-500 font-bold">যবর</span> এর পরে{" "}
              <span className="text-purple-600 font-bold">ইয়া সাকিন</span>
            </p>
            <p className="text-2xl font-bold text-purple-700 mt-2">= আই / ay</p>
          </div>
          <div className="mt-4 bg-purple-100 rounded-lg p-3">
            <p className="text-sm text-purple-700">
              উদাহরণ:{" "}
              <span
                className="text-xl"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                بَيْت
              </span>{" "}
              = বাইত
            </p>
          </div>
        </div>
      </div>

      {/* Important Rule */}
      <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-5 mb-10">
        <h3 className="font-bold text-rose-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-xl">⚠️</span> গুরুত্বপূর্ণ পার্থক্য
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-rose-200">
                <th className="p-3 text-rose-700">বিষয়</th>
                <th className="p-3 text-rose-700">লীন</th>
                <th className="p-3 text-rose-700">মদ্দ</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: "'Amiri Quran', serif" }}>
              <tr className="border-b border-rose-100">
                <td
                  className="p-3 text-gray-700"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  আগের হরফে
                </td>
                <td className="p-3 text-red-600 font-bold">যবর (ফাতহা)</td>
                <td className="p-3 text-gray-600">যবর/যের/পেশ</td>
              </tr>
              <tr className="border-b border-rose-100">
                <td
                  className="p-3 text-gray-700"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  ওয়াও উদাহরণ
                </td>
                <td className="p-3">
                  <span className="text-2xl text-blue-600">خَوْف</span>
                </td>
                <td className="p-3">
                  <span className="text-2xl text-green-600">نُوْر</span>
                </td>
              </tr>
              <tr>
                <td
                  className="p-3 text-gray-700"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  ইয়া উদাহরণ
                </td>
                <td className="p-3">
                  <span className="text-2xl text-purple-600">بَيْت</span>
                </td>
                <td className="p-3">
                  <span className="text-2xl text-green-600">فِيْ</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Waw Leen Examples Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg">
            <span style={{ fontFamily: "'Amiri Quran', serif" }}>وْ</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              ওয়াও লীন এর শব্দ
            </h3>
            <p className="text-blue-500 text-sm font-medium">Waw Leen Words</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wawLeenWords.map((word, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 rounded-xl p-4 text-center hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div
                dir="rtl"
                className="text-4xl text-gray-800 mb-2"
                style={{
                  fontFamily: "'Amiri Quran', serif",
                  lineHeight: "1.8",
                }}
              >
                {word.arabic}
              </div>
              <div className="text-lg font-bold text-blue-600">
                {word.bangla}
              </div>
              <div className="text-sm text-gray-500">{word.meaning}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ya Leen Examples Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-purple-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg">
            <span style={{ fontFamily: "'Amiri Quran', serif" }}>يْ</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              ইয়া লীন এর শব্দ
            </h3>
            <p className="text-purple-500 text-sm font-medium">Ya Leen Words</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {yaLeenWords.map((word, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-xl p-4 text-center hover:shadow-lg hover:border-purple-300 transition-all"
            >
              <div
                dir="rtl"
                className="text-4xl text-gray-800 mb-2"
                style={{
                  fontFamily: "'Amiri Quran', serif",
                  lineHeight: "1.8",
                }}
              >
                {word.arabic}
              </div>
              <div className="text-lg font-bold text-purple-600">
                {word.bangla}
              </div>
              <div className="text-sm text-gray-500">{word.meaning}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quran Examples */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 mb-10">
        <h3 className="font-bold text-emerald-800 text-xl mb-6 flex items-center gap-2">
          <span className="text-2xl">📖</span> কোরআন থেকে উদাহরণ
        </h3>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border border-emerald-100">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              لَا رَيْبَ فِيْهِ
            </div>
            <p className="text-center text-gray-600">
              <span className="text-purple-600 font-bold">رَيْبَ</span> (রাইবা)
              - এখানে <strong>ইয়া লীন</strong> আছে
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-emerald-100">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              مٰلِكِ يَوْمِ الدِّيْنِ
            </div>
            <p className="text-center text-gray-600">
              <span className="text-blue-600 font-bold">يَوْمِ</span> (ইয়াওমি)
              - এখানে <strong>ওয়াও লীন</strong> আছে
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-emerald-100">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              وَاللَّيْلِ اِذَا يَغْشٰى
            </div>
            <p className="text-center text-gray-600">
              <span className="text-purple-600 font-bold">اللَّيْلِ</span>{" "}
              (আল-লাইলি) - এখানে <strong>ইয়া লীন</strong> আছে
            </p>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-800 text-white rounded-xl p-6 mb-10">
        <h3 className="font-bold text-xl mb-4 text-center">
          🎯 মনে রাখার সূত্র
        </h3>
        <div className="grid md:grid-cols-2 gap-6 text-center">
          <div className="bg-gray-700/50 rounded-xl p-4">
            <div
              className="text-4xl mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـَوْ
            </div>
            <div className="text-blue-400 font-bold text-lg">
              যবর + ওয়াও সাকিন
            </div>
            <div className="text-gray-400 text-sm mt-1">= আও (aw) sound</div>
          </div>
          <div className="bg-gray-700/50 rounded-xl p-4">
            <div
              className="text-4xl mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـَيْ
            </div>
            <div className="text-purple-400 font-bold text-lg">
              যবর + ইয়া সাকিন
            </div>
            <div className="text-gray-400 text-sm mt-1">= আই (ay) sound</div>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="mt-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 tracking-tight">
            লীন কুইজ
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            লীন এর হরফ চিনতে পারছেন কিনা যাচাই করুন
          </p>
        </div>
        <LeenQuiz />
      </div>
    </LessonLayout>
  );
}
