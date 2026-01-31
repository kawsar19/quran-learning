"use client";

import { useState, useEffect } from "react";

type TanweenType = "fathatayn" | "kasratayn" | "dammatayn";

interface TanweenWord {
  arabic: string;
  bangla: string;
  meaning: string;
  tanween: TanweenType;
}

// Fathatayn words (ً) - "an" sound
const fathataynWords: TanweenWord[] = [
  { arabic: "كِتَابًا", bangla: "কিতাবান", meaning: "একটি বই", tanween: "fathatayn" },
  { arabic: "بَابًا", bangla: "বাবান", meaning: "একটি দরজা", tanween: "fathatayn" },
  { arabic: "قَلَمًا", bangla: "ক্বালামান", meaning: "একটি কলম", tanween: "fathatayn" },
  { arabic: "وَلَدًا", bangla: "ওয়ালাদান", meaning: "একটি ছেলে", tanween: "fathatayn" },
  { arabic: "بَيْتًا", bangla: "বাইতান", meaning: "একটি ঘর", tanween: "fathatayn" },
  { arabic: "مَاءً", bangla: "মাআন", meaning: "পানি", tanween: "fathatayn" },
  { arabic: "شَيْئًا", bangla: "শাইআন", meaning: "কিছু", tanween: "fathatayn" },
  { arabic: "عِلْمًا", bangla: "ইলমান", meaning: "জ্ঞান", tanween: "fathatayn" },
  { arabic: "نُورًا", bangla: "নূরান", meaning: "আলো", tanween: "fathatayn" },
  { arabic: "خَيْرًا", bangla: "খাইরান", meaning: "ভালো", tanween: "fathatayn" },
  { arabic: "شُكْرًا", bangla: "শুকরান", meaning: "ধন্যবাদ", tanween: "fathatayn" },
  { arabic: "كَثِيرًا", bangla: "কাছীরান", meaning: "অনেক", tanween: "fathatayn" },
];

// Kasratayn words (ٍ) - "in" sound
const kasrataynWords: TanweenWord[] = [
  { arabic: "كِتَابٍ", bangla: "কিতাবিন", meaning: "একটি বইয়ের", tanween: "kasratayn" },
  { arabic: "بَابٍ", bangla: "বাবিন", meaning: "একটি দরজার", tanween: "kasratayn" },
  { arabic: "قَلَمٍ", bangla: "ক্বালামিন", meaning: "একটি কলমের", tanween: "kasratayn" },
  { arabic: "وَلَدٍ", bangla: "ওয়ালাদিন", meaning: "একটি ছেলের", tanween: "kasratayn" },
  { arabic: "بَيْتٍ", bangla: "বাইতিন", meaning: "একটি ঘরের", tanween: "kasratayn" },
  { arabic: "رَبٍّ", bangla: "রাব্বিন", meaning: "একজন রবের", tanween: "kasratayn" },
  { arabic: "يَوْمٍ", bangla: "ইয়াউমিন", meaning: "একটি দিনের", tanween: "kasratayn" },
  { arabic: "قَوْمٍ", bangla: "ক্বাউমিন", meaning: "একটি জাতির", tanween: "kasratayn" },
  { arabic: "عَظِيمٍ", bangla: "আযীমিন", meaning: "মহান", tanween: "kasratayn" },
  { arabic: "كَرِيمٍ", bangla: "কারীমিন", meaning: "সম্মানিত", tanween: "kasratayn" },
  { arabic: "حَكِيمٍ", bangla: "হাকীমিন", meaning: "প্রজ্ঞাময়", tanween: "kasratayn" },
  { arabic: "عَلِيمٍ", bangla: "আলীমিন", meaning: "সর্বজ্ঞ", tanween: "kasratayn" },
];

