'use client'

type TanweenType = 'fathatayn' | 'kasratayn' | 'dammatayn'

interface TanweenWord {
  arabic: string
  bangla: string
  meaning: string
  tanween: TanweenType
}

// Fathatayn words (ً) - "an" sound
const fathataynWords: TanweenWord[] = [
  { arabic: 'كِتَابًا', bangla: 'কিতাবান', meaning: 'একটি বই', tanween: 'fathatayn' },
  { arabic: 'بَابًا', bangla: 'বাবান', meaning: 'একটি দরজা', tanween: 'fathatayn' },
  { arabic: 'قَلَمًا', bangla: 'ক্বালামান', meaning: 'একটি কলম', tanween: 'fathatayn' },
  { arabic: 'وَلَدًا', bangla: 'ওয়ালাদান', meaning: 'একটি ছেলে', tanween: 'fathatayn' },
  { arabic: 'بَيْتًا', bangla: 'বাইতান', meaning: 'একটি ঘর', tanween: 'fathatayn' },
  { arabic: 'مَاءً', bangla: 'মাআন', meaning: 'পানি', tanween: 'fathatayn' },
  { arabic: 'شَيْئًا', bangla: 'শাইআন', meaning: 'কিছু', tanween: 'fathatayn' },
  { arabic: 'عِلْمًا', bangla: 'ইলমান', meaning: 'জ্ঞান', tanween: 'fathatayn' },
  { arabic: 'نُورًا', bangla: 'নূরান', meaning: 'আলো', tanween: 'fathatayn' },
  { arabic: 'خَيْرًا', bangla: 'খাইরান', meaning: 'ভালো', tanween: 'fathatayn' },
  { arabic: 'شُكْرًا', bangla: 'শুকরান', meaning: 'ধন্যবাদ', tanween: 'fathatayn' },
  { arabic: 'كَثِيرًا', bangla: 'কাছীরান', meaning: 'অনেক', tanween: 'fathatayn' },
]

// Kasratayn words (ٍ) - "in" sound
const kasrataynWords: TanweenWord[] = [
  { arabic: 'كِتَابٍ', bangla: 'কিতাবিন', meaning: 'একটি বইয়ের', tanween: 'kasratayn' },
  { arabic: 'بَابٍ', bangla: 'বাবিন', meaning: 'একটি দরজার', tanween: 'kasratayn' },
  { arabic: 'قَلَمٍ', bangla: 'ক্বালামিন', meaning: 'একটি কলমের', tanween: 'kasratayn' },
  { arabic: 'وَلَدٍ', bangla: 'ওয়ালাদিন', meaning: 'একটি ছেলের', tanween: 'kasratayn' },
  { arabic: 'بَيْتٍ', bangla: 'বাইতিন', meaning: 'একটি ঘরের', tanween: 'kasratayn' },
  { arabic: 'رَبٍّ', bangla: 'রাব্বিন', meaning: 'একজন রবের', tanween: 'kasratayn' },
  { arabic: 'يَوْمٍ', bangla: 'ইয়াউমিন', meaning: 'একটি দিনের', tanween: 'kasratayn' },
  { arabic: 'قَوْمٍ', bangla: 'ক্বাউমিন', meaning: 'একটি জাতির', tanween: 'kasratayn' },
  { arabic: 'عَظِيمٍ', bangla: 'আযীমিন', meaning: 'মহান', tanween: 'kasratayn' },
  { arabic: 'كَرِيمٍ', bangla: 'কারীমিন', meaning: 'সম্মানিত', tanween: 'kasratayn' },
  { arabic: 'حَكِيمٍ', bangla: 'হাকীমিন', meaning: 'প্রজ্ঞাময়', tanween: 'kasratayn' },
  { arabic: 'عَلِيمٍ', bangla: 'আলীমিন', meaning: 'সর্বজ্ঞ', tanween: 'kasratayn' },
]

