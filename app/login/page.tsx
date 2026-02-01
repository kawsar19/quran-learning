"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp" | "register">("phone");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifiedPhone, setVerifiedPhone] = useState("");
  const router = useRouter();

  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "OTP পাঠাতে সমস্যা হয়েছে");
        return;
      }

      setVerifiedPhone(phoneNumber);
      setStep("otp");
    } catch {
      setError("সার্ভারে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: verifiedPhone, otp }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "OTP যাচাই ব্যর্থ হয়েছে");
        return;
      }

      if (data.registrationRequired) {
        setStep("register");
        return;
      }

      // Existing user — login
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("auth-change"));
      router.push("/lessons");
    } catch {
      setError("সার্ভারে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: verifiedPhone, name }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.dispatchEvent(new Event("auth-change"));
      router.push("/lessons");
    } catch {
      setError("সার্ভারে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-4xl">🕌</span>
            <span className="text-2xl font-bold text-emerald-700">
              Baytul Quran
            </span>
          </Link>
          <p className="text-gray-500 mt-2">৩০ দিনে কোরআন শিক্ষা কোর্স</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Step: Phone Number */}
          {step === "phone" && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                লগইন / রেজিস্ট্রেশন
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                আপনার মোবাইল নম্বর দিন, আমরা একটি OTP পাঠাবো
              </p>

              <form onSubmit={handleSendOtp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  মোবাইল নম্বর
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <span className="text-gray-400 text-lg">🇧🇩</span>
                    <span className="text-gray-500 ml-1 text-sm">+88</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-lg tracking-wider"
                    required
                    maxLength={11}
                    pattern="01[3-9][0-9]{8}"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  উদাহরণ: 01712345678
                </p>

                {error && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || phoneNumber.length < 11}
                  className="w-full mt-5 bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "OTP পাঠান"
                  )}
                </button>
              </form>
            </>
          )}

          {/* Step: OTP Verification */}
          {step === "otp" && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                OTP যাচাই করুন
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                <span className="font-medium text-gray-700">
                  {verifiedPhone}
                </span>{" "}
                নম্বরে পাঠানো 4 সংখ্যার কোড দিন
              </p>

              <form onSubmit={handleVerifyOtp}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  OTP কোড
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="4 সংখ্যার কোড"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-center text-2xl tracking-[0.5em] font-mono"
                  required
                  maxLength={4}
                  autoFocus
                />

                {error && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || otp.length < 4}
                  className="w-full mt-5 bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "যাচাই করুন"
                  )}
                </button>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setStep("phone");
                      setOtp("");
                      setError("");
                    }}
                    className="text-emerald-600 hover:underline"
                  >
                    নম্বর পরিবর্তন করুন
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      handleSendOtp({
                        preventDefault: () => {},
                      } as React.FormEvent)
                    }
                    className="text-gray-500 hover:text-emerald-600"
                  >
                    আবার OTP পাঠান
                  </button>
                </div>
              </form>
            </>
          )}

          {/* Step: Registration */}
          {step === "register" && (
            <>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                তথ্য সম্পূর্ণ করুন
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                আপনার নাম লিখুন, এটি প্রথমবার লগইন
              </p>

              <form onSubmit={handleRegister}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  আপনার নাম
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="সম্পূর্ণ নাম লিখুন"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-lg"
                  required
                  autoFocus
                />

                <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm">
                  মোবাইল: <span className="font-medium">{verifiedPhone}</span>
                </div>

                {error && (
                  <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || !name.trim()}
                  className="w-full mt-5 bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "রেজিস্ট্রেশন সম্পন্ন করুন"
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Footer text */}
        <p className="text-center text-xs text-gray-400 mt-6">
          লগইন করে আপনি আমাদের সেবার শর্তাবলী মেনে নিচ্ছেন
        </p>
      </div>
    </div>
  );
}
