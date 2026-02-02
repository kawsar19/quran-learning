import type { Metadata } from "next";
import LessonLayout from "@/app/components/LessonLayout";
import IkhfaQuiz from "@/app/components/IkhfaQuiz";

export const metadata: Metadata = {
  title: "Day 13 - Ikhfa (ইখফা) | 30 Days Quran Learning",
  description:
    "Learn about Ikhfa - hiding noon sakin and tanween with 15 Ikhfa letters. Complete guide with Quran examples.",
  openGraph: {
    title: "Day 13 - Ikhfa (ইখফা) | 30 Days Quran Learning",
    description:
      "Learn about Ikhfa - hiding noon sakin and tanween with 15 Ikhfa letters. Complete guide with Quran examples.",
  },
};

// 15 Ikhfa letters
const ikhfaLetters = [
  { arabic: "ت", name: "তা", transliteration: "Ta" },
  { arabic: "ث", name: "ছা", transliteration: "Tha" },
  { arabic: "ج", name: "জীম", transliteration: "Jim" },
  { arabic: "د", name: "দাল", transliteration: "Dal" },
  { arabic: "ذ", name: "যাল", transliteration: "Dhal" },
  { arabic: "ز", name: "যা", transliteration: "Za" },
  { arabic: "س", name: "সীন", transliteration: "Sin" },
  { arabic: "ش", name: "শীন", transliteration: "Shin" },
  { arabic: "ص", name: "সাদ", transliteration: "Sad" },
  { arabic: "ض", name: "দাদ", transliteration: "Dad" },
  { arabic: "ط", name: "ত্বা", transliteration: "Ta" },
  { arabic: "ظ", name: "যোয়া", transliteration: "Dha" },
  { arabic: "ف", name: "ফা", transliteration: "Fa" },
  { arabic: "ق", name: "ক্বাফ", transliteration: "Qaf" },
  { arabic: "ك", name: "কাফ", transliteration: "Kaf" },
];

