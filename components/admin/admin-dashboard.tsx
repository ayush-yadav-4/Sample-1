"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { logoutAdmin } from "@/lib/admin-actions"
import { BarChart, Users, FileText, Home, LogOut } from "lucide-react"

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      await logoutAdmin()
      toast({
        title: "Logged out successfully",
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
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
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin/blogs">
                  <FileText className="mr-2 h-4 w-4" />
                  Blogs
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin/users">
                  <Users className="mr-2 h-4 w-4" />
                  Users
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/admin/analytics">
                  <BarChart className="mr-2 h-4 w-4" />
                  Analytics
                </Link>
              </Button>
            </div>
          </div>
          <div className="px-4 py-2 mt-8">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Other</p>
            <div className="mt-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/" target="_blank">
                  <Home className="mr-2 h-4 w-4" />
                  View Website
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                onClick={handleLogout}
                disabled={isLoading}
              >
                <LogOut className="mr-2 h-4 w-4" />
                {isLoading ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <CardDescription>All registered users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-green-500 flex items-center">
                <span>↑ 12% from last month</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <CardDescription>Total published articles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-green-500 flex items-center">
                <span>↑ 4 new this month</span>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Waitlist Signups</CardTitle>
              <CardDescription>Pre-launch registrations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,678</div>
              <p className="text-xs text-green-500 flex items-center">
                <span>↑ 23% from last month</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="recent-blogs">Recent Blogs</TabsTrigger>
            <TabsTrigger value="recent-users">Recent Users</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Overview</CardTitle>
                <CardDescription>Summary of key metrics and recent activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border rounded-md">
                  <p className="text-gray-500 dark:text-gray-400">Analytics chart would appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recent-blogs">
            <Card>
              <CardHeader>
                <CardTitle>Recent Blog Posts</CardTitle>
                <CardDescription>Latest published articles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">How to Protect Your P2P Payments</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Published on May 10, 2025</p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/admin/blogs/edit/1">Edit</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">The Rise of P2P Payment Scams</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Published on May 5, 2025</p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/admin/blogs/edit/2">Edit</Link>
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">AI in Fraud Detection: The Future of Security</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Published on April 28, 2025</p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/admin/blogs/edit/3">Edit</Link>
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button asChild>
                    <Link href="/admin/blogs">View All Blogs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recent-users">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>Latest registered users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                      <div>
                        <p className="font-medium">John Smith</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Joined May 11, 2025</p>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">sarah@example.com</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Joined May 10, 2025</p>
                  </div>
                  <div className="flex justify-between items-center p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3"></div>
                      <div>
                        <p className="font-medium">Michael Brown</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">michael@example.com</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Joined May 9, 2025</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button asChild>
                    <Link href="/admin/users">View All Users</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