// Dammatayn words (ٌ) - "un" sound
const dammataynWords: TanweenWord[] = [
  { arabic: "كِتَابٌ", bangla: "কিতাবুন", meaning: "একটি বই", tanween: "dammatayn" },
  { arabic: "بَابٌ", bangla: "বাবুন", meaning: "একটি দরজা", tanween: "dammatayn" },
  { arabic: "قَلَمٌ", bangla: "ক্বালামুন", meaning: "একটি কলম", tanween: "dammatayn" },
  { arabic: "وَلَدٌ", bangla: "ওয়ালাদুন", meaning: "একটি ছেলে", tanween: "dammatayn" },
  { arabic: "بَيْتٌ", bangla: "বাইতুন", meaning: "একটি ঘর", tanween: "dammatayn" },
  { arabic: "رَبٌّ", bangla: "রাব্বুন", meaning: "একজন রব", tanween: "dammatayn" },
  { arabic: "يَوْمٌ", bangla: "ইয়াউমুন", meaning: "একটি দিন", tanween: "dammatayn" },
  { arabic: "قَوْمٌ", bangla: "ক্বাউমুন", meaning: "একটি জাতি", tanween: "dammatayn" },
  { arabic: "عَظِيمٌ", bangla: "আযীমুন", meaning: "মহান", tanween: "dammatayn" },
  { arabic: "كَرِيمٌ", bangla: "কারীমুন", meaning: "সম্মানিত", tanween: "dammatayn" },
  { arabic: "حَكِيمٌ", bangla: "হাকীমুন", meaning: "প্রজ্ঞাময়", tanween: "dammatayn" },
  { arabic: "عَلِيمٌ", bangla: "আলীমুন", meaning: "সর্বজ্ঞ", tanween: "dammatayn" },
];

const allWords: TanweenWord[] = [...fathataynWords, ...kasrataynWords, ...dammataynWords];

type QuestionType =
  | "identify-tanween"
  | "identify-sound"
  | "match-pronunciation"
  | "find-tanween-type";

const tanweenInfo: Record<
  TanweenType,
  {
    bangla: string;
    english: string;
    altBangla: string;
    sound: string;
    color: string;
    icon: string;
  }
> = {
  fathatayn: {
    bangla: "ফাতহাতাইন",
    english: "Fathatayn",
    altBangla: "দুই যবর",
    sound: "আন",
    color: "bg-orange-500",
    icon: "ـً",
  },
  kasratayn: {
    bangla: "কাসরাতাইন",
    english: "Kasratayn",
    altBangla: "দুই যের",
    sound: "ইন",
    color: "bg-teal-500",
    icon: "ـٍ",
  },
  dammatayn: {
    bangla: "দাম্মাতাইন",
    english: "Dammatayn",
    altBangla: "দুই পেশ",
    sound: "উন",
    color: "bg-violet-500",
    icon: "ـٌ",
  },
};

interface Question {
  type: QuestionType;
  questionText: string;
  questionTextEn: string;
  displayArabic?: string;
  correctAnswer: string;
  options: { label: string; value: string; arabic?: string; color?: string }[];
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
    "identify-tanween",
    "identify-sound",
    "match-pronunciation",
    "find-tanween-type",
  ];
  const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
  const word = allWords[Math.floor(Math.random() * allWords.length)];
  const tanweenTypes: TanweenType[] = ["fathatayn", "kasratayn", "dammatayn"];

  switch (type) {
    case "identify-tanween":
      return {
        type: "identify-tanween",
        questionText: `এই শব্দে কোন তানউইন আছে?`,
        questionTextEn: "Which tanween is on this word?",
        displayArabic: word.arabic,
        correctAnswer: word.tanween,
        options: shuffleArray(
          tanweenTypes.map((t) => ({
            label: `${tanweenInfo[t].altBangla} (${tanweenInfo[t].sound})`,
            value: t,
            color: t === "fathatayn" ? "orange" : t === "kasratayn" ? "teal" : "violet",
          })),
        ),
      };

    case "identify-sound":
      const otherWords = getRandomItems(allWords, 3, word);
      return {
        type: "identify-sound",
        questionText: `"${word.bangla}" উচ্চারণ কোন শব্দের?`,
        questionTextEn: `Which word is pronounced "${word.bangla}"?`,
        correctAnswer: word.arabic,
        options: shuffleArray([
          { label: "", value: word.arabic, arabic: word.arabic },
          ...otherWords.map((w) => ({
            label: "",
            value: w.arabic,
            arabic: w.arabic,
          })),
        ]),
      };

    case "match-pronunciation":
      return {
        type: "match-pronunciation",
        questionText: `"${word.bangla}" উচ্চারণ করতে কোনটি লাগবে?`,
        questionTextEn: `Which word makes the "${word.bangla}" sound?`,
        correctAnswer: word.arabic,
        options: shuffleArray([
          {
            label: "",
            value: word.arabic,
            arabic: word.arabic,
          },
          ...getRandomItems(allWords, 3, word).map((w) => ({
            label: "",
            value: w.arabic,
            arabic: w.arabic,
          })),
        ]),
      };

    default: // find-tanween-type
      const randomTanween = tanweenTypes[Math.floor(Math.random() * tanweenTypes.length)];
      const wordsOfType = allWords.filter((w) => w.tanween === randomTanween);
      const correctWord = wordsOfType[Math.floor(Math.random() * wordsOfType.length)];
      const wrongWords = getRandomItems(
        allWords.filter((w) => w.tanween !== randomTanween),
        3
      );

      return {
        type: "find-tanween-type",
        questionText: `${tanweenInfo[randomTanween].altBangla} (${tanweenInfo[randomTanween].sound}) সহ শব্দ কোনটি?`,
        questionTextEn: `Which word has ${tanweenInfo[randomTanween].english}?`,
        correctAnswer: correctWord.arabic,
        options: shuffleArray([
          {
            label: "",
            value: correctWord.arabic,
            arabic: correctWord.arabic,
          },
          ...wrongWords.map((w) => ({
            label: "",
            value: w.arabic,
            arabic: w.arabic,
          })),
        ]),
      };
  }
}