// Ikhfa examples grouped by letter
const ikhfaExamples = [
  // ت examples
  { arabic: "اَنْتَ", bangla: "আংতা", meaning: "তুমি", letter: "ت" },
  { arabic: "كُنْتُمْ", bangla: "কুংতুম", meaning: "তোমরা ছিলে", letter: "ت" },
  {
    arabic: "نِعْمَةٍ تُجْزَى",
    bangla: "নি'মাতিং তুজযা",
    meaning: "প্রতিদান পাওয়ার নেয়ামত",
    letter: "ت",
  },

  // ث examples
  {
    arabic: "مِنْ ثَمَرَةٍ",
    bangla: "মিং ছামারাতিন",
    meaning: "ফল থেকে",
    letter: "ث",
  },
  { arabic: "اَنْثَى", bangla: "উংছা", meaning: "নারী", letter: "ث" },

  // ج examples
  {
    arabic: "مِنْ جُوعٍ",
    bangla: "মিং জূইন",
    meaning: "ক্ষুধা থেকে",
    letter: "ج",
  },
  {
    arabic: "اَنْجَيْنَا",
    bangla: "আংজাইনা",
    meaning: "আমরা রক্ষা করলাম",
    letter: "ج",
  },

  // د examples
  {
    arabic: "مَنْ دَسّٰهَا",
    bangla: "মাং দাসসাহা",
    meaning: "যে তাকে কলুষিত করেছে",
    letter: "د",
  },
  { arabic: "عِنْدَ", bangla: "ইংদা", meaning: "নিকটে", letter: "د" },
  {
    arabic: "وَكَأْسًا دِهَاقًا",
    bangla: "ওয়া কা'সাং দিহাক্বা",
    meaning: "পরিপূর্ণ পেয়ালা",
    letter: "د",
  },

  // ذ examples
  {
    arabic: "اَنْذَرْتُكُمْ",
    bangla: "আংযারতুকুম",
    meaning: "আমি তোমাদের সতর্ক করলাম",
    letter: "ذ",
  },
  {
    arabic: "يَتِيمًا ذَا مَقْرَبَةٍ",
    bangla: "ইয়াতীমাং যা মাক্বরাবা",
    meaning: "আত্মীয় এতিম",
    letter: "ذ",
  },

  // ز examples
  {
    arabic: "مَنْ زَكّٰهَا",
    bangla: "মাং যাক্কাহা",
    meaning: "যে তাকে পবিত্র করেছে",
    letter: "ز",
  },
  {
    arabic: "اَنْزَلْنَا",
    bangla: "আংযালনা",
    meaning: "আমরা নাযিল করেছি",
    letter: "ز",
  },

  // س examples
  {
    arabic: "اَمْرٍ سَلَامٌ",
    bangla: "আমরিং সালাম",
    meaning: "শান্তির বিষয়",
    letter: "س",
  },
  { arabic: "الْاِنْسَانُ", bangla: "আল-ইংসান", meaning: "মানুষ", letter: "س" },

  // ش examples
  {
    arabic: "فَمَنْ شَاءَ",
    bangla: "ফামাং শাআ",
    meaning: "যে ইচ্ছা করে",
    letter: "ش",
  },
  {
    arabic: "سَبْعًا شِدَادًا",
    bangla: "সাব'আং শিদাদা",
    meaning: "সাতটি শক্ত",
    letter: "ش",
  },

  // ص examples
  {
    arabic: "فَانْصَبْ",
    bangla: "ফাংসাব",
    meaning: "তুমি পরিশ্রম কর",
    letter: "ص",
  },
  {
    arabic: "صَفًّا صَفًّا",
    bangla: "সাফফাং সাফফা",
    meaning: "সারি সারি",
    letter: "ص",
  },

  // ض examples
  {
    arabic: "مِنْ ضَرِيعٍ",
    bangla: "মিং দারী'ইন",
    meaning: "কাঁটাযুক্ত গাছ থেকে",
    letter: "ض",
  },
  {
    arabic: "قَوْمًا ضَالِّينَ",
    bangla: "ক্বাওমাং দাল্লীন",
    meaning: "পথভ্রষ্ট জাতি",
    letter: "ض",
  },

  // ط examples
  {
    arabic: "مَنْ طَغٰى",
    bangla: "মাং ত্বাগা",
    meaning: "যে সীমালঙ্ঘন করেছে",
    letter: "ط",
  },
  {
    arabic: "كَشَجَرَةٍ طَيِّبَةٍ",
    bangla: "কাশাজারাতিং ত্বাইয়্যিবা",
    meaning: "পবিত্র গাছের মতো",
    letter: "ط",
  },

  // ظ examples
  { arabic: "يَنْظُرُ", bangla: "ইয়াংযুর", meaning: "সে দেখে", letter: "ظ" },
  {
    arabic: "لِبَعْضٍ ظَهِيرًا",
    bangla: "লিবা'দিং যাহীরা",
    meaning: "একে অপরের সাহায্যকারী",
    letter: "ظ",
  },

  // ف examples
  {
    arabic: "يَنْفَخُ",
    bangla: "ইয়াংফাখু",
    meaning: "ফুঁ দেওয়া হবে",
    letter: "ف",
  },
  {
    arabic: "اَنْفُسِكُمْ",
    bangla: "আংফুসিকুম",
    meaning: "তোমাদের নিজেদের",
    letter: "ف",
  },

  // ق examples
  {
    arabic: "يَنْقُضُونَ",
    bangla: "ইয়াংক্বুদুন",
    meaning: "তারা ভঙ্গ করে",
    letter: "ق",
  },
  {
    arabic: "عَذَابًا قَرِيبًا",
    bangla: "আযাবাং ক্বারীবা",
    meaning: "নিকটবর্তী শাস্তি",
    letter: "ق",
  },

  // ك examples
  {
    arabic: "مِنْ كُلِّ",
    bangla: "মিং কুল্লি",
    meaning: "প্রত্যেক থেকে",
    letter: "ك",
  },
  {
    arabic: "اِنْ كُنْتُمْ",
    bangla: "ইং কুংতুম",
    meaning: "যদি তোমরা হও",
    letter: "ك",
  },
];

