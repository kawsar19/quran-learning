import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";
import { requireAuth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth(req);
    await dbConnect();

    const { day } = await req.json();
    if (!day || day < 1 || day > 30) {
      return NextResponse.json(
        { error: "Day must be between 1 and 30" },
        { status: 400 }
      );
    }

    await User.findByIdAndUpdate(user._id, {
      $addToSet: { completedDays: day },
    });

    return NextResponse.json({ message: `Day ${day} completed` });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
