'use client'

import { useState, useEffect } from 'react'

// Shiddat (Strong) letters: أ ج د ق ط ب ك ت
const shiddatLetters = ['أ', 'ج', 'د', 'ق', 'ط', 'ب', 'ك', 'ت']

// Rakhawat (Soft) letters for comparison
const rakhawatLetters = ['ح', 'خ', 'ذ', 'ز', 'س', 'ش', 'ص', 'ض', 'ظ', 'ع', 'غ', 'ف', 'ه', 'و', 'ي', 'ث']

// Tawassut (Middle) letters
const tawassutLetters = ['ل', 'ن', 'ع', 'م', 'ر']

interface QuranicWord {
  word: string
  pronunciation: string
  meaning: string
  shiddatLetter: string
  source: string
}

const quranicWords: QuranicWord[] = [
  { word: 'رَبِّ', pronunciation: 'রাব্বি', meaning: 'প্রভুর', shiddatLetter: 'ب', source: 'رَبِّ الْعَالَمِينَ' },
  { word: 'الْحَقُّ', pronunciation: 'আল-হাক্ব্ক্বু', meaning: 'সত্য', shiddatLetter: 'ق', source: 'وَالْحَقُّ أَقُولُ' },
  { word: 'الْحَجُّ', pronunciation: 'আল-হাজ্জু', meaning: 'হজ্জ', shiddatLetter: 'ج', source: 'الْحَجُّ أَشْهُرٌ' },
  { word: 'أَشَدُّ', pronunciation: 'আশাদ্দু', meaning: 'অধিক শক্তিশালী', shiddatLetter: 'د', source: 'أَشَدُّ قُوَّةً' },
  { word: 'كُلِّ', pronunciation: 'কুল্লি', meaning: 'প্রত্যেক', shiddatLetter: 'ك', source: 'كُلِّ شَيْءٍ' },
  { word: 'الطَّامَّةُ', pronunciation: 'আত্ব-ত্বাম্মাতু', meaning: 'মহাবিপদ', shiddatLetter: 'ط', source: 'الطَّامَّةُ الْكُبْرَىٰ' },
  { word: 'مَكَّةَ', pronunciation: 'মাক্কাতা', meaning: 'মক্কা', shiddatLetter: 'ك', source: 'بِبَطْنِ مَكَّةَ' },
  { word: 'أُمَّةً', pronunciation: 'উম্মাতান', meaning: 'জাতি', shiddatLetter: 'م', source: 'أُمَّةً وَاحِدَةً' },
  { word: 'التَّوَّابُ', pronunciation: 'আত-তাওয়্যাবু', meaning: 'তওবা কবুলকারী', shiddatLetter: 'ت', source: 'هُوَ التَّوَّابُ' },
  { word: 'الْجَنَّةِ', pronunciation: 'আল-জান্নাতি', meaning: 'জান্নাতের', shiddatLetter: 'ج', source: 'جَنَّاتِ عَدْنٍ' },
  { word: 'قُلْ', pronunciation: 'ক্বুল', meaning: 'বলুন', shiddatLetter: 'ق', source: 'قُلْ هُوَ اللهُ أَحَدٌ' },
  { word: 'يَدُقُّ', pronunciation: 'ইয়াদুক্ব্ক্বু', meaning: 'সে মারে', shiddatLetter: 'ق', source: 'يَدُقُّ الْبَابَ' },
]

interface ShiddatLetterInfo {
  letter: string
  name: string
  transliteration: string
  withTashdidFatha: string
  withTashdidKasra: string
  withTashdidDamma: string
}

const shiddatLetterInfo: ShiddatLetterInfo[] = [
  { letter: 'أ', name: 'আলিফ', transliteration: 'Alif', withTashdidFatha: 'أَ', withTashdidKasra: 'إِ', withTashdidDamma: 'أُ' },
  { letter: 'ج', name: 'জীম', transliteration: 'Jeem', withTashdidFatha: 'جَّ', withTashdidKasra: 'جِّ', withTashdidDamma: 'جُّ' },
  { letter: 'د', name: 'দাল', transliteration: 'Dal', withTashdidFatha: 'دَّ', withTashdidKasra: 'دِّ', withTashdidDamma: 'دُّ' },
  { letter: 'ق', name: 'ক্বাফ', transliteration: 'Qaf', withTashdidFatha: 'قَّ', withTashdidKasra: 'قِّ', withTashdidDamma: 'قُّ' },
  { letter: 'ط', name: 'ত্বা', transliteration: 'Ta', withTashdidFatha: 'طَّ', withTashdidKasra: 'طِّ', withTashdidDamma: 'طُّ' },
  { letter: 'ب', name: 'বা', transliteration: 'Ba', withTashdidFatha: 'بَّ', withTashdidKasra: 'بِّ', withTashdidDamma: 'بُّ' },
  { letter: 'ك', name: 'কাফ', transliteration: 'Kaf', withTashdidFatha: 'كَّ', withTashdidKasra: 'كِّ', withTashdidDamma: 'كُّ' },
  { letter: 'ت', name: 'তা', transliteration: 'Ta', withTashdidFatha: 'تَّ', withTashdidKasra: 'تِّ', withTashdidDamma: 'تُّ' },
]

