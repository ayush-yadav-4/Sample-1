import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { verifyAdminAuth } from "@/lib/admin-auth"
import AdminBlogEditor from "@/components/admin/admin-blog-editor"

export default async function AdminNewBlogPage() {
  const cookieStore = cookies()
  const adminToken = cookieStore.get("admin_token")

  const isAuthenticated = adminToken ? await verifyAdminAuth(adminToken.value) : false

  if (!isAuthenticated) {
    redirect("/admin")
  }

  return <AdminBlogEditor />
}
