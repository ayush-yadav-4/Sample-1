import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import "./globals.css"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TrustSend - Insuring Your Peer-to-Peer Payments",
  description:
    "Protect your payments instantly with real-time risk analysis and fraud protection. Secure every P2P transaction with AI-powered insurance.",
  keywords: "P2P Payment Security, Transaction Insurance, Fraud Prevention, Secure Payments, Payment Protection",
  generator: "v0.dev",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar session={session} />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    {/* <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">T</span>
                    </div>
                    <span className="text-primary font-bold text-xl">TrustSend</span> */}
                     <img
                    src="/TrustSend-logo.png?height=50&width=50"
                    alt="Secure P2P Payments Illustration"
                    className="w-40 h-20 rounded-lg"
                  />
                  </div>
                  <p className="text-gray-400 mb-6 max-w-md">
                    Secure your P2P payments with AI-powered insurance and real-time fraud protection.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/company/trustsend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/trustsend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/" className="text-gray-400 hover:text-white transition-colors">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                        How It Works
                      </a>
                    </li>
                    <li>
                      <a href="/investors" className="text-gray-400 hover:text-white transition-colors">
                        Investors
                      </a>
                    </li>
                    <li>
                      <a href="/partnership" className="text-gray-400 hover:text-white transition-colors">
                        Partnerships
                      </a>
                    </li>
                    <li>
                      <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-400">
                      <a href="mailto:info@trustsend.ai" className="hover:text-white transition-colors">
                        info@trustsend.ai
                      </a>
                    </li>
                    <li className="text-gray-400">Phone: (123) 456-7890</li>
                  </ul>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold mb-2">Newsletter</h4>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md border border-gray-700 focus:outline-none focus:border-primary"
                      />
                      <button className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-400">© {new Date().getFullYear()} TrustSend. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
