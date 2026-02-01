import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";
import QuizResult from "@/lib/models/QuizResult";
import GlobalSetting from "@/lib/models/GlobalSetting";
import { requireAdmin } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    await requireAdmin(req);
    await dbConnect();

    const totalUsers = await User.countDocuments({ role: "user" });
    const paidUsers = await User.countDocuments({ role: "user", hasPaid: true });
    const totalQuizSubmissions = await QuizResult.countDocuments();

    const recentUsers = await User.find({ role: "user" })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name phoneNumber hasPaid createdAt completedDays");

    const settings = await GlobalSetting.findOne({ key: "global_config" });
    const currentUnlockedDay = settings?.currentUnlockedDay ?? 1;

    return NextResponse.json({
      totalUsers,
      paidUsers,
      totalQuizSubmissions,
      recentUsers,
      currentUnlockedDay,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    const status = message === "Forbidden" ? 403 : message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
