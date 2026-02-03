"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Islamic SVG Icons
const QuranIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M8 7h8M8 11h8M8 15h4" />
  </svg>
);

const MosqueIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2L8 8H4v12h16V8h-4l-4-6z" />
    <circle cx="12" cy="18" r="2" />
    <path d="M7 10v6M17 10v6M12 6v12" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-primary">
                  সহজ কুরআন শিক্ষা
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                কম সময়ে সহজ উপায়ে সঠিক পদ্ধতিতে কুরআন শিখুন
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
                আপনার সুবিধামতো সময়ে, মাত্র ২৪ ঘণ্টায় সহজ উপায়ে ফ্রিতে কুরআন
                শিখুন — হাদিয়া মনমর্জি
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/login"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  এখনই শুরু করুন
                </Link>
                <Link
                  href="/lessons"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition duration-300 text-center"
                >
                  ক্লাস দেখুন
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-banner.jpg"
                  alt="Quran Learning Journey"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section id="courses" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              কোর্সের বৈশিষ্ট্য
            </h2>
            <p className="text-lg text-foreground/70">
              আমাদের সাথে শিখুন, এগিয়ে যান
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="bg-white border border-border rounded-xl p-8 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`w-14 h-14 mb-4 text-primary transition duration-300 ${hoveredCard === 0 ? "scale-110" : ""}`}
              >
                <QuranIcon />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                ২৪টি ভিডিও ক্লাস
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                বিস্তারিত এবং সহজবোধ্য ভিডিও টিউটোরিয়াল দিয়ে কুরআন শিখুন
              </p>
            </div>

            <div
              className="bg-white border border-border rounded-xl p-8 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`w-14 h-14 mb-4 text-primary transition duration-300 ${hoveredCard === 1 ? "scale-110" : ""}`}
              >
                <MosqueIcon />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                অভিজ্ঞ মেন্টরের সাপোর্ট
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                পুরো কোর্স জুড়ে বিশেষজ্ঞ শিক্ষকের সরাসরি নির্দেশনা পান
              </p>
            </div>

            <div
              className="bg-white border border-border rounded-xl p-8 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`w-14 h-14 mb-4 text-primary transition duration-300 ${hoveredCard === 2 ? "scale-110" : ""}`}
              >
                <StarIcon />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                ইন্টার‌্যাকটিভ কুইজ ও প্র্যাকটিস
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                নিজেকে পরীক্ষা করুন এবং শেখা আরও শক্তিশালী করুন
              </p>
            </div>

            <div
              className="bg-white border border-border rounded-xl p-8 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`w-14 h-14 mb-4 text-primary transition duration-300 ${hoveredCard === 3 ? "scale-110" : ""}`}
              >
                <HeartIcon />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                ডিজিটাল সার্টিফিকেট
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                কোর্স শেষ করে পান স্বীকৃত ডিজিটাল সার্টিফিকেট
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Audio Feature Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
              <Image
                src="/images/learning-journey.jpg"
                alt="Learning Journey"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/30 transition duration-300">
                <Link
                  href="/lessons"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition duration-300 transform hover:scale-110 shadow-lg flex items-center gap-2"
                >
                  <span className="text-xl">▶</span> ভিডিও চালান
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                শুনে শুনে শুদ্ধ কুরআন শিক্ষা
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                আমাদের অডিও-ভিজ্যুয়াল পদ্ধতি আপনাকে সঠিক উচ্চারণ শিখতে এবং
                কুরআনের অর্থ বুঝতে সাহায্য করবে। প্রতিটি ক্লাসে আপনি পাবেন:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-primary mt-1">✓</span>
                  <span className="text-foreground/80">
                    স্পষ্ট এবং সুন্দর উচ্চারণের নিদর্শন
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-primary mt-1">✓</span>
                  <span className="text-foreground/80">
                    আয়াত ও সূরার অর্থ বিস্তারিত ব্যাখ্যা
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-primary mt-1">✓</span>
                  <span className="text-foreground/80">
                    ডাউনলোডযোগ্য অডিও ফাইল যেকোনো সময় শোনার জন্য
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Support Section */}
      <section id="mentor" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              অভিজ্ঞ মেন্টরের সাপোর্ট
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              আপনার শেখার যাত্রায় একজন নিবেদিত মেন্টর সর্বদা আপনার পাশে আছেন
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-white border border-border rounded-2xl overflow-hidden max-w-md w-full hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="/images/Kawsar ahmed.jpeg"
                  alt="Mentor Kawsar Ahmed"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  কাওসার আহমেদ
                </h3>
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="w-4 h-4 text-yellow-500">
                    <StarIcon />
                  </span>
                  <span className="w-4 h-4 text-yellow-500">
                    <StarIcon />
                  </span>
                  <span className="w-4 h-4 text-yellow-500">
                    <StarIcon />
                  </span>
                  <span className="w-4 h-4 text-yellow-500">
                    <StarIcon />
                  </span>
                  <span className="w-4 h-4 text-yellow-500">
                    <StarIcon />
                  </span>
                </div>
                {/* <p className="text-foreground/70 text-sm mb-6 font-semibold">
                  কামিল ফিল হাদিস (ইসলামী বিশ্ববিদ্যালয়)
                </p> */}
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                  পুরো কোর্স জুড়ে একজন অভিজ্ঞ কুরআন শিক্ষকের সরাসরি গাইডলাইন ও
                  সাপোর্ট পাবেন। আপনার প্রতিটি প্রশ্নের উত্তর এবং সমস্যার সমাধান
                  আমরা প্রদান করি।
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition duration-300 w-full transform hover:scale-105">
                  মেন্টরকে জানুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
                নিজেকে যাচাই করুন
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                প্রতিটি মডিউলের পর ইন্টার‌্যাকটিভ কুইজের মাধ্যমে নিজের বোঝাপড়া
                পরীক্ষা করুন এবং শেখা আরও দৃঢ় করুন।
              </p>
              <div className="space-y-4">
                <div className="bg-white border-2 border-primary/30 rounded-lg p-6 hover:shadow-lg transition duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-full font-bold text-sm">
                      ১
                    </span>
                    <p className="font-semibold text-primary">
                      সূরা আল-ফাতিহা কত আয়াত দিয়ে গঠিত?
                    </p>
                  </div>
                  <div className="space-y-3 mt-4">
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition duration-200">
                      <input
                        type="radio"
                        name="q1"
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-foreground/80">৫ টি আয়াত</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition duration-200">
                      <input
                        type="radio"
                        name="q1"
                        defaultChecked
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-foreground/80 font-semibold">
                        ৭ টি আয়াত
                      </span>
                      <span className="ml-auto text-green-600 font-semibold text-sm">
                        ✓ সঠিক
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-primary/5 transition duration-200">
                      <input
                        type="radio"
                        name="q1"
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-foreground/80">১০ টি আয়াত</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  আপনার অগ্রগতি
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">
                        সূরা আল-ফাতিহা
                      </span>
                      <span className="text-sm text-primary font-bold">
                        ৮৫%
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">
                        সূরা আল-বাকারা (অংশ)
                      </span>
                      <span className="text-sm text-primary font-bold">
                        ৬০%
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">
                        সূরা আল-ইখলাস
                      </span>
                      <span className="text-sm text-primary font-bold">
                        ৯০%
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              কোর্স শেষে পাবেন সার্টিফিকেট
            </h2>
            <p className="text-lg text-foreground/70">
              আপনার কৃতিত্বকে স্বীকৃতি দিন
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-300 transform hover:-translate-y-2">
              <Image
                src="/images/success-certificate.jpg"
                alt="Digital Certificate"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                <div className="w-12 h-12 mb-4 text-yellow-400 animate-bounce">
                  <StarIcon />
                </div>
                <p className="text-sm tracking-widest opacity-90 mb-2">
                  ডিজিটাল সার্টিফিকেট
                </p>
                <h3 className="text-3xl font-bold mb-2">আপনার নাম</h3>
                <p className="opacity-90 mb-6">
                  easyQuran.bd কোর্স সফলভাবে সম্পন্ন করার জন্য
                </p>
                <button className="bg-primary/80 hover:bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold transition duration-300 backdrop-blur-sm">
                  সার্টিফিকেট ডাউনলোড করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hadiya Section */}
      <section
        id="hadiya"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary/5"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              হাদিয়া মনমর্জি
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80 mb-8">
              <p>
                <span className="block font-semibold text-primary mb-2">
                  আপনি চাইলে আপনার ইচ্ছামতো হাদিয়া দিতে পারবেন
                </span>
                এই কোর্সের মাধ্যমে আমরা শুধুমাত্র জ্ঞান ছড়িয়ে দিতে চাই। আপনি
                যদি আমাদের সেবায় সন্তুষ্ট হন এবং কিছু অবদান রাখতে চান তাহলে
                হাদিয়া দিতে পারেন।
              </p>
              <p>
                <span className="block font-semibold text-primary mb-2">
                  না পারলেও সম্পূর্ণ ফ্রিতে কুরআন শিখতে পারবেন
                </span>
                আমরা বিশ্বাস করি জ্ঞান সবার অধিকার। যদি আপনার পক্ষে কোনো আর্থিক
                অবদান না রাখা যায় তাহলে কোনো সমস্যা নেই। আপনি সম্পূর্ণ
                বিনামূল্যে এই কোর্সটি শিখতে পারবেন।
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lessons"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                হাদিয়া দিন
              </Link>
              <Link
                href="/lessons"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                ফ্রি কোর্স শুরু করুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section
        id="contact"
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            <span className="text-white/90 font-semibold text-sm">
              সীমিত সময়ের অফার
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            আজই কুরআন শেখা শুরু করুন
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            আর দেরি না করে এখনই যোগ দিন আমাদের কুরআন শিক্ষা প্রোগ্রামে। মাত্র
            কয়েক মিনিটে রেজিস্ট্রেশন সম্পন্ন করুন এবং শুরু করুন আপনার জ্ঞানের
            যাত্রা।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition duration-300 transform hover:scale-105 shadow-xl"
            >
              ফ্রি রেজিস্ট্রেশন
            </Link>
            <Link
              href="/lessons"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition duration-300 backdrop-blur-sm"
            >
              আরও জানুন
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/95 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">easyQuran.bd</h3>
              <p className="text-white/80">সহজভাবে শুদ্ধ কুরআন শিক্ষা</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">দ্রুত লিংক</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    কোর্স
                  </a>
                </li>
                <li>
                  <a href="#mentor" className="hover:text-white transition">
                    মেন্টর
                  </a>
                </li>
                <li>
                  <a href="#hadiya" className="hover:text-white transition">
                    হাদিয়া
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">যোগাযোগ</h4>
              <p className="text-white/80 text-sm">info@easyquran.bd</p>
              <p className="text-white/80 text-sm">+880 1234-567890</p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-center text-white/70 text-sm">
              © ২০২৫ easyQuran.bd সর্বাধিকার সংরক্ষিত। ইসলামের সেবায় নিবেদিত।
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
