'use client'

import { useState, useRef } from 'react'

interface ArabicLetter {
  name: string
  audioUrl: string
  independent: string
  initial: string
  medial: string
  final: string
}

const arabicLetters: ArabicLetter[] = [
  { name: 'Alif', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/01-Aalif.mp3', independent: 'ا', initial: '—', medial: '—', final: 'ـا' },
  { name: 'Ba', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/02-baA.mp3', independent: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' },
  { name: 'Ta', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/03-taA.mp3', independent: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' },
  { name: 'Tha', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/04-thaA.mp3', independent: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' },
  { name: 'Jim', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/05-jiim.mp3', independent: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' },
  { name: 'Ha', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/06-HaA.mp3', independent: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' },
  { name: 'Kha', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/07-khaA.mp3', independent: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' },
  { name: 'Dal', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/08-daal.mp3', independent: 'د', initial: '—', medial: '—', final: 'ـد' },
  { name: 'Dhal', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/09-thaal.mp3', independent: 'ذ', initial: '—', medial: '—', final: 'ـذ' },
  { name: 'Ra', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/10-raaA.mp3', independent: 'ر', initial: '—', medial: '—', final: 'ـر' },
  { name: 'Zay', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/11-zayn.mp3', independent: 'ز', initial: '—', medial: '—', final: 'ـز' },
  { name: 'Sin', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/12-siin.mp3', independent: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' },
  { name: 'Shin', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/13-shiin.mp3', independent: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' },
  { name: 'Sad', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/14-Saad.mp3', independent: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' },
  { name: 'Dad', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/15-Daad.mp3', independent: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' },
  { name: 'Ta', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/16-TaaA.mp3', independent: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' },
  { name: 'Dha', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/17-THaaA.mp3', independent: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' },
  { name: 'Ayn', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/18-3ayn.mp3', independent: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' },
  { name: 'Ghayn', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/19-ghayn.mp3', independent: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' },
  { name: 'Fa', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/20-faaA.mp3', independent: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' },
  { name: 'Qaf', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/21-qaaf.mp3', independent: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' },
  { name: 'Kaf', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/22-kaaf.mp3', independent: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك' },
  { name: 'Lam', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/23-laam.mp3', independent: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' },
  { name: 'Mim', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/24-miim.mp3', independent: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' },
  { name: 'Nun', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/25-noon.mp3', independent: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' },
  { name: 'Ha', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/26-haaA.mp3', independent: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه' },
  { name: 'Waw', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/27-waaw.mp3', independent: 'و', initial: '—', medial: '—', final: 'ـو' },
  { name: 'Ya', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/28-yaaA.mp3', independent: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي' },
]

export default function ArabicAlphabetShapes() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSound = (audioUrl: string, index: number) => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    const audio = new Audio(audioUrl)
    audioRef.current = audio
    setPlayingIndex(index)

    audio.play().catch(console.error)
    audio.onended = () => setPlayingIndex(null)
  }

  return (
    <div className="space-y-6">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-visible rounded-2xl border border-gray-100 bg-white">
        <table className="w-full" dir='rtl'>
          <thead className="z-20">
            <tr className="text-white">
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-emerald-600 first:rounded-tr-2xl">মূল রূপ</th>
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-emerald-600">শুরুর রূপ</th>
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-teal-600">মাঝের রূপ</th>
              <th className="sticky top-[73px] z-20 px-4 py-5 text-center text-lg font-bold bg-teal-600 last:rounded-tl-2xl">শেষের রূপ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {arabicLetters.map((letter, index) => (
              <tr
                key={index}
                className={`transition-all duration-300 cursor-pointer ${
                  playingIndex === index
                    ? 'bg-emerald-100 scale-[1.01]'
                    : 'hover:bg-emerald-50'
                }`}
                onClick={() => playSound(letter.audioUrl, index)}
              >
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      playingIndex === index
                        ? 'bg-emerald-500 text-white shadow-lg scale-110'
                        : 'bg-gray-50 hover:bg-emerald-100 hover:shadow-md'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className="text-5xl">{letter.independent}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      letter.initial === '—'
                        ? 'bg-gray-100 text-gray-400'
                        : playingIndex === index
                          ? 'bg-teal-500 text-white shadow-lg scale-110'
                          : 'bg-gray-50 hover:bg-teal-100 hover:shadow-md'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className={letter.initial === '—' ? 'text-2xl' : 'text-5xl'}>{letter.initial}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      letter.medial === '—'
                        ? 'bg-gray-100 text-gray-400'
                        : playingIndex === index
                          ? 'bg-cyan-500 text-white shadow-lg scale-110'
                          : 'bg-gray-50 hover:bg-cyan-100 hover:shadow-md'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className={letter.medial === '—' ? 'text-2xl' : 'text-5xl'}>{letter.medial}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-xl transition-all duration-300 ${
                      playingIndex === index
                        ? 'bg-blue-500 text-white shadow-lg scale-110'
                        : 'bg-gray-50 hover:bg-blue-100 hover:shadow-md'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className="text-5xl">{letter.final}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {arabicLetters.map((letter, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer ${
              playingIndex === index ? 'ring-4 ring-emerald-400 scale-[1.02]' : ''
            }`}
            onClick={() => playSound(letter.audioUrl, index)}
          >
            {/* Letter Shapes Grid */}
            <div className="p-5">
              <div className="grid grid-cols-4 gap-3">
                {/* Independent */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">মূল রূপ</p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      playingIndex === index ? 'bg-emerald-500 text-white' : 'bg-emerald-50'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className="text-4xl">{letter.independent}</span>
                  </div>
                </div>

                {/* Initial */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">শুরুর রূপ</p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      letter.initial === '—'
                        ? 'bg-gray-100 text-gray-400'
                        : playingIndex === index
                          ? 'bg-teal-500 text-white'
                          : 'bg-teal-50'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className={letter.initial === '—' ? 'text-xl' : 'text-4xl'}>{letter.initial}</span>
                  </div>
                </div>

                {/* Medial */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">মাঝের রূপ</p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      letter.medial === '—'
                        ? 'bg-gray-100 text-gray-400'
                        : playingIndex === index
                          ? 'bg-cyan-500 text-white'
                          : 'bg-cyan-50'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className={letter.medial === '—' ? 'text-xl' : 'text-4xl'}>{letter.medial}</span>
                  </div>
                </div>

                {/* Final */}
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">শেষের রূপ</p>
                  <div
                    className={`h-20 rounded-xl flex items-center justify-center transition-all ${
                      playingIndex === index ? 'bg-blue-500 text-white' : 'bg-blue-50'
                    }`}
                    style={{ fontFamily: "'Scheherazade New', 'Traditional Arabic', Arial, sans-serif" }}
                  >
                    <span className="text-4xl">{letter.final}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}