"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, XYZ P2P Platform",
    content:
      "TrustSend significantly boosted our user confidence in secure transactions. The integration was seamless and our fraud rates dropped by 40%. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO, SecurePay Inc.",
    content:
      "The real-time risk assessment and instant coverage have transformed how we handle P2P payments. Our users love the added security layer.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Head of Partnerships, InsureMax",
    content:
      "As an insurance partner, TrustSend has opened up entirely new revenue streams for us. The API integration took less than 24 hours to implement.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-white dark:bg-gray-800 shadow-xl">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-6 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="h-12 w-12 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].title}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 space-x-4">
        <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex space-x-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
