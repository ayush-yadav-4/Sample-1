"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createBlog, updateBlog, deleteBlog, getAllBlogs } from "./blog-service"

export async function createBlogAction(formData: FormData) {
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const excerpt = formData.get("excerpt") as string
  const author = formData.get("author") as string
  const published = formData.get("published") === "true"
  const tags = (formData.get("tags") as string)?.split(",").map((tag) => tag.trim()) || []

  if (!title || !content || !excerpt || !author) {
    throw new Error("Missing required fields")
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()

  const blogId = await createBlog({
    title,
    slug,
    content,
    excerpt,
    author,
    published,
    tags,
  })

  if (!blogId) {
    throw new Error("Failed to create blog")
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/blogs")
  redirect("/admin/blogs")
}

export async function updateBlogAction(id: string, formData: FormData) {
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const excerpt = formData.get("excerpt") as string
  const author = formData.get("author") as string
  const published = formData.get("published") === "true"
  const tags = (formData.get("tags") as string)?.split(",").map((tag) => tag.trim()) || []

  if (!title || !content || !excerpt || !author) {
    throw new Error("Missing required fields")
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()

  const success = await updateBlog(id, {
    title,
    slug,
    content,
    excerpt,
    author,
    published,
    tags,
  })

  if (!success) {
    throw new Error("Failed to update blog")
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/blogs")
  revalidatePath(`/blogs/${slug}`)
  redirect("/admin/blogs")
}

export async function deleteBlogAction(id: string) {
  const success = await deleteBlog(id)

  if (!success) {
    throw new Error("Failed to delete blog")
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/blogs")
}

export async function toggleBlogPublishAction(id: string, published: boolean) {
  const success = await updateBlog(id, { published })

  if (!success) {
    throw new Error("Failed to update blog status")
  }

  revalidatePath("/admin/blogs")
  revalidatePath("/blogs")
}

export async function getBlogs() {
  return getAllBlogs();
}

export async function createBlogWrapper(blogData) {
  return createBlog(blogData);
}

export async function updateBlogWrapper(id, blogData) {
  return updateBlog(id, blogData);
}

export async function deleteBlogWrapper(id) {
  return deleteBlog(id);
}
