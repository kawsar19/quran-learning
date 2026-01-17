import Link from 'next/link'

interface LessonNavigationProps {
  currentDay: number
  totalDays?: number
}

export default function LessonNavigation({ currentDay, totalDays = 30 }: LessonNavigationProps) {
  const hasPrevious = currentDay > 1
  const hasNext = currentDay < totalDays
  const progressPercentage = Math.round((currentDay / totalDays) * 100)

  return (
    <div className="py-3">
      {/* Main Navigation Row */}
      <div className="flex items-center justify-between gap-2">
        {/* Previous Button */}
        {hasPrevious ? (
          <Link
            href={`/lessons/day-${currentDay - 1}`}
            className="group flex items-center gap-2 px-3 py-2.5 md:px-4 md:py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-emerald-100 rounded-xl transition-all duration-200 border border-gray-200 hover:border-emerald-300 active:scale-95"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-gray-600 group-hover:text-white group-hover:-translate-x-0.5 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-[10px] md:text-xs text-gray-500 font-medium">আগের দিন</p>
              <p className="text-sm md:text-base font-bold text-gray-800 group-hover:text-emerald-700">Day {currentDay - 1}</p>
            </div>
          </Link>
        ) : (
          <div className="px-3 py-2.5 md:px-4 md:py-3 opacity-40">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
        )}

        {/* Center - Progress & All Lessons */}
        <div className="flex flex-col items-center gap-1.5">
          {/* Progress Circle */}
          <div className="relative">
            <svg className="w-12 h-12 md:w-14 md:h-14 transform -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="22"
                className="stroke-gray-200 fill-white"
                strokeWidth="4"
              />
              <circle
                cx="50%"
                cy="50%"
                r="22"
                className="stroke-emerald-500 fill-none transition-all duration-700 ease-out"
                strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 22}`}
                strokeDashoffset={`${2 * Math.PI * 22 * (1 - currentDay / totalDays)}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs md:text-sm font-black text-emerald-600">{currentDay}</span>
              <span className="text-[8px] md:text-[9px] text-gray-400 font-medium">/{totalDays}</span>
            </div>
          </div>

          {/* All Lessons Button */}
          <Link
            href="/lessons"
            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-[10px] md:text-xs font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-3.5 md:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            সব লেসন
          </Link>
        </div>

        {/* Next Button */}
        {hasNext ? (
          <Link
            href={`/lessons/day-${currentDay + 1}`}
            className="group flex items-center gap-2 px-3 py-2.5 md:px-4 md:py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            <div className="hidden sm:block text-right">
              <p className="text-[10px] md:text-xs text-emerald-100 font-medium">পরের দিন</p>
              <p className="text-sm md:text-base font-bold text-white">Day {currentDay + 1}</p>
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 text-white group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ) : (
          <div className="px-3 py-2.5 md:px-4 md:py-3 bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl border border-amber-300">
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-right">
                <p className="text-[10px] md:text-xs text-amber-600 font-medium">অভিনন্দন!</p>
                <p className="text-sm md:text-base font-bold text-amber-800">শেষ দিন</p>
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-amber-400 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar (Mobile friendly) */}
      <div className="mt-3 px-1">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-[10px] font-bold text-emerald-600 min-w-[32px] text-right">
            {progressPercentage}%
          </span>
        </div>
      </div>
    </div>
  )
}
