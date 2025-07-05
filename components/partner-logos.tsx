"use client"

import Link from "next/link"

const partners = [
  {
    name: "Chubb",
    logo: "/placeholder.svg?height=60&width=120",
    url: "https://chubb.com",
  },
  {
    name: "Lemonade",
    logo: "/placeholder.svg?height=60&width=120",
    url: "https://lemonade.com",
  },
  {
    name: "CashApp",
    logo: "/placeholder.svg?height=60&width=120",
    url: "https://cash.app",
  },
  {
    name: "Zelle",
    logo: "/placeholder.svg?height=60&width=120",
    url: "https://zellepay.com",
  },
  {
    name: "Fintech Alliance",
    logo: "/placeholder.svg?height=60&width=120",
    url: "#",
  },
]

export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {partners.map((partner) => (
        <Link key={partner.name} href={partner.url} target="_blank" rel="noopener noreferrer" className="group">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
            <img
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              className="h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
