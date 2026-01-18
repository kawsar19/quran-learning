import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import FathaWords from '@/app/components/FathaWords'
import KasraWords from '@/app/components/KasraWords'
import DammaWords from '@/app/components/DammaWords'
import MixedHarakatWords from '@/app/components/MixedHarakatWords'
import HarakatQuiz from '@/app/components/HarakatQuiz'

export const metadata: Metadata = {
  title: 'Day 6 - Mixed Harakat Practice (মিশ্র হরকত অনুশীলন) | 30 Days Quran Learning',
  description: 'Practice all three Harakat - Fatha, Kasra, Damma and mixed words with Bangla pronunciation.',
}

export default function Day6Page() {
  return (
    <LessonLayout
      dayNumber={6}
      title="Mixed Harakat Practice - মিশ্র হরকত অনুশীলন"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header with Premium Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl mb-12">
        <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">মিশ্র হরকত অনুশীলন</h2>
            <p className="text-purple-100 text-lg md:text-xl font-medium opacity-90">Mixed Harakat Practice | তিন হরকত একসাথে শেখা</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </div>

      {/* Goal Section */}
      <div className="bg-white border border-purple-50 rounded-3xl p-8 mb-12 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 bg-purple-100 text-purple-600 rounded-lg text-lg">🎯</span>
          আজকের লক্ষ্য
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          গত পাঠে আমরা আলাদাভাবে প্রতিটি হরকত চিনেছি। আজ আমরা শিখবো কিভাবে এই তিনটি হরকত (যবর, যের, পেশ) 
          একই শব্দের মধ্যে ভিন্ন ভিন্নভাবে ব্যবহৃত হয়। এটি আপনার পড়ার গতি এবং নির্ভুলতা বাড়াতে সাহায্য করবে।
        </p>
      </div>

      {/* Three Harakat Overview Table-like Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white border border-red-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="text-5xl text-red-500 mb-4" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>ـَ</div>
          <h3 className="font-black text-gray-800 text-lg">ফাতহা (যবর)</h3>
          <p className="text-red-400 font-bold text-xs uppercase tracking-widest mb-4">Zabar = &quot;A&quot; Sound</p>
          <div className="bg-red-50 rounded-2xl py-3 px-4 flex items-center justify-center gap-3">
             <span className="text-3xl text-gray-800" style={{ fontFamily: "'Scheherazade New', serif" }}>بَ</span>
             <span className="text-gray-400 font-bold">→</span>
             <span className="text-xl font-black text-red-600">বা</span>
          </div>
        </div>

        <div className="bg-white border border-emerald-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="text-5xl text-emerald-500 mb-4" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>ـِ</div>
          <h3 className="font-black text-gray-800 text-lg">কাসরা (যের)</h3>
          <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4">Zer = &quot;I&quot; Sound</p>
          <div className="bg-emerald-50 rounded-2xl py-3 px-4 flex items-center justify-center gap-3">
             <span className="text-3xl text-gray-800" style={{ fontFamily: "'Scheherazade New', serif" }}>بِ</span>
             <span className="text-gray-400 font-bold">→</span>
             <span className="text-xl font-black text-emerald-600">বি</span>
          </div>
        </div>

        <div className="bg-white border border-blue-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="text-5xl text-blue-500 mb-4" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif" }}>ـُ</div>
          <h3 className="font-black text-gray-800 text-lg">দাম্মা (পেশ)</h3>
          <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Pesh = &quot;U&quot; Sound</p>
          <div className="bg-blue-50 rounded-2xl py-3 px-4 flex items-center justify-center gap-3">
             <span className="text-3xl text-gray-800" style={{ fontFamily: "'Scheherazade New', serif" }}>بُ</span>
             <span className="text-gray-400 font-bold">→</span>
             <span className="text-xl font-black text-blue-600">বু</span>
          </div>
        </div>
      </div>

      {/* Practice Sections */}
      <div className="space-y-20">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-500 text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-lg shadow-red-200">১</div>
            <div>
                <h3 className="text-2xl font-black text-gray-800 leading-none">ফাতহা (যবর) অনুশীলন</h3>
                <p className="text-red-500 text-xs font-bold uppercase tracking-widest mt-1">Fatha Words Practice</p>
            </div>
          </div>
          <FathaWords />
        </section>

      </div>

 
      {/* Quiz Section */}
      <div className="mt-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 tracking-tight">সবগুলো হরকত যাচাই করুন</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
                আপনার শেখার মান যাচাই করতে এই কুইজটি দিন। এটি আপনাকে দ্রুত হরকত চিনতে সাহায্য করবে।
            </p>
        </div>
        <HarakatQuiz />
      </div>

      {/* Practice Tips */}
      <div className="mt-24 bg-rose-50 rounded-[3rem] p-8 md:p-12 border border-rose-100">
         <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl">💡</div>
            <h3 className="text-2xl font-black text-gray-900">অনুশীলনের দারুণ কিছু টিপস</h3>
         </div>
         <div className="grid md:grid-cols-2 gap-8">
            {[
                { title: '৩ বার পুনরাবৃত্তি', desc: 'প্রতিটি নতুন শব্দ অন্তত ৩ বার করে জোরে উচ্চারণ করে পড়ুন।' },
                { title: 'চিহ্ন খেয়াল করুন', desc: 'হরকতটি অক্ষরের উপরে না নিচে আছে তা আগে নিশ্চিত হোন।' },
                { title: 'রঙের সাহায্য', desc: 'শুরুতে রঙ দেখে হরকত আলাদা করুন, পরে নিজে নিজেই পড়ার চেষ্টা করুন।' },
                { title: 'পরবর্তী ধাপ', desc: 'হরকতে দক্ষ হলে আমরা পরবর্তী পাঠে তানউইন (নুনেশন) শিখবো।' }
            ].map((tip, i) => (
                <div key={i} className="flex gap-4">
                    <div className="text-rose-500 font-black text-xl">0{i+1}.</div>
                    <div>
                        <h4 className="font-black text-gray-800 mb-1">{tip.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </LessonLayout>
  )
}