// Dammatayn words (ٌ) - "un" sound
const dammataynWords: TanweenWord[] = [
  { arabic: 'كِتَابٌ', bangla: 'কিতাবুন', meaning: 'একটি বই', tanween: 'dammatayn' },
  { arabic: 'بَابٌ', bangla: 'বাবুন', meaning: 'একটি দরজা', tanween: 'dammatayn' },
  { arabic: 'قَلَمٌ', bangla: 'ক্বালামুন', meaning: 'একটি কলম', tanween: 'dammatayn' },
  { arabic: 'وَلَدٌ', bangla: 'ওয়ালাদুন', meaning: 'একটি ছেলে', tanween: 'dammatayn' },
  { arabic: 'بَيْتٌ', bangla: 'বাইতুন', meaning: 'একটি ঘর', tanween: 'dammatayn' },
  { arabic: 'رَبٌّ', bangla: 'রাব্বুন', meaning: 'একজন রব', tanween: 'dammatayn' },
  { arabic: 'يَوْمٌ', bangla: 'ইয়াউমুন', meaning: 'একটি দিন', tanween: 'dammatayn' },
  { arabic: 'قَوْمٌ', bangla: 'ক্বাউমুন', meaning: 'একটি জাতি', tanween: 'dammatayn' },
  { arabic: 'عَظِيمٌ', bangla: 'আযীমুন', meaning: 'মহান', tanween: 'dammatayn' },
  { arabic: 'كَرِيمٌ', bangla: 'কারীমুন', meaning: 'সম্মানিত', tanween: 'dammatayn' },
  { arabic: 'حَكِيمٌ', bangla: 'হাকীমুন', meaning: 'প্রজ্ঞাময়', tanween: 'dammatayn' },
  { arabic: 'عَلِيمٌ', bangla: 'আলীমুন', meaning: 'সর্বজ্ঞ', tanween: 'dammatayn' },
]

const tanweenColors = {
  fathatayn: {
    bg: 'bg-orange-100',
    border: 'border-orange-300',
    text: 'text-orange-600',
    headerBg: 'from-orange-500 to-amber-500',
  },
  kasratayn: {
    bg: 'bg-teal-100',
    border: 'border-teal-300',
    text: 'text-teal-600',
    headerBg: 'from-teal-500 to-cyan-500',
  },
  dammatayn: {
    bg: 'bg-violet-100',
    border: 'border-violet-300',
    text: 'text-violet-600',
    headerBg: 'from-violet-500 to-purple-500',
  },
}

interface WordCardProps {
  word: TanweenWord
}

function WordCard({ word }: WordCardProps) {
  const colors = tanweenColors[word.tanween]

  return (
    <div className={`${colors.bg} rounded-xl p-4 border-2 ${colors.border} text-center hover:shadow-md transition-shadow`}>
      <div
        dir="rtl"
        className="text-4xl md:text-5xl text-gray-800 mb-2"
        style={{ fontFamily: "'Scheherazade New', 'Amiri', 'Traditional Arabic', serif" }}
      >
        {word.arabic}
      </div>
      <div className={`text-lg font-bold ${colors.text}`}>{word.bangla}</div>
      <div className="text-sm text-gray-600 mt-1">{word.meaning}</div>
    </div>
  )
}

export default function TanweenWords() {
  return (
    <div className="space-y-10">
      {/* Fathatayn Section */}
      <div>
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-xl mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">ফাতহাতাইন (তানউইন ফাতহা)</h3>
              <p className="text-orange-100 text-sm">Fathatayn - Double Fatha</p>
            </div>
            <div className="text-right">
              <div
                className="text-4xl"
                style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
              >
                ـً
              </div>
              <div className="text-sm">= আন</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {fathataynWords.map((word, index) => (
            <WordCard key={index} word={word} />
          ))}
        </div>
      </div>

      {/* Kasratayn Section */}
      <div>
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-4 rounded-xl mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">কাসরাতাইন (তানউইন কাসরা)</h3>
              <p className="text-teal-100 text-sm">Kasratayn - Double Kasra</p>
            </div>
            <div className="text-right">
              <div
                className="text-4xl"
                style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
              >
                ـٍ
              </div>
              <div className="text-sm">= ইন</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {kasrataynWords.map((word, index) => (
            <WordCard key={index} word={word} />
          ))}
        </div>
      </div>

      {/* Dammatayn Section */}
      <div>
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white p-4 rounded-xl mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">দাম্মাতাইন (তানউইন দাম্মা)</h3>
              <p className="text-violet-100 text-sm">Dammatayn - Double Damma</p>
            </div>
            <div className="text-right">
              <div
                className="text-4xl"
                style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', serif" }}
              >
                ـٌ
              </div>
              <div className="text-sm">= উন</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {dammataynWords.map((word, index) => (
            <WordCard key={index} word={word} />
          ))}
        </div>
      </div>
    </div>
  )
}
