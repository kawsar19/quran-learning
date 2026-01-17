import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import MixedPractice from '@/app/components/MixedPractice'

export const metadata: Metadata = {
  title: 'Day 8 - Harakat & Tanween Mixed Practice | 30 Days Quran Learning',
  description: 'Extensive practice of words combining Harakat and Tanween for better fluency.',
}

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
        <p className="text-emerald-50 text-lg opacity-90">Mixed Practice: Harakat & Tanween Combined</p>
      </div>

      {/* Goal of the Day */}
      <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 mb-10 shadow-sm">
        <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎯</span> আজকের লক্ষ্য
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">
          গত কয়েকদিনে আমরা হরকত (যবর, যের, পেশ) এবং তানউইন (দুই যবর, দুই যের, দুই পেশ) শিখেছি। 
          আজকের দিনে আমরা এই দুটি বিষয় একসাথে মিলে যে শব্দগুলো গঠিত হয়, সেগুলো বেশি বেশি করে অনুশীলন করব। 
          এটি আপনার পড়ার গতি এবং নির্ভুলতা বাড়াতে সাহায্য করবে।
        </p>
      </div>

      {/* Section Title */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-emerald-200"></div>
        <h3 className="text-2xl font-bold text-gray-800">শব্দ অনুশীলন (Practice Words)</h3>
        <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-emerald-200"></div>
      </div>

      <p className="text-center text-gray-500 mb-8 text-lg">নিচের শব্দগুলো জোরে জোরে পড়ার চেষ্টা করুন</p>

      {/* Mixed Practice Grid */}
      <MixedPractice />

      {/* Tips Section */}
      <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
        <h3 className="text-xl font-bold text-amber-800 mb-6 flex items-center gap-2">
          <span className="text-2xl">💡</span> দ্রুত শেখার টিপস
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-amber-900 mb-2">১. বানান করে পড়ুন</h4>
            <p className="text-gray-600">প্রতিটি শব্দের হরফ এবং হরকত আলাদা করে প্রথমে বানান করুন, তারপর পুরো শব্দটি একসাথে বলুন।</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-amber-900 mb-2">২. তানউইন লক্ষ্য করুন</h4>
            <p className="text-gray-600">শব্দের শেষে তানউইন থাকলে &quot;ন&quot; ধ্বনিটি স্পষ্টভাবে উচ্চারণ করার চেষ্টা করুন।</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-amber-900 mb-2">৩. রিদম ঠিক রাখুন</h4>
            <p className="text-gray-600">হরকতের টানে কোনো খলল না ঘটিয়ে শব্দগুলো সহজভাবে পড়ার চেষ্টা করুন।</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-amber-900 mb-2">৪. বার বার অনুশীলন</h4>
            <p className="text-gray-600">একই লিস্ট অন্তত ৩-৪ বার পড়ুন যতক্ষণ না আপনি প্রতিটি শব্দ অনর্গল পড়তে পারছেন।</p>
          </div>
        </div>
      </div>

      {/* Encouragement */}
      <div className="mt-12 text-center p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
        <div className="text-4xl mb-4">⭐</div>
        <h3 className="text-2xl font-bold text-emerald-800 mb-2">আপনি চমৎকার করছেন!</h3>
        <p className="text-emerald-600">ইনশাআল্লাহ, আপনার মনোযোগ আপনাকে খুব দ্রুত কোরআন পড়ার যোগ্য করে তুলবে।</p>
      </div>
    </LessonLayout>
  )
}
