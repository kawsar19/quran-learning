"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PaymentGateProps {
  children: React.ReactNode;
}

export default function PaymentGate({ children }: PaymentGateProps) {
  const [status, setStatus] = useState<
    "loading" | "no-auth" | "not-paid" | "paid"
  >("loading");
  const [paying, setPaying] = useState(false);
  const [amount, setAmount] = useState<number>(10);
  const router = useRouter();

  useEffect(() => {
    checkAccess();
  }, []);

  async function checkAccess() {
    const token = localStorage.getItem("token");
    if (!token) {
      setStatus("no-auth");
      return;
    }

    try {
      const res = await fetch("/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        setStatus("no-auth");
        return;
      }

      const data = await res.json();
      setStatus(data.user.hasPaid ? "paid" : "not-paid");

      // Sync localStorage user data
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        parsed.hasPaid = data.user.hasPaid;
        parsed.completedDays = data.user.completedDays;
        localStorage.setItem("user", JSON.stringify(parsed));
      }
    } catch {
      setStatus("no-auth");
    }
  }

  async function handlePay() {
    setPaying(true);
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("/api/payment/init", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        // Redirect to SSLCommerz payment gateway
        window.location.href = data.url;
        return;
      }
    } catch {
      // ignore
    } finally {
      setPaying(false);
    }
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <span className="inline-block w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          <p className="mt-3 text-gray-500 text-sm">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (status === "no-auth") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            লগইন প্রয়োজন
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            কোর্সে প্রবেশ করতে প্রথমে লগইন করুন
          </p>
          <Link
            href="/login"
            className="inline-block w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
          >
            লগইন করুন
          </Link>
          <Link
            href="/"
            className="block mt-3 text-sm text-gray-400 hover:text-emerald-600"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  if (status === "not-paid") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            কোর্সে ভর্তি হোন
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            সকল পাঠ ও কুইজে প্রবেশ করতে কোর্সে ভর্তি হোন
          </p>



          <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">&#10003;</span> ৩০ দিনের ভিডিও
              লেসন
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500">&#10003;</span> প্রতিটি দিনে
              কুইজ
            </li>

            <li className="flex items-center gap-2">
              <span className="text-emerald-500">&#10003;</span> আজীবন এক্সেস
            </li>
          </ul>

          <button
            onClick={handlePay}
            disabled={paying || amount < 10}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {paying ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "এখনই ভর্তি হোন"
            )}
          </button>

          <Link
            href="/"
            className="block mt-3 text-sm text-gray-400 hover:text-emerald-600"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
