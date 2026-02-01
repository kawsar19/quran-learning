import mongoose, { Schema, Document } from "mongoose";

export interface IOtp extends Document {
  phoneNumber: string;
  otp: string;
  createdAt: Date;
}

const OtpSchema = new Schema<IOtp>({
  phoneNumber: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // TTL: 5 minutes
});

export default mongoose.models.Otp || mongoose.model<IOtp>("Otp", OtpSchema);
