import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'

export const metadata: Metadata = {
  title: 'Day 11 - Madd (মাদ্দ) | 30 Days Quran Learning',
  description: 'Learn Madd - the elongation of vowels in Arabic Tajweed. Master Madd with Alif, Waw, and Ya.',
  openGraph: {
    title: 'Day 11 - Madd (মাদ্দ) | 30 Days Quran Learning',
    description: 'Learn Madd - the elongation of vowels in Arabic Tajweed. Master Madd with Alif, Waw, and Ya.',
  },
}

export default function Day11Page() {
  // Madd with Alif (after Fatha)
  const maddAlif = [
    { letter: 'ب', withMadd: 'بَا', pronunciation: 'বা-', bangla: 'বা টেনে' },
    { letter: 'ت', withMadd: 'تَا', pronunciation: 'তা-', bangla: 'তা টেনে' },
    { letter: 'ث', withMadd: 'ثَا', pronunciation: 'ছা-', bangla: 'ছা টেনে' },
    { letter: 'ج', withMadd: 'جَا', pronunciation: 'জা-', bangla: 'জা টেনে' },
    { letter: 'ح', withMadd: 'حَا', pronunciation: 'হা-', bangla: 'হা টেনে' },
    { letter: 'خ', withMadd: 'خَا', pronunciation: 'খা-', bangla: 'খা টেনে' },
    { letter: 'د', withMadd: 'دَا', pronunciation: 'দা-', bangla: 'দা টেনে' },
    { letter: 'ر', withMadd: 'رَا', pronunciation: 'রা-', bangla: 'রা টেনে' },
    { letter: 'س', withMadd: 'سَا', pronunciation: 'সা-', bangla: 'সা টেনে' },
    { letter: 'ش', withMadd: 'شَا', pronunciation: 'শা-', bangla: 'শা টেনে' },
    { letter: 'ص', withMadd: 'صَا', pronunciation: 'সা-', bangla: 'সা টেনে' },
    { letter: 'ض', withMadd: 'ضَا', pronunciation: 'দা-', bangla: 'দা টেনে' },
    { letter: 'ط', withMadd: 'طَا', pronunciation: 'ত্বা-', bangla: 'ত্বা টেনে' },
    { letter: 'ع', withMadd: 'عَا', pronunciation: 'আ-', bangla: 'আ টেনে' },
    { letter: 'ف', withMadd: 'فَا', pronunciation: 'ফা-', bangla: 'ফা টেনে' },
    { letter: 'ق', withMadd: 'قَا', pronunciation: 'ক্বা-', bangla: 'ক্বা টেনে' },
    { letter: 'ك', withMadd: 'كَا', pronunciation: 'কা-', bangla: 'কা টেনে' },
    { letter: 'ل', withMadd: 'لَا', pronunciation: 'লা-', bangla: 'লা টেনে' },
    { letter: 'م', withMadd: 'مَا', pronunciation: 'মা-', bangla: 'মা টেনে' },
    { letter: 'ن', withMadd: 'نَا', pronunciation: 'না-', bangla: 'না টেনে' },
    { letter: 'ه', withMadd: 'هَا', pronunciation: 'হা-', bangla: 'হা টেনে' },
    { letter: 'و', withMadd: 'وَا', pronunciation: 'ওয়া-', bangla: 'ওয়া টেনে' },
    { letter: 'ي', withMadd: 'يَا', pronunciation: 'ইয়া-', bangla: 'ইয়া টেনে' },
  ]

  // Madd with Waw (after Damma)
  const maddWaw = [
    { letter: 'ب', withMadd: 'بُو', pronunciation: 'বূ-', bangla: 'বূ টেনে' },
    { letter: 'ت', withMadd: 'تُو', pronunciation: 'তূ-', bangla: 'তূ টেনে' },
    { letter: 'ج', withMadd: 'جُو', pronunciation: 'জূ-', bangla: 'জূ টেনে' },
    { letter: 'ح', withMadd: 'حُو', pronunciation: 'হূ-', bangla: 'হূ টেনে' },
    { letter: 'د', withMadd: 'دُو', pronunciation: 'দূ-', bangla: 'দূ টেনে' },
    { letter: 'ر', withMadd: 'رُو', pronunciation: 'রূ-', bangla: 'রূ টেনে' },
    { letter: 'س', withMadd: 'سُو', pronunciation: 'সূ-', bangla: 'সূ টেনে' },
    { letter: 'ش', withMadd: 'شُو', pronunciation: 'শূ-', bangla: 'শূ টেনে' },
    { letter: 'ق', withMadd: 'قُو', pronunciation: 'ক্বূ-', bangla: 'ক্বূ টেনে' },
    { letter: 'ك', withMadd: 'كُو', pronunciation: 'কূ-', bangla: 'কূ টেনে' },
    { letter: 'ل', withMadd: 'لُو', pronunciation: 'লূ-', bangla: 'লূ টেনে' },
    { letter: 'م', withMadd: 'مُو', pronunciation: 'মূ-', bangla: 'মূ টেনে' },
    { letter: 'ن', withMadd: 'نُو', pronunciation: 'নূ-', bangla: 'নূ টেনে' },
    { letter: 'ه', withMadd: 'هُو', pronunciation: 'হূ-', bangla: 'হূ টেনে' },
    { letter: 'ي', withMadd: 'يُو', pronunciation: 'ইয়ূ-', bangla: 'ইয়ূ টেনে' },
  ]

  // Madd with Ya (after Kasra)
  const maddYa = [
    { letter: 'ب', withMadd: 'بِي', pronunciation: 'বী-', bangla: 'বী টেনে' },
    { letter: 'ت', withMadd: 'تِي', pronunciation: 'তী-', bangla: 'তী টেনে' },
    { letter: 'ج', withMadd: 'جِي', pronunciation: 'জী-', bangla: 'জী টেনে' },
    { letter: 'ح', withMadd: 'حِي', pronunciation: 'হী-', bangla: 'হী টেনে' },
    { letter: 'د', withMadd: 'دِي', pronunciation: 'দী-', bangla: 'দী টেনে' },
    { letter: 'ر', withMadd: 'رِي', pronunciation: 'রী-', bangla: 'রী টেনে' },
    { letter: 'س', withMadd: 'سِي', pronunciation: 'সী-', bangla: 'সী টেনে' },
    { letter: 'ش', withMadd: 'شِي', pronunciation: 'শী-', bangla: 'শী টেনে' },
    { letter: 'ق', withMadd: 'قِي', pronunciation: 'ক্বী-', bangla: 'ক্বী টেনে' },
    { letter: 'ك', withMadd: 'كِي', pronunciation: 'কী-', bangla: 'কী টেনে' },
    { letter: 'ل', withMadd: 'لِي', pronunciation: 'লী-', bangla: 'লী টেনে' },
    { letter: 'م', withMadd: 'مِي', pronunciation: 'মী-', bangla: 'মী টেনে' },
    { letter: 'ن', withMadd: 'نِي', pronunciation: 'নী-', bangla: 'নী টেনে' },
    { letter: 'ه', withMadd: 'هِي', pronunciation: 'হী-', bangla: 'হী টেনে' },
    { letter: 'ف', withMadd: 'فِي', pronunciation: 'ফী-', bangla: 'ফী টেনে' },
  ]

  // Quranic examples
  const quranicExamples = [
    { word: 'قَالَ', pronunciation: 'ক্বা-লা', meaning: 'সে বলল', maddType: 'আলিফ', maddLetter: 'ا' },
    { word: 'كِتَابٌ', pronunciation: 'কিতা-বুন', meaning: 'বই', maddType: 'আলিফ', maddLetter: 'ا' },
    { word: 'نُورٌ', pronunciation: 'নূ-রুন', meaning: 'আলো', maddType: 'ওয়াও', maddLetter: 'و' },
    { word: 'يَقُولُ', pronunciation: 'ইয়াক্বূ-লু', meaning: 'সে বলে', maddType: 'ওয়াও', maddLetter: 'و' },
    { word: 'فِيهَا', pronunciation: 'ফী-হা', meaning: 'তার মধ্যে', maddType: 'ইয়া', maddLetter: 'ي' },
    { word: 'كَرِيمٌ', pronunciation: 'কারী-মুন', meaning: 'সম্মানিত', maddType: 'ইয়া', maddLetter: 'ي' },
    { word: 'الرَّحْمٰنِ', pronunciation: 'আর-রাহমা-নি', meaning: 'পরম করুণাময়', maddType: 'আলিফ', maddLetter: 'ا' },
    { word: 'الرَّحِيمِ', pronunciation: 'আর-রাহী-মি', meaning: 'অসীম দয়ালু', maddType: 'ইয়া', maddLetter: 'ي' },
  ]

  return (
    <LessonLayout
      dayNumber={11}
      title="Madd - মাদ্দ (টানা)"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">মাদ্দ (المَدّ)</h2>
        <p className="text-teal-200">Madd - Elongation of Vowels | স্বর টেনে পড়া</p>
      </div>

      {/* What is Madd */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-2xl">📚</span> মাদ্দ কী?
        </h3>
        <p className="text-gray-700 mb-3">
          মাদ্দ (المَدّ) অর্থ &quot;টানা&quot; বা &quot;প্রসারিত করা&quot;। যখন কোন অক্ষরের পর মাদ্দের হরফ (ا و ي) আসে,
          তখন সেই অক্ষরের স্বর টেনে পড়তে হয়।
        </p>
        <p className="text-gray-600 text-sm">
          <strong>English:</strong> Madd means &quot;elongation&quot;. When a letter is followed by a Madd letter (ا و ي),
          the vowel sound is stretched/prolonged.
        </p>
      </div>

      {/* Three Types of Madd */}
      <div className="bg-teal-50 border-2 border-teal-300 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-teal-800 text-xl mb-4 text-center">
          মাদ্দের ৩টি হরফ (অক্ষর)
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Alif */}
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border-2 border-red-200">
            <div
              className="text-6xl text-red-600 mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ا
            </div>
            <h4 className="font-bold text-red-700 text-lg">আলিফ</h4>
            <p className="text-gray-600 text-sm mt-1">ফাতহা (যবর) এর পরে</p>
            <div className="mt-3 p-2 bg-red-50 rounded-lg">
              <span
                className="text-3xl text-red-700"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                بَا
              </span>
              <p className="text-red-600 font-bold">বা-</p>
            </div>
          </div>

          {/* Waw */}
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border-2 border-blue-200">
            <div
              className="text-6xl text-blue-600 mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              و
            </div>
            <h4 className="font-bold text-blue-700 text-lg">ওয়াও</h4>
            <p className="text-gray-600 text-sm mt-1">দাম্মা (পেশ) এর পরে</p>
            <div className="mt-3 p-2 bg-blue-50 rounded-lg">
              <span
                className="text-3xl text-blue-700"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                بُو
              </span>
              <p className="text-blue-600 font-bold">বূ-</p>
            </div>
          </div>

          {/* Ya */}
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border-2 border-green-200">
            <div
              className="text-6xl text-green-600 mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ي
            </div>
            <h4 className="font-bold text-green-700 text-lg">ইয়া</h4>
            <p className="text-gray-600 text-sm mt-1">কাসরা (যের) এর পরে</p>
            <div className="mt-3 p-2 bg-green-50 rounded-lg">
              <span
                className="text-3xl text-green-700"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                بِي
              </span>
              <p className="text-green-600 font-bold">বী-</p>
            </div>
          </div>
        </div>
      </div>

      {/* Important Rule */}
      <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-rose-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-xl">⚠️</span> গুরুত্বপূর্ণ নিয়ম
        </h3>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>১. ফাতহা + আলিফ:</strong> যবর এর পর আলিফ আসলে &quot;আ&quot; টেনে পড়তে হয়
          </p>
          <p>
            <strong>২. দাম্মা + ওয়াও:</strong> পেশ এর পর ওয়াও আসলে &quot;ঊ&quot; টেনে পড়তে হয়
          </p>
          <p>
            <strong>৩. কাসরা + ইয়া:</strong> যের এর পর ইয়া আসলে &quot;ঈ&quot; টেনে পড়তে হয়
          </p>
        </div>
        <div className="mt-4 p-3 bg-white rounded-lg">
          <p className="text-rose-700 text-sm text-center">
            <strong>মনে রাখুন:</strong> মাদ্দ = টানা। হরকত + মাদ্দের হরফ = টেনে পড়া
          </p>
        </div>
      </div>

      {/* Madd with Alif Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
          ফাতহা + আলিফ = আ- (টেনে)
        </h3>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="text-4xl text-red-600"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـَ
            </span>
            <span className="text-2xl text-gray-500">+</span>
            <span
              className="text-4xl text-red-600"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ا
            </span>
            <span className="text-2xl text-gray-500">=</span>
            <span className="text-2xl text-red-700 font-bold">আ- (টেনে)</span>
          </div>
          <div
            dir="rtl"
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3"
          >
            {maddAlif.slice(0, 16).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 text-center shadow-sm border border-red-100"
              >
                <div
                  className="text-3xl text-gray-800 mb-1"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {item.withMadd}
                </div>
                <div className="text-red-600 font-bold text-sm" style={{ direction: 'ltr' }}>{item.pronunciation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Madd with Waw Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">২</span>
          দাম্মা + ওয়াও = ঊ- (টেনে)
        </h3>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="text-4xl text-blue-600"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـُ
            </span>
            <span className="text-2xl text-gray-500">+</span>
            <span
              className="text-4xl text-blue-600"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              و
            </span>
            <span className="text-2xl text-gray-500">=</span>
            <span className="text-2xl text-blue-700 font-bold">ঊ- (টেনে)</span>
          </div>
          <div
            dir="rtl"
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3"
          >
            {maddWaw.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 text-center shadow-sm border border-blue-100"
              >
                <div
                  className="text-3xl text-gray-800 mb-1"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {item.withMadd}
                </div>
                <div className="text-blue-600 font-bold text-sm" style={{ direction: 'ltr' }}>{item.pronunciation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Madd with Ya Section */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">৩</span>
          কাসরা + ইয়া = ঈ- (টেনে)
        </h3>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="text-4xl text-green-600"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـِ
            </span>
            <span className="text-2xl text-gray-500">+</span>
            <span
              className="text-4xl text-green-600"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ي
            </span>
            <span className="text-2xl text-gray-500">=</span>
            <span className="text-2xl text-green-700 font-bold">ঈ- (টেনে)</span>
          </div>
          <div
            dir="rtl"
            className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-3"
          >
            {maddYa.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 text-center shadow-sm border border-green-100"
              >
                <div
                  className="text-3xl text-gray-800 mb-1"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {item.withMadd}
                </div>
                <div className="text-green-600 font-bold text-sm" style={{ direction: 'ltr' }}>{item.pronunciation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison: With and Without Madd */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-gray-800 text-lg mb-4 text-center">
          মাদ্দ ছাড়া vs মাদ্দ সহ তুলনা
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-3 text-gray-700">মাদ্দ ছাড়া</th>
                <th className="p-3 text-gray-700">উচ্চারণ</th>
                <th className="p-3 text-teal-700">মাদ্দ সহ</th>
                <th className="p-3 text-teal-700">উচ্চারণ</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: "'Amiri Quran', serif" }}>
              <tr className="border-b border-gray-200 bg-red-50">
                <td className="p-3">
                  <span className="text-3xl text-gray-600">بَ</span>
                </td>
                <td className="p-3 text-gray-600 font-bold" style={{ fontFamily: 'system-ui' }}>বা</td>
                <td className="p-3">
                  <span className="text-3xl text-red-600">بَا</span>
                </td>
                <td className="p-3 text-red-600 font-bold" style={{ fontFamily: 'system-ui' }}>বা- (টেনে)</td>
              </tr>
              <tr className="border-b border-gray-200 bg-blue-50">
                <td className="p-3">
                  <span className="text-3xl text-gray-600">بُ</span>
                </td>
                <td className="p-3 text-gray-600 font-bold" style={{ fontFamily: 'system-ui' }}>বু</td>
                <td className="p-3">
                  <span className="text-3xl text-blue-600">بُو</span>
                </td>
                <td className="p-3 text-blue-600 font-bold" style={{ fontFamily: 'system-ui' }}>বূ- (টেনে)</td>
              </tr>
              <tr className="bg-green-50">
                <td className="p-3">
                  <span className="text-3xl text-gray-600">بِ</span>
                </td>
                <td className="p-3 text-gray-600 font-bold" style={{ fontFamily: 'system-ui' }}>বি</td>
                <td className="p-3">
                  <span className="text-3xl text-green-600">بِي</span>
                </td>
                <td className="p-3 text-green-600 font-bold" style={{ fontFamily: 'system-ui' }}>বী- (টেনে)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quran Examples */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-emerald-800 text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">📖</span> কোরআন থেকে মাদ্দের উদাহরণ
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {quranicExamples.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div
                  dir="rtl"
                  className="text-3xl text-gray-800"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {item.word}
                </div>
                <div className="text-right">
                  <p className="text-teal-700 font-medium">{item.pronunciation}</p>
                  <p className="text-gray-500 text-sm">{item.meaning}</p>
                </div>
              </div>
              <div className={`text-xs px-2 py-1 rounded inline-block ${
                item.maddType === 'আলিফ' ? 'text-red-600 bg-red-50' :
                item.maddType === 'ওয়াও' ? 'text-blue-600 bg-blue-50' :
                'text-green-600 bg-green-50'
              }`}>
                মাদ্দ: {item.maddType} (<span
                  className="text-lg"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >{item.maddLetter}</span>)
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Surah Example */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-purple-800 text-lg mb-4 text-center">
          সূরা আল-ফাতিহায় মাদ্দ
        </h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-2xl md:text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
            </div>
            <div className="text-center text-sm text-gray-600">
              <span className="text-red-600">الرَّحْمٰنِ</span> = রাহমা<span className="text-red-600 font-bold">-</span>নি (আলিফ মাদ্দ) |
              <span className="text-green-600 ml-2">الرَّحِيمِ</span> = রাহী<span className="text-green-600 font-bold">-</span>মি (ইয়া মাদ্দ)
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-2xl md:text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِينَ
            </div>
            <div className="text-center text-sm text-gray-600">
              <span className="text-red-600">الْعٰلَمِينَ</span> = আলামী<span className="text-green-600 font-bold">-</span>ন (ইয়া মাদ্দ)
            </div>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-800 text-white rounded-xl p-5 mb-8">
        <h3 className="font-bold text-lg mb-4 text-center">🎯 দ্রুত মনে রাখার সূত্র</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-700 rounded-lg p-4">
            <div
              className="text-3xl mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـَا
            </div>
            <div className="text-red-400 font-bold">যবর + আলিফ</div>
            <div className="text-gray-400 text-sm">= আ- (টেনে)</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <div
              className="text-3xl mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـُو
            </div>
            <div className="text-blue-400 font-bold">পেশ + ওয়াও</div>
            <div className="text-gray-400 text-sm">= ঊ- (টেনে)</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-4">
            <div
              className="text-3xl mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ـِي
            </div>
            <div className="text-green-400 font-bold">যের + ইয়া</div>
            <div className="text-gray-400 text-sm">= ঈ- (টেনে)</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          মাদ্দ = টানা | ৩টি হরফ: ا و ي
        </p>
      </div>

      {/* Practice Tips */}
      <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-xl">
        <h3 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span> অনুশীলনের টিপস
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>মাদ্দ থাকলে অন্তত ২ হরকত পরিমাণ টানুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>بَا، بُو، بِي বারবার অনুশীলন করুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>কোরআনে মাদ্দের হরফ খুঁজে টেনে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>মাদ্দ ছাড়া এবং মাদ্দ সহ পার্থক্য বুঝুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>الرَّحْمٰنِ الرَّحِيمِ অনুশীলন করুন - দুই ধরনের মাদ্দ আছে</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  )
}
