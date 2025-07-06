import { getBlogBySlug } from "@/lib/blog-service"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = await getBlogBySlug(params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blogs">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <header className="mb-8 not-prose">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <User className="h-4 w-4 mr-2" />
                {blog.author}
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{blog.title}</h1>

            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {blog.featuredImage && (
              <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
                <img
                  src={blog.featuredImage || "/placeholder.svg"}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </header>

          {/* Article Content */}
          <div
            className="prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-gray-500" />
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  blog.title,
                )}&url=${encodeURIComponent(window.location.href)}`
                window.open(url, "_blank")
              }}
            >
              <Twitter className="h-4 w-4 mr-2" />
              Twitter
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
                window.open(url, "_blank")
              }}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  window.location.href,
                )}`
                window.open(url, "_blank")
              }}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Related Articles or CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Secure Your P2P Payments Today</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Join thousands of users who trust TrustSend to protect their transactions with AI-powered insurance.
            </p>
            <Button asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