export default function Day13Page() {
  return (
    <LessonLayout dayNumber={14} title="ইখফা - Ikhfa" videoId="VIDEO_ID_HERE">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 text-white p-8 rounded-3xl shadow-xl text-center mb-10">
        <h2
          className="text-4xl font-bold mb-3"
          style={{ fontFamily: "'Amiri Quran', serif" }}
        >
          اَلْإِخْفَاء
        </h2>
        <p className="text-cyan-100 text-lg">ইখফা - গোপন করা / লুকানো</p>
      </div>

      {/* What is Ikhfa */}
      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-2 border-cyan-200 rounded-xl p-6 mb-10">
        <h3 className="font-bold text-cyan-800 text-xl mb-4 flex items-center gap-2">
          <span className="text-2xl">📚</span> ইখফা কী?
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
          <p>
            <strong className="text-cyan-700">"ইখফা"</strong> শব্দের অর্থ হলো{" "}
            <strong>গোপন করা</strong> বা <strong>লুকানো</strong>।
          </p>
          <p>
            <strong className="text-teal-700">নূন সাকিন (نْ)</strong> বা{" "}
            <strong className="text-teal-700">তানউইন (ً ٍ ٌ)</strong> এর পরে
            ইখফার কোন হরফ আসলে ঐ নূন সাকিন বা তানউইনকে{" "}
            <strong className="text-cyan-700">ইখফা করে পড়া</strong>কে "ইখফা"
            বলে।
          </p>
        </div>
      </div>

      {/* How to pronounce */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6 mb-10">
        <h3 className="font-bold text-amber-800 text-xl mb-4 flex items-center gap-2">
          <span className="text-2xl">🎯</span> ইখফা করে পড়ার নিয়ম
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-lg">
            ইখফা করে পড়ার অর্থ হলো -{" "}
            <strong className="text-amber-700">গোপন গুন্নাহ করে পড়া</strong>।
            যেটা নাকের ভেতর থেকে উচ্চারণ হবে।
          </p>
          <div className="bg-white rounded-xl p-5 border border-amber-200">
            <p className="text-center mb-3">
              <strong>বাংলা উদাহরণ:</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xl font-bold">
              <span className="bg-amber-100 px-4 py-2 rounded-lg">
                অ<span className="text-amber-600">ং</span>ক
              </span>
              <span className="bg-amber-100 px-4 py-2 rounded-lg">
                বা<span className="text-amber-600">ং</span>লা
              </span>
              <span className="bg-amber-100 px-4 py-2 rounded-lg">
                ই<span className="text-amber-600">ং</span>রেজি
              </span>
            </div>
            <p className="text-center mt-4 text-gray-600">
              এই শব্দগুলোর মধ্যে <strong className="text-amber-600">"ং"</strong>{" "}
              এর যেই উচ্চারণ, সেই উচ্চারণটাই হচ্ছে ইখফার গুন্নাহ।
            </p>
          </div>
          <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-200 mt-4">
            <p className="text-center">
              <strong>আরবি উদাহরণ:</strong>
            </p>
            <div className="text-center mt-3">
              <span
                className="text-4xl text-gray-800"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                اَنْتَ
              </span>
              <span className="mx-4 text-2xl">=</span>
              <span className="text-2xl font-bold text-cyan-700">
                আ<span className="text-amber-600">ং</span>---তা
              </span>
            </div>
            <p className="text-center mt-3 text-gray-600">
              এখানে <strong className="text-amber-600">"ং"</strong> এর উচ্চারণটা
              একটু দীর্ঘ হবে।
            </p>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-5 mb-10">
        <h3 className="font-bold text-rose-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-xl">⚠️</span> বিশেষ সতর্কতা
        </h3>
        <p className="text-gray-700">
          অনেকে ইখফার গুন্নাহ এর উচ্চারণে{" "}
          <strong className="text-rose-600">"আন্তা"</strong> পড়ে, অর্থাৎ{" "}
          <strong>"ন"</strong> দিয়ে পড়ে - এটা{" "}
          <strong className="text-rose-600">ভুল</strong>!
          <br />
          <br />
          ইখফার সঠিক উচ্চারণ হবে{" "}
          <strong className="text-emerald-600">"ং"</strong> দিয়ে:{" "}
          <strong className="text-emerald-600">"আংতা"</strong>
        </p>
      </div>

      {/* 15 Ikhfa Letters */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            ইখফার ১৫টি হরফ
          </h3>
          <p className="text-gray-500">The 15 Letters of Ikhfa</p>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-6 mb-6">
          <div
            dir="rtl"
            className="text-center text-white text-3xl md:text-4xl leading-loose"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            ت ، ث ، ج ، د ، ذ ، ز ، س ، ش ، ص ، ض ، ط ، ظ ، ف ، ق ، ك
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {ikhfaLetters.map((letter, index) => (
            <div
              key={index}
              className="bg-white border-2 border-cyan-100 rounded-xl p-4 text-center hover:shadow-lg hover:border-cyan-300 transition-all"
            >
              <div
                className="text-4xl text-cyan-600 mb-2"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                {letter.arabic}
              </div>
              <div className="text-sm font-bold text-gray-700">
                {letter.name}
              </div>
              <div className="text-xs text-gray-400">
                {letter.transliteration}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rule Summary */}
      <div className="bg-gray-800 text-white rounded-xl p-6 mb-10">
        <h3 className="font-bold text-xl mb-4 text-center">🎯 ইখফার সূত্র</h3>
        <div className="text-center space-y-4">
          <div className="bg-gray-700/50 rounded-xl p-4 inline-block">
            <span
              className="text-3xl"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              نْ / ً ٍ ٌ
            </span>
            <span className="mx-4 text-xl">+</span>
            <span className="text-cyan-400 font-bold">১৫টি ইখফা হরফ</span>
            <span className="mx-4 text-xl">=</span>
            <span className="text-amber-400 font-bold">
              গুন্নাহ (ং) দিয়ে পড়া
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            নূন সাকিন বা তানউইনের পরে ইখফার হরফ আসলে গোপন গুন্নাহ করে পড়তে হবে
          </p>
        </div>
      </div>

      {/* Examples Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-cyan-200"></div>
          <h3 className="text-2xl font-bold text-gray-800">
            ইখফার উদাহরণ সমূহ
          </h3>
          <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-cyan-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ikhfaExamples.map((example, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-cyan-50 border-2 border-cyan-100 rounded-xl p-4 hover:shadow-lg hover:border-cyan-300 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="bg-cyan-500 text-white text-sm px-2 py-1 rounded-lg"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {example.letter}
                </span>
                <span className="text-xs text-gray-400">ইখফা</span>
              </div>
              <div
                dir="rtl"
                className="text-3xl text-gray-800 mb-2 text-center"
                style={{
                  fontFamily: "'Amiri Quran', serif",
                  lineHeight: "1.8",
                }}
              >
                {example.arabic}
              </div>
              <div className="text-lg font-bold text-cyan-600 text-center">
                {example.bangla}
              </div>
              <div className="text-sm text-gray-500 text-center">
                {example.meaning}
              </div>
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
              يَوْمَ يَتَذَكَّرُ الْاِنْسَانُ
            </div>
            <p className="text-center text-gray-600">
              <span className="text-cyan-600 font-bold">الْاِنْسَانُ</span>{" "}
              (আল-ইংসান) - এখানে <strong>ইখفا</strong> আছে (نْ + س)
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-emerald-100">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              مَاءً ثَجَّاجًا
            </div>
            <p className="text-center text-gray-600">
              <span className="text-cyan-600 font-bold">مَاءً ثَجَّاجًا</span>{" "}
              (মাআং ছাজ্জাজা) - তানউইনের পরে ث আছে
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-emerald-100">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              عَيْنًا جَارِيَةً
            </div>
            <p className="text-center text-gray-600">
              <span className="text-cyan-600 font-bold">عَيْنًا جَارِيَةً</span>{" "}
              (আইনাং জারিয়া) - তানউইনের পরে ج আছে
            </p>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="mt-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 tracking-tight">
            ইখফা কুইজ
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            ইখফার নিয়ম ও হরফ চিনতে পারছেন কিনা যাচাই করুন
          </p>
        </div>
        <IkhfaQuiz />
      </div>
    </LessonLayout>
  );
}
