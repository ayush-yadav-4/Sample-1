import { ObjectId } from "mongodb"
import { connectToDatabase } from "./mongodb"
import { hashPassword } from "./auth"

export interface UserProfile {
  _id?: ObjectId
  name: string
  email: string
  bio?: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

export async function getUserById(id: string): Promise<UserProfile | null> {
  try {
    const { db } = await connectToDatabase()
    const user = await db.collection<UserProfile>("users").findOne({ _id: new ObjectId(id) })

    if (!user) return null

    return {
      ...user,
      _id: user._id?.toString() as any,
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error)
    return null
  }
}

export async function updateUserProfile(id: string, profileData: Partial<UserProfile>): Promise<boolean> {
  try {
    const { db } = await connectToDatabase()

    const result = await db.collection<UserProfile>("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...profileData,
          updatedAt: new Date(),
        },
      },
    )

    return result.modifiedCount > 0
  } catch (error) {
    console.error("Error updating user profile:", error)
    return false
  }
}

export async function changeUserPassword(id: string, newPassword: string): Promise<boolean> {
  try {
    const { db } = await connectToDatabase()
    const hashedPassword = await hashPassword(newPassword)

    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          password: hashedPassword,
          updatedAt: new Date(),
        },
      },
    )

    return result.modifiedCount > 0
  } catch (error) {
    console.error("Error changing user password:", error)
    return false
  }
}

export async function getAllUsers(): Promise<UserProfile[]> {
  try {
    const { db } = await connectToDatabase()
    const users = await db
      .collection<UserProfile>("users")
      .find({}, { projection: { password: 0 } })
      .sort({ createdAt: -1 })
      .toArray()

    return users.map((user) => ({
      ...user,
      _id: user._id?.toString() as any,
    }))
  } catch (error) {
    console.error("Error fetching all users:", error)
    return []
  }
}

export const getUserProfile = getUserById;
