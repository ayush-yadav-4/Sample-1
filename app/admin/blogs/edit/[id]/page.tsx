import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { verifyAdminAuth } from "@/lib/admin-auth"
import AdminBlogEditor from "@/components/admin/admin-blog-editor"
import { getBlogById } from "@/lib/blog-service"

interface AdminEditBlogPageProps {
  params: {
    id: string
  }
}

export default async function AdminEditBlogPage({ params }: AdminEditBlogPageProps) {
  const cookieStore = cookies()
  const adminToken = cookieStore.get("admin_token")

  const isAuthenticated = adminToken ? await verifyAdminAuth(adminToken.value) : false

  if (!isAuthenticated) {
    redirect("/admin")
  }

  const blog = await getBlogById(params.id)

  if (!blog) {
    redirect("/admin/blogs")
  }

  return <AdminBlogEditor blog={blog} />
}
