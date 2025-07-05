"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { createBlog, updateBlog } from "@/lib/blog-actions"
import { FileText, Save, ArrowLeft, Upload, LogOut } from "lucide-react"
import { logoutAdmin } from "@/lib/admin-actions"

export default function AdminBlogEditor({ blog = null }) {
  const [title, setTitle] = useState(blog?.title || "")
  const [slug, setSlug] = useState(blog?.slug || "")
  const [category, setCategory] = useState(blog?.category || "")
  const [excerpt, setExcerpt] = useState(blog?.excerpt || "")
  const [content, setContent] = useState(blog?.content || "")
  const [coverImage, setCoverImage] = useState(blog?.coverImage || "")
  const [published, setPublished] = useState(blog?.published || false)
  const [isLoading, setIsLoading] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(blog?.coverImage || "")

  const router = useRouter()
  const isEditing = !!blog

  useEffect(() => {
    if (title && !isEditing) {
      // Generate slug from title
      setSlug(
        title
          .toLowerCase()
          .replace(/[^\w\s]/gi, "")
          .replace(/\s+/g, "-"),
      )
    }
  }, [title, isEditing])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would upload the image to a storage service
      // and get back a URL to store in the database
      let imageUrl = coverImage
      if (imageFile) {
        // Simulate image upload
        imageUrl = imagePreview
      }

      const blogData = {
        title,
        slug,
        category,
        excerpt,
        content,
        coverImage: imageUrl,
        published,
      }

      if (isEditing) {
        await updateBlog(blog._id, blogData)
        toast({
          title: "Blog updated",
          description: "The blog post has been updated successfully",
        })
      } else {
        await createBlog(blogData)
        toast({
          title: "Blog created",
          description: "The blog post has been created successfully",
        })
      }

      router.push("/admin/blogs")
    } catch (error) {
      toast({
        title: "Error",
        description: isEditing ? "Failed to update blog" : "Failed to create blog",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await logoutAdmin()
      toast({
        title: "Logged out successfully",
      })
      router.push("/admin")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-6">
          <h1 className="text-xl font-bold text-primary">TrustSend Admin</h1>
        </div>
        <nav className="mt-6">
          <div className="px-4 py-2">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Main</p>
            <div className="mt-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin">
                  <FileText className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start bg-gray-100 dark:bg-gray-700" asChild>
                <Link href="/admin/blogs">
                  <FileText className="mr-2 h-4 w-4" />
                  Blogs
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-4 py-2 mt-8">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Other</p>
            <div className="mt-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  View Website
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="mr-4" asChild>
              <Link href="/admin/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">{isEditing ? "Edit Blog Post" : "Create New Blog Post"}</h1>
          </div>
          <Button onClick={handleSubmit} disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="blog-post-url"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g. Security, P2P Payments"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="published" className="block mb-2">
                  Published
                </Label>
                <div className="flex items-center">
                  <Switch id="published" checked={published} onCheckedChange={setPublished} />
                  <Label htmlFor="published" className="ml-2">
                    {published ? "Published" : "Draft"}
                  </Label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of the blog post"
                required
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image</Label>
              <div className="flex items-center gap-4">
                <Button type="button" variant="outline" onClick={() => document.getElementById("image-upload").click()}>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>
                <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                {imagePreview && (
                  <div className="relative h-16 w-16 rounded overflow-hidden">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Cover preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content here..."
                required
                rows={15}
                className="font-mono"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">You can use HTML tags for formatting.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
