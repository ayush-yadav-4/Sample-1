import { ObjectId } from "mongodb"
import { connectToDatabase } from "./mongodb"

export interface BlogPost {
  _id?: ObjectId
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  publishedAt: Date
  updatedAt: Date
  published: boolean
  tags: string[]
  featuredImage?: string
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const { db } = await connectToDatabase()
    const blogs = await db.collection<BlogPost>("blogs").find({ published: true }).sort({ publishedAt: -1 }).toArray()

    return blogs.map((blog) => ({
      ...blog,
      _id: blog._id?.toString() as any,
    }))
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return []
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { db } = await connectToDatabase()
    const blog = await db.collection<BlogPost>("blogs").findOne({ slug, published: true })

    if (!blog) return null

    return {
      ...blog,
      _id: blog._id?.toString() as any,
    }
  } catch (error) {
    console.error("Error fetching blog by slug:", error)
    return null
  }
}

export async function getAllBlogsForAdmin(): Promise<BlogPost[]> {
  try {
    const { db } = await connectToDatabase()
    const blogs = await db.collection<BlogPost>("blogs").find({}).sort({ updatedAt: -1 }).toArray()

    return blogs.map((blog) => ({
      ...blog,
      _id: blog._id?.toString() as any,
    }))
  } catch (error) {
    console.error("Error fetching blogs for admin:", error)
    return []
  }
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  try {
    const { db } = await connectToDatabase()
    const blog = await db.collection<BlogPost>("blogs").findOne({ _id: new ObjectId(id) })

    if (!blog) return null

    return {
      ...blog,
      _id: blog._id?.toString() as any,
    }
  } catch (error) {
    console.error("Error fetching blog by ID:", error)
    return null
  }
}

export async function createBlog(
  blogData: Omit<BlogPost, "_id" | "publishedAt" | "updatedAt">,
): Promise<string | null> {
  try {
    const { db } = await connectToDatabase()
    const now = new Date()

    const result = await db.collection<BlogPost>("blogs").insertOne({
      ...blogData,
      publishedAt: now,
      updatedAt: now,
    })

    return result.insertedId.toString()
  } catch (error) {
    console.error("Error creating blog:", error)
    return null
  }
}

export async function updateBlog(id: string, blogData: Partial<BlogPost>): Promise<boolean> {
  try {
    const { db } = await connectToDatabase()

    const result = await db.collection<BlogPost>("blogs").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...blogData,
          updatedAt: new Date(),
        },
      },
    )

    return result.modifiedCount > 0
  } catch (error) {
    console.error("Error updating blog:", error)
    return false
  }
}

export async function deleteBlog(id: string): Promise<boolean> {
  try {
    const { db } = await connectToDatabase()

    const result = await db.collection<BlogPost>("blogs").deleteOne({ _id: new ObjectId(id) })

    return result.deletedCount > 0
  } catch (error) {
    console.error("Error deleting blog:", error)
    return false
  }
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}
