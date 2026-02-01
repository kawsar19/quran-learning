import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber, name } = await req.json();
    if (!phoneNumber || !name) {
      return NextResponse.json({ error: "Phone number and name required" }, { status: 400 });
    }

    await dbConnect();

    const existing = await User.findOne({ phoneNumber });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const user = await User.create({ phoneNumber, name });
    const token = signToken(user._id.toString());

    return NextResponse.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        phoneNumber: user.phoneNumber,
        role: user.role,
        hasPaid: user.hasPaid,
        completedDays: user.completedDays,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
