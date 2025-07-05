import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllBlogs } from "@/lib/blog-service"
import { Calendar, User, ArrowRight } from "lucide-react"

export default async function BlogsPage() {
  const blogs = await getAllBlogs()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">TrustSend Blog</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Stay updated with the latest insights on P2P payment security, fraud prevention, and industry trends.
        </p>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="h-24 w-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">No blog posts yet</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're working on creating valuable content for you. Check back soon for new insights on P2P payment
              security and fraud prevention!
            </p>
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog._id} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              {blog.featuredImage && (
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={blog.featuredImage || "/placeholder.svg?height=200&width=400"}
                    alt={blog.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  {blog.published && (
                    <Badge variant="secondary" className="text-xs">
                      Published
                    </Badge>
                  )}
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  {blog.author}
                </div>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {blog.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{blog.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-2">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
