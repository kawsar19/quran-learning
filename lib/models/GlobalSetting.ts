import mongoose, { Schema, Document } from "mongoose";

export interface IGlobalSetting extends Document {
  key: string;
  currentUnlockedDay: number;
  autoUnlockEnabled: boolean;
}

const GlobalSettingSchema = new Schema<IGlobalSetting>({
  key: { type: String, default: "global_config", unique: true },
  currentUnlockedDay: { type: Number, default: 1 },
  autoUnlockEnabled: { type: Boolean, default: true },
});

export default mongoose.models.GlobalSetting ||
  mongoose.model<IGlobalSetting>("GlobalSetting", GlobalSettingSchema);
