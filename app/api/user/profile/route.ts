import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import QuizResult from "@/lib/models/QuizResult";
import { requireAuth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const user = await requireAuth(req);
    await dbConnect();

    const quizResults = await QuizResult.find({ userId: user._id }).sort({ day: 1 });

    return NextResponse.json({
      user: {
        id: user._id,
        name: user.name,
        phoneNumber: user.phoneNumber,
        role: user.role,
        hasPaid: user.hasPaid,
        accessExpiresAt: user.accessExpiresAt,
        completedDays: user.completedDays,
      },
      quizResults,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
