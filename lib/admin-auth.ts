import jwt from "jsonwebtoken"

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin"
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export interface AdminAuthResult {
  success: boolean
  token?: string
  message?: string
}

export async function authenticateAdmin(username: string, password: string): Promise<AdminAuthResult> {
  try {
    if (username !== ADMIN_USERNAME) {
      return { success: false, message: "Invalid credentials" }
    }

    // For demo purposes, we'll use a simple comparison
    // In production, you should hash the admin password
    const isValid = password === ADMIN_PASSWORD

    if (!isValid) {
      return { success: false, message: "Invalid credentials" }
    }

    const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, { expiresIn: "24h" })

    return {
      success: true,
      token,
    }
  } catch (error) {
    console.error("Admin authentication error:", error)
    return { success: false, message: "Authentication failed" }
  }
}

export function verifyAdminToken(token: string): { username: string; role: string } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { username: string; role: string }
    if (decoded.role === "admin") {
      return decoded
    }
    return null
  } catch {
    return null
  }
}

export const verifyAdminAuth = verifyAdminToken;
