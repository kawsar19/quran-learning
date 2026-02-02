import type { Metadata } from "next";
import LessonLayout from "@/app/components/LessonLayout";
import TanweenWords from "@/app/components/TanweenWords";
import TanweenQuiz from "@/app/components/TanweenQuiz";

export const metadata: Metadata = {
  title: "Day 10 - Tanween Practice (তানউইন অনুশীলন) | 30 Days Quran Learning",
  description:
    "Learn all three Tanween marks - Fathatayn, Kasratayn, and Dammatayn with extensive practice words.",
  openGraph: {
    title:
      "Day 10 - Tanween Practice (তানউইন অনুশীলন) | 30 Days Quran Learning",
    description:
      "Learn all three Tanween marks - Fathatayn, Kasratayn, and Dammatayn with extensive practice words.",
  },
};

export default function Day7Page() {
  return (
    <LessonLayout
      dayNumber={7}
      title="Tanween - তানউইন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">তানউইন </h2>
        <p className="text-pink-100"> নূন এর ধ্বনি যুক্ত করা</p>
      </div>

      {/* What is Tanween */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-2xl">📚</span> তানউইন কী?
        </h3>
        <p className="text-gray-700 mb-3">
          দুই যবর ({"\u00A0\u00A0ً\u00A0\u00A0"}) দুই যের ({"\u00A0\u00A0ٍ\u00A0\u00A0"}) দুই পেশ ({"\u00A0\u00A0ٌ\u00A0\u00A0"}) কে তানওয়ীন বলে
        </p>
      </div>

      {/* Three Tanween Explanation */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {/* Fathatayn */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-orange-600 mb-2"
            style={{
              fontFamily: "'Amiri Quran', serif",
            }}
          >
            ـًـ
          </div>
          <h3 className="font-bold text-orange-800 text-lg">দুই যবর</h3>
          <div className="bg-orange-100 rounded-lg p-2 mt-3">
            <p className="text-gray-700 font-bold text-lg">= আন / an</p>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            দুইটি ফাতহা + আলিফ
            <br />
            শব্দের শেষে &quot;আন&quot; ধ্বনি
          </p>
        </div>

        {/* Kasratayn */}
        <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-teal-600 mb-2"
            style={{
              fontFamily: "'Amiri Quran', serif",
            }}
          >
            ـٍ
          </div>
          <h3 className="font-bold text-teal-800 text-lg">দুই যের</h3>

          <div className="bg-teal-100 rounded-lg p-2 mt-3">
            <p className="text-gray-700 font-bold text-lg">= ইন / in</p>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            দুইটি কাসরা
            <br />
            শব্দের শেষে &quot;ইন&quot; ধ্বনি
          </p>
        </div>

        {/* Dammatayn */}
        <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-5 text-center">
          <div
            className="text-5xl text-violet-600 mb-2"
            style={{
              fontFamily: "'Amiri Quran', serif",
            }}
          >
            ـٌ
          </div>
          <h3 className="font-bold text-violet-800 text-lg">দুই যের</h3>

          <div className="bg-violet-100 rounded-lg p-2 mt-3">
            <p className="text-gray-700 font-bold text-lg">= উন / un</p>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            দুইটি দাম্মা
            <br />
            শব্দের শেষে &quot;উন&quot; ধ্বনি
          </p>
        </div>
      </div>

      {/* Harakat vs Tanween Comparison */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-gray-800 text-lg mb-4 text-center">
          হরকত vs তানউইন তুলনা
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-3 text-gray-700">হরকত</th>
                <th className="p-3 text-gray-700">ধ্বনি</th>
                <th className="p-3 text-gray-700">তানউইন</th>
                <th className="p-3 text-gray-700">ধ্বনি</th>
              </tr>
            </thead>
            <tbody
              style={{
                fontFamily: "'Amiri Quran', serif",
              }}
            >
              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <span className="text-3xl text-red-600">بَ</span>
                </td>
                <td
                  className="p-3 text-red-600 font-bold"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  বা
                </td>
                <td className="p-3">
                  <span className="text-3xl text-orange-600">بًا</span>
                </td>
                <td
                  className="p-3 text-orange-600 font-bold"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  বান
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <span className="text-3xl text-green-600">بِ</span>
                </td>
                <td
                  className="p-3 text-green-600 font-bold"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  বি
                </td>
                <td className="p-3">
                  <span className="text-3xl text-teal-600">بٍ</span>
                </td>
                <td
                  className="p-3 text-teal-600 font-bold"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  বিন
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  <span className="text-3xl text-blue-600">بُ</span>
                </td>
                <td
                  className="p-3 text-blue-600 font-bold"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  বু
                </td>
                <td className="p-3">
                  <span className="text-3xl text-violet-600">بٌ</span>
                </td>
                <td
                  className="p-3 text-violet-600 font-bold"
                  style={{ fontFamily: "'Tiro Bangla', serif" }}
                >
                  বুন
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Rule */}
      <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-rose-800 text-lg mb-2 flex items-center gap-2">
          <span className="text-xl">⚠️</span> গুরুত্বপূর্ণ নিয়ম
        </h3>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong className="text-orange-600">দুই যবর ({"\u00A0ً\u00A0"})</strong> এর সাথে
            সাধারণত একটি আলিফ ({"\u00A0ا\u00A0"}) থাকে:
            <span
              className="text-2xl mx-2"
              style={{
                fontFamily: "'Amiri Quran', serif",
              }}
            >
              كِتَابًا
            </span>
          </p>
          <p>
            <strong className="text-teal-600">দুই যের ({"\u00A0ٍ\u00A0"})</strong> ও{" "}
            <strong className="text-violet-600">দুই পেশ ({"\u00A0ٌ\u00A0"})</strong> এর সাথে
            আলিফ লাগে না।
          </p>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
          <span className="text-xl">📖</span> কিভাবে পড়বেন
        </h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>• শব্দের শেষে তানউইন চিহ্ন দেখুন</li>
          <li>
            • <span className="text-orange-600 font-medium">দুই যবর({"\u00A0ً\u00A0"})</span> =
            শব্দের শেষে &quot;আন&quot; যোগ করুন
          </li>
          <li>
            • <span className="text-teal-600 font-medium">দুই যের ({"\u00A0ٍ\u00A0"})</span> =
            শব্দের শেষে &quot;ইন&quot; যোগ করুন
          </li>
          <li>
            • <span className="text-violet-600 font-medium">দুই পেশ ({"\u00A0ٌ\u00A0"})</span> =
            শব্দের শেষে &quot;উন&quot; যোগ করুন
          </li>
        </ul>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">
          ১
        </span>
        তানউইন শব্দ অনুশীলন
      </h3>

      {/* Tanween Words Component */}
      <TanweenWords />

      {/* Same Word - Three Forms */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 mt-10">
        <h3 className="font-bold text-blue-800 text-lg mb-4 text-center">
          একই শব্দ - তিন রূপ
        </h3>
        <p className="text-center text-gray-600 text-sm mb-4">
          লক্ষ্য করুন একই শব্দ তিন তানউইনে কিভাবে পড়া হয়
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Word 1: Kitab */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3 text-center">
              كِتَاب (বই)
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  كِتَابًا
                </span>
                <span className="text-orange-600 font-bold">কিতাবান</span>
              </div>
              <div className="flex justify-between items-center bg-teal-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  كِتَابٍ
                </span>
                <span className="text-teal-600 font-bold">কিতাবিন</span>
              </div>
              <div className="flex justify-between items-center bg-violet-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  كِتَابٌ
                </span>
                <span className="text-violet-600 font-bold">কিতাবুন</span>
              </div>
            </div>
          </div>

          {/* Word 2: Walad */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3 text-center">
              وَلَد (ছেলে)
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  وَلَدًا
                </span>
                <span className="text-orange-600 font-bold">ওয়ালাদান</span>
              </div>
              <div className="flex justify-between items-center bg-teal-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  وَلَدٍ
                </span>
                <span className="text-teal-600 font-bold">ওয়ালাদিন</span>
              </div>
              <div className="flex justify-between items-center bg-violet-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  وَلَدٌ
                </span>
                <span className="text-violet-600 font-bold">ওয়ালাদুন</span>
              </div>
            </div>
          </div>

          {/* Word 3: Bayt */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3 text-center">
              بَيْت (ঘর)
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  بَيْتًا
                </span>
                <span className="text-orange-600 font-bold">বাইতান</span>
              </div>
              <div className="flex justify-between items-center bg-teal-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  بَيْتٍ
                </span>
                <span className="text-teal-600 font-bold">বাইতিন</span>
              </div>
              <div className="flex justify-between items-center bg-violet-50 p-2 rounded">
                <span
                  className="text-2xl"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                  }}
                >
                  بَيْتٌ
                </span>
                <span className="text-violet-600 font-bold">বাইতুন</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quran Examples */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-5 mt-8">
        <h3 className="font-bold text-emerald-800 text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">📖</span> কোরআন থেকে উদাহরণ
        </h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-2 text-center"
              style={{
                fontFamily: "'Amiri Quran', serif",
              }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
            </div>
            <p className="text-center text-gray-600">
              <span className="text-teal-600 font-bold">الرَّحْمٰنِ</span> ও{" "}
              <span className="text-teal-600 font-bold">الرَّحِيمِ</span> এ
              কাসরাতাইন এর মত কাসরা আছে
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-2 text-center"
              style={{
                fontFamily: "'Amiri Quran', serif",
              }}
            >
              هُدًى لِّلْمُتَّقِينَ
            </div>
            <p className="text-center text-gray-600">
              <span className="text-orange-600 font-bold">هُدًى</span> (হুদান) -
              ফাতহাতাইন আছে
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-2 text-center"
              style={{
                fontFamily: "'Amiri Quran', serif",
              }}
            >
              وَمَا هُوَ بِمَجْنُونٍ
            </div>
            <p className="text-center text-gray-600">
              <span className="text-teal-600 font-bold">مَجْنُونٍ</span>{" "}
              (মাজনূনিন) - কাসরাতাইন আছে
            </p>
          </div>
        </div>
      </div>

      {/* Quick Reference Card */}
      <div className="bg-gray-800 text-white rounded-xl p-5 mt-8">
        <h3 className="font-bold text-lg mb-4 text-center">
          🎯 দ্রুত মনে রাখার সূত্র
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl mb-2">ً</div>
            <div className="text-orange-400 font-bold">আন</div>
            <div className="text-gray-400 text-xs">an</div>
          </div>
          <div>
            <div className="text-3xl mb-2">ٍ</div>
            <div className="text-teal-400 font-bold">ইন</div>
            <div className="text-gray-400 text-xs">in</div>
          </div>
          <div>
            <div className="text-3xl mb-2">ٌ</div>
            <div className="text-violet-400 font-bold">উন</div>
            <div className="text-gray-400 text-xs">un</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          মনে রাখুন: তানউইন = হরকত + &quot;ন&quot; (নূন)
        </p>
      </div>

      {/* Quiz Section */}
      <div className="mt-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 tracking-tight">
            তানউইন কুইজ
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            আপনার শেখার মান যাচাই করতে এই কুইজটি দিন। এটি আপনাকে দ্রুত তানউইন
            চিনতে সাহায্য করবে।
          </p>
        </div>
        <TanweenQuiz />
      </div>
    </LessonLayout>
  );
}
