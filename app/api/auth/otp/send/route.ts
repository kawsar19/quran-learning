import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Otp from "@/lib/models/Otp";
import { sendOtpSms } from "@/lib/sms";

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber } = await req.json();
    if (!phoneNumber) {
      return NextResponse.json({ error: "Phone number required" }, { status: 400 });
    }

    await dbConnect();

    // Rate limit: block if OTP was sent within the last 5 minutes
    const recentOtp = await Otp.findOne({ phoneNumber }).sort({ createdAt: -1 });
    if (recentOtp) {
      const elapsed = Date.now() - new Date(recentOtp.createdAt).getTime();
      const cooldown = 5 * 60 * 1000; // 5 minutes
      if (elapsed < cooldown) {
        const remaining = Math.ceil((cooldown - elapsed) / 1000);
        return NextResponse.json(
          { error: `Please wait ${remaining} seconds before requesting another OTP` },
          { status: 429 }
        );
      }
    }

    // Delete any existing OTPs for this number
    await Otp.deleteMany({ phoneNumber });

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    await Otp.create({ phoneNumber, otp });

    const sent = await sendOtpSms(phoneNumber, otp);
    if (!sent) {
      return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
    }

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("OTP send error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
