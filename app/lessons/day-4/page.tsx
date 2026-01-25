import type { Metadata } from 'next'
import LessonLayout from '@/app/components/LessonLayout'
import SurahFatihaHover from '@/app/components/SurahFatihaHover'

export const metadata: Metadata = {
  title: 'Day 4 - Surah Al-Fatiha | 30 Days Quran Learning',
  description: 'Learn to read Surah Al-Fatiha with interactive letter identification. Day 4 of the 30 Days Quran Learning program.',
  openGraph: {
    title: 'Day 4 - Surah Al-Fatiha | 30 Days Quran Learning',
    description: 'Learn to read Surah Al-Fatiha with interactive letter identification. Day 4 of the 30 Days Quran Learning program.',
  },
}

export default function Day4Page() {
  return (
    <LessonLayout
      dayNumber={4}
      title=" সূরা আল-ফাতিহা"
      videoId="VIDEO_ID_HERE"
    >
      {/* Header */}
     {/* Instruction */}
      <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center mb-5">
        <p className="text-emerald-700 font-medium">
          হরফের উপর মাউস রাখুন — নাম দেখাবে
        </p>
      </div>

    

  
      {/* Interactive Surah */}
      <SurahFatihaHover />

   

     

    
    </LessonLayout>
  )
}
