import type { Metadata } from "next";
import LessonLayout from "@/app/components/LessonLayout";
import HarakatQuiz from "@/app/components/HarakatQuiz";

export const metadata: Metadata = {
  title: "Day 5 - Harakat (Vowel Marks) | 30 Days Quran Learning",
  description:
    "Learn Arabic vowel marks - Fatha, Kasra, and Damma with Bangla pronunciation. Day 5 of the 30 Days Quran Learning program.",
};

const letters = [
  {
    base: "ا",
    name: "আলিফ",
    fatha: "اَ",
    fathaSound: "আ",
    kasra: "اِ",
    kasraSound: "ই",
    damma: "اُ",
    dammaSound: "উ",
  },
  {
    base: "ب",
    name: "বা",
    fatha: "بَ",
    fathaSound: "বা",
    kasra: "بِ",
    kasraSound: "বি",
    damma: "بُ",
    dammaSound: "বু",
  },
  {
    base: "ت",
    name: "তা",
    fatha: "تَ",
    fathaSound: "তা",
    kasra: "تِ",
    kasraSound: "তি",
    damma: "تُ",
    dammaSound: "তু",
  },
  {
    base: "ث",
    name: "ছা",
    fatha: "ثَ",
    fathaSound: "ছা",
    kasra: "ثِ",
    kasraSound: "ছি",
    damma: "ثُ",
    dammaSound: "ছু",
  },
  {
    base: "ج",
    name: "জীম",
    fatha: "جَ",
    fathaSound: "জা",
    kasra: "جِ",
    kasraSound: "জি",
    damma: "جُ",
    dammaSound: "জু",
  },
  {
    base: "ح",
    name: "হা",
    fatha: "حَ",
    fathaSound: "হা",
    kasra: "حِ",
    kasraSound: "হি",
    damma: "حُ",
    dammaSound: "হু",
  },
  {
    base: "خ",
    name: "খ",
    fatha: "خَ",
    fathaSound: "খা",
    kasra: "خِ",
    kasraSound: "খি",
    damma: "خُ",
    dammaSound: "খু",
  },
  {
    base: "د",
    name: "দাল",
    fatha: "دَ",
    fathaSound: "দা",
    kasra: "دِ",
    kasraSound: "দি",
    damma: "دُ",
    dammaSound: "দু",
  },
  {
    base: "ذ",
    name: "যাল",
    fatha: "ذَ",
    fathaSound: "যা",
    kasra: "ذِ",
    kasraSound: "যি",
    damma: "ذُ",
    dammaSound: "যু",
  },
  {
    base: "ر",
    name: "রা",
    fatha: "رَ",
    fathaSound: "রা",
    kasra: "رِ",
    kasraSound: "রি",
    damma: "رُ",
    dammaSound: "রু",
  },
  {
    base: "ز",
    name: "যা",
    fatha: "زَ",
    fathaSound: "যা",
    kasra: "زِ",
    kasraSound: "যি",
    damma: "زُ",
    dammaSound: "যু",
  },
  {
    base: "س",
    name: "সীন",
    fatha: "سَ",
    fathaSound: "সা",
    kasra: "سِ",
    kasraSound: "সি",
    damma: "سُ",
    dammaSound: "সু",
  },
  {
    base: "ش",
    name: "শীন",
    fatha: "شَ",
    fathaSound: "শা",
    kasra: "شِ",
    kasraSound: "শি",
    damma: "شُ",
    dammaSound: "শু",
  },
  {
    base: "ص",
    name: "সাদ",
    fatha: "صَ",
    fathaSound: "সা",
    kasra: "صِ",
    kasraSound: "সি",
    damma: "صُ",
    dammaSound: "সু",
  },
  {
    base: "ض",
    name: "দাদ",
    fatha: "ضَ",
    fathaSound: "দা",
    kasra: "ضِ",
    kasraSound: "দি",
    damma: "ضُ",
    dammaSound: "দু",
  },
  {
    base: "ط",
    name: "ত্বা",
    fatha: "طَ",
    fathaSound: "ত্বা",
    kasra: "طِ",
    kasraSound: "ত্বি",
    damma: "طُ",
    dammaSound: "ত্বু",
  },
  {
    base: "ظ",
    name: "যোয়া",
    fatha: "ظَ",
    fathaSound: "যোয়া",
    kasra: "ظِ",
    kasraSound: "যোয়ি",
    damma: "ظُ",
    dammaSound: "যোয়ু",
  },
  {
    base: "ع",
    name: "আইন",
    fatha: "عَ",
    fathaSound: "আ",
    kasra: "عِ",
    kasraSound: "ই",
    damma: "عُ",
    dammaSound: "উ",
  },
  {
    base: "غ",
    name: "গাইন",
    fatha: "غَ",
    fathaSound: "গা",
    kasra: "غِ",
    kasraSound: "গি",
    damma: "غُ",
    dammaSound: "গু",
  },
  {
    base: "ف",
    name: "ফা",
    fatha: "فَ",
    fathaSound: "ফা",
    kasra: "فِ",
    kasraSound: "ফি",
    damma: "فُ",
    dammaSound: "ফু",
  },
  {
    base: "ق",
    name: "ক্বফ",
    fatha: "قَ",
    fathaSound: "ক্বা",
    kasra: "قِ",
    kasraSound: "ক্বি",
    damma: "قُ",
    dammaSound: "ক্বু",
  },
  {
    base: "ك",
    name: "কাফ",
    fatha: "كَ",
    fathaSound: "কা",
    kasra: "كِ",
    kasraSound: "কি",
    damma: "كُ",
    dammaSound: "কু",
  },
  {
    base: "ل",
    name: "লাম",
    fatha: "لَ",
    fathaSound: "লা",
    kasra: "لِ",
    kasraSound: "লি",
    damma: "لُ",
    dammaSound: "লু",
  },
  {
    base: "م",
    name: "মীম",
    fatha: "مَ",
    fathaSound: "মা",
    kasra: "مِ",
    kasraSound: "মি",
    damma: "مُ",
    dammaSound: "মু",
  },
  {
    base: "ن",
    name: "নূন",
    fatha: "نَ",
    fathaSound: "না",
    kasra: "نِ",
    kasraSound: "নি",
    damma: "نُ",
    dammaSound: "নু",
  },
  {
    base: "ه",
    name: "হা",
    fatha: "هَ",
    fathaSound: "হা",
    kasra: "هِ",
    kasraSound: "হি",
    damma: "هُ",
    dammaSound: "হু",
  },
  {
    base: "و",
    name: "ওয়াও",
    fatha: "وَ",
    fathaSound: "ওয়া",
    kasra: "وِ",
    kasraSound: "ওয়ি",
    damma: "وُ",
    dammaSound: "ঊ",
  },
  {
    base: "ي",
    name: "ইয়া",
    fatha: "يَ",
    fathaSound: "ইয়া",
    kasra: "يِ",
    kasraSound: "ঈ",
    damma: "يُ",
    dammaSound: "ইয়ু",
  },
];

