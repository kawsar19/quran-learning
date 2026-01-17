'use client'

import { useState, useEffect } from 'react'

interface QuizQuestion {
  arabic: string
  correct: string
  options: string[]
}

const quizQuestions: QuizQuestion[] = [
  { arabic: 'ا', correct: 'আলিফ', options: ['আলিফ', 'বা', 'তা', 'ছা'] },
  { arabic: 'ب', correct: 'বা', options: ['আলিফ', 'বা', 'তা', 'ছা'] },
  { arabic: 'ت', correct: 'তা', options: ['বা', 'তা', 'ছা', 'জীম'] },
  { arabic: 'ث', correct: 'ছা', options: ['তা', 'ছা', 'জীম', 'হা'] },
  { arabic: 'ج', correct: 'জীম', options: ['ছা', 'জীম', 'হা', 'খা'] },
  { arabic: 'ح', correct: 'হা', options: ['জীম', 'হা', 'খা', 'দাল'] },
  { arabic: 'خ', correct: 'খা', options: ['হা', 'খা', 'দাল', 'যাল'] },
  { arabic: 'د', correct: 'দাল', options: ['খা', 'দাল', 'যাল', 'রা'] },
  { arabic: 'ذ', correct: 'যাল', options: ['দাল', 'যাল', 'রা', 'যা'] },
  { arabic: 'ر', correct: 'রা', options: ['যাল', 'রা', 'যা', 'সীন'] },
  { arabic: 'ز', correct: 'যা', options: ['রা', 'যা', 'সীন', 'শীন'] },
  { arabic: 'س', correct: 'সীন', options: ['যা', 'সীন', 'শীন', 'সোয়াদ'] },
  { arabic: 'ش', correct: 'শীন', options: ['সীন', 'শীন', 'সোয়াদ', 'দোয়াদ'] },
  { arabic: 'ص', correct: 'সোয়াদ', options: ['শীন', 'সোয়াদ', 'দোয়াদ', 'তোয়া'] },
  { arabic: 'ض', correct: 'দোয়াদ', options: ['সোয়াদ', 'দোয়াদ', 'তোয়া', 'যোয়া'] },
  { arabic: 'ط', correct: 'তোয়া', options: ['দোয়াদ', 'তোয়া', 'যোয়া', 'আইন'] },
  { arabic: 'ظ', correct: 'যোয়া', options: ['তোয়া', 'যোয়া', 'আইন', 'গাইন'] },
  { arabic: 'ع', correct: 'আইন', options: ['যোয়া', 'আইন', 'গাইন', 'ফা'] },
  { arabic: 'غ', correct: 'গাইন', options: ['আইন', 'গাইন', 'ফা', 'ক্বাফ'] },
  { arabic: 'ف', correct: 'ফা', options: ['গাইন', 'ফা', 'ক্বাফ', 'কাফ'] },
  { arabic: 'ق', correct: 'ক্বাফ', options: ['ফা', 'ক্বাফ', 'কাফ', 'লাম'] },
  { arabic: 'ك', correct: 'কাফ', options: ['ক্বাফ', 'কাফ', 'লাম', 'মীম'] },
  { arabic: 'ل', correct: 'লাম', options: ['কাফ', 'লাম', 'মীম', 'নূন'] },
  { arabic: 'م', correct: 'মীম', options: ['লাম', 'মীম', 'নূন', 'হা'] },
  { arabic: 'ن', correct: 'নূন', options: ['মীম', 'নূন', 'হা', 'ওয়াও'] },
  { arabic: 'ه', correct: 'হা', options: ['নূন', 'হা', 'ওয়াও', 'ইয়া'] },
  { arabic: 'و', correct: 'ওয়াও', options: ['হা', 'ওয়াও', 'ইয়া', 'আলিফ'] },
  { arabic: 'ي', correct: 'ইয়া', options: ['ওয়াও', 'ইয়া', 'আলিফ', 'বা'] },
  { arabic: 'ء', correct: 'হামযা', options: ['ইয়া', 'হামযা', 'আলিফ', 'তা মারবুতা'] },
  { arabic: 'ة', correct: 'তা মারবুতা', options: ['হামযা', 'তা মারবুতা', 'আলিফ', 'বা'] },
]

// Shuffle array function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function AlphabetQuiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => shuffleArray(quizQuestions))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])

  // Initialize options for the first question
  useEffect(() => {
    if (questions.length > 0) {
      setShuffledOptions(shuffleArray(questions[0].options))
    }
  }, [questions])

  const question = questions[currentQuestion]

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return // Already answered

    setSelectedAnswer(answer)
    setShowResult(true)

    if (answer === question.correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const nextQ = currentQuestion + 1
      setCurrentQuestion(nextQ)
      setSelectedAnswer(null)
      setShowResult(false)
      setShuffledOptions(shuffleArray(questions[nextQ].options))
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    const shuffled = shuffleArray(quizQuestions)
    setQuestions(shuffled)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
    setShuffledOptions(shuffleArray(shuffled[0].options))
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 text-center border-2 border-emerald-200">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">কুইজ সম্পন্ন!</h3>
        <p className="text-gray-600 mb-4">Quiz Complete!</p>

        <div className="bg-white rounded-xl p-6 mb-6 inline-block">
          <div className="text-5xl font-bold text-emerald-600 mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-gray-500">
            {percentage}% সঠিক
          </div>
        </div>

        <div className="mb-6">
          {percentage >= 80 && (
            <p className="text-emerald-700 font-medium">অসাধারণ! আপনি আরবি বর্ণমালা ভালোভাবে শিখেছেন!</p>
          )}
          {percentage >= 60 && percentage < 80 && (
            <p className="text-amber-700 font-medium">ভালো চেষ্টা! আরেকটু অনুশীলন করুন।</p>
          )}
          {percentage < 60 && (
            <p className="text-rose-700 font-medium">আরও অনুশীলন দরকার। উপরের টেবিল থেকে আবার শিখুন।</p>
          )}
        </div>

        <button
          onClick={restartQuiz}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          আবার শুরু করুন
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
      {/* Progress */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-600">
          প্রশ্ন {currentQuestion + 1}/{questions.length}
        </span>
        <span className="text-sm font-medium text-emerald-600">
          স্কোর: {score}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-4">এই অক্ষরের নাম কী?</p>
        <div
          className="text-9xl text-gray-800 mb-2"
          style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
        >
          {question.arabic}
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {shuffledOptions.map((option, index) => {
          let buttonClass = 'bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-800'

          if (showResult) {
            if (option === question.correct) {
              buttonClass = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-800'
            } else if (option === selectedAnswer && option !== question.correct) {
              buttonClass = 'bg-rose-100 border-2 border-rose-500 text-rose-800'
            } else {
              buttonClass = 'bg-gray-100 border-2 border-gray-200 text-gray-400'
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
              className={`${buttonClass} font-bold py-4 px-6 rounded-xl transition-all text-lg`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {/* Result & Next Button */}
      {showResult && (
        <div className="text-center">
          {selectedAnswer === question.correct ? (
            <p className="text-emerald-600 font-bold mb-4 text-lg">✓ সঠিক! Correct!</p>
          ) : (
            <p className="text-rose-600 font-bold mb-4 text-lg">
              ✗ ভুল! সঠিক উত্তর: {question.correct}
            </p>
          )}
          <button
            onClick={nextQuestion}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            {currentQuestion < questions.length - 1 ? 'পরবর্তী প্রশ্ন →' : 'ফলাফল দেখুন'}
          </button>
        </div>
      )}
    </div>
  )
}
