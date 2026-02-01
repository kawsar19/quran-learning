"use client";

import { useState, useEffect } from "react";

export default function CompleteLessonButton({ day }: { day: number }) {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      const user = JSON.parse(saved);
      if (user.completedDays?.includes(day)) {
        setCompleted(true);
      }
    }
  }, [day]);

  async function handleComplete() {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    try {
      const res = await fetch("/api/course/complete-day", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ day }),
      });

      if (res.ok) {
        setCompleted(true);
        // Update localStorage
        const saved = localStorage.getItem("user");
        if (saved) {
          const user = JSON.parse(saved);
          if (!user.completedDays) user.completedDays = [];
          if (!user.completedDays.includes(day)) {
            user.completedDays.push(day);
          }
          localStorage.setItem("user", JSON.stringify(user));
        }
        // Notify other components
        window.dispatchEvent(new Event("lesson-completed"));
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  if (completed) {
    return (
      <div className="flex items-center justify-center gap-2 py-4 px-6 bg-emerald-50 border border-emerald-200 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-emerald-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-bold text-emerald-700">
          পাঠ সম্পন্ন হয়েছে
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors disabled:opacity-50 active:scale-[0.98]"
    >
      {loading ? (
        <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
          পাঠ সম্পন্ন করুন
        </>
      )}
    </button>
  );
}
