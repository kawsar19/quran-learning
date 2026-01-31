'use client'

import { useState, useEffect } from 'react'

interface CombinationData {
  arabic: string
  bangla: string
  letters: string[]
}

const combinations: CombinationData[] = [
  // Two letter words
  { arabic: 'حب', bangla: 'হা + বা', letters: ['ح', 'ب'] },
  { arabic: 'حج', bangla: 'হা + জীম', letters: ['ح', 'ج'] },
  { arabic: 'مع', bangla: 'মীম + আইন', letters: ['م', 'ع'] },
  { arabic: 'عص', bangla: 'আইন + সোয়াদ', letters: ['ع', 'ص'] },
  { arabic: 'ظل', bangla: 'যোয়া + লাম', letters: ['ظ', 'ل'] },
  { arabic: 'لك', bangla: 'লাম + কাফ', letters: ['ل', 'ك'] },
  { arabic: 'هو', bangla: 'হা + ওয়াও', letters: ['ه', 'و'] },
  { arabic: 'له', bangla: 'লাম + হা', letters: ['ل', 'ه'] },
  { arabic: 'حم', bangla: 'হা + মীম', letters: ['ح', 'م'] },
  { arabic: 'من', bangla: 'মীম + নূন', letters: ['م', 'ن'] },
  { arabic: 'لا', bangla: 'লাম + আলিফ', letters: ['ل', 'ا'] },
  { arabic: 'كم', bangla: 'কাফ + মীম', letters: ['ك', 'م'] },
  { arabic: 'حي', bangla: 'হা + ইয়া', letters: ['ح', 'ي'] },
  { arabic: 'كب', bangla: 'কাফ + বা', letters: ['ك', 'ب'] },
  { arabic: 'قل', bangla: 'ক্বাফ + লাম', letters: ['ق', 'ل'] },
  { arabic: 'بر', bangla: 'বা + রা', letters: ['ب', 'ر'] },
  { arabic: 'شر', bangla: 'শীন + রা', letters: ['ش', 'ر'] },
  { arabic: 'خل', bangla: 'খা + লাম', letters: ['خ', 'ل'] },
  { arabic: 'عم', bangla: 'আইন + মীম', letters: ['ع', 'م'] },
  { arabic: 'فم', bangla: 'ফা + মীম', letters: ['ف', 'م'] },
  // Three letter words
  { arabic: 'جلد', bangla: 'জীম + লাম + দাল', letters: ['ج', 'ل', 'د'] },
  { arabic: 'ليس', bangla: 'লাম + ইয়া + সীন', letters: ['ل', 'ي', 'س'] },
  { arabic: 'كتب', bangla: 'কাফ + তা + বা', letters: ['ك', 'ت', 'ب'] },
  { arabic: 'علم', bangla: 'আইন + লাম + মীম', letters: ['ع', 'ل', 'م'] },
  { arabic: 'قلب', bangla: 'ক্বাফ + লাম + বা', letters: ['ق', 'ل', 'ب'] },
]

const letterNames: Record<string, string> = {
  'ا': 'আলিফ', 'ب': 'বা', 'ت': 'তা', 'ث': 'ছা', 'ج': 'জীম', 'ح': 'হা', 'خ': 'খা',
  'د': 'দাল', 'ذ': 'যাল', 'ر': 'রা', 'ز': 'যা', 'س': 'সীন', 'ش': 'শীন',
  'ص': 'সোয়াদ', 'ض': 'দোয়াদ', 'ط': 'তোয়া', 'ظ': 'যোয়া', 'ع': 'আইন', 'غ': 'গাইন',
  'ف': 'ফা', 'ق': 'ক্বাফ', 'ك': 'কাফ', 'ل': 'লাম', 'م': 'মীম', 'ن': 'নূন',
  'ه': 'হা', 'و': 'ওয়াও', 'ي': 'ইয়া',
}

type QuestionType = 'identify-combo' | 'match-letters' | 'find-arabic' | 'complete-combo'