type QuestionType = 'identify-shiddat' | 'find-in-word' | 'shiddat-vs-rakhawat' | 'mnemonic'

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

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomItems<T>(array: T[], count: number): T[] {
  return shuffleArray([...array]).slice(0, count)
}

function generateQuestion(): Question {
  const questionTypes: QuestionType[] = ['identify-shiddat', 'find-in-word', 'shiddat-vs-rakhawat', 'mnemonic']
  const type = questionTypes[Math.floor(Math.random() * questionTypes.length)]

  switch (type) {
    case 'identify-shiddat': {
      // Show a letter and ask if it's Shiddat or not
      const isShiddat = Math.random() > 0.5
      const letter = isShiddat
        ? getRandomItem(shiddatLetterInfo)
        : { letter: getRandomItem(rakhawatLetters), name: '', transliteration: '' }

      return {
        type: 'identify-shiddat',
        questionText: 'এই অক্ষরটি কি শিদ্দাত অক্ষর?',
        questionTextEn: 'Is this a Shiddat letter?',
        displayArabic: letter.letter,
        correctAnswer: isShiddat ? 'yes' : 'no',
        options: shuffleArray([
          { label: 'হ্যাঁ, শিদ্দাত', value: 'yes' },
          { label: 'না, রাখাওয়াত', value: 'no' },
        ]),
      }
    }

    case 'find-in-word': {
      // Show a Quranic word and ask which letter is Shiddat
      const word = getRandomItem(quranicWords)
      const wrongLetters = getRandomItems(rakhawatLetters, 3)

      return {
        type: 'find-in-word',
        questionText: `এই শব্দে শিদ্দাত অক্ষর কোনটি?`,
        questionTextEn: 'Which is the Shiddat letter in this word?',
        displayArabic: word.word,
        correctAnswer: word.shiddatLetter,
        options: shuffleArray([
          { label: word.shiddatLetter, value: word.shiddatLetter, arabic: word.shiddatLetter },
          ...wrongLetters.map(l => ({ label: l, value: l, arabic: l }))
        ]),
      }
    }

    case 'shiddat-vs-rakhawat': {
      // Ask to identify which set contains only Shiddat letters
      const correctSet = getRandomItems(shiddatLetters, 3)
      const wrongSet1 = [...getRandomItems(shiddatLetters, 1), ...getRandomItems(rakhawatLetters, 2)]
      const wrongSet2 = getRandomItems(rakhawatLetters, 3)
      const wrongSet3 = [...getRandomItems(rakhawatLetters, 1), ...getRandomItems(shiddatLetters, 2)]

      return {
        type: 'shiddat-vs-rakhawat',
        questionText: 'কোন সেটে শুধুমাত্র শিদ্দাত অক্ষর আছে?',
        questionTextEn: 'Which set contains only Shiddat letters?',
        correctAnswer: correctSet.join(' '),
        options: shuffleArray([
          { label: correctSet.join(' ، '), value: correctSet.join(' '), arabic: correctSet.join(' ') },
          { label: shuffleArray(wrongSet1).join(' ، '), value: wrongSet1.join(' '), arabic: shuffleArray(wrongSet1).join(' ') },
          { label: shuffleArray(wrongSet2).join(' ، '), value: wrongSet2.join(' '), arabic: shuffleArray(wrongSet2).join(' ') },
          { label: shuffleArray(wrongSet3).join(' ، '), value: wrongSet3.join(' '), arabic: shuffleArray(wrongSet3).join(' ') },
        ]),
      }
    }

    case 'mnemonic': {
      // Test the mnemonic أَجِدُ قَطٍ بَكَتْ
      const mnemonicQuestions = [
        {
          questionText: 'শিদ্দাত অক্ষর মনে রাখার সূত্র কোনটি?',
          questionTextEn: 'What is the mnemonic for Shiddat letters?',
          correctAnswer: 'أَجِدُ قَطٍ بَكَتْ',
          options: [
            { label: 'আজিদু ক্বাত্বিন বাকাত', value: 'أَجِدُ قَطٍ بَكَتْ', arabic: 'أَجِدُ قَطٍ بَكَتْ' },
            { label: 'ক্বুতবু জাদ্দিন', value: 'قُطْبُ جَدٍّ', arabic: 'قُطْبُ جَدٍّ' },
            { label: 'লিন আউ', value: 'لِنْ عَوْ', arabic: 'لِنْ عَوْ' },
            { label: 'খাসা দাগাতুন', value: 'خَصَّ ضَغَطٍ', arabic: 'خَصَّ ضَغَطٍ' },
          ],
        },
        {
          questionText: 'أَجِدُ قَطٍ بَكَتْ এর অর্থ কী?',
          questionTextEn: 'What does أَجِدُ قَطٍ بَكَتْ mean?',
          correctAnswer: 'cat_cried',
          options: [
            { label: 'আমি পেয়েছি একটি বিড়াল যে কাঁদছিল', value: 'cat_cried' },
            { label: 'আমি দেখেছি একটি পাখি উড়ছিল', value: 'bird_flew' },
            { label: 'আমি শুনেছি একটি কথা', value: 'heard_word' },
            { label: 'আমি পড়েছি একটি বই', value: 'read_book' },
          ],
        },
        {
          questionText: 'শিদ্দাত অক্ষর কয়টি?',
          questionTextEn: 'How many Shiddat letters are there?',
          correctAnswer: '8',
          options: [
            { label: '৮টি', value: '8' },
            { label: '৬টি', value: '6' },
            { label: '১০টি', value: '10' },
            { label: '৪টি', value: '4' },
          ],
        },
      ]

      return {
        type: 'mnemonic',
        ...getRandomItem(mnemonicQuestions),
      }
    }

    default:
      return generateQuestion()
  }
}

