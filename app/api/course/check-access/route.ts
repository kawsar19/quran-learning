import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import GlobalSetting from "@/lib/models/GlobalSetting";
import { requireAuth } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const user = await requireAuth(req);
    await dbConnect();

    const dayParam = req.nextUrl.searchParams.get("day");
    if (!dayParam) {
      return NextResponse.json({ error: "Day parameter required" }, { status: 400 });
    }
    const day = parseInt(dayParam);

    if (!user.hasPaid) {
      return NextResponse.json({ hasAccess: false, reason: "Payment required" });
    }

    if (user.accessExpiresAt && new Date() > user.accessExpiresAt) {
      return NextResponse.json({ hasAccess: false, reason: "Access expired" });
    }

    const settings = await GlobalSetting.findOne({ key: "global_config" });
    const currentUnlockedDay = settings?.currentUnlockedDay ?? 1;

    if (day > currentUnlockedDay) {
      return NextResponse.json({ hasAccess: false, reason: "Day not yet unlocked globally" });
    }

    if (day > 1 && !user.completedDays.includes(day - 1)) {
      return NextResponse.json({ hasAccess: false, reason: "Complete previous day first" });
    }

    return NextResponse.json({ hasAccess: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
