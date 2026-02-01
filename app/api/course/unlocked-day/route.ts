import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import GlobalSetting from "@/lib/models/GlobalSetting";

export async function GET() {
  try {
    await dbConnect();
    const settings = await GlobalSetting.findOne({ key: "global_config" });
    return NextResponse.json({
      currentUnlockedDay: settings?.currentUnlockedDay ?? 1,
    });
  } catch {
    return NextResponse.json({ currentUnlockedDay: 1 });
  }
}