const TOTAL_QUESTIONS = 10

export default function ShiddatQuiz() {
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
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100 text-center max-w-2xl mx-auto">
        <div className="text-8xl mb-6 transform hover:scale-110 transition-transform">
          {percentage >= 80 ? '👑' : percentage >= 60 ? '🌟' : '💪'}
        </div>
        <h3 className="text-3xl font-black text-gray-800 mb-2">কুইজ সম্পন্ন!</h3>
        <p className="text-purple-500 font-bold mb-8 uppercase tracking-widest text-sm">শিদ্দাত কুইজ</p>

        <div className="flex justify-center gap-4 mb-10">
          <div className="bg-purple-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-purple-600 leading-none mb-1">{score}/{TOTAL_QUESTIONS}</div>
            <div className="text-xs text-purple-400 font-bold uppercase">স্কোর</div>
          </div>
          <div className="bg-emerald-50 rounded-2xl p-6 min-w-[120px]">
            <div className="text-4xl font-black text-emerald-600 leading-none mb-1">{percentage}%</div>
            <div className="text-xs text-emerald-400 font-bold uppercase">সঠিকতা</div>
          </div>
        </div>

        <div className="mb-10 px-6">
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            {percentage >= 80 ? 'অসাধারণ! আপনি শিদ্দাত অক্ষরগুলো ভালোভাবে চিনতে পারছেন।' :
             percentage >= 60 ? 'ভালো চেষ্টা! أَجِدُ قَطٍ بَكَتْ মনে রাখুন এবং আবার চেষ্টা করুন।' :
             'আরও অনুশীলন প্রয়োজন। উপরের পাঠটি আবার পড়ুন এবং أَجِدُ قَطٍ بَكَتْ মুখস্থ করুন।'}
          </p>
        </div>

        <button
          onClick={restart}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-purple-200 active:scale-[0.98]"
        >
          আবার কুইজ দিন
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl border border-purple-50 max-w-4xl mx-auto overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-xs font-black text-purple-400 uppercase tracking-widest">প্রশ্ন {currentQuestion + 1} / {TOTAL_QUESTIONS}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-[10px] font-black uppercase">
                {question.type === 'identify-shiddat' ? 'চিহ্নিত করুন' :
                 question.type === 'find-in-word' ? 'শব্দে খুঁজুন' :
                 question.type === 'shiddat-vs-rakhawat' ? 'তুলনা' : 'মনে রাখার সূত্র'}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-emerald-400 uppercase tracking-widest leading-none">স্কোর</span>
            <div className="text-2xl font-black text-emerald-600 mt-0.5 leading-none">{score}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 w-full bg-gray-100 rounded-full mb-10 overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%` }}
          />
        </div>

        {/* Question Area */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-2 leading-tight">{question.questionText}</h2>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">{question.questionTextEn}</p>

          {question.displayArabic && (
            <div className="mt-8 relative inline-block group">
              <div className="absolute inset-0 bg-purple-50 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
              <div className="relative bg-white border-2 border-purple-100 px-10 py-8 rounded-3xl shadow-sm">
                <span
                  className="text-7xl md:text-8xl text-gray-800 leading-none select-none"
                  style={{ fontFamily: "'Amiri Quran', serif" }}
                >
                  {question.displayArabic}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
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
                    'bg-white border-purple-50 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-50/50 hover:translate-y-[-4px] active:translate-y-0 active:scale-98'}
                `}
              >
                {option.arabic && (
                  <div
                    className={`text-3xl md:text-4xl mb-2 transition-transform duration-300 ${!showResult ? 'group-hover:scale-110' : ''}`}
                    style={{ fontFamily: "'Amiri Quran', serif" }}
                  >
                    {option.arabic}
                  </div>
                )}
                <div className={`text-sm md:text-base font-bold ${isCorrect ? 'text-emerald-700' : isWrong ? 'text-rose-700' : 'text-gray-700'}`}>
                  {option.label}
                </div>

                {/* Result Indicator */}
                {isCorrect && <div className="absolute top-2 right-2 text-emerald-500 text-xl">✓</div>}
                {isWrong && <div className="absolute top-2 right-2 text-rose-500 text-xl">✗</div>}
              </button>
            )
          })}
        </div>

        {/* Footer / Next Button */}
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
            <p className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.2em]">সঠিক উত্তর নির্বাচন করুন</p>
          )}
        </div>
      </div>
    </div>
  )
}
