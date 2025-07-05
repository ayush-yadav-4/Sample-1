import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Users, Globe, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function InvestorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Investment Opportunity</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Join us in revolutionizing the $50 billion P2P payment security market with first-of-its-kind payment
          protection technology
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
          Request Investor Deck
        </Button>
      </div>

      {/* Market Opportunity */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Market Opportunity</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Massive and rapidly growing market with clear pain points
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-20 w-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold text-primary">$50B</CardTitle>
              <p className="text-lg text-gray-600 dark:text-gray-400">Total Addressable Market</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                P2P payment market growing 20% YoY, reaching $13T by 2032
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-20 w-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-red-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-red-600">$1.7B</CardTitle>
              <p className="text-lg text-gray-600 dark:text-gray-400">Annual Fraud Losses</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Growing fraud problem with 8% of P2P transactions being scams
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="h-20 w-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-green-600">68M</CardTitle>
              <p className="text-lg text-gray-600 dark:text-gray-400">P2P Users in US</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Large user base seeking protection from fraud and scams
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Financial Projections</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Strong revenue potential with multiple monetization streams
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold">Metric</th>
                  <th className="text-center py-4 px-4 font-semibold">Year 1</th>
                  <th className="text-center py-4 px-4 font-semibold">Year 2</th>
                  <th className="text-center py-4 px-4 font-semibold">Year 3</th>
                  <th className="text-center py-4 px-4 font-semibold">Year 5</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4 font-medium">Revenue</td>
                  <td className="text-center py-4 px-4">$3.4M</td>
                  <td className="text-center py-4 px-4">$12.8M</td>
                  <td className="text-center py-4 px-4">$35.2M</td>
                  <td className="text-center py-4 px-4">$150M</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4 font-medium">Users</td>
                  <td className="text-center py-4 px-4">50K</td>
                  <td className="text-center py-4 px-4">200K</td>
                  <td className="text-center py-4 px-4">750K</td>
                  <td className="text-center py-4 px-4">3.5M</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-4 px-4 font-medium">Transactions Protected</td>
                  <td className="text-center py-4 px-4">500K</td>
                  <td className="text-center py-4 px-4">2.5M</td>
                  <td className="text-center py-4 px-4">12M</td>
                  <td className="text-center py-4 px-4">75M</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Gross Margin</td>
                  <td className="text-center py-4 px-4">65%</td>
                  <td className="text-center py-4 px-4">72%</td>
                  <td className="text-center py-4 px-4">78%</td>
                  <td className="text-center py-4 px-4">82%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Competitive Advantages</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">First-mover advantage in a blue ocean market</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">First-to-Market Technology</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No direct competitors offering real-time P2P payment insurance with AI-powered fraud detection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                  <span>Proprietary AI algorithms</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                  <span>Real-time risk assessment</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                  <span>Instant coverage activation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Scalable Business Model</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Multiple revenue streams with high margins and network effects driving growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-green-600 rounded-full mr-2"></div>
                  <span>Transaction fees (2%-5%)</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-green-600 rounded-full mr-2"></div>
                  <span>Subscription revenue</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-green-600 rounded-full mr-2"></div>
                  <span>Partner revenue sharing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Strong Team & Partnerships</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Experienced team with proven track record and strategic partnerships with leading insurers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-purple-600 rounded-full mr-2"></div>
                  <span>Fintech & AI expertise</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-purple-600 rounded-full mr-2"></div>
                  <span>Insurance partnerships</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-purple-600 rounded-full mr-2"></div>
                  <span>Platform integrations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Proven Market Demand</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Beta testing shows strong user adoption and willingness to pay for protection.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-orange-600 rounded-full mr-2"></div>
                  <span>500+ beta transactions</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-orange-600 rounded-full mr-2"></div>
                  <span>85% user satisfaction</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="h-2 w-2 bg-orange-600 rounded-full mr-2"></div>
                  <span>Growing waitlist</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Funding Requirements */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Funding Requirements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Seeking $5M Series A to accelerate growth and market expansion
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Use of Funds</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Product Development & AI</span>
                  <span className="font-bold">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Marketing & User Acquisition</span>
                  <span className="font-bold">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team Expansion</span>
                  <span className="font-bold">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Operations & Compliance</span>
                  <span className="font-bold">10%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-white rounded-full mr-3"></div>
                  <span>Launch full product (Q2 2025)</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-white rounded-full mr-3"></div>
                  <span>50K active users (Q4 2025)</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-white rounded-full mr-3"></div>
                  <span>Break-even (Q2 2026)</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-white rounded-full mr-3"></div>
                  <span>Series B readiness (Q4 2026)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Partner with us to revolutionize P2P payment security and capture a massive market opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              Download Investor Deck
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
              <Link href="/contact">Schedule Meeting</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            All financial projections are estimates based on market research and beta testing data
          </p>
        </div>
      </section>
    </div>
  )
}
