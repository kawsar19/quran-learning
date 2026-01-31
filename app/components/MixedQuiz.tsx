"use client";

import { useState, useEffect } from "react";

interface PracticeWord {
  arabic: string;
  bangla: string;
  meaning: string;
}

const practiceWords: PracticeWord[] = [
  { arabic: "رَجُلٌ", bangla: "রাজুলুন", meaning: "একজন লোক" },
  { arabic: "قَمَرٌ", bangla: "ক্বামারুন", meaning: "চাঁদ" },
  { arabic: "شَمْسٌ", bangla: "শামসুন", meaning: "সূর্য" },
  { arabic: "عَلِيْمٌ", bangla: "আলীমুন", meaning: "সর্বজ্ঞ" },
  { arabic: "خَبِيْرٌ", bangla: "খাবীরুন", meaning: "সম্যক অবগত" },
  { arabic: "غَفُوْرٌ", bangla: "গাফূরুন", meaning: "ক্ষমাশীল" },
  { arabic: "رَحِيْمٌ", bangla: "রাহীমুন", meaning: "পরম দয়ালু" },
  { arabic: "سَمِيْعٌ", bangla: "সামীউন", meaning: "সর্বশ্রোতা" },
  { arabic: "بَصِيْرٌ", bangla: "বাসীরুন", meaning: "সর্বদ্রষ্টা" },
  { arabic: "قَدِيْرٌ", bangla: "ক্বদীরুন", meaning: "সর্বশক্তিমান" },
  { arabic: "لَطِيْفٌ", bangla: "লাতীফুন", meaning: "মেহেরবান" },
  { arabic: "كَرِيْمٌ", bangla: "কারীমুন", meaning: "সম্মানিত" },
  { arabic: "حَكِيْمٌ", bangla: "হাকীমুন", meaning: "প্রজ্ঞাময়" },
  { arabic: "عَظِيْمٌ", bangla: "আযীমুন", meaning: "মহান" },
  { arabic: "شَكُوْرٌ", bangla: "শাকূরুন", meaning: "গুণগ্রাহী" },
  { arabic: "حَلِيْمٌ", bangla: "হালীমুন", meaning: "ধৈর্যশীল" },
  { arabic: "خَالِقٌ", bangla: "খালিক্বুন", meaning: "সৃষ্টিকর্তা" },
  { arabic: "رَازِقٌ", bangla: "রাযিক্বুন", meaning: "রিযিকদাতা" },
  { arabic: "شَاهِدٌ", bangla: "শাহিদুন", meaning: "সাক্ষী" },
  { arabic: "صَابِرٌ", bangla: "সাবিরুন", meaning: "ধৈর্যশীল" },
  { arabic: "غَافِرٌ", bangla: "গাফিরুন", meaning: "ক্ষমাকারী" },
  { arabic: "نَاصِرٌ", bangla: "নাসিরুন", meaning: "সাহায্যকারী" },
  { arabic: "مُسْلِمٌ", bangla: "মুসলিমুন", meaning: "মুসলিম" },
  { arabic: "مُؤْمِنٌ", bangla: "মুমিনুন", meaning: "মুমিন" },
  { arabic: "صَالِحٌ", bangla: "সালিহুন", meaning: "নেককার" },
  { arabic: "عَالِمٌ", bangla: "আলিমুন", meaning: "জ্ঞানী" },
  { arabic: "طَيِّبٌ", bangla: "তাইয়্যিবুন", meaning: "পবিত্র/ভালো" },
];

type QuestionType = "identify-word" | "match-pronunciation" | "find-meaning";

