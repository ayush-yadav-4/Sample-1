"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { authenticateAdmin, verifyAdminToken } from "./admin-auth"

export async function adminLoginAction(formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  if (!username || !password) {
    throw new Error("Username and password are required")
  }

  const result = await authenticateAdmin(username, password)

  if (!result.success) {
    throw new Error(result.message || "Authentication failed")
  }

  const cookieStore = await cookies()
  cookieStore.set("admin-token", result.token!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 24 * 60 * 60, // 24 hours
  })

  redirect("/admin")
}

export async function adminLogoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete("admin-token")
  redirect("/admin")
}

export async function verifyAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin-token")?.value

    if (!token) return false

    const decoded = verifyAdminToken(token)
    return decoded !== null
  } catch {
    return false
  }
}
