import mongoose, { Schema, Document } from "mongoose";

export interface IQuizResult extends Document {
  userId: mongoose.Types.ObjectId;
  day: number;
  totalQuestions: number;
  correctAnswers: number;
  timestamp: Date;
}

const QuizResultSchema = new Schema<IQuizResult>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  day: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.QuizResult ||
  mongoose.model<IQuizResult>("QuizResult", QuizResultSchema);
