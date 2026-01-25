import LessonNavigation from "./LessonNavigation";
import VideoPlayer from "./VideoPlayer";

interface LessonLayoutProps {
  dayNumber: number;
  title: string;
  videoId?: string;
  loomId?: string;
  jumpshareId?: string;
  children: React.ReactNode;
}

export default function LessonLayout({
  dayNumber,
  title,
  videoId,
  loomId,
  jumpshareId,
  children,
}: LessonLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 max-w-4xl">
          <p className="text-emerald-600 font-medium text-sm">
            Day {dayNumber}
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            {title}
          </h1>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1">
        <article className="container mx-auto px-4 py-6 max-w-4xl">
          <section className="mb-8">
            <VideoPlayer
              videoId={videoId}
              loomId={loomId}
              jumpshareId={jumpshareId}
              title={`Day ${dayNumber}: ${title}`}
            />
          </section>

          <section className="prose prose-lg max-w-none">{children}</section>
        </article>
      </main>

      {/* Sticky Navigation */}
      <nav className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <LessonNavigation currentDay={dayNumber} />
        </div>
      </nav>
    </div>
  );
}
