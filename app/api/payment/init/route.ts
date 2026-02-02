import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Transaction from "@/lib/models/Transaction";
import { requireAuth } from "@/lib/auth";

const store_id = process.env.SSLCOMMERZ_STORE_ID!;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD!;
const is_live = process.env.SSLCOMMERZ_IS_LIVE === "true";

export async function POST(req: NextRequest) {
  try {
    const user = await requireAuth(req);
    await dbConnect();

    const { amount } = await req.json();

    if (!amount || amount < 10) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    const tran_id = `QURAN_${user._id}_${Date.now()}`;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const formData = new URLSearchParams({
      store_id,
      store_passwd,
      total_amount: String(amount),
      currency: "BDT",
      tran_id,
      success_url: `${baseUrl}/api/payment/callback`,
      fail_url: `${baseUrl}/api/payment/callback`,
      cancel_url: `${baseUrl}/api/payment/callback`,
      ipn_url: `${baseUrl}/api/payment/callback`,
      shipping_method: "NO",
      product_name: "30 Days Quran Learning Course",
      product_category: "Education",
      product_profile: "non-physical-goods",
      cus_name: user.name || "Student",
      cus_email: user.email || "student@easyquran.bd",
      cus_add1: "Bangladesh",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      cus_phone: user.phoneNumber,
    });

    const apiUrl = is_live
      ? "https://securepay.sslcommerz.com/gwprocess/v4/api.php"
      : "https://sandbox.sslcommerz.com/gwprocess/v4/api.php";

    const apiRes = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    const apiResponse = await apiRes.json();

    if (apiResponse?.GatewayPageURL) {
      await Transaction.create({
        userId: user._id,
        tran_id,
        amount,
        status: "pending",
      });

      return NextResponse.json({ url: apiResponse.GatewayPageURL });
    }

    return NextResponse.json(
      { error: "Payment gateway initialization failed" },
      { status: 500 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    const status = message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
