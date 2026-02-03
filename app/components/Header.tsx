"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  function loadUser() {
    const saved = localStorage.getItem("user");
    setUser(saved ? JSON.parse(saved) : null);
  }

  useEffect(() => {
    loadUser();
    window.addEventListener("auth-change", loadUser);
    return () => window.removeEventListener("auth-change", loadUser);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("auth-change"));
    setShowMenu(false);
    router.push("/");
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🕌</span>
            <span className="text-lg font-bold text-primary">easyQuran.bd</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
            <Link href="/" className="hover:text-primary transition-colors">হোম</Link>
            <Link href="/lessons" className="hover:text-primary transition-colors">কোর্সসমূহ</Link>
            <Link href="#mentor" className="hover:text-primary transition-colors">মেন্টর</Link>
            <Link href="#hadiya" className="hover:text-primary transition-colors">হাদিয়া</Link>
          </div>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                <span className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <span className="hidden sm:inline max-w-[100px] truncate">{user.name}</span>
              </button>

              {showMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border z-50 py-2">
                    <Link
                      href="/profile"
                      onClick={() => setShowMenu(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5"
                    >
                      প্রোফাইল
                    </Link>
                    <Link
                      href="/lessons"
                      onClick={() => setShowMenu(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5"
                    >
                      আমার কোর্স
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      লগআউট
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              লগইন
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
