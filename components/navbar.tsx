"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "For Users", path: "/pricing" },
    { name: "For Investors", path: "/investors" },
    { name: "Partnerships", path: "/partnership" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ]

  // Don't show navbar on admin pages
  if (pathname?.startsWith("/admin")) {
    return null
  }

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              {/* <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-primary font-bold text-xl">TrustSend</span> */}

                  <img
                    src="/TrustSend-logo.png?height=40&width=40"
                    alt="Secure P2P Payments Illustration"
                    className="w-55 h-12 rounded-lg"
                  />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    pathname === link.path
                      ? "text-primary dark:text-primary font-semibold bg-blue-50 dark:bg-blue-900/20"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3 ml-6">
              <ModeToggle />
              <div className="flex items-center space-x-2">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/signin">Sign In</Link>
                </Button>
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary focus:outline-none transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === link.path
                    ? "text-primary dark:text-primary font-semibold bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-3 py-2">
              <Button asChild variant="ghost" className="justify-start">
                <Link href="/signin" onClick={toggleMenu}>
                  Sign In
                </Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 justify-start">
                <Link href="/signup" onClick={toggleMenu}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
