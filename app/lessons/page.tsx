import type { Metadata } from "next";
import PaymentGate from "../components/PaymentGate";
import LessonCards from "./LessonCards";

export const metadata: Metadata = {
  title: "All Lessons - 30 Days Quran Learning",
  description:
    "Browse all 30 days of Quran learning lessons. Start your journey today.",
};

const lessonData = [
  {
    day: 1,
    title: "আরবি ২৯টি হরফ বা মুক্ত বর্ণের সঠিক মাখরাজ (উচ্চারণ)।",
    desc: "আরবি ২৯টি হরফ বা মুক্ত বর্ণের সঠিক মাখরাজ (উচ্চারণ)।",
    arabic: "",
  },
  {
    day: 2,
    title: "যুক্তবর্ণের রূপ",
    desc: "শব্দের শুরুতে, মাঝে ও শেষে হরফ কেমন দেখায়।",
    arabic: "",
  },
  {
    day: 3,
    title: "অক্ষর চেনার বিশেষ পদ্ধতি",
    desc: "অক্ষর চেনার বিশেষ পদ্ধতি ও সংযোগের নিয়ম।",
    arabic: "",
  },
  {
    day: 4,
    title: "অক্ষর সংযোগ প্র্যাকটিস",
    desc: "অক্ষর সংযোগের বিভিন্ন উদাহরণ দেখে চেনার প্র্যাকটিস।",
    arabic: "",
  },
  {
    day: 5,
    title: "ব্যবহারিক পরীক্ষা",
    desc: "সূরা ফাতেহা দেখে দেখে অক্ষর চেনার ব্যবহারিক পরীক্ষা।",
    arabic: "",
  },
  {
    day: 6,
    title: "হরকত পরিচিতি",
    desc: "যবর, যের, পেশ পরিচিতি ও নিয়ম।",
    arabic: "",
  },
  {
    day: 7,
    title: "হরকত প্র্যাকটিস",
    desc: "হরকত দিয়ে শব্দ পড়ার প্র্যাকটিস (একক শব্দ)।",
    arabic: "",
  },
  {
    day: 8,
    title: "তানবীন পরিচিতি",
    desc: "দুই যবর, দুই যের, দুই পেশ পরিচিতি।",
    arabic: "",
  },
  {
    day: 9,
    title: "তানবীন ও হরকত",
    desc: "তানবীনের সাথে হরকতের পার্থক্য ও অনুশীলন।",
    arabic: "",
  },
  {
    day: 10,
    title: "সাকিন বা জজম",
    desc: "বর্ণকে যুক্ত করে পড়ার নিয়ম।",
    arabic: "",
  },
  {
    day: 11,
    title: "মদের হরফ",
    desc: "মদের হরফ ৩টি (আলিফ, ওয়াও, ইয়া) এবং টানার নিয়ম।",
    arabic: "",
  },
  {
    day: 12,
    title: "খাড়া হরকত",
    desc: "খাড়া যবর, খাড়া যের ও উল্টা পেশ (এক আলিফ টান)।",
    arabic: "",
  },
  {
    day: 13,
    title: "মদের অনুশীলন - ১",
    desc: "সহজ শব্দে মদের অনুশীলন।",
    arabic: "",
  },
  {
    day: 14,
    title: "মদের অনুশীলন - ২",
    desc: "একটু বড় শব্দে মদের অনুশীলন।",
    arabic: "",
  },
  {
    day: 15,
    title: "তাশদীদ পরিচিতি",
    desc: "তাশদীদ পরিচিতি (দ্বিত্ব উচ্চারণ)।",
    arabic: "",
  },
  {
    day: 16,
    title: "তাশদীদ প্র্যাকটিস",
    desc: "তাশদীদ দিয়ে দুই ও তিন অক্ষরের শব্দ পড়া।",
    arabic: "",
  },
  {
    day: 17,
    title: "তাশদীদ ও গুন্নাহ",
    desc: "তাশদীদ ও গুন্নাহর প্রাথমিক ব্যবহারিক প্রয়োগ।",
    arabic: "",
  },
  {
    day: 18,
    title: "বানান অনুশীলন - ১",
    desc: "বানান করে পড়ার অনুশীলন (ছোট শব্দ)।",
    arabic: "",
  },
  {
    day: 19,
    title: "বানান অনুশীলন - ২",
    desc: "বানান করে পড়ার অনুশীলন (মাঝারি শব্দ)।",
    arabic: "",
  },
  {
    day: 20,
    title: "বানান অনুশীলন - ৩",
    desc: "বানান করে পড়ার অনুশীলন (বড় শব্দ)।",
    arabic: "",
  },
  {
    day: 21,
    title: "বাক্য গঠন",
    desc: "বানান করে পড়া (বাক্য গঠন)।",
    arabic: "",
  },
  {
    day: 22,
    title: "মদ ও সাকিন",
    desc: "বানান করে পড়া (মদ ও সাকিনের সমন্বয়)।",
    arabic: "",
  },
  {
    day: 23,
    title: "তাশদীদ ও মদ",
    desc: "বানান করে পড়া (তাশদীদ ও মদের সমন্বয়)।",
    arabic: "",
  },
  {
    day: 24,
    title: "ওয়াকফ বা বিরামচিহ্ন",
    desc: "বানান করে পড়া (বিরামচিহ্ন বা ওয়াকফ করার নিয়ম)।",
    arabic: "",
  },
  {
    day: 25,
    title: "আমপারা তিলাওয়াত - ১",
    desc: "সূরা ফীল, সূরা কুরাইশ ও সূরা মাউন।",
    arabic: "",
  },
  {
    day: 26,
    title: "আমপারা তিলাওয়াত - ২",
    desc: "সূরা কাওছার, সূরা কাফিরুন ও সূরা নাসর।",
    arabic: "",
  },
  {
    day: 27,
    title: "আমপারা তিলাওয়াত - ৩",
    desc: "সূরা ইখলাস, সূরা ফালাক ও সূরা নাস।",
    arabic: " ",
  },
  {
    day: 28,
    title: "কুরআন রিডিং - ১",
    desc: "কুরআন রিডিং পড়া (ধীরে ধীরে দেখে পড়া)।",
    arabic: "",
  },
  {
    day: 29,
    title: "কুরআন রিডিং - ২",
    desc: "কুরআন রিডিং পড়া (ফ্লুয়েন্সি বাড়ানোর চেষ্টা)।",
    arabic: "",
  },
  {
    day: 30,
    title: "সমাপনী ক্লাস",
    desc: "পুরো ৩০ দিনের সারসংক্ষেপ ও সমাপনী।",
    arabic: "",
  }
];

