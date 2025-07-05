import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Zap, TrendingUp, Users, DollarSign, Globe } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import NewsletterSignup from "@/components/newsletter-signup"
import TestimonialCarousel from "@/components/testimonial-carousel"
import PartnerLogos from "@/components/partner-logos"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                TrustSend: 
                <br/>
                Insuring Your Peer-to-Peer Payments.
                <span className="text-primary"> Secure Every Transaction.</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Protect your payments instantly with real-time risk analysis and fraud protection. Join the revolution
                in secure P2P transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                  <Link href="#beta-waitlist">Join Beta Waitlist</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  <Link href="#how-it-works">How It Works</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>500+ Transactions Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Real-time Protection</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-green-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <img
                    src="/TrustSend-logo.png?height=400&width=400"
                    alt="Secure P2P Payments Illustration"
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold mb-4">Beta Launch Countdown</h3>
                    <CountdownTimer targetDate="2026-03-31T00:00:00" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How TrustSend Protects You</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Advanced AI-driven protection for every peer-to-peer transaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Real-Time Transaction Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Instant insurance protection for each transaction with immediate risk assessment and coverage
                  activation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="h-16 w-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Dynamic Pricing Model</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Risk-adjusted insurance fees based on transaction safety, ensuring fair and transparent pricing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="h-16 w-16 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Fraud & Risk Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  AI-driven fraud detection to mitigate transaction risks before they become problems.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Seamless API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Easy integration with P2P and insurance platforms with less than 48 hours onboarding time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investor Appeal Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why TrustSend is an Attractive Investment</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join us in revolutionizing the $50 billion P2P payment security market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-20 w-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">$50 Billion</CardTitle>
                <CardDescription className="text-lg">Total Addressable Market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">P2P Market Growing 20% Year-over-Year</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-20 w-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-green-600">First-of-its-kind</CardTitle>
                <CardDescription className="text-lg">Competitive Edge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Payment protection solution in the market</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-20 w-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-600">500+</CardTitle>
                <CardDescription className="text-lg">Milestones Achieved</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Successful Beta tests, transactions protected</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              Request Investor Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Partnerships Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Insurance Partnership Opportunities</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join our network of trusted insurers and gain new revenue streams through innovative P2P payment
              protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Easy API Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Less than 48 hours onboarding time with comprehensive API documentation and support
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Revenue Sharing Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Attractive commission per transaction with transparent revenue sharing structure
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Market Reach Expansion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Access to 68 million P2P users and growing market opportunities
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              Become an Insurance Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials and Social Proof */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What Our Partners Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Trusted by leading platforms and insurance providers
            </p>
          </div>

          <TestimonialCarousel />

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Trusted Partners</h3>
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* Beta Waitlist Section */}
      <section id="beta-waitlist" className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Beta Waitlist</h2>
          <p className="text-xl mb-8 opacity-90">
            Be among the first to experience secure P2P payments. Get early access and exclusive benefits.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <NewsletterSignup />
          </div>
          <p className="text-sm opacity-75 mt-6">
            Your data is protected according to GDPR/CCPA standards. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  )
}
