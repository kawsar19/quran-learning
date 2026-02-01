import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import GlobalSetting from "@/lib/models/GlobalSetting";
import { requireAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await requireAdmin(req);
    await dbConnect();

    const { day } = await req.json();
    if (!day || day < 1 || day > 30) {
      return NextResponse.json({ error: "Day must be between 1 and 30" }, { status: 400 });
    }

    const settings = await GlobalSetting.findOneAndUpdate(
      { key: "global_config" },
      { currentUnlockedDay: day },
      { upsert: true, new: true }
    );

    return NextResponse.json({
      message: `Day ${day} is now unlocked`,
      currentUnlockedDay: settings.currentUnlockedDay,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    const status = message === "Forbidden" ? 403 : message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
