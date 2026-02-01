import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import dbConnect from "./mongodb";
import User, { IUser } from "./models/User";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "365d" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { userId: string };
}

export async function getAuthUser(req: NextRequest): Promise<IUser | null> {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  try {
    const { userId } = verifyToken(authHeader.slice(7));
    await dbConnect();
    return User.findById(userId);
  } catch {
    return null;
  }
}

export async function requireAuth(req: NextRequest): Promise<IUser> {
  const user = await getAuthUser(req);
  if (!user) throw new Error("Unauthorized");
  return user;
}

export async function requireAdmin(req: NextRequest): Promise<IUser> {
  const user = await requireAuth(req);
  if (user.role !== "admin") throw new Error("Forbidden");
  return user;
}
