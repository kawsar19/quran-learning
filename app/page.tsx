import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">30 Days Quran Learning</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the 30-day Quran learning program. Each day includes a written lesson and a video to guide your learning journey.
        </p>
        <Link
          href="/lessons"
          className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
        >
          Start Learning
        </Link>
      </div>
    </div>
  )
}
