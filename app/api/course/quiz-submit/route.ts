import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import QuizResult from "@/lib/models/QuizResult";
import User from "@/lib/models/User";
import { requireAuth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth(req);
    await dbConnect();

    const { day, totalQuestions, correctAnswers } = await req.json();
    if (!day || !totalQuestions || correctAnswers === undefined) {
      return NextResponse.json({ error: "day, totalQuestions, correctAnswers required" }, { status: 400 });
    }

    const result = await QuizResult.create({
      userId: user._id,
      day,
      totalQuestions,
      correctAnswers,
    });

    // Mark day as completed
    await User.findByIdAndUpdate(user._id, {
      $addToSet: { completedDays: day },
    });

    return NextResponse.json({
      message: `Day ${day} quiz submitted`,
      result,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
