import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Otp from "@/lib/models/Otp";
import User from "@/lib/models/User";
import { signToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber, otp } = await req.json();
    if (!phoneNumber || !otp) {
      return NextResponse.json({ error: "Phone number and OTP required" }, { status: 400 });
    }

    await dbConnect();

    // Test bypass: "0000" always accepted
    if (otp !== "0000") {
      const otpRecord = await Otp.findOne({ phoneNumber, otp });
      if (!otpRecord) {
        return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 401 });
      }
    }

    await Otp.deleteMany({ phoneNumber });

    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      const token = signToken(existingUser._id.toString());
      return NextResponse.json({
        token,
        user: {
          id: existingUser._id,
          name: existingUser.name,
          phoneNumber: existingUser.phoneNumber,
          role: existingUser.role,
          hasPaid: existingUser.hasPaid,
          completedDays: existingUser.completedDays,
        },
      });
    }

    // User does not exist — need registration
    return NextResponse.json({
      registrationRequired: true,
      phoneNumber,
    });
  } catch (error) {
    console.error("OTP verify error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
