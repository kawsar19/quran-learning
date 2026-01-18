import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import SukunWords from '@/app/components/SukunWords'

export const metadata: Metadata = {
  title: 'Day 11 - Sukun Practice (সুকুন অনুশীলন) | 30 Days Quran Learning',
  description: 'Learn Sukun - the sign of no vowel in Arabic. Practice words with Sukun and examples from Quran.',
  openGraph: {
    title: 'Day 11 - Sukun Practice (সুকুন অনুশীলন) | 30 Days Quran Learning',
    description: 'Learn Sukun - the sign of no vowel in Arabic. Practice words with Sukun and examples from Quran.',
  },
}

export default function Day9Page() {
  return (
    <LessonLayout
      dayNumber={9}
      title="Sukun - সুকুন অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-zinc-700 text-white p-6 rounded-2xl shadow-xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">সুকুন (বিরাম চিহ্ন)</h2>
        <p className="text-slate-300">Sukun - The Sign of Rest | স্বরহীন অক্ষর</p>
      </div>

      {/* What is Sukun */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
          <span className="text-2xl">📚</span> সুকুন কী?
        </h3>
        <p className="text-gray-700 mb-3">
          সুকুন (سُكُون) অর্থ &quot;বিশ্রাম&quot; বা &quot;স্থিরতা&quot;। এটি অক্ষরের উপরে একটি ছোট বৃত্ত (<span
            className="text-2xl align-middle"
            style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
          >ْ</span>) যা বোঝায় যে এই অক্ষরে কোন স্বর (harakat) নেই।
        </p>
        <p className="text-gray-600 text-sm">
          <strong>English:</strong> Sukun (سُكُون) means &quot;rest&quot; or &quot;silence&quot;. It&apos;s a small circle (ْ) above a letter
          indicating no vowel follows that consonant.
        </p>
      </div>

      {/* Sukun Symbol */}
      <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-6 text-center mb-8">
        <div
          className="text-8xl text-slate-700 mb-4"
          style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
        >
          ـْـ
        </div>
        <h3 className="font-bold text-slate-800 text-xl">সুকুন চিহ্ন</h3>
        <p className="text-slate-600 mt-2">অক্ষরের উপরে ছোট গোল বৃত্ত</p>
        <p className="text-slate-500 text-sm mt-1">A small circle above the letter</p>
      </div>

      {/* Harakat vs Sukun Comparison */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-gray-800 text-lg mb-4 text-center">হরকত vs সুকুন তুলনা</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="p-3 text-gray-700">হরকত সহ</th>
                <th className="p-3 text-gray-700">উচ্চারণ</th>
                <th className="p-3 text-gray-700">সুকুন সহ</th>
                <th className="p-3 text-gray-700">উচ্চারণ</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}>
              <tr className="border-b border-gray-200 bg-red-50">
                <td className="p-3">
                  <span className="text-3xl text-red-600">بَ</span>
                </td>
                <td className="p-3 text-red-600 font-bold" style={{ fontFamily: 'system-ui' }}>বা</td>
                <td className="p-3">
                  <span className="text-3xl text-slate-700">بْ</span>
                </td>
                <td className="p-3 text-slate-700 font-bold" style={{ fontFamily: 'system-ui' }}>ব্</td>
              </tr>
              <tr className="border-b border-gray-200 bg-green-50">
                <td className="p-3">
                  <span className="text-3xl text-green-600">مِ</span>
                </td>
                <td className="p-3 text-green-600 font-bold" style={{ fontFamily: 'system-ui' }}>মি</td>
                <td className="p-3">
                  <span className="text-3xl text-slate-700">مْ</span>
                </td>
                <td className="p-3 text-slate-700 font-bold" style={{ fontFamily: 'system-ui' }}>ম্</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="p-3">
                  <span className="text-3xl text-blue-600">نُ</span>
                </td>
                <td className="p-3 text-blue-600 font-bold" style={{ fontFamily: 'system-ui' }}>নু</td>
                <td className="p-3">
                  <span className="text-3xl text-slate-700">نْ</span>
                </td>
                <td className="p-3 text-slate-700 font-bold" style={{ fontFamily: 'system-ui' }}>ন্</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-600 text-sm mt-4">
          সুকুন থাকলে অক্ষরটি হসন্ত (্) দিয়ে পড়তে হয় - কোন স্বর যোগ হয় না
        </p>
      </div>

      {/* Key Rule */}
      <div className="bg-rose-50 border-2 border-rose-300 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-rose-800 text-lg mb-2 flex items-center gap-2">
          <span className="text-xl">⚠️</span> গুরুত্বপূর্ণ নিয়ম
        </h3>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>১.</strong> সুকুন শুধু শব্দের মাঝে বা শেষে আসে - কখনো শুরুতে না।
          </p>
          <p>
            <strong>২.</strong> সুকুনওয়ালা অক্ষর আগের অক্ষরের সাথে মিলে পড়তে হয়।
          </p>
          <p>
            <strong>৩.</strong> যেমন: <span
              className="text-2xl mx-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >مِنْ</span> = মি + ন্ = মিন (আলাদা আলাদা না, একসাথে)
          </p>
        </div>
      </div>

      {/* How to Read */}
      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl mb-8">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2">
          <span className="text-xl">📖</span> কিভাবে পড়বেন
        </h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          <li>• অক্ষরের উপরে ছোট বৃত্ত (ْ) দেখলে বুঝবেন সুকুন</li>
          <li>• সুকুনওয়ালা অক্ষর স্বরহীন - শুধু ব্যঞ্জনধ্বনি</li>
          <li>• বাংলায় হসন্ত (্) এর মত পড়ুন</li>
          <li>• আগের অক্ষরের সাথে মিলিয়ে একসাথে পড়ুন</li>
        </ul>
      </div>

      {/* All Letters with Sukun */}
      <div className="bg-gradient-to-r from-slate-100 to-gray-100 border border-slate-200 rounded-xl p-5 mb-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 text-center">সকল অক্ষর সুকুন সহ</h3>
        <div
          dir="rtl"
          className="flex flex-wrap justify-center gap-3 text-4xl leading-[1.6] text-slate-700"
          style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
        >
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">اْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">بْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">تْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">ثْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">جْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">حْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">خْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">دْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">ذْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">رْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">زْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">سْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">شْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">صْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">ضْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">طْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">ظْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">عْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">غْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">فْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">قْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">كْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">لْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">مْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">نْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">هْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">وْ</span>
          <span className="bg-white px-3 py-2 rounded-lg shadow-sm">يْ</span>
        </div>
      </div>

      {/* Section Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="bg-slate-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">১</span>
        সুকুন শব্দ অনুশীলন (২০টি শব্দ)
      </h3>

      {/* Sukun Words Component */}
      <SukunWords />

      {/* Quran Examples */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-5 mt-10">
        <h3 className="font-bold text-emerald-800 text-lg mb-4 flex items-center gap-2">
          <span className="text-xl">📖</span> কোরআন থেকে উদাহরণ
        </h3>
        <div className="space-y-4">
          {/* Example 1 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              قُلْ هُوَ اللهُ أَحَدٌ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">ক্বুল হুওয়াল্লাহু আহাদ</p>
              <p className="text-gray-500 text-sm mt-1">বলুন, তিনি আল্লাহ, এক</p>
            </div>
            <div className="mt-3 p-2 bg-amber-50 rounded-lg">
              <p className="text-amber-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >قُلْ</span> - এখানে <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >لْ</span> এ সুকুন আছে
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِينَ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">আলহামদু লিল্লাহি রাব্বিল আ'লামীন</p>
              <p className="text-gray-500 text-sm mt-1">সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সৃষ্টিকুলের রব</p>
            </div>
            <div className="mt-3 p-2 bg-amber-50 rounded-lg">
              <p className="text-amber-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >الْحَمْدُ</span> - এখানে <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >لْ</span> ও <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >مْ</span> এ সুকুন আছে
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">বিসমিল্লাহির রাহমানির রাহীম</p>
              <p className="text-gray-500 text-sm mt-1">পরম করুণাময় অসীম দয়ালু আল্লাহর নামে</p>
            </div>
            <div className="mt-3 p-2 bg-amber-50 rounded-lg">
              <p className="text-amber-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >بِسْمِ</span> - এখানে <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >سْ</span> এ সুকুন,
                <span
                  className="text-xl mx-1"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >الرَّحْمٰنِ</span> - এখানে <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >حْ</span> এ সুকুন
              </p>
            </div>
          </div>

          {/* Example 4 */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div
              dir="rtl"
              className="text-3xl text-gray-800 mb-3 text-center leading-loose"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              وَالْعَصْرِ ۙ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-medium">ওয়াল আসর। ইন্নাল ইনসানা লাফী খুসর</p>
              <p className="text-gray-500 text-sm mt-1">সময়ের কসম। নিশ্চয়ই মানুষ ক্ষতিতে আছে</p>
            </div>
            <div className="mt-3 p-2 bg-amber-50 rounded-lg">
              <p className="text-amber-800 text-sm text-center">
                <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >الْعَصْرِ</span> এবং <span
                  className="text-xl"
                  style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
                >خُسْرٍ</span> - দুটোতেই সুকুন আছে
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Sukun Patterns */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5 mt-8">
        <h3 className="font-bold text-blue-800 text-lg mb-4 text-center">
          সাধারণ সুকুন প্যাটার্ন
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3">الْ (আল) - The</h4>
            <div
              dir="rtl"
              className="flex flex-wrap gap-2 text-2xl"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              <span className="bg-blue-50 px-2 py-1 rounded">الْكِتَاب</span>
              <span className="bg-blue-50 px-2 py-1 rounded">الْقَلَم</span>
              <span className="bg-blue-50 px-2 py-1 rounded">الْبَيْت</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              &quot;আল&quot; এর লাম সবসময় সুকুন সহ থাকে
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-3">ক্রিয়াপদের শুরু</h4>
            <div
              dir="rtl"
              className="flex flex-wrap gap-2 text-2xl"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              <span className="bg-indigo-50 px-2 py-1 rounded">يَعْلَم</span>
              <span className="bg-indigo-50 px-2 py-1 rounded">يَسْمَع</span>
              <span className="bg-indigo-50 px-2 py-1 rounded">يَكْتُب</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              অনেক ক্রিয়াপদে দ্বিতীয় অক্ষরে সুকুন থাকে
            </p>
          </div>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="bg-gray-800 text-white rounded-xl p-5 mt-8">
        <h3 className="font-bold text-lg mb-4 text-center">🎯 দ্রুত মনে রাখার সূত্র</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-700 rounded-lg p-3">
            <div
              className="text-3xl mb-1"
              style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
            >
              ـْ
            </div>
            <div className="text-amber-400 font-bold text-sm">সুকুন</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-2xl mb-1">◯</div>
            <div className="text-amber-400 font-bold text-sm">ছোট বৃত্ত</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-2xl mb-1">্</div>
            <div className="text-amber-400 font-bold text-sm">হসন্ত</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xl mb-1">No vowel</div>
            <div className="text-amber-400 font-bold text-sm">স্বরহীন</div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">
          সুকুন = বিশ্রাম = অক্ষর থামে, কোন স্বর নেই
        </p>
      </div>

      {/* Practice Tips */}
      <div className="bg-cyan-50 border border-cyan-200 p-5 rounded-xl mt-8">
        <h3 className="font-bold text-cyan-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span> অনুশীলনের টিপস
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>সুকুনওয়ালা অক্ষর দ্রুত পড়ুন - থামবেন না</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>আগের অক্ষরের সাথে একসাথে মিলিয়ে পড়ুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>কোরআনে &quot;الْ&quot; খুঁজে বের করে practice করুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>বাংলা হসন্ত (্) এর মত ভাবুন</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">✓</span>
            <span>পরের দিন শাদ্দা (তাশদীদ) শিখবেন</span>
          </li>
        </ul>
      </div>
    </LessonLayout>
  )
}
