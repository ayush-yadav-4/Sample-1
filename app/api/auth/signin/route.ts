import { type NextRequest, NextResponse } from "next/server"
import { authenticateUser } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 })
    }

    const result = await authenticateUser(email, password)

    if (!result.success) {
      return NextResponse.json({ message: result.message }, { status: 401 })
    }

    return NextResponse.json({
      message: "Authentication successful",
      user: result.user,
      token: result.token,
    })
  } catch (error) {
    console.error("Signin error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}
