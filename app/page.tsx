import Link from "next/link";
import FAQAccordion from "./components/FAQAccordion";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20" />
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white/10" />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              সহজ কোরআন শিক্ষা 
              <br />
              রামাদান স্পেশাল
            </h1>
            <p className="text-emerald-100 text-lg mb-8 max-w-xl leading-relaxed">
              ঘরে বসেই আরবি শেখার অনলাইন কোর্স।
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/lessons"
                className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
              >
                এখনই ভর্তি হোন
              </Link>
              <Link
                href="#courses"
                className="border-2 border-white/60 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                কোর্স দেখুন
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 hidden">
                <span className="text-lg">👨‍🎓</span>
                <span>332+ শিক্ষার্থী ভর্তি হয়েছে</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-lg">📅</span>
                <span>মেয়াদ: ১ মাস</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Course is Best */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                কেন আমাদের কোর্স সেরা
              </h2>
              <p className="text-emerald-600 font-medium mb-8">
                Quran Learning-এ আপনাকে স্বাগতম!
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                বিশুদ্ধ তাজবীদসহ কোরআন শেখার জন্য আমাদের কোর্স বিশেষভাবে ডিজাইন
                করা হয়েছে। অভিজ্ঞ শিক্ষকের তত্ত্বাবধানে আপনি সঠিকভাবে কোরআন
                তিলাওয়াত শিখতে পারবেন।
              </p>
              <ul className="space-y-4">
                {[
                  "অভিজ্ঞ শিক্ষক",
                  "প্রি-রেকর্ডেট ক্লাশ",
                  "লাইভ ক্লাশ",
                  "ক্লিক-টু-অডিও",
                  "কুইজ",
                  "ওয়ান-টু-ওয়ান সেশন সুবিধা ",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Our Courses */}
      <section id="courses" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              আমাদের কোর্সসমূহ
            </h2>

          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Course 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="bg-emerald-50 p-6 flex items-center gap-4">
                <div className="text-4xl">📗</div>
                <div>
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    30+ VIDEOS
                  </span>
                  <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                    5+ Live CLASS
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">
                  সহজ কোরআন শিক্ষা – রামাদান স্পেশাল
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                 পবিত্র রামাদান উপলক্ষে বিশেষভাবে আয়ো জন করা হয়েছে সহজ কোরআন শিক্ষা কোর্স।
এই কোর্সটি তাদের জন্য, যারা কোরআন পড়তে চান কিন্তু এখনো শুদ্ধভাবে পড়তে পারেন না অথবা কোরআন শরীফ অনেক আগে পড়েছেন এখন ভুলে গেছেন আবার প্রথম থেকে ভালো ভাবে কোরআন তেলাওয়াত শিখতে চান         </p>
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <span className="text-gray-400 text-xs">কোর্স ফি:</span>
                    <p className="font-bold text-gray-900">উন্মুক্ত, সর্বনিম্ন ১০ ৳</p>
                  </div>
                  <div className="border-l pl-4">
                    <span className="text-gray-400 text-xs hidden">দিন:</span>
                    <p className="font-bold text-gray-900">৩০</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 hidden">
                  <span>👨‍🎓</span>
                  <span>১৫০+ শিক্ষার্থী ভর্তি হয়েছে</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/lessons"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                  >
                    এখনই ভর্তি হোন
                  </Link>
                  <Link
                    href="/lessons"
                    className="border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-50 transition-colors"
                  >
                    বিস্তারিত দেখুন
                  </Link>
                  <Link
                    href="/lessons"
                    className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    ফ্রি ক্লাস দেখুন
                  </Link>
                </div>
              </div>
            </div>

            {/* Course 2 */}

          </div>
        </div>
      </section>


      {/* Mentor Steps */}
      <section id="mentors" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              মেন্টর ধাপসমূহ
            </h2>
            <p className="text-gray-500">
              আমরা ধাপে ধাপে আপনাকে কোরআন শেখাবো এভাবে
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: "📝",
                step: "ধাপ ১",
                title: "রেজিস্ট্রেশন",
                desc: "মোবাইল নাম্বার ও OTP দিয়ে রেজিষ্ট্রেশন করুন",
              },
              {
                icon: "📞",
                step: "ধাপ ২",
                title: "ওরিয়েন্টেশন",
                desc: "ক্লাসের পরিচিতি",
              },
              {
                icon: "📚",
                step: "ধাপ ৩",
                title: "ক্লাস শুরু",
                desc: "প্রতিদিন একটি করে লেসন",
              },
              {
                icon: "📊",
                step: "ধাপ ৪",
                title: "মূল্যায়ন",
                desc: "লেসনের সাথে কুইজ",
              },
              {
                icon: "🎓",
                step: "ধাপ ৫",
                title: "সার্টিফিকেট",
                desc: "কোর্স সমাপনী",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <span className="text-xs text-emerald-600 font-medium">
                  {item.step}
                </span>
                <h3 className="font-bold text-gray-900 mt-1">{item.title}</h3>
                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              প্রায়শই জিজ্ঞাসিত প্রশ্ন (FAQ)
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold mb-2">🕌 Quran Learning</p>
          <p className="text-emerald-200 text-sm">
            আপনার কোরআন শেখার বিশ্বস্ত সঙ্গী
          </p>
          <p className="text-emerald-300 text-xs mt-4">
            © ২০২৫ Quran Learning. সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </footer>
    </>
  );
}
