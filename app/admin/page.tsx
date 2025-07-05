import { cookies } from "next/headers"
import { verifyAdminAuth } from "@/lib/admin-auth"
import AdminLogin from "@/components/admin/admin-login"
import AdminDashboard from "@/components/admin/admin-dashboard"

export default async function AdminPage() {
  const cookieStore = cookies()
  const adminToken = cookieStore.get("admin_token")

  const isAuthenticated = adminToken ? await verifyAdminAuth(adminToken.value) : false

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  return <AdminDashboard />
}
