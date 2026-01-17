
'use client'
import { useState, useRef, useEffect } from 'react'

const arabicLetters = [
  { letter: 'ا', name: 'Alif', bnName: 'আলিফ', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/01-Aalif.mp3' },
  { letter: 'ب', name: 'Ba', bnName: 'বা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/02-baA.mp3' },
  { letter: 'ت', name: 'Ta', bnName: 'তা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/03-taA.mp3' },
  { letter: 'ث', name: 'Tha', bnName: 'ছা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/04-thaA.mp3' },
  { letter: 'ج', name: 'Jim', bnName: 'জীম', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/05-jiim.mp3' },
  { letter: 'ح', name: 'Ha', bnName: 'হা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/06-HaA.mp3' },
  { letter: 'خ', name: 'Kha', bnName: 'খা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/07-khaA.mp3' },
  { letter: 'د', name: 'Dal', bnName: 'দাল', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/08-daal.mp3' },
  { letter: 'ذ', name: 'Dhal', bnName: 'যাল', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/09-thaal.mp3' },
  { letter: 'ر', name: 'Ra', bnName: 'র', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/10-raaA.mp3' },
  { letter: 'ز', name: 'Zay', bnName: 'ঝা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/11-zayn.mp3' },
  { letter: 'س', name: 'Sin', bnName: 'সীন', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/12-siin.mp3' },
  { letter: 'ش', name: 'Shin', bnName: 'শীন', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/13-shiin.mp3' },
  { letter: 'ص', name: 'Sad', bnName: 'সোয়াদ', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/14-Saad.mp3' },
  { letter: 'ض', name: 'Dad', bnName: 'দোয়াদ', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/15-Daad.mp3' },
  { letter: 'ط', name: 'Ta', bnName: 'তয়া', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/16-TaaA.mp3' },
  { letter: 'ظ', name: 'Za', bnName: 'জয়া', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/17-THaaA.mp3' },
  { letter: 'ع', name: 'Ayn', bnName: 'আইন', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/18-3ayn.mp3' },
  { letter: 'غ', name: 'Ghayn', bnName: 'গাইন', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/19-ghayn.mp3' },
  { letter: 'ف', name: 'Fa', bnName: 'ফা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/20-faaA.mp3' },
  { letter: 'ق', name: 'Qaf', bnName: 'ক্বফ', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/21-qaaf.mp3' },
  { letter: 'ك', name: 'Kaf', bnName: 'কাফ', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/22-kaaf.mp3' },
  { letter: 'ل', name: 'Lam', bnName: 'লাম', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/23-laam.mp3' },
  { letter: 'م', name: 'Mim', bnName: 'মীম', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/24-miim.mp3' },
  { letter: 'ن', name: 'Nun', bnName: 'নুন', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/25-noon.mp3' },
  { letter: 'ه', name: 'Ha', bnName: 'হা', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/26-haaA.mp3' },
  { letter: 'و', name: 'Waw', bnName: 'ওয়াও', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/27-waaw.mp3' },
  { letter: 'ي', name: 'Ya', bnName: 'ইয়া', audioUrl: 'https://www.lebanesearabicinstitute.com/wp-content/uploads/2017/02/28-yaaA.mp3' },
]

export default function ArabicAlphabetTable() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playAudio = (audioUrl: string, index: number) => {
    // If clicking the same letter that is playing, stop it
    if (activeIndex === index && audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setActiveIndex(null)
      return
    }

    // Stop previous audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    setActiveIndex(index)
    audioRef.current = new Audio(audioUrl)
    audioRef.current.play().catch(error => {
      console.error("Audio playback failed:", error)
      setActiveIndex(null)
    })
    
    audioRef.current.onended = () => {
      setActiveIndex(null)
    }
  }

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative group">
        {/* Modern decorative glass background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden">
          {/* Header section of the table */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 p-6 text-white flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold">The Alphabet Grid</h3>
              <p className="text-emerald-100 text-sm">Click any letter to hear its pronunciation</p>
            </div>
            <div className="hidden sm:block">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
                28 Letters
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-7 gap-3 sm:gap-4" dir="rtl">
              {arabicLetters.map((item, index) => (
                <button
                  key={index}
                  onClick={() => playAudio(item.audioUrl, index)}
                  className={`
                    group/letter
                    relative aspect-square
                    flex flex-col items-center justify-center
                    rounded-xl border-2 transition-all duration-300
                    ${activeIndex === index 
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105 z-10' 
                      : 'bg-white border-emerald-50 text-gray-800 hover:border-emerald-300 hover:shadow-md hover:-translate-y-1'
                    }
                  `}
                >
                  <span className={`
                    arabic text-4xl sm:text-5xl md:text-6xl mb-1
                    transition-transform duration-300
                    ${activeIndex === index ? 'scale-110' : 'group-hover/letter:scale-105'}
                  `}>
                    {item.letter}
                  </span>
                  
                  {/* Name labels */}
                  <div className={`
                    flex flex-col items-center
                    transition-opacity duration-300
                    ${activeIndex === index ? 'opacity-100' : 'opacity-60 group-hover/letter:opacity-100'}
                  `}>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium opacity-80">
                      {item.bnName}
                    </span>
                  </div>

                  {/* Audio indicator icon (subtle) */}
                  {activeIndex === index && (
                    <div className="absolute top-2 left-2 flex gap-0.5">
                      <div className="w-1 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend / Tips */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 flex items-start gap-3">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-700">💡</div>
          <div>
            <h4 className="font-semibold text-amber-900 text-sm italic">Pro Tip</h4>
            <p className="text-amber-800 text-xs">Arabic is read from <strong>Right to Left</strong>. Start from the top right letter Alif (ا).</p>
          </div>
        </div>
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex items-start gap-3">
          <div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">🔊</div>
          <div>
            <h4 className="font-semibold text-emerald-900 text-sm">Audio Support</h4>
            <p className="text-emerald-800 text-xs">If audio doesn't play, ensure your volume is up and wait for the file to load.</p>
          </div>
        </div>
      </div>
    </div>
  )
}