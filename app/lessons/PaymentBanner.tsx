"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PaymentBanner() {
  const searchParams = useSearchParams();
  const payment = searchParams.get("payment");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (payment) setVisible(true);
  }, [payment]);

  if (!visible || !payment) return null;

  const config: Record<string, { bg: string; text: string; message: string }> = {
    success: {
      bg: "bg-emerald-50 border-emerald-200",
      text: "text-emerald-800",
      message: "পেমেন্ট সফল হয়েছে! এখন সকল পাঠ দেখতে পারবেন।",
    },
    fail: {
      bg: "bg-red-50 border-red-200",
      text: "text-red-800",
      message: "পেমেন্ট ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",
    },
    cancel: {
      bg: "bg-yellow-50 border-yellow-200",
      text: "text-yellow-800",
      message: "পেমেন্ট বাতিল করা হয়েছে।",
    },
  };

  const c = config[payment];
  if (!c) return null;

  return (
    <div className={`border rounded-xl px-4 py-3 mb-4 flex items-center justify-between ${c.bg}`}>
      <p className={`text-sm font-medium ${c.text}`}>{c.message}</p>
      <button
        onClick={() => setVisible(false)}
        className={`text-lg leading-none ${c.text} opacity-60 hover:opacity-100`}
      >
        &times;
      </button>
    </div>
  );
}
