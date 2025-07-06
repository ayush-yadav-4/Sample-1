import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { connectToDatabase } from "./mongodb"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export interface User {
  _id: string
  name: string
  email: string
  password?: string
  image?: string
  createdAt: Date
}

export interface AuthResult {
  success: boolean
  user?: Omit<User, "password">
  token?: string
  message?: string
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string }
  } catch {
    return null
  }
}

export async function authenticateUser(email: string, password: string): Promise<AuthResult> {
  try {
    const { db } = await connectToDatabase()
    const user = await db.collection<User>("users").findOne({ email })

    if (!user || !user.password) {
      return { success: false, message: "Invalid credentials" }
    }

    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
      return { success: false, message: "Invalid credentials" }
    }

    const token = generateToken(user._id.toString())
    const { password: _, ...userWithoutPassword } = user

    return {
      success: true,
      user: { ...userWithoutPassword, _id: user._id.toString() },
      token,
    }
  } catch (error) {
    console.error("Authentication error:", error)
    return { success: false, message: "Authentication failed" }
  }
}

export async function createUser(name: string, email: string, password: string): Promise<AuthResult> {
  try {
    const { db } = await connectToDatabase()

    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return { success: false, message: "User already exists" }
    }

    const hashedPassword = await hashPassword(password)
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    })

    const token = generateToken(result.insertedId.toString())

    return {
      success: true,
      user: {
        _id: result.insertedId.toString(),
        name,
        email,
        createdAt: new Date(),
      },
      token,
    }
  } catch (error) {
    console.error("User creation error:", error)
    return { success: false, message: "Failed to create user" }
  }
}

export const authOptions = {};
