'use client'

import { useState, useEffect } from 'react'

interface LetterWithHarakat {
  letter: string
  name: string
  fatha: { arabic: string; sound: string }
  kasra: { arabic: string; sound: string }
  damma: { arabic: string; sound: string }
}

const letters: LetterWithHarakat[] = [
  { letter: 'ب', name: 'বা', fatha: { arabic: 'بَ', sound: 'বা' }, kasra: { arabic: 'بِ', sound: 'বি' }, damma: { arabic: 'بُ', sound: 'বু' } },
  { letter: 'ت', name: 'তা', fatha: { arabic: 'تَ', sound: 'তা' }, kasra: { arabic: 'تِ', sound: 'তি' }, damma: { arabic: 'تُ', sound: 'তু' } },
  { letter: 'ث', name: 'ছা', fatha: { arabic: 'ثَ', sound: 'ছা' }, kasra: { arabic: 'ثِ', sound: 'ছি' }, damma: { arabic: 'ثُ', sound: 'ছু' } },
  { letter: 'ج', name: 'জীম', fatha: { arabic: 'جَ', sound: 'জা' }, kasra: { arabic: 'جِ', sound: 'জি' }, damma: { arabic: 'جُ', sound: 'জু' } },
  { letter: 'ح', name: 'হা', fatha: { arabic: 'حَ', sound: 'হা' }, kasra: { arabic: 'حِ', sound: 'হি' }, damma: { arabic: 'حُ', sound: 'হু' } },
  { letter: 'خ', name: 'খা', fatha: { arabic: 'خَ', sound: 'খা' }, kasra: { arabic: 'خِ', sound: 'খি' }, damma: { arabic: 'خُ', sound: 'খু' } },
  { letter: 'د', name: 'দাল', fatha: { arabic: 'دَ', sound: 'দা' }, kasra: { arabic: 'دِ', sound: 'দি' }, damma: { arabic: 'دُ', sound: 'দু' } },
  { letter: 'ذ', name: 'যাল', fatha: { arabic: 'ذَ', sound: 'যা' }, kasra: { arabic: 'ذِ', sound: 'যি' }, damma: { arabic: 'ذُ', sound: 'যু' } },
  { letter: 'ر', name: 'রা', fatha: { arabic: 'رَ', sound: 'রা' }, kasra: { arabic: 'رِ', sound: 'রি' }, damma: { arabic: 'رُ', sound: 'রু' } },
  { letter: 'ز', name: 'যা', fatha: { arabic: 'زَ', sound: 'যা' }, kasra: { arabic: 'زِ', sound: 'যি' }, damma: { arabic: 'زُ', sound: 'যু' } },
  { letter: 'س', name: 'সীন', fatha: { arabic: 'سَ', sound: 'সা' }, kasra: { arabic: 'سِ', sound: 'সি' }, damma: { arabic: 'سُ', sound: 'সু' } },
  { letter: 'ش', name: 'শীন', fatha: { arabic: 'شَ', sound: 'শা' }, kasra: { arabic: 'شِ', sound: 'শি' }, damma: { arabic: 'شُ', sound: 'শু' } },
  { letter: 'ص', name: 'সোয়াদ', fatha: { arabic: 'صَ', sound: 'সা' }, kasra: { arabic: 'صِ', sound: 'সি' }, damma: { arabic: 'صُ', sound: 'সু' } },
  { letter: 'ض', name: 'দোয়াদ', fatha: { arabic: 'ضَ', sound: 'দা' }, kasra: { arabic: 'ضِ', sound: 'দি' }, damma: { arabic: 'ضُ', sound: 'দু' } },
  { letter: 'ط', name: 'তোয়া', fatha: { arabic: 'طَ', sound: 'তা' }, kasra: { arabic: 'طِ', sound: 'তি' }, damma: { arabic: 'طُ', sound: 'তু' } },
  { letter: 'ظ', name: 'যোয়া', fatha: { arabic: 'ظَ', sound: 'যা' }, kasra: { arabic: 'ظِ', sound: 'যি' }, damma: { arabic: 'ظُ', sound: 'যু' } },
  { letter: 'ع', name: 'আইন', fatha: { arabic: 'عَ', sound: 'আ' }, kasra: { arabic: 'عِ', sound: 'ই' }, damma: { arabic: 'عُ', sound: 'উ' } },
  { letter: 'غ', name: 'গাইন', fatha: { arabic: 'غَ', sound: 'গা' }, kasra: { arabic: 'غِ', sound: 'গি' }, damma: { arabic: 'غُ', sound: 'গু' } },
  { letter: 'ف', name: 'ফা', fatha: { arabic: 'فَ', sound: 'ফা' }, kasra: { arabic: 'فِ', sound: 'ফি' }, damma: { arabic: 'فُ', sound: 'ফু' } },
  { letter: 'ق', name: 'ক্বাফ', fatha: { arabic: 'قَ', sound: 'ক্বা' }, kasra: { arabic: 'قِ', sound: 'ক্বি' }, damma: { arabic: 'قُ', sound: 'ক্বু' } },
  { letter: 'ك', name: 'কাফ', fatha: { arabic: 'كَ', sound: 'কা' }, kasra: { arabic: 'كِ', sound: 'কি' }, damma: { arabic: 'كُ', sound: 'কু' } },
  { letter: 'ل', name: 'লাম', fatha: { arabic: 'لَ', sound: 'লা' }, kasra: { arabic: 'لِ', sound: 'লি' }, damma: { arabic: 'لُ', sound: 'লু' } },
  { letter: 'م', name: 'মীম', fatha: { arabic: 'مَ', sound: 'মা' }, kasra: { arabic: 'مِ', sound: 'মি' }, damma: { arabic: 'مُ', sound: 'মু' } },
  { letter: 'ن', name: 'নূন', fatha: { arabic: 'نَ', sound: 'না' }, kasra: { arabic: 'نِ', sound: 'নি' }, damma: { arabic: 'نُ', sound: 'নু' } },
  { letter: 'ه', name: 'হা', fatha: { arabic: 'هَ', sound: 'হা' }, kasra: { arabic: 'هِ', sound: 'হি' }, damma: { arabic: 'هُ', sound: 'হু' } },
  { letter: 'و', name: 'ওয়াও', fatha: { arabic: 'وَ', sound: 'ওয়া' }, kasra: { arabic: 'وِ', sound: 'ওয়ি' }, damma: { arabic: 'وُ', sound: 'ওয়ু' } },
  { letter: 'ي', name: 'ইয়া', fatha: { arabic: 'يَ', sound: 'ইয়া' }, kasra: { arabic: 'يِ', sound: 'ঈ' }, damma: { arabic: 'يُ', sound: 'ইউ' } },
]

