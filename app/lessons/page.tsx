import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Lessons - 30 Days Quran Learning',
  description: 'Browse all 30 days of Quran learning lessons',
}

const days = Array.from({ length: 30 }, (_, i) => i + 1)

export default function LessonsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Lessons</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {days.map((day) => (
          <Link
            key={day}
            href={`/lessons/day-${day}`}
            className="block p-4 bg-white border border-gray-200 rounded-lg text-center hover:border-emerald-500 hover:shadow-md transition-all"
          >
            <span className="text-sm text-gray-500">Day</span>
            <span className="block text-2xl font-bold text-emerald-600">{day}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
