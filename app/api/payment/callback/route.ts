import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Transaction from "@/lib/models/Transaction";
import User from "@/lib/models/User";

const store_id = process.env.SSLCOMMERZ_STORE_ID!;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD!;
const is_live = process.env.SSLCOMMERZ_IS_LIVE === "true";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.formData();
    const status = body.get("status") as string;
    const tran_id = body.get("tran_id") as string;
    const val_id = body.get("val_id") as string;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    if (!tran_id) {
      return NextResponse.redirect(`${baseUrl}/lessons?payment=fail`);
    }

    const transaction = await Transaction.findOne({ tran_id });
    if (!transaction) {
      return NextResponse.redirect(`${baseUrl}/lessons?payment=fail`);
    }

    if (status === "VALID" || status === "VALIDATED") {
      // Validate with SSLCommerz
      const validationUrl = is_live
        ? "https://securepay.sslcommerz.com/validator/api/validationserverAPI.php"
        : "https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php";

      const valRes = await fetch(
        `${validationUrl}?val_id=${val_id}&store_id=${store_id}&store_passwd=${store_passwd}&v=1&format=json`
      );
      const validationResponse = await valRes.json();

      if (
        validationResponse.status === "VALID" ||
        validationResponse.status === "VALIDATED"
      ) {
        transaction.status = "completed";
        transaction.val_id = val_id;
        await transaction.save();

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 365);

        await User.findByIdAndUpdate(transaction.userId, {
          hasPaid: true,
          accessExpiresAt: expiresAt,
        });

        return NextResponse.redirect(`${baseUrl}/lessons?payment=success`);
      }
    }

    if (status === "CANCELLED") {
      transaction.status = "cancelled";
      await transaction.save();
      return NextResponse.redirect(`${baseUrl}/lessons?payment=cancel`);
    }

    transaction.status = "failed";
    await transaction.save();
    return NextResponse.redirect(`${baseUrl}/lessons?payment=fail`);
  } catch {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    return NextResponse.redirect(`${baseUrl}/lessons?payment=fail`);
  }
}
