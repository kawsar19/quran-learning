import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span className="text-lg font-bold text-emerald-700">Baytul Quran</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-emerald-600 transition-colors">হোম</Link>
            <Link href="/lessons" className="hover:text-emerald-600 transition-colors">কোর্সসমূহ</Link>
            <Link href="#mentors" className="hover:text-emerald-600 transition-colors">মেন্টর</Link>
            <Link href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</Link>
          </div>
          <Link
            href="/lessons"
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
          >
            ভর্তি হোন
          </Link>
        </nav>
      </div>
    </header>
  )
}
