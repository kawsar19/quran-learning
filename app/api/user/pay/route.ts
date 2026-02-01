import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";
import { requireAuth } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth(req);
    await dbConnect();

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 365);

    await User.findByIdAndUpdate(user._id, {
      hasPaid: true,
      accessExpiresAt: expiresAt,
    });

    return NextResponse.json({ message: "Payment successful", hasPaid: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
