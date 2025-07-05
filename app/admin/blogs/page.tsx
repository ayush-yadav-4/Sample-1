import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { verifyAdminAuth } from "@/lib/admin-auth"
import AdminBlogList from "@/components/admin/admin-blog-list"

export default async function AdminBlogsPage() {
  const cookieStore = cookies()
  const adminToken = cookieStore.get("admin_token")

  const isAuthenticated = adminToken ? await verifyAdminAuth(adminToken.value) : false

  if (!isAuthenticated) {
    redirect("/admin")
  }

  return <AdminBlogList />
}
