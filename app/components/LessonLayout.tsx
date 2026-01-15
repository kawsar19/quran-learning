import LessonNavigation from './LessonNavigation'
import VideoPlayer from './VideoPlayer'

interface LessonLayoutProps {
  dayNumber: number
  title: string
  videoId: string
  children: React.ReactNode
}

export default function LessonLayout({ dayNumber, title, videoId, children }: LessonLayoutProps) {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-8">
        <p className="text-emerald-600 font-medium mb-2">Day {dayNumber}</p>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </header>

      <section className="mb-8">
        <VideoPlayer videoId={videoId} title={`Day ${dayNumber}: ${title}`} />
      </section>

      <section className="prose prose-lg max-w-none">
        {children}
      </section>

      <LessonNavigation currentDay={dayNumber} />
    </article>
  )
}