const totalDays = 9;

export default function LessonsPage() {
  return (
    <PaymentGate>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-20">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 text-white pt-20 pb-28 px-4 overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute top-8 left-1/4 text-[120px] leading-none select-none">
            بِسْمِ
          </div>
          <div className="absolute bottom-4 right-1/4 text-[100px] leading-none select-none">
            ٱللَّهِ
          </div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-emerald-100 text-sm font-medium">
            {totalDays}টি পাঠ প্রকাশিত
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5 leading-tight">
            কুরআন শিক্ষার ৩০ দিন
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            সহজ উপায়ে কুরআন শেখার একটি পূর্ণাঙ্গ কোর্স। প্রতিটি দিন ধাপে ধাপে
            নতুন কিছু শিখুন।
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="container mx-auto max-w-5xl px-4 -mt-14 relative z-10">
        <LessonCards lessonData={lessonData} totalDays={totalDays} />
      </div>

      {/* Hadith Quote */}
      <div className="container mx-auto max-w-3xl px-4 mt-20 text-center">
        <div className="relative py-8">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-[2px] bg-emerald-200 rounded-full" />
          <p className="text-gray-400 text-base leading-relaxed italic mt-4">
            &ldquo;তোমাদের মধ্যে সেই সর্বোত্তম, যে কুরআন শেখে এবং অন্যকে
            শেখায়।&rdquo;
          </p>
          <p className="text-gray-300 text-xs mt-2 font-medium">
            — সহীহ বুখারী
          </p>
        </div>
      </div>
    </div>
    </PaymentGate>
  );
}
