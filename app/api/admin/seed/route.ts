import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function POST() {
  try {
    await dbConnect();

    const hashedPassword = await bcrypt.hash("111111", 10);

    const existing = await User.findOne({ email: "admin@gmail.com" });
    if (existing) {
      existing.password = hashedPassword;
      existing.role = "admin";
      await existing.save();
      return NextResponse.json({ message: "Admin password updated" });
    }

    await User.create({
      phoneNumber: "00000000000",
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
      hasPaid: true,
    });

    return NextResponse.json({ message: "Admin user created" });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
