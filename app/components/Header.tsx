import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            30 Days Quran Learning
          </Link>
          <Link href="/lessons" className="hover:underline">
            Lessons
          </Link>
        </nav>
      </div>
    </header>
  )
}
