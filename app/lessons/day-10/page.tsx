import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import ShiddatQuiz from '@/app/components/ShiddatQuiz'

export const metadata: Metadata = {
  title: 'Day 10 - Shiddat (শিদ্দাত) | 30 Days Quran Learning',
  description: 'Learn Shiddat - the quality of strong/emphatic letters in Arabic Tajweed. Master the 8 letters of Shiddat.',
  openGraph: {
    title: 'Day 10 - Shiddat (শিদ্দাত) | 30 Days Quran Learning',
    description: 'Learn Shiddat - the quality of strong/emphatic letters in Arabic Tajweed. Master the 8 letters of Shiddat.',
  },
}

export default function Day10Page() {
  const shiddatLetters = [
    { letter: 'أ', name: 'আলিফ', transliteration: 'Alif' },
    { letter: 'ج', name: 'জীম', transliteration: 'Jeem' },
    { letter: 'د', name: 'দাল', transliteration: 'Dal' },
    { letter: 'ق', name: 'ক্বাফ', transliteration: 'Qaf' },
    { letter: 'ط', name: 'ত্বা', transliteration: 'Ta' },
    { letter: 'ب', name: 'বা', transliteration: 'Ba' },
    { letter: 'ك', name: 'কাফ', transliteration: 'Kaf' },
    { letter: 'ت', name: 'তা', transliteration: 'Ta' },
  ]

  const exampleWords = [
    { word: 'رَبِّ', pronunciation: 'রাব্বি', meaning: 'প্রভুর', highlightLetter: 'بّ', source: 'رَبِّ الْعَالَمِينَ' },
    { word: 'الْحَقُّ', pronunciation: 'আল-হাক্ব্ক্বু', meaning: 'সত্য', highlightLetter: 'قّ', source: 'وَالْحَقُّ أَقُولُ' },
    { word: 'الْحَجُّ', pronunciation: 'আল-হাজ্জু', meaning: 'হজ্জ', highlightLetter: 'جّ', source: 'الْحَجُّ أَشْهُرٌ' },
    { word: 'أَشَدُّ', pronunciation: 'আশাদ্দু', meaning: 'অধিক শক্তিশালী', highlightLetter: 'دّ', source: 'أَشَدُّ قُوَّةً' },
    { word: 'يَحُطُّ', pronunciation: 'ইয়াহুত্ত্বু', meaning: 'নামিয়ে দেয়', highlightLetter: 'طّ', source: 'يَحُطُّ الْخَطَايَا' },
    { word: 'الطَّامَّةُ', pronunciation: 'আত্ব-ত্বাম্মাতু', meaning: 'মহাবিপদ', highlightLetter: 'تّ', source: 'الطَّامَّةُ الْكُبْرَىٰ' },
    { word: 'مَكَّةَ', pronunciation: 'মাক্কাতা', meaning: 'মক্কা', highlightLetter: 'كّ', source: 'بِبَطْنِ مَكَّةَ' },
    { word: 'أُمَّةً', pronunciation: 'উম্মাতান', meaning: 'জাতি', highlightLetter: 'مّ', source: 'أُمَّةً وَاحِدَةً' },
  ]

  return (
    <LessonLayout
      dayNumber={10}
      title="Shiddat - শিদ্দাত"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">শিদ্দাত (الشِّدَّة)</h2>
        <p className="text-purple-200">Shiddat - The Strong/Emphatic Letters | জোরদার অক্ষর</p>
      </div>

      {/* What is Shiddat */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-2xl">📚</span> শিদ্দাত কী?
        </h3>
        <p className="text-gray-700 mb-3">
          শিদ্দাত (الشِّدَّة) অর্থ &quot;শক্তি&quot; বা &quot;জোর&quot;। এটি তাজবীদের একটি গুরুত্বপূর্ণ সিফাত (গুণ)।
          যখন শিদ্দাত অক্ষরে তাশদীদ (ّ) থাকে, তখন অক্ষরটি দুইবার জোর দিয়ে উচ্চারণ করতে হয় এবং শব্দ সম্পূর্ণভাবে আটকে যায়।
        </p>
        <p className="text-gray-600 text-sm">
          <strong>English:</strong> Shiddat (الشِّدَّة) means &quot;strength&quot; or &quot;intensity&quot;. When Shiddat letters have
          Tashdid (ّ), the letter is pronounced twice with emphasis and the sound is completely stopped/blocked.
        </p>
      </div>

      {/* The 8 Letters of Shiddat */}
      <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-purple-800 text-xl mb-4 text-center">
          শিদ্দাতের ৮টি অক্ষর
        </h3>

        {/* Mnemonic */}
        <div className="bg-white rounded-xl p-4 mb-6 text-center shadow-sm">
          <p className="text-gray-600 mb-2">মনে রাখার সূত্র:</p>
          <div
            dir="rtl"
            className="text-4xl text-purple-700 font-bold mb-2"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            أَجِدُ قَطٍ بَكَتْ
          </div>
          <p className="text-purple-600 font-medium">আজিদু ক্বাত্বিন বাকাত</p>
          <p className="text-gray-500 text-sm mt-1">&quot;আমি পেয়েছি একটি বিড়াল যে কাঁদছিল&quot;</p>
        </div>

        {/* Letters Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {shiddatLetters.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 text-center shadow-sm border border-purple-200 hover:border-purple-400 transition-colors"
            >
              <div
                className="text-4xl text-purple-700 mb-1"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                {item.letter}
              </div>
              <div className="text-xs text-gray-600">{item.name}</div>
              <div className="text-xs text-gray-400">{item.transliteration}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How Shiddat Works */}
      <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-rose-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-xl">⚡</span> তাশদীদ সহ শিদ্দাত কিভাবে কাজ করে?
        </h3>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>১. দুইবার উচ্চারণ:</strong> তাশদীদ থাকলে অক্ষরটি দুইবার উচ্চারণ করতে হয়।
          </p>
          <p>
            <strong>২. শব্দ আটকে যায়:</strong> শিদ্দাত অক্ষর উচ্চারণের সময় বাতাস সম্পূর্ণ আটকে যায়।
          </p>
          <p>
            <strong>৩. জোর দিয়ে ছেড়ে দেওয়া:</strong> তারপর জোর দিয়ে ছেড়ে দেওয়া হয়।
          </p>
        </div>
        <div className="mt-4 p-3 bg-white rounded-lg">
          <p className="text-rose-700 text-sm text-center">
            <strong>উদাহরণ:</strong> رَبِّ الْعَالَمِينَ (রাব্বিল আ'লামীন) - &quot;ب&quot; দুইবার জোর দিয়ে বলুন: রাব্ + বি = রাব্বি
          </p>
        </div>
      </div>

      {/* Comparison: Shiddat vs Rakhawat */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-gray-800 text-lg mb-4 text-center">
          শিদ্দাত vs রাখাওয়াত তুলনা
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-3 text-gray-700">বৈশিষ্ট্য</th>
                <th className="p-3 text-purple-700">শিদ্দাত (জোর)</th>
                <th className="p-3 text-teal-700">রাখাওয়াত (নরম)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">বাতাস</td>
                <td className="p-3 text-purple-600">সম্পূর্ণ আটকে যায়</td>
                <td className="p-3 text-teal-600">প্রবাহিত হয়</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">শব্দ</td>
                <td className="p-3 text-purple-600">থেমে যায়</td>
                <td className="p-3 text-teal-600">চলতে থাকে</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3 font-medium">উদাহরণ</td>
                <td className="p-3">
                  <span
                    className="text-2xl text-purple-700"
                    style={{ fontFamily: "'Amiri Quran', serif" }}
                  >
                    رَبِّ ، الْحَقُّ ، أَشَدُّ
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className="text-2xl text-teal-700"
                    style={{ fontFamily: "'Amiri Quran', serif" }}
                  >
                    الرَّحْمٰنِ ، يَسْمَعُ ، الْعَزِيزُ
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">অনুভূতি</td>
                <td className="p-3 text-purple-600">বিস্ফোরণের মত</td>
                <td className="p-3 text-teal-600">প্রবাহের মত</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Example Words */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-indigo-800 text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">📝</span> কোরআন থেকে তাশদীদ সহ শিদ্দাত অক্ষর
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {exampleWords.map((item, index) => (
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
                  <p className="text-indigo-700 font-medium">{item.pronunciation}</p>
                  <p className="text-gray-500 text-sm">{item.meaning}</p>
                </div>
              </div>
              <div
                dir="rtl"
                className="text-lg text-emerald-700 bg-emerald-50 px-2 py-1 rounded mb-2"
                style={{ fontFamily: "'Amiri Quran', serif" }}
              >
                {item.source}
              </div>
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded inline-block">
                শিদ্দাত অক্ষর: <span
                  className="text-lg"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >{item.highlightLetter}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Letters with Tashdid Practice */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-100 border border-slate-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 text-center">
          শিদ্দাত অক্ষর তাশদীদ ও হরকত সহ
        </h3>
        <p className="text-center text-gray-600 mb-4 text-sm">
          এই অক্ষরগুলোতে তাশদীদ থাকলে দুইবার জোর দিয়ে পড়ুন
        </p>
        <div
          dir="rtl"
          className="flex flex-wrap justify-center gap-4 text-5xl leading-[1.6] text-purple-700"
          style={{ fontFamily: "'Amiri Quran', serif" }}
        >
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">أَ</span>
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">جَّ</span>
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">دُّ</span>
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">قُّ</span>
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">طَّ</span>
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">بِّ</span>
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">كُّ</span>
          <span className="bg-white px-4 py-3 rounded-xl shadow-sm border-2 border-purple-200">تَّ</span>
        </div>
      </div>

      {/* Quran Examples */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-emerald-800 text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">📖</span> কোরআন থেকে তাশদীদ সহ উদাহরণ
        </h3>
        <div className="space-y-4">
          {/* Example 1 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِينَ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">আলহামদু লিল্লাহি রাব্বিল আ'লামীন</p>
              <p className="text-gray-500 text-sm mt-1">সমস্ত প্রশংসা আল্লাহর জন্য</p>
            </div>
            <div className="mt-3 p-2 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >رَبِّ</span> - بّ (বা) তাশদীদ সহ শিদ্দাত - দুইবার জোর দিয়ে পড়ুন
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              إِنَّ اللهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">ইন্নাল্লাহা আ'লা কুল্লি শাইয়িন ক্বাদীর</p>
              <p className="text-gray-500 text-sm mt-1">নিশ্চয়ই আল্লাহ সব কিছুর উপর ক্ষমতাবান</p>
            </div>
            <div className="mt-3 p-2 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >كُلِّ</span> - كّ (কাফ) তাশদীদ সহ শিদ্দাত
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              وَالْحَقُّ أَقُولُ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">ওয়াল হাক্ব্ক্বু আক্বূলু</p>
              <p className="text-gray-500 text-sm mt-1">এবং সত্যই আমি বলছি</p>
            </div>
            <div className="mt-3 p-2 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >الْحَقُّ</span> - قّ (ক্বাফ) তাশদীদ সহ শিদ্দাত - দুইবার জোর দিয়ে পড়ুন
              </p>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              وَلِلّٰهِ الْعِزَّةُ وَلِرَسُولِهِ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">ওয়া লিল্লাহিল ইয্যাতু ওয়া লিরাসূলিহী</p>
              <p className="text-gray-500 text-sm mt-1">এবং সম্মান আল্লাহ ও তাঁর রাসূলের জন্য</p>
            </div>
            <div className="mt-3 p-2 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >الْعِزَّةُ</span> - এখানে زّ তাশদীদ আছে (রাখাওয়াত অক্ষর - তুলনা করুন)
              </p>
            </div>
          </div>

          {/* Example 5 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">ইন্না ফাতাহনা লাকা ফাতহাম মুবীনা</p>
              <p className="text-gray-500 text-sm mt-1">নিশ্চয়ই আমি তোমাকে সুস্পষ্ট বিজয় দিয়েছি</p>
            </div>
            <div className="mt-3 p-2 bg-purple-50 rounded-lg">
              <p className="text-purple-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >مُّبِينًا</span> - مّ তাশদীদ, এবং <span
                  className="text-xl"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >ب</span> শিদ্দাত অক্ষর
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Articulation Points */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-blue-800 text-lg mb-4 text-center">
          শিদ্দাত অক্ষরের মাখরাজ (উচ্চারণ স্থান)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">১</span>
              ঠোঁট থেকে
            </h4>
            <div
              dir="rtl"
              className="text-3xl text-purple-700 text-center mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ب
            </div>
            <p className="text-sm text-gray-600 text-center">দুই ঠোঁট মিলিয়ে</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">২</span>
              জিহ্বার আগা থেকে
            </h4>
            <div
              dir="rtl"
              className="text-3xl text-purple-700 text-center mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ت ، د ، ط
            </div>
            <p className="text-sm text-gray-600 text-center">দাঁতের গোড়ায় স্পর্শ করে</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">৩</span>
              জিহ্বার মাঝখান থেকে
            </h4>
            <div
              dir="rtl"
              className="text-3xl text-purple-700 text-center mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ج
            </div>
            <p className="text-sm text-gray-600 text-center">তালুতে স্পর্শ করে</p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">৪</span>
              জিহ্বার পিছন থেকে
            </h4>
            <div
              dir="rtl"
              className="text-3xl text-purple-700 text-center mb-2"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              ق ، ك
            </div>
            <p className="text-sm text-gray-600 text-center">গলার কাছে</p>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-800 text-white rounded-xl p-5 mb-8">
        <h3 className="font-bold text-lg mb-4 text-center">🎯 দ্রুত মনে রাখার সূত্র</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-700 rounded-lg p-3">
            <div
              className="text-2xl mb-1"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              أَجِدُ
            </div>
            <div className="text-purple-400 font-bold text-sm">আজিদু</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <div
              className="text-2xl mb-1"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              قَطٍ
            </div>
            <div className="text-purple-400 font-bold text-sm">ক্বাত্বিন</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <div
              className="text-2xl mb-1"
              style={{ fontFamily: "'Amiri Quran', serif" }}
            >
              بَكَتْ
            </div>
            <div className="text-purple-400 font-bold text-sm">বাকাত</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xl mb-1">৮ অক্ষর</div>
            <div className="text-purple-400 font-bold text-sm">শিদ্দাত</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          أَجِدُ قَطٍ بَكَتْ = &quot;আমি পেয়েছি একটি বিড়াল যে কাঁদছিল&quot;
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
            <span>তাশদীদ সহ শিদ্দাত অক্ষর দুইবার জোর দিয়ে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>رَبِّ الْعَالَمِينَ، الْحَقُّ، أَشَدُّ বারবার অনুশীলন করুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>&quot;أَجِدُ قَطٍ بَكَتْ&quot; দিয়ে ৮টি অক্ষর মনে রাখুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>কোরআনে তাশদীদ সহ এই অক্ষরগুলো খুঁজে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>শিদ্দাত vs রাখাওয়াত এর পার্থক্য বুঝুন</span>
          </li>
        </ul>
      </div>

      {/* Quiz Section */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">📝</span>
          শিদ্দাত কুইজ
        </h3>
        <ShiddatQuiz />
      </div>
    </LessonLayout>
  )
}
