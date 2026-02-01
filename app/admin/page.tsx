"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  _id: string;
  name: string;
  phoneNumber: string;
  hasPaid: boolean;
  completedDays: number[];
  createdAt: string;
}

interface Stats {
  totalUsers: number;
  paidUsers: number;
  totalQuizSubmissions: number;
  recentUsers: User[];
  currentUnlockedDay: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [tab, setTab] = useState<"overview" | "users" | "days">("overview");
  const [unlocking, setUnlocking] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchData(token);
  }, [router]);

  async function fetchData(token: string) {
    try {
      const [statsRes, usersRes] = await Promise.all([
        fetch("/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("/api/admin/users", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (statsRes.status === 401 || usersRes.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        router.push("/admin/login");
        return;
      }

      const statsData = await statsRes.json();
      const usersData = await usersRes.json();

      setStats(statsData);
      setUsers(usersData.users || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    router.push("/admin/login");
  }

  async function handleUnlockDay(day: number) {
    const token = localStorage.getItem("adminToken");
    if (!token) return;
    setUnlocking(true);
    try {
      const res = await fetch("/api/admin/unlock-day", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ day }),
      });
      if (res.ok && stats) {
        setStats({ ...stats, currentUnlockedDay: day });
      }
    } catch {
      // ignore
    } finally {
      setUnlocking(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setTab("overview")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === "overview"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setTab("users")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === "users"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Users ({users.length})
          </button>
          <button
            onClick={() => setTab("days")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              tab === "days"
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Days Control
          </button>
        </div>

        {tab === "overview" && stats && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-3xl font-bold text-gray-800">
                  {stats.totalUsers}
                </div>
                <div className="text-sm text-gray-500 mt-1">Total Users</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-3xl font-bold text-emerald-600">
                  {stats.paidUsers}
                </div>
                <div className="text-sm text-gray-500 mt-1">Paid Users</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-3xl font-bold text-blue-600">
                  {stats.totalQuizSubmissions}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Quiz Submissions
                </div>
              </div>
            </div>

            {/* Recent Users */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Users
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-2 font-medium">Name</th>
                      <th className="pb-2 font-medium">Phone</th>
                      <th className="pb-2 font-medium">Paid</th>
                      <th className="pb-2 font-medium">Progress</th>
                      <th className="pb-2 font-medium">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentUsers.map((u) => (
                      <tr key={u._id} className="border-b last:border-0">
                        <td className="py-3 text-gray-800">
                          {u.name || "—"}
                        </td>
                        <td className="py-3 text-gray-600">{u.phoneNumber}</td>
                        <td className="py-3">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                              u.hasPaid
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {u.hasPaid ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="py-3 text-gray-600">
                          {u.completedDays?.length || 0}/30
                        </td>
                        <td className="py-3 text-gray-400">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {tab === "days" && stats && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Days Control
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Currently unlocked up to: <span className="font-bold text-emerald-600">Day {stats.currentUnlockedDay}</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-3">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                const isUnlocked = day <= stats.currentUnlockedDay;
                return (
                  <button
                    key={day}
                    disabled={unlocking}
                    onClick={() => handleUnlockDay(isUnlocked && day !== 1 ? day - 1 : day)}
                    className={`relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all disabled:opacity-50 ${
                      isUnlocked
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {isUnlocked && (
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                    <span className={`text-lg font-bold ${isUnlocked ? "text-emerald-700" : "text-gray-400"}`}>
                      {day}
                    </span>
                    <span className={`text-[10px] ${isUnlocked ? "text-emerald-500" : "text-gray-300"}`}>
                      {isUnlocked ? "Unlocked" : "Locked"}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Click a locked day to unlock up to that day. Click an unlocked day to lock it.
            </p>
          </div>
        )}

        {tab === "users" && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              All Users
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b">
                    <th className="pb-2 font-medium">Name</th>
                    <th className="pb-2 font-medium">Phone</th>
                    <th className="pb-2 font-medium">Paid</th>
                    <th className="pb-2 font-medium">Progress</th>
                    <th className="pb-2 font-medium">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u._id} className="border-b last:border-0">
                      <td className="py-3 text-gray-800">{u.name || "—"}</td>
                      <td className="py-3 text-gray-600">{u.phoneNumber}</td>
                      <td className="py-3">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            u.hasPaid
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {u.hasPaid ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="py-3 text-gray-600">
                        {u.completedDays?.length || 0}/30
                      </td>
                      <td className="py-3 text-gray-400">
                        {new Date(u.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-8 text-center text-gray-400"
                      >
                        No users yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