interface Question {
  type: QuestionType
  questionText: string
  questionTextEn: string
  displayArabic?: string
  correctAnswer: string
  options: { label: string; value: string; arabic?: string }[]
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function getRandomItems<T>(array: T[], count: number, exclude?: T): T[] {
  const filtered = exclude ? array.filter((item) => item !== exclude) : array
  return shuffleArray(filtered).slice(0, count)
}

function generateQuestion(): Question {
  const questionTypes: QuestionType[] = ['identify-combo', 'match-letters', 'find-arabic', 'complete-combo']
  const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  const combo = combinations[Math.floor(Math.random() * combinations.length)]
  const wrongCombos = getRandomItems(combinations, 3, combo)

  switch (type) {
    case 'identify-combo': {
      // Type 1: Show Arabic combo, ask what letters it contains
      return {
        type: 'identify-combo',
        questionText: `এই শব্দে কোন অক্ষরগুলো আছে?`,
        questionTextEn: 'What letters are in this word?',
        displayArabic: combo.arabic,
        correctAnswer: combo.bangla,
        options: shuffleArray([
          { label: combo.bangla, value: combo.bangla },
          ...wrongCombos.map((c) => ({ label: c.bangla, value: c.bangla })),
        ]),
      }
    }

    case 'match-letters': {
      // Type 2: Show letter names in Bangla, ask to find the Arabic
      return {
        type: 'match-letters',
        questionText: `"${combo.bangla}" এর আরবি রূপ কোনটি?`,
        questionTextEn: `Which is the Arabic form of "${combo.bangla}"?`,
        correctAnswer: combo.arabic,
        options: shuffleArray([
          { label: combo.bangla, value: combo.arabic, arabic: combo.arabic },
          ...wrongCombos.map((c) => ({ label: c.bangla, value: c.arabic, arabic: c.arabic })),
        ]),
      }
    }

    case 'find-arabic': {
      // Type 3: Show Arabic, ask to match with correct transliteration
      return {
        type: 'find-arabic',
        questionText: `এই আরবি শব্দের সঠিক বাংলা কোনটি?`,
        questionTextEn: 'Which is the correct Bengali for this Arabic?',
        displayArabic: combo.arabic,
        correctAnswer: combo.bangla,
        options: shuffleArray([
          { label: combo.bangla, value: combo.bangla },
          ...wrongCombos.map((c) => ({ label: c.bangla, value: c.bangla })),
        ]),
      }
    }

    case 'complete-combo': {
      // Type 4: Show first letter, ask what comes next
      if (combo.letters.length >= 2) {
        const firstLetter = combo.letters[0]
        const secondLetter = combo.letters[1]
        const wrongLetters = Object.keys(letterNames).filter(l => l !== secondLetter)
        const randomWrong = shuffleArray(wrongLetters).slice(0, 3)

        return {
          type: 'complete-combo',
          questionText: `"${combo.arabic}" শব্দে "${letterNames[firstLetter]}" এর পরে কোন অক্ষর আছে?`,
          questionTextEn: `In "${combo.arabic}", what letter comes after "${letterNames[firstLetter]}"?`,
          displayArabic: combo.arabic,
          correctAnswer: secondLetter,
          options: shuffleArray([
            { label: letterNames[secondLetter], value: secondLetter, arabic: secondLetter },
            ...randomWrong.map((l) => ({ label: letterNames[l], value: l, arabic: l })),
          ]),
        }
      }
      // Fallback to identify-combo if word is too short
      return {
        type: 'identify-combo',
        questionText: `এই শব্দে কোন অক্ষরগুলো আছে?`,
        questionTextEn: 'What letters are in this word?',
        displayArabic: combo.arabic,
        correctAnswer: combo.bangla,
        options: shuffleArray([
          { label: combo.bangla, value: combo.bangla },
          ...wrongCombos.map((c) => ({ label: c.bangla, value: c.bangla })),
        ]),
      }
    }
  }
}

const TOTAL_QUESTIONS = 20

export default function LetterCombinationsQuiz() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  useEffect(() => {
    const generatedQuestions = Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion())
    setQuestions(generatedQuestions)
  }, [])

  if (questions.length === 0) {
    return <div className="text-center py-8">Loading...</div>
  }

  const question = questions[currentQuestion]

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return

    setSelectedAnswer(answer)
    setShowResult(true)

    if (answer === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    const generatedQuestions = Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion())
    setQuestions(generatedQuestions)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
  }

  const getCorrectLabel = () => {
    const correctOption = question.options.find((o) => o.value === question.correctAnswer)
    return correctOption?.label || question.correctAnswer
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center border-2 border-teal-200">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">কুইজ সম্পন্ন!</h3>
        <p className="text-gray-600 mb-4">Quiz Complete!</p>

        <div className="bg-white rounded-xl p-6 mb-6 inline-block">
          <div className="text-5xl font-bold text-teal-600 mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-gray-500">{percentage}% সঠিক</div>
        </div>

        <div className="mb-6">
          {percentage >= 80 && (
            <p className="text-teal-700 font-medium">
              অসাধারণ! আপনি অক্ষর সংযোগ ভালোভাবে শিখেছেন!
            </p>
          )}
          {percentage >= 60 && percentage < 80 && (
            <p className="text-amber-700 font-medium">ভালো চেষ্টা! আরেকটু অনুশীলন করুন।</p>
          )}
          {percentage < 60 && (
            <p className="text-rose-700 font-medium">
              আরও অনুশীলন দরকার। উপরের টেবিল থেকে আবার শিখুন।
            </p>
          )}
        </div>

        <button
          onClick={restartQuiz}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          আবার শুরু করুন
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200">
      {/* Progress */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-600">
          প্রশ্ন {currentQuestion + 1}/{questions.length}
        </span>
        <span className="text-sm font-medium text-teal-600">স্কোর: {score}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-teal-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Type Badge */}
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
          {question.type === 'identify-combo' && '🔍 অক্ষর চিহ্নিত করুন'}
          {question.type === 'match-letters' && '🎯 আরবি খুঁজুন'}
          {question.type === 'find-arabic' && '📝 বাংলা মেলান'}
          {question.type === 'complete-combo' && '✏️ পরের অক্ষর'}
        </span>
      </div>

      {/* Question */}
      <div className="text-center mb-6">
        <p className="text-gray-800 font-medium mb-1">{question.questionText}</p>
        <p className="text-gray-500 text-sm mb-4">{question.questionTextEn}</p>

        {question.displayArabic && (
          <div
            className="text-7xl md:text-8xl text-gray-800 py-6 bg-white rounded-xl shadow-inner"
            style={{ fontFamily: "'Amiri Quran', serif" }}
          >
            {question.displayArabic}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {question.options.map((option, index) => {
          let buttonClass =
            'bg-white hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-300 text-gray-800'

          if (showResult) {
            if (option.value === question.correctAnswer) {
              buttonClass = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-800'
            } else if (option.value === selectedAnswer && option.value !== question.correctAnswer) {
              buttonClass = 'bg-rose-100 border-2 border-rose-500 text-rose-800'
            } else {
              buttonClass = 'bg-gray-100 border-2 border-gray-200 text-gray-400'
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              disabled={showResult}
              className={`${buttonClass} font-bold py-4 px-4 rounded-xl transition-all`}
            >
              {option.arabic && (
                <div
                  className="text-3xl mb-1"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {option.arabic}
                </div>
              )}
              <div className="text-sm md:text-base">{option.label}</div>
            </button>
          )
        })}
      </div>

      {/* Result & Next Button */}
      <div className="min-h-24">
        {showResult && (
          <div className="text-center">
            {selectedAnswer === question.correctAnswer ? (
              <p className="text-emerald-600 font-bold mb-4 text-lg">✓ সঠিক! Correct!</p>
            ) : (
              <p className="text-rose-600 font-bold mb-4 text-lg">
                ✗ ভুল! সঠিক উত্তর: {getCorrectLabel()}
              </p>
            )}
            <button
              onClick={nextQuestion}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'পরবর্তী প্রশ্ন →' : 'ফলাফল দেখুন'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