type HarakatType = 'fatha' | 'kasra' | 'damma'
type QuestionType = 'identify-harakat' | 'identify-sound' | 'find-harakat' | 'match-sound'

const harakatInfo: Record<HarakatType, { bangla: string; english: string; altBangla: string; sound: string }> = {
  fatha: { bangla: 'ফাতহা', english: 'Fatha', altBangla: 'যবর', sound: 'আ' },
  kasra: { bangla: 'কাসরা', english: 'Kasra', altBangla: 'যের', sound: 'ই' },
  damma: { bangla: 'দাম্মা', english: 'Damma', altBangla: 'পেশ', sound: 'উ' },
}

interface Question {
  type: QuestionType
  questionText: string
  questionTextEn: string
  displayArabic?: string
  correctAnswer: string
  options: { label: string; value: string; arabic?: string; color?: string }[]
  letterName?: string
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
  const questionTypes: QuestionType[] = ['identify-harakat', 'identify-sound', 'find-harakat', 'match-sound']
  const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]
  const letter = letters[Math.floor(Math.random() * letters.length)]
  const harakatTypes: HarakatType[] = ['fatha', 'kasra', 'damma']
  const randomHarakat = harakatTypes[Math.floor(Math.random() * harakatTypes.length)]

  switch (type) {
    case 'identify-harakat': {
      // Type 1: Show letter with harakat, ask which harakat it is
      const arabicWithHarakat = letter[randomHarakat].arabic
      return {
        type: 'identify-harakat',
        questionText: `এই অক্ষরে কোন হরকত আছে?`,
        questionTextEn: 'Which harakat is on this letter?',
        displayArabic: arabicWithHarakat,
        correctAnswer: randomHarakat,
        letterName: letter.name,
        options: shuffleArray([
          ...harakatTypes.map((h) => ({
            label: `${harakatInfo[h].bangla} (${harakatInfo[h].altBangla})`,
            value: h as string,
            color: h === 'fatha' ? 'red' : h === 'kasra' ? 'green' : 'blue',
          })),
          { label: 'কোন হরকত নেই', value: 'none', color: 'gray' },
        ]),
      }
    }

    case 'identify-sound': {
      // Type 2: Show letter with harakat, ask what sound it makes
      const arabicWithHarakat = letter[randomHarakat].arabic
      const correctSound = letter[randomHarakat].sound
      const wrongSounds = harakatTypes
        .filter((h) => h !== randomHarakat)
        .map((h) => letter[h].sound)
      const wrongLetters = getRandomItems(letters, 1, letter)
      const extraWrong = wrongLetters[0]?.[randomHarakat]?.sound || 'অন্য'

      return {
        type: 'identify-sound',
        questionText: `এই অক্ষরের উচ্চারণ কী?`,
        questionTextEn: 'What is the pronunciation of this letter?',
        displayArabic: arabicWithHarakat,
        correctAnswer: correctSound,
        letterName: letter.name,
        options: shuffleArray([
          { label: correctSound, value: correctSound },
          ...wrongSounds.map((s) => ({ label: s, value: s })),
          { label: extraWrong, value: extraWrong },
        ]).slice(0, 4),
      }
    }

    case 'find-harakat': {
      // Type 3: Ask to find a specific harakat on a letter
      return {
        type: 'find-harakat',
        questionText: `"${letter.name}" অক্ষরে ${harakatInfo[randomHarakat].bangla} (${harakatInfo[randomHarakat].altBangla}) দিলে কেমন হবে?`,
        questionTextEn: `How does "${letter.name}" look with ${harakatInfo[randomHarakat].english}?`,
        correctAnswer: letter[randomHarakat].arabic,
        letterName: letter.name,
        options: shuffleArray(
          harakatTypes.map((h) => ({
            label: `${letter[h].sound}`,
            value: letter[h].arabic,
            arabic: letter[h].arabic,
            color: h === 'fatha' ? 'red' : h === 'kasra' ? 'green' : 'blue',
          }))
        ).concat([{ label: letter.name, value: letter.letter, arabic: letter.letter, color: 'gray' }]),
      }
    }

    case 'match-sound': {
      // Type 4: Show a sound, ask which letter+harakat makes it
      const correctSound = letter[randomHarakat].sound
      const wrongLetters = getRandomItems(letters, 3, letter)

      return {
        type: 'match-sound',
        questionText: `"${correctSound}" উচ্চারণ করতে কোনটি লাগবে?`,
        questionTextEn: `Which one makes the "${correctSound}" sound?`,
        correctAnswer: letter[randomHarakat].arabic,
        options: shuffleArray([
          { label: letter[randomHarakat].sound, value: letter[randomHarakat].arabic, arabic: letter[randomHarakat].arabic },
          ...wrongLetters.map((l) => {
            const h = harakatTypes[Math.floor(Math.random() * harakatTypes.length)]
            return { label: l[h].sound, value: l[h].arabic, arabic: l[h].arabic }
          }),
        ]),
      }
    }
  }
}