interface Question {
  type: QuestionType;
  questionText: string;
  questionTextEn: string;
  displayArabic?: string;
  correctAnswer: string;
  options: { label: string; value: string; arabic?: string }[];
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getRandomItems<T>(array: T[], count: number, exclude?: T): T[] {
  const filtered = exclude ? array.filter((item) => item !== exclude) : array;
  return shuffleArray(filtered).slice(0, count);
}

function generateQuestion(): Question {
  const questionTypes: QuestionType[] = [
    "identify-word",
    "match-pronunciation",
    "find-meaning",
  ];
  const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
  const word = practiceWords[Math.floor(Math.random() * practiceWords.length)];
  const wrongWords = getRandomItems(practiceWords, 3, word);

  switch (type) {
    case "identify-word":
      return {
        type: "identify-word",
        questionText: `"${word.bangla}" উচ্চারণ কোন শব্দের?`,
        questionTextEn: `Which word is pronounced "${word.bangla}"?`,
        correctAnswer: word.arabic,
        options: shuffleArray([
          { label: "", value: word.arabic, arabic: word.arabic },
          ...wrongWords.map((w) => ({
            label: "",
            value: w.arabic,
            arabic: w.arabic,
          })),
        ]),
      };

    case "match-pronunciation":
      return {
        type: "match-pronunciation",
        questionText: `এই শব্দের সঠিক উচ্চারণ কোনটি?`,
        questionTextEn: "What is the correct pronunciation?",
        displayArabic: word.arabic,
        correctAnswer: word.bangla,
        options: shuffleArray([
          { label: word.bangla, value: word.bangla },
          ...wrongWords.map((w) => ({
            label: w.bangla,
            value: w.bangla,
          })),
        ]),
      };

    default: // find-meaning
      return {
        type: "find-meaning",
        questionText: `এই শব্দের অর্থ কী?`,
        questionTextEn: "What is the meaning of this word?",
        displayArabic: word.arabic,
        correctAnswer: word.meaning,
        options: shuffleArray([
          { label: word.meaning, value: word.meaning },
          ...wrongWords.map((w) => ({
            label: w.meaning,
            value: w.meaning,
          })),
        ]),
      };
  }
}

const TOTAL_QUESTIONS = 15;

export default function MixedQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    setQuestions(
      Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion())
    );
  }, []);

  if (questions.length === 0) return null;

  const question = questions[currentQuestion];

  const handleAnswer = (value: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(value);
    setShowResult(true);
    if (value === question.correctAnswer) setScore((s) => s + 1);
  };

  const nextStep = () => {
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
      setCurrentQuestion((c) => c + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restart = () => {
    setQuestions(
      Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion())
    );
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-emerald-100 text-center max-w-2xl mx-auto">
        <div className="text-8xl mb-6 transform hover:scale-110 transition-transform">
          {percentage >= 80 ? "👑" : percentage >= 60 ? "🌟" : "💪"}
        </div>
        <h3 className="text-3xl font-black text-gray-800 mb-2">
          কুইজ সম্পন্ন!
        </h3>
        <p className="text-emerald-500 font-bold mb-8 uppercase tracking-widest text-sm">
          Mixed Practice Quiz Complete
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-emerald-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-emerald-600 leading-none mb-1">
              {score}/{TOTAL_QUESTIONS}
            </div>
            <div className="text-xs text-emerald-400 font-bold uppercase">
              স্কোর
            </div>
          </div>
          <div className="bg-teal-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-teal-600 leading-none mb-1">
              {percentage}%
            </div>
            <div className="text-xs text-teal-400 font-bold uppercase">
              সঠিকতা
            </div>
          </div>
        </div>

        <div className="mb-10 px-6">
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            {percentage >= 80
              ? "অসাধারণ! হরকত ও তানউইন মিশ্রিত শব্দ পড়তে আপনি এখন দক্ষ।"
              : percentage >= 60
                ? "দারুণ প্রচেষ্টা! আরেকটু অনুশীলন করলে আরও ভালো করবেন।"
                : "অনুশীলনই সাফল্যের চাবিকাঠি। উপরের শব্দগুলো আবার পড়ুন।"}
          </p>
        </div>

        <button
          onClick={restart}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-emerald-200 active:scale-[0.98]"
        >
          নতুন কুইজ শুরু করুন
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-emerald-50 max-w-4xl mx-auto overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-50 rounded-full blur-3xl opacity-50"></div>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
              Question {currentQuestion + 1} of {TOTAL_QUESTIONS}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-lg text-[10px] font-black uppercase">
                {question.type.replace(/-/g, " ")}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-teal-400 uppercase tracking-widest leading-none">
              Score
            </span>
            <div className="text-2xl font-black text-teal-600 mt-0.5 leading-none">
              {score}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 w-full bg-gray-100 rounded-full mb-10 overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%`,
            }}
          />
        </div>

        {/* Question Area */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-2 leading-relaxed">
            {question.questionText}
          </h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">
            {question.questionTextEn}
          </p>

          {question.displayArabic && (
            <div className="mt-8 relative inline-block group">
              <div className="absolute inset-0 bg-emerald-50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative bg-white border-2 border-emerald-100 px-10 py-8 rounded-3xl shadow-sm">
                <span
                  dir="rtl"
                  className="text-6xl md:text-7xl text-gray-800 leading-none select-none"
                  style={{
                    fontFamily:
                      "'Amiri Quran', serif",
                    lineHeight: "1.8",
                  }}
                >
                  {question.displayArabic}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-10">
          {question.options.map((option, i) => {
            const isCorrect =
              showResult && option.value === question.correctAnswer;
            const isWrong =
              showResult &&
              selectedAnswer === option.value &&
              option.value !== question.correctAnswer;
            const isNeutral =
              showResult &&
              option.value !== question.correctAnswer &&
              option.value !== selectedAnswer;

            return (
              <button
                key={i}
                onClick={() => handleAnswer(option.value)}
                disabled={showResult}
                className={`
                  relative overflow-hidden group py-3 px-4 rounded-3xl border-2 transition-all duration-300
                  ${
                    isCorrect
                      ? "bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-50 translate-y-[-4px]"
                      : isWrong
                        ? "bg-rose-50 border-rose-500 shadow-lg shadow-rose-50 scale-95"
                        : isNeutral
                          ? "bg-gray-50 border-gray-100 opacity-50"
                          : "bg-white border-emerald-50 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-50/50 hover:translate-y-[-4px] active:translate-y-0 active:scale-98"
                  }
                `}
              >
                {option.arabic && (
                  <div
                    dir="rtl"
                    className={`text-3xl md:text-4xl transition-transform duration-300 ${!showResult ? "group-hover:scale-110" : ""}`}
                    style={{
                      fontFamily:
                        "'Amiri Quran', serif",
                      lineHeight: "1.8",
                    }}
                  >
                    {option.arabic}
                  </div>
                )}
                {option.label && (
                  <div
                    className={`text-sm md:text-base font-black ${isCorrect ? "text-emerald-700" : isWrong ? "text-rose-700" : "text-gray-700"}`}
                  >
                    {option.label}
                  </div>
                )}

                {/* Result Indicator */}
                {isCorrect && (
                  <div className="absolute top-2 right-2 text-emerald-500">
                    ✓
                  </div>
                )}
                {isWrong && (
                  <div className="absolute top-2 right-2 text-rose-500">✗</div>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer Info / Next Button */}
        <div className="min-h-[80px] flex items-center justify-center">
          {showResult ? (
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button
                onClick={nextStep}
                className="w-full bg-gray-900 hover:bg-black text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                {currentQuestion < TOTAL_QUESTIONS - 1
                  ? "পরবর্তী প্রশ্ন"
                  : "ফলাফল দেখুন"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <p className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.2em]">
              Select the correct answer to proceed
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
