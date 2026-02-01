import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  phoneNumber: string;
  name: string;
  email?: string;
  password?: string;
  role: "user" | "admin";
  hasPaid: boolean;
  accessExpiresAt?: Date;
  completedDays: number[];
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  phoneNumber: { type: String, required: true, unique: true },
  name: { type: String, default: "" },
  email: { type: String, sparse: true, unique: true },
  password: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  hasPaid: { type: Boolean, default: false },
  accessExpiresAt: { type: Date },
  completedDays: [{ type: Number }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