export default function Day5Page() {
  return (
    <LessonLayout dayNumber={5} title="হরকত" videoId="VIDEO_ID_HERE">
      {/* Definition Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-emerald-700 mb-3 flex items-center gap-2">
          <span className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
            💡
          </span>
          হরকত কাকে বলে?
        </h3>
        <p className="text-gray-700 bg-white/70 p-4 rounded-lg leading-relaxed">
          এক যবর, এক যের, এক পেশকে হরকত বলে। হরকতের উচ্চারণ তাড়াতাড়ি পড়িতে
          হয়।
        </p>
      </div>

      {/* Three Harakat Overview Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12" dir="rtl">
        {/* Fatha */}
        <div className="bg-gradient-to-br from-red-50 to-rose-100 border border-red-200 rounded-2xl p-6 text-center">
          <div
            className="w-16 h-16 bg-red-500 text-white rounded-xl flex items-center justify-center text-4xl mb-4 mx-auto shadow-lg"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
          >
            ـَ
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-1">ফাতহা (যবর)</h3>
          <p className="text-red-600 font-semibold text-sm mb-3">
            Fatha / Zabar
          </p>
          <p className="text-gray-600 text-sm">
            অক্ষরের উপরে বসে <strong>&quot;আ&quot;</strong> ধ্বনি তৈরি করে।
          </p>
        </div>

        {/* Kasra */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 border border-emerald-200 rounded-2xl p-6 text-center">
          <div
            className="w-16 h-16 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-4xl mb-4 mx-auto shadow-lg"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
          >
            ـِ
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-1">কাসরা (যের)</h3>
          <p className="text-emerald-600 font-semibold text-sm mb-3">
            Kasra / Zer
          </p>
          <p className="text-gray-600 text-sm">
            অক্ষরের নিচে বসে <strong>&quot;ই&quot;</strong> ধ্বনি তৈরি করে।
          </p>
        </div>

        {/* Damma */}
        <div className="bg-gradient-to-br from-blue-50 to-sky-100 border border-blue-200 rounded-2xl p-6 text-center">
          <div
            className="w-16 h-16 bg-blue-500 text-white rounded-xl flex items-center justify-center text-4xl mb-4 mx-auto shadow-lg"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
          >
            ـُ
          </div>
          <h3 className="font-bold text-gray-800 text-lg mb-1">দাম্মা (পেশ)</h3>
          <p className="text-blue-600 font-semibold text-sm mb-3">
            Damma / Pesh
          </p>
          <p className="text-gray-600 text-sm">
            অক্ষরের উপরে বসে <strong>&quot;উ&quot;</strong> ধ্বনি তৈরি করে।
          </p>
        </div>
      </div>

      {/* ZABAR / FATHA Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center text-2xl shadow-md"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
          >
            ـَ
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              যবর (ফাতহা) দিয়ে সব অক্ষর
            </h2>
            <p className="text-red-600 text-sm font-medium">
              Fatha - &quot;আ&quot; ধ্বনি
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3"
          dir="rtl"
        >
          {letters.map((letter, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-100 rounded-xl p-3 text-center hover:shadow-lg hover:border-red-300 transition-all"
            >
              <div
                className="text-3xl md:text-4xl text-gray-800 mb-2"
                style={{
                  fontFamily: "'Scheherazade New', 'Amiri', serif",
                  lineHeight: `2`,
                }}
              >
                {letter.fatha}
              </div>
              <div className="text-sm font-bold text-red-600 bg-white rounded-lg py-1 px-2">
                {letter.fathaSound}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ZER / KASRA Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-2xl shadow-md"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
          >
            ـِ
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              যের (কাসরা) দিয়ে সব অক্ষর
            </h2>
            <p className="text-emerald-600 text-sm font-medium">
              Kasra - &quot;ই&quot; ধ্বনি
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3"
          dir="rtl"
        >
          {letters.map((letter, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-3 text-center hover:shadow-lg hover:border-emerald-300 transition-all"
            >
              <div
                className="text-3xl md:text-4xl text-gray-800 mb-2"
                style={{
                  fontFamily: "'Scheherazade New', 'Amiri', serif",
                  lineHeight: "2",
                }}
              >
                {letter.kasra}
              </div>
              <div className="text-sm font-bold text-emerald-600 bg-white rounded-lg py-1 px-2">
                {letter.kasraSound}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PESH / DAMMA Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center text-2xl shadow-md"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}
          >
            ـُ
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              পেশ (দাম্মা) দিয়ে সব অক্ষর
            </h2>
            <p className="text-blue-600 text-sm font-medium">
              Damma - &quot;উ&quot; ধ্বনি
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3"
          dir="rtl"
        >
          {letters.map((letter, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 rounded-xl p-3 text-center hover:shadow-lg hover:border-blue-300 transition-all"
            >
              <div
                className="text-3xl md:text-4xl text-gray-800 mb-2"
                style={{
                  fontFamily: "'Scheherazade New', 'Amiri', serif",
                  lineHeight: "2",
                }}
              >
                {letter.damma}
              </div>
              <div className="text-sm font-bold text-blue-600 bg-white rounded-lg py-1 px-2">
                {letter.dammaSound}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Section */}
      <div className="mt-16">

        <HarakatQuiz />
      </div>
    </LessonLayout>
  );
}
