'use client'

import { useRef, useCallback, useEffect } from 'react'

const AUDIO_SRC = '/audios/Arabic 1.m4a'

const LETTER_AUDIO: Record<string, { start: number; end: number }> = {
  ا: { start: 2, end: 3 },
  ب: { start: 3.5, end: 4.7 },
  ت: { start: 5, end: 6.8 },
  ث: { start: 6.8, end: 8.7 },
  ج: { start: 8.7, end: 10.5 },
  ح: { start: 10.6, end: 12.6 },
  خ: { start: 12.7, end: 14.6 },
  د: { start: 14.7, end: 16.6 },
  ذ: { start: 16.7, end: 18.6 },
  ر: { start: 18.7, end: 20.6 },
  ز: { start: 20.7, end: 22.6 },
  س: { start: 22.7, end: 24.6 },
  ش: { start: 24.7, end: 26.6 },
  ص: { start: 27, end: 30 },
  ض: { start: 30, end: 32.5 },
  ط: { start: 32.5, end: 34.5 },
  ظ: { start: 34.5, end: 36.5 },
  ع: { start: 36.5, end: 39 },
  غ: { start: 39, end: 42.5 },
  ف: { start: 42.5, end: 44.5 },
  ق: { start: 44.5, end: 47 },
  ك: { start: 47.2, end: 49 },
  ل: { start: 49, end: 52 },
  م: { start: 52, end: 55 },
  ن: { start: 55, end: 57 },
  ه: { start: 59.5, end: 62.5 },
  و: { start: 57.5, end: 59.7 },
  ي: { start: 66, end: 69 },
}

export default function SurahFatihaHover() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const playLetter = useCallback((letter: string) => {
    const seg = LETTER_AUDIO[letter]
    if (!seg) return

    if (audioRef.current) audioRef.current.pause()
    if (timerRef.current) clearTimeout(timerRef.current)

    if (!audioRef.current) {
      audioRef.current = new Audio(AUDIO_SRC)
    }
    const audio = audioRef.current
    audio.currentTime = seg.start
    audio.play().catch(console.error)

    timerRef.current = setTimeout(() => {
      audio.pause()
    }, (seg.end - seg.start) * 1000)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('haraf')) {
        const letter = target.textContent?.trim()
        if (letter) playLetter(letter)
      }
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
      if (audioRef.current) audioRef.current.pause()
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [playLetter])
  return (
    <div className="space-y-6">
      {/* Bismillah */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl shadow-lg p-8 text-center border-2 border-amber-200">
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="বা">ب</span><span className="haraf" data-name="সীন">س</span><span className="haraf" data-name="মীম">م</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="হা">ه</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="রা">ر</span><span className="haraf" data-name="হা">ح</span><span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="নূন">ن</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="রা">ر</span><span className="haraf" data-name="হা">ح</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="মীম">م</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">পরম করুণাময় অসীম দয়ালু আল্লাহর নামে</p>
      </div>

      {/* Ayah 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
        <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">আয়াত ১</span>
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="হা">ح</span><span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="দাল">د</span>
          <span> </span>
          <span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="হা">ه</span>
          <span> </span>
          <span className="haraf" data-name="রা">ر</span><span className="haraf" data-name="বা">ب</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="আইন">ع</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="নূন">ن</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">সমস্ত প্রশংসা আল্লাহর জন্য, যিনি সৃষ্টিকুলের রব</p>
      </div>

      {/* Ayah 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
        <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">আয়াত ২</span>
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="রা">ر</span><span className="haraf" data-name="হা">ح</span><span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="নূন">ن</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="রা">ر</span><span className="haraf" data-name="হা">ح</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="মীম">م</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">পরম করুণাময়, অসীম দয়ালু</p>
      </div>

      {/* Ayah 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
        <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">আয়াত ৩</span>
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="কাফ">ك</span>
          <span> </span>
          <span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="ওয়াও">و</span><span className="haraf" data-name="মীম">م</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="দাল">د</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="নূন">ن</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">বিচার দিনের মালিক</p>
      </div>

      {/* Ayah 4 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
        <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">আয়াত ৪</span>
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="কাফ">ك</span>
          <span> </span>
          <span className="haraf" data-name="নূন">ن</span><span className="haraf" data-name="আইন">ع</span><span className="haraf" data-name="বা">ب</span><span className="haraf" data-name="দাল">د</span>
          <span> </span>
          <span className="haraf" data-name="ওয়াও">و</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="কাফ">ك</span>
          <span> </span>
          <span className="haraf" data-name="নূন">ن</span><span className="haraf" data-name="সীন">س</span><span className="haraf" data-name="তা">ت</span><span className="haraf" data-name="আইন">ع</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="নূন">ن</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">আমরা শুধু তোমারই ইবাদত করি এবং শুধু তোমারই কাছে সাহায্য চাই</p>
      </div>

      {/* Ayah 5 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
        <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">আয়াত ৫</span>
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="হা">ه</span><span className="haraf" data-name="দাল">د</span><span className="haraf" data-name="নূন">ن</span><span className="haraf" data-name="আলিফ">ا</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="সাদ">ص</span><span className="haraf" data-name="রা">ر</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="ত্বা">ط</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="সীন">س</span><span className="haraf" data-name="তা">ت</span><span className="haraf" data-name="ক্বফ">ق</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="মীম">م</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">আমাদের সরল পথে পরিচালিত করো</p>
      </div>

      {/* Ayah 6 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
        <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">আয়াত ৬</span>
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="সাদ">ص</span><span className="haraf" data-name="রা">ر</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="ত্বা">ط</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="যাল">ذ</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="নূন">ن</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="নূন">ن</span><span className="haraf" data-name="আইন">ع</span><span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="তা">ت</span>
          <span> </span>
          <span className="haraf" data-name="আইন">ع</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="হা">ه</span><span className="haraf" data-name="মীম">م</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">তাদের পথে যাদের তুমি অনুগ্রহ করেছ</p>
      </div>

      {/* Ayah 7 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
        <span className="bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4 inline-block">আয়াত ৭</span>
        <div dir="rtl" className="arabic">
          <span className="haraf" data-name="গাইন">غ</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="রা">ر</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="মীম">م</span><span className="haraf" data-name="গাইন">غ</span><span className="haraf" data-name="দাদ">ض</span><span className="haraf" data-name="ওয়াও">و</span><span className="haraf" data-name="বা">ب</span>
          <span> </span>
          <span className="haraf" data-name="আইন">ع</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="হা">ه</span><span className="haraf" data-name="মীম">م</span>
          <span> </span>
          <span className="haraf" data-name="ওয়াও">و</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="আলিফ">ا</span>
          <span> </span>
          <span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="দাদ">ض</span><span className="haraf" data-name="আলিফ">ا</span><span className="haraf" data-name="লাম">ل</span><span className="haraf" data-name="ইয়া">ي</span><span className="haraf" data-name="নূন">ن</span>
        </div>
        <p className="text-gray-600 text-sm mt-4">তাদের পথে নয় যাদের উপর গজব পড়েছে এবং যারা পথভ্রষ্ট</p>
      </div>

   
    </div>
  )
}
