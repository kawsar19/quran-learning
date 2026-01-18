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
  { letter: 'س', name: 'সীন', fatha: { arabic: 'সَ', sound: 'সা' }, kasra: { arabic: 'সِ', sound: 'সি' }, damma: { arabic: 'সُ', sound: 'সু' } },
  { letter: 'ش', name: 'শীন', fatha: { arabic: 'শَ', sound: 'শা' }, kasra: { arabic: 'শِ', sound: 'শি' }, damma: { arabic: 'শُ', sound: 'শু' } },
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

const harakatInfo: Record<HarakatType, { bangla: string; english: string; altBangla: string; sound: string; color: string; icon: string }> = {
  fatha: { bangla: 'ফাতহা', english: 'Fatha', altBangla: 'যবর', sound: 'আ', color: 'bg-red-500', icon: 'ـَ' },
  kasra: { bangla: 'কাসরা', english: 'Kasra', altBangla: 'যের', sound: 'ই', color: 'bg-green-500', icon: 'ـِ' },
  damma: { bangla: 'দাম্মা', english: 'Damma', altBangla: 'পেশ', sound: 'উ', color: 'bg-blue-500', icon: 'ـُ' },
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
    case 'identify-harakat':
      return {
        type: 'identify-harakat',
        questionText: `এই অক্ষরে কোন হরকত আছে?`,
        questionTextEn: 'Which harakat is on this letter?',
        displayArabic: letter[randomHarakat].arabic,
        correctAnswer: randomHarakat,
        options: shuffleArray(
          harakatTypes.map((h) => ({
            label: `${harakatInfo[h].bangla} (${harakatInfo[h].altBangla})`,
            value: h,
            color: h === 'fatha' ? 'red' : h === 'kasra' ? 'green' : 'blue',
          }))
        ),
      }

    case 'identify-sound':
      return {
        type: 'identify-sound',
        questionText: `এই অক্ষরের উচ্চারণ কী?`,
        questionTextEn: 'What is the pronunciation of this letter?',
        displayArabic: letter[randomHarakat].arabic,
        correctAnswer: letter[randomHarakat].sound,
        options: shuffleArray([
          { label: letter.fatha.sound, value: letter.fatha.sound },
          { label: letter.kasra.sound, value: letter.kasra.sound },
          { label: letter.damma.sound, value: letter.damma.sound },
          { label: getRandomItems(letters, 1, letter)[0][randomHarakat].sound, value: getRandomItems(letters, 1, letter)[0][randomHarakat].sound },
        ]),
      }

    case 'find-harakat':
      return {
        type: 'find-harakat',
        questionText: `"${letter.name}" অক্ষরে ${harakatInfo[randomHarakat].bangla} (${harakatInfo[randomHarakat].altBangla}) দিলে কেমন হবে?`,
        questionTextEn: `How does "${letter.name}" look with ${harakatInfo[randomHarakat].english}?`,
        correctAnswer: letter[randomHarakat].arabic,
        options: shuffleArray(
          harakatTypes.map((h) => ({
            label: letter[h].sound,
            value: letter[h].arabic,
            arabic: letter[h].arabic,
            color: h === 'fatha' ? 'red' : h === 'kasra' ? 'green' : 'blue',
          }))
        ).concat([{ 
          label: 'শুধু ' + letter.name, 
          value: letter.letter, 
          arabic: letter.letter,
          color: 'gray'
        }]),
      }

    default: // match-sound
      const correctSound = letter[randomHarakat].sound
      return {
        type: 'match-sound',
        questionText: `"${correctSound}" উচ্চারণ করতে কোনটি লাগবে?`,
        questionTextEn: `Which one makes the "${correctSound}" sound?`,
        correctAnswer: letter[randomHarakat].arabic,
        options: shuffleArray([
          { label: letter[randomHarakat].sound, value: letter[randomHarakat].arabic, arabic: letter[randomHarakat].arabic },
          ...getRandomItems(letters, 3, letter).map(l => {
            const h = harakatTypes[Math.floor(Math.random() * 3)]
            return { label: l[h].sound, value: l[h].arabic, arabic: l[h].arabic }
          })
        ])
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
    setQuestions(Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion()))
  }, [])

  if (questions.length === 0) return null

  const question = questions[currentQuestion]

  const handleAnswer = (value: string) => {
    if (selectedAnswer) return
    setSelectedAnswer(value)
    setShowResult(true)
    if (value === question.correctAnswer) setScore(s => s + 1)
  }

  const nextStep = () => {
    if (currentQuestion < TOTAL_QUESTIONS - 1) {
      setCurrentQuestion(c => c + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const restart = () => {
    setQuestions(Array.from({ length: TOTAL_QUESTIONS }, () => generateQuestion()))
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
  }

  if (quizComplete) {
    const percentage = Math.round((score / TOTAL_QUESTIONS) * 100)
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-indigo-100 text-center max-w-2xl mx-auto">
        <div className="text-8xl mb-6 transform hover:scale-110 transition-transform">
          {percentage >= 80 ? '👑' : percentage >= 60 ? '🌟' : '💪'}
        </div>
        <h3 className="text-3xl font-black text-gray-800 mb-2">কুইজ সম্পন্ন!</h3>
        <p className="text-indigo-500 font-bold mb-8 uppercase tracking-widest text-sm">Learning Progress Secured</p>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-indigo-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-indigo-600 leading-none mb-1">{score}/{TOTAL_QUESTIONS}</div>
            <div className="text-xs text-indigo-400 font-bold uppercase">স্কোর</div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-emerald-600 leading-none mb-1">{percentage}%</div>
            <div className="text-xs text-emerald-400 font-bold uppercase">সঠিকতা</div>
          </div>
        </div>

        <div className="mb-10 px-6">
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            {percentage >= 80 ? 'আপনি অসাধারণ! আপনি হরকতের ব্যবহারে দক্ষ হয়ে উঠেছেন।' : 
             percentage >= 60 ? 'দারুণ প্রচেষ্টা! আরেকটু অনুশীলন করলে আপনি আরও ভালো করবেন।' : 
             'অনুশীলনই সাফল্যের চাবিকাঠি। উপরের পাঠটি আবার দেখে নিন এবং নতুন করে চেষ্টা করুন।'}
          </p>
        </div>

        <button
          onClick={restart}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-indigo-200 active:scale-[0.98]"
        >
          নতুন কুইজ শুরু করুন
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-indigo-50 max-w-4xl mx-auto overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-50 rounded-full blur-3xl opacity-50"></div>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">Question {currentQuestion + 1} of {TOTAL_QUESTIONS}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-lg text-[10px] font-black uppercase">
                {question.type.replace('-', ' ')}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest leading-none">Score</span>
            <div className="text-2xl font-black text-emerald-600 mt-0.5 leading-none">{score}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 w-full bg-gray-100 rounded-full mb-10 overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%` }}
          />
        </div>

        {/* Question Area */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-2 leading-tight">{question.questionText}</h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">{question.questionTextEn}</p>
          
          {question.displayArabic && (
            <div className="mt-8 relative inline-block group">
                <div className="absolute inset-0 bg-indigo-50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
                <div className="relative bg-white border-2 border-indigo-100 px-10 py-8 rounded-3xl shadow-sm">
                    <span 
                      className="text-8xl md:text-9xl text-gray-800 leading-none select-none leading-[1.3] md:leading-[1.8]"
                      style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
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
            const isCorrect = showResult && option.value === question.correctAnswer
            const isWrong = showResult && selectedAnswer === option.value && option.value !== question.correctAnswer
            const isNeutral = showResult && option.value !== question.correctAnswer && option.value !== selectedAnswer

            return (
              <button
                key={i}
                onClick={() => handleAnswer(option.value)}
                disabled={showResult}
                className={`
                  relative overflow-hidden group py-6 px-4 rounded-3xl border-2 transition-all duration-300
                  ${isCorrect ? 'bg-emerald-50 border-emerald-500 shadow-lg shadow-emerald-50 translate-y-[-4px]' : 
                    isWrong ? 'bg-rose-50 border-rose-500 shadow-lg shadow-rose-50 scale-95' :
                    isNeutral ? 'bg-gray-50 border-gray-100 opacity-50' :
                    'bg-white border-indigo-50 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50/50 hover:translate-y-[-4px] active:translate-y-0 active:scale-98'}
                `}
              >
                {option.arabic && (
                  <div 
                    className={`text-4xl md:text-5xl mb-2 transition-transform duration-300 ${!showResult ? 'group-hover:scale-110' : ''}`}
                    style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
                  >
                    {option.arabic}
                  </div>
                )}
                <div className={`text-sm md:text-base font-black ${isCorrect ? 'text-emerald-700' : isWrong ? 'text-rose-700' : 'text-gray-700'}`}>
                    {option.label}
                </div>
                
                {/* Result Indicator */}
                {isCorrect && <div className="absolute top-2 right-2 text-emerald-500">✓</div>}
                {isWrong && <div className="absolute top-2 right-2 text-rose-500">✗</div>}
              </button>
            )
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
                        {currentQuestion < TOTAL_QUESTIONS - 1 ? 'পরবর্তী প্রশ্ন' : 'ফলাফল দেখুন'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            ) : (
                <p className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.2em]">Select the correct answer to proceed</p>
            )}
        </div>
      </div>
    </div>
  )
}