const TOTAL_QUESTIONS = 20

export default function HarakatQuiz() {
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
    if (question.type === 'identify-harakat') {
      const h = question.correctAnswer as HarakatType
      return harakatInfo[h] ? `${harakatInfo[h].bangla} (${harakatInfo[h].altBangla})` : question.correctAnswer
    }
    const correctOption = question.options.find((o) => o.value === question.correctAnswer)
    return correctOption?.label || question.correctAnswer
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 text-center border-2 border-indigo-200">
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '📚'}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">কুইজ সম্পন্ন!</h3>
        <p className="text-gray-600 mb-4">Quiz Complete!</p>

        <div className="bg-white rounded-xl p-6 mb-6 inline-block">
          <div className="text-5xl font-bold text-indigo-600 mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-gray-500">{percentage}% সঠিক</div>
        </div>

        <div className="mb-6">
          {percentage >= 80 && (
            <p className="text-indigo-700 font-medium">
              অসাধারণ! আপনি হরকত ভালোভাবে শিখেছেন!
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
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
        >
          আবার শুরু করুন
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-indigo-200">
      {/* Progress */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-600">
          প্রশ্ন {currentQuestion + 1}/{questions.length}
        </span>
        <span className="text-sm font-medium text-indigo-600">স্কোর: {score}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Type Badge */}
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
          {question.type === 'identify-harakat' && '🔍 হরকত চিহ্নিত করুন'}
          {question.type === 'identify-sound' && '🔊 উচ্চারণ বলুন'}
          {question.type === 'find-harakat' && '🎯 সঠিক হরকত খুঁজুন'}
          {question.type === 'match-sound' && '🔗 উচ্চারণ মেলান'}
        </span>
      </div>

      {/* Question */}
      <div className="text-center mb-6">
        <p className="text-gray-800 font-medium mb-1">{question.questionText}</p>
        <p className="text-gray-500 text-sm mb-4">{question.questionTextEn}</p>

        {question.displayArabic && (
          <div
            className="text-8xl md:text-9xl text-gray-800 py-6 bg-white rounded-xl shadow-inner"
            style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
          >
            {question.displayArabic}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {question.options.map((option, index) => {
          let buttonClass =
            'bg-white hover:bg-indigo-50 border-2 border-gray-200 hover:border-indigo-300 text-gray-800'

          if (showResult) {
            if (option.value === question.correctAnswer) {
              buttonClass = 'bg-emerald-100 border-2 border-emerald-500 text-emerald-800'
            } else if (option.value === selectedAnswer && option.value !== question.correctAnswer) {
              buttonClass = 'bg-rose-100 border-2 border-rose-500 text-rose-800'
            } else {
              buttonClass = 'bg-gray-100 border-2 border-gray-200 text-gray-400'
            }
          }

          // Color indicator for harakat type
          const colorClass = option.color === 'red' ? 'text-red-600' : option.color === 'green' ? 'text-green-600' : option.color === 'blue' ? 'text-blue-600' : ''

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              disabled={showResult}
              className={`${buttonClass} font-bold py-4 px-4 rounded-xl transition-all`}
            >
              {option.arabic && (
                <div
                  className={`text-3xl mb-1 ${colorClass}`}
                  style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                >
                  {option.arabic}
                </div>
              )}
              <div className={`text-sm md:text-base ${colorClass}`}>{option.label}</div>
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'পরবর্তী প্রশ্ন →' : 'ফলাফল দেখুন'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
