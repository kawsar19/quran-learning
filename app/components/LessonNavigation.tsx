import Link from 'next/link'

interface LessonNavigationProps {
  currentDay: number
  totalDays?: number
}

export default function LessonNavigation({ currentDay, totalDays = 30 }: LessonNavigationProps) {
  const hasPrevious = currentDay > 1
  const hasNext = currentDay < totalDays

  return (
    <nav className="flex items-center justify-between py-6 border-t border-gray-200 mt-8">
      <div>
        {hasPrevious ? (
          <Link
            href={`/lessons/day-${currentDay - 1}`}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            &larr; Day {currentDay - 1}
          </Link>
        ) : (
          <span className="text-gray-300">&larr; Previous</span>
        )}
      </div>

      <Link
        href="/lessons"
        className="text-gray-600 hover:text-gray-800 font-medium"
      >
        All Lessons
      </Link>

      <div>
        {hasNext ? (
          <Link
            href={`/lessons/day-${currentDay + 1}`}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Day {currentDay + 1} &rarr;
          </Link>
        ) : (
          <span className="text-gray-300">Next &rarr;</span>
        )}
      </div>
    </nav>
  )
}
