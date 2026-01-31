'use client'

import { useState, useEffect } from 'react'

interface LetterData {
  letter: string
  name: string
  independent: string
  initial: string
  medial: string
  final: string
}

const letters: LetterData[] = [
  { letter: 'ب', name: 'বা', independent: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' },
  { letter: 'ت', name: 'তা', independent: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' },
  { letter: 'ث', name: 'ছা', independent: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' },
  { letter: 'ج', name: 'জীম', independent: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' },
  { letter: 'ح', name: 'হা', independent: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' },
  { letter: 'خ', name: 'খা', independent: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' },
  { letter: 'س', name: 'সীন', independent: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' },
  { letter: 'ش', name: 'শীন', independent: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' },
  { letter: 'ص', name: 'সোয়াদ', independent: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' },
  { letter: 'ض', name: 'দোয়াদ', independent: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' },
  { letter: 'ط', name: 'তোয়া', independent: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' },
  { letter: 'ظ', name: 'যোয়া', independent: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' },
  { letter: 'ع', name: 'আইন', independent: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' },
  { letter: 'غ', name: 'গাইন', independent: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' },
  { letter: 'ف', name: 'ফা', independent: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' },
  { letter: 'ق', name: 'ক্বাফ', independent: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' },
  { letter: 'ك', name: 'কাফ', independent: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' },
  { letter: 'ل', name: 'লাম', independent: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' },
  { letter: 'م', name: 'মীম', independent: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' },
  { letter: 'ن', name: 'নূন', independent: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' },
  { letter: 'ه', name: 'হা', independent: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه' },
  { letter: 'ي', name: 'ইয়া', independent: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' },
]

type QuestionType = 'identify-form' | 'identify-letter' | 'find-form' | 'match-shape'

interface Question {
  type: QuestionType
  questionText: string
  questionTextEn: string
  displayArabic?: string
  correctAnswer: string
  options: { label: string; value: string; arabic?: string }[]
  letterName?: string
}

const formNames: Record<string, { bangla: string; english: string }> = {
  independent: { bangla: 'স্বতন্ত্র', english: 'Independent' },
  initial: { bangla: 'শুরু', english: 'Initial' },
  medial: { bangla: 'মধ্য', english: 'Medial' },
  final: { bangla: 'শেষ', english: 'Final' },
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
  const questionTypes: QuestionType[] = ['identify-form', 'identify-letter', 'find-form', 'match-shape']
  const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  const letter = letters[Math.floor(Math.random() * letters.length)]
  const forms: ('independent' | 'initial' | 'medial' | 'final')[] = ['independent', 'initial', 'medial', 'final']
  const randomForm = forms[Math.floor(Math.random() * forms.length)]

  switch (type) {
    case 'identify-form': {
      // Type 1: Show a shape, ask what form it is
      const shape = letter[randomForm]
      return {
        type: 'identify-form',
        questionText: `এই "${letter.name}" অক্ষরটি কোন রূপে আছে?`,
        questionTextEn: 'What form is this letter in?',
        displayArabic: shape,
        correctAnswer: randomForm,
        letterName: letter.name,
        options: shuffleArray(
          forms.map((f) => ({
            label: `${formNames[f].bangla} (${formNames[f].english})`,
            value: f,
          }))
        ),
      }
    }

    case 'identify-letter': {
      // Type 2: Show a shape, ask what letter it is
      const shape = letter[randomForm]
      const wrongLetters = getRandomItems(letters, 3, letter)
      return {
        type: 'identify-letter',
        questionText: `এই অক্ষরটির নাম কী? (${formNames[randomForm].bangla} রূপে দেখানো হয়েছে)`,
        questionTextEn: `What letter is this? (Shown in ${formNames[randomForm].english} form)`,
        displayArabic: shape,
        correctAnswer: letter.name,
        options: shuffleArray([
          { label: letter.name, value: letter.name },
          ...wrongLetters.map((l) => ({ label: l.name, value: l.name })),
        ]),
      }
    }

    case 'find-form': {
      // Type 3: Ask to find a specific form of a letter (show 4 shapes)
      return {
        type: 'find-form',
        questionText: `"${letter.name}" অক্ষরের ${formNames[randomForm].bangla} রূপ কোনটি?`,
        questionTextEn: `Which is the ${formNames[randomForm].english} form of "${letter.name}"?`,
        correctAnswer: letter[randomForm],
        letterName: letter.name,
        options: shuffleArray(
          forms.map((f) => ({
            label: formNames[f].bangla,
            value: letter[f],
            arabic: letter[f],
          }))
        ),
      }
    }

    case 'match-shape': {
      // Type 4: Show a shape, ask which letter it belongs to (with shapes as options)
      const shape = letter[randomForm]
      const wrongLetters = getRandomItems(letters, 3, letter)
      return {
        type: 'match-shape',
        questionText: `এই রূপটি কোন অক্ষরের?`,
        questionTextEn: 'Which letter does this shape belong to?',
        displayArabic: shape,
        correctAnswer: letter.letter,
        options: shuffleArray([
          { label: letter.name, value: letter.letter, arabic: letter.independent },
          ...wrongLetters.map((l) => ({
            label: l.name,
            value: l.letter,
            arabic: l.independent,
          })),
        ]),
      }
    }
  }
}

const TOTAL_QUESTIONS = 20

export default function ArabicShapesQuiz() {
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

  // Get correct answer label for display
  const getCorrectLabel = () => {
    const correctOption = question.options.find((o) => o.value === question.correctAnswer)
    if (question.type === 'identify-form') {
      return formNames[question.correctAnswer]?.bangla || question.correctAnswer
    }
    return correctOption?.label || question.correctAnswer
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 text-center border-2 border-purple-200">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">কুইজ সম্পন্ন!</h3>
        <p className="text-gray-600 mb-4">Quiz Complete!</p>

        <div className="bg-white rounded-xl p-6 mb-6 inline-block">
          <div className="text-5xl font-bold text-purple-600 mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-gray-500">{percentage}% সঠিক</div>
        </div>

        <div className="mb-6">
          {percentage >= 80 && (
            <p className="text-purple-700 font-medium">
              অসাধারণ! আপনি অক্ষরের রূপ ভালোভাবে চিনতে পারছেন!
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
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          আবার শুরু করুন
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-purple-200">
      {/* Progress */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-600">
          প্রশ্ন {currentQuestion + 1}/{questions.length}
        </span>
        <span className="text-sm font-medium text-purple-600">স্কোর: {score}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Type Badge */}
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
          {question.type === 'identify-form' && '🔍 রূপ চিহ্নিত করুন'}
          {question.type === 'identify-letter' && '📝 অক্ষর চিহ্নিত করুন'}
          {question.type === 'find-form' && '🎯 সঠিক রূপ খুঁজুন'}
          {question.type === 'match-shape' && '🔗 অক্ষর মেলান'}
        </span>
      </div>

      {/* Question */}
      <div className="text-center mb-6">
        <p className="text-gray-800 font-medium mb-1">{question.questionText}</p>
        <p className="text-gray-500 text-sm mb-4">{question.questionTextEn}</p>

        {question.displayArabic && (
          <div
            className="text-8xl md:text-9xl text-gray-800 py-4 bg-white rounded-xl shadow-inner"
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
            'bg-white hover:bg-purple-50 border-2 border-gray-200 hover:border-purple-300 text-gray-800'

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
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'পরবর্তী প্রশ্ন →' : 'ফলাফল দেখুন'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