const TOTAL_QUESTIONS = 15;

export default function TanweenQuiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    setQuestions(
      Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion()),
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
      Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion()),
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
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-100 text-center max-w-2xl mx-auto">
        <div className="text-8xl mb-6 transform hover:scale-110 transition-transform">
          {percentage >= 80 ? "👑" : percentage >= 60 ? "🌟" : "💪"}
        </div>
        <h3 className="text-3xl font-black text-gray-800 mb-2">
          কুইজ সম্পন্ন!
        </h3>
        <p className="text-pink-500 font-bold mb-8 uppercase tracking-widest text-sm">
          Tanween Quiz Complete
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-pink-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-pink-600 leading-none mb-1">
              {score}/{TOTAL_QUESTIONS}
            </div>
            <div className="text-xs text-pink-400 font-bold uppercase">
              স্কোর
            </div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-emerald-600 leading-none mb-1">
              {percentage}%
            </div>
            <div className="text-xs text-emerald-400 font-bold uppercase">
              সঠিকতা
            </div>
          </div>
        </div>

        <div className="mb-10 px-6">
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            {percentage >= 80
              ? "অসাধারণ! আপনি তানউইনের ব্যবহারে দক্ষ হয়ে উঠেছেন।"
              : percentage >= 60
                ? "দারুণ প্রচেষ্টা! আরেকটু অনুশীলন করলে আপনি আরও ভালো করবেন।"
                : "অনুশীলনই সাফল্যের চাবিকাঠি। উপরের পাঠটি আবার দেখে নতুন করে চেষ্টা করুন।"}
          </p>
        </div>

        <button
          onClick={restart}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-pink-200 active:scale-[0.98]"
        >
          নতুন কুইজ শুরু করুন
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-pink-50 max-w-4xl mx-auto overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-xs font-black text-pink-400 uppercase tracking-widest">
              Question {currentQuestion + 1} of {TOTAL_QUESTIONS}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-lg text-[10px] font-black uppercase">
                {question.type.replace(/-/g, " ")}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest leading-none">
              Score
            </span>
            <div className="text-2xl font-black text-emerald-600 mt-0.5 leading-none">
              {score}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 w-full bg-gray-100 rounded-full mb-10 overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%`,
            }}
          />
        </div>

        {/* Question Area */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-2 leading-[2]">
            {question.questionText}
          </h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">
            {question.questionTextEn}
          </p>

          {question.displayArabic && (
            <div className="mt-8 relative inline-block group">
              <div className="absolute inset-0 bg-pink-50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative bg-white border-2 border-pink-100 px-10 py-8 rounded-3xl shadow-sm">
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
                          : "bg-white border-pink-50 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-50/50 hover:translate-y-[-4px] active:translate-y-0 active:scale-98"
                  }
                `}
              >
                {option.arabic && (
                  <div
                    dir="rtl"
                    className={`text-3xl md:text-4xl transition-transform duration-300 ${!showResult ? "group-hover:scale-110" : ""} ${!option.label ? "mb-0" : "mb-2"}`}
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
