import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, TrendingUp, DollarSign } from "lucide-react"

export default function PartnershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Partner with TrustSend</h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
          Partner with TrustSend to offer insurance for the $13 trillion P2P market by 2032.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Partner With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="pb-2">
              <TrendingUp className="h-12 w-12 text-primary mb-2" />
              <CardTitle>New Market Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Reach 68 million US P2P users, growing to $13 trillion by 2032. Tap into a rapidly expanding market with
                minimal effort.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CheckCircle className="h-12 w-12 text-primary mb-2" />
              <CardTitle>AI-Driven Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                TrustSend's AI minimizes high-risk claims by detecting potential fraud before it happens, reducing your
                exposure.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <DollarSign className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Revenue Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Earn from subscriptions ($150-$200 individuals, $750-$1,000 businesses) and 2%-5% transaction fees.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">How Partnership Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">TrustSend's Role</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  User acquisition, AI risk detection, transaction processing, and platform integration.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Insurer's Role</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Provide coverage for approved transactions, process claims according to agreed terms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Revenue Model</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Share 30% of subscription and transaction fees (hypothetical split, adjustable based on partnership
                  terms).
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="P2P Market Growth Chart"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                P2P market projected to reach $13T by 2032
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Partnership Requirements</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Licensed to provide insurance in relevant jurisdictions</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Efficient claims processing (e.g., &lt;7 days)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Compliance with data security standards (GDPR/CCPA)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Ability to integrate with TrustSend's API for seamless claim processing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Commitment to long-term partnership and market growth</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Case Study</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Insurer Y Success Story</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Insurer Y partnered with TrustSend in early 2025 to expand into the P2P payment insurance market. Within the
            first six months, they:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Gained 10,000+ new clients</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Generated $1.2M in new premium revenue</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>Maintained a claims ratio of just 3.2% due to AI risk assessment</span>
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 italic">
            "Partnering with TrustSend allowed us to enter a new market segment with minimal risk. Their AI technology
            significantly reduces fraud, making this an attractive line of business for us." - CFO, Insurer Y
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Insurance Company Inc." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Contact Name</Label>
                <Input id="name" placeholder="John Smith" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="(123) 456-7890" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your company and how you'd like to partner with TrustSend..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Submit Inquiry
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Or email us directly at{" "}
              <a href="mailto:partnerships@trustsend.com" className="text-primary hover:underline">
                partnerships@trustsend.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
