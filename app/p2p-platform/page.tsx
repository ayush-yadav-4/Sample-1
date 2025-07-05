import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, TrendingUp, CheckCircle } from "lucide-react"

export default function P2PPlatformPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">TrustSend for P2P Platforms</h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">
          Secure P2P transactions with AI-powered fraud detection and insurance, boosting user trust and platform
          reliability.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Integrate TrustSend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="pb-2">
              <Shield className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Increased User Trust</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Insurance builds confidence in your platform, reducing user churn and increasing transaction volume.
                Users feel safer knowing their payments are protected.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <TrendingUp className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Reduced Fraud Losses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Our AI detects scams in real-time, saving millions in potential fraud losses. Protect your users and
                your platform's reputation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CheckCircle className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Competitive Edge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Stand out from competitors by offering enhanced security features. Be the platform that prioritizes user
                safety and security.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Users opt-in for insurance</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      During transactions, users can choose to add TrustSend protection with a simple toggle.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">TrustSend's API assesses risk</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our AI analyzes the transaction in real-time to detect potential fraud or scams.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Coverage is provided</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      If approved, the transaction is insured, and claims are processed efficiently if fraud occurs.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="TrustSend Integration Flow"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Details</h2>
        <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">API Overview</TabsTrigger>
            <TabsTrigger value="endpoints">Key Endpoints</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-bold mb-4">API Overview</h3>
            <p className="mb-4">
              Our API enables seamless opt-in, risk assessment, and claim processing. Integration is straightforward
              with our comprehensive documentation and SDKs.
            </p>
            <p className="mb-4">
              The TrustSend API is RESTful and uses JSON for request and response payloads. Authentication is handled
              via API keys, and all communication is encrypted using TLS.
            </p>
            <p>
              We provide SDKs for JavaScript, Python, Ruby, and Java to make integration even easier. Our team is also
              available to assist with custom integrations.
            </p>
          </TabsContent>
          <TabsContent value="endpoints" className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-bold mb-4">Key Endpoints</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Endpoint</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Input</th>
                    <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2 font-medium">/assess_risk</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">
                      amount, sender_id, recipient_id, description
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">risk_score, scam_probability</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2 font-medium">/opt_in</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">transaction_id, amount</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">opted_in: true</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 p-2 font-medium">/file_claim</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">user_id, amount, evidence</td>
                    <td className="border border-gray-300 dark:border-gray-700 p-2">status: submitted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Data Requirements: Transaction amount, sender/recipient IDs, timestamps, device info, IP address
            </p>
          </TabsContent>
          <TabsContent value="security" className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-bold mb-4">Security</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>AES-256 Encryption:</strong> All data is encrypted both in transit and at rest.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>GDPR/CCPA Compliance:</strong> We adhere to global data protection regulations.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>SOC 2 Type II Certified:</strong> Our systems and processes meet the highest security
                  standards.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Regular Security Audits:</strong> We conduct penetration testing and vulnerability
                  assessments.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>API Rate Limiting:</strong> Protection against DDoS and brute force attacks.
                </span>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Developer Resources</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Access our Developer Hub</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Get access to our comprehensive API documentation, SDKs, and integration guides to start implementing
            TrustSend protection on your platform.
          </p>
          <Button className="bg-primary hover:bg-primary/90">View Documentation</Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Case Study</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Platform X Success Story</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">After integrating TrustSend, Platform X experienced:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>30% reduction in fraud cases</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>22% increase in user retention</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>15% growth in transaction volume</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span>4.8/5 user satisfaction rating for the new security feature</span>
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 italic">
            "Integrating TrustSend was one of the best decisions we made. Our users feel safer, and we've seen a
            significant reduction in fraud-related customer service issues." - CTO, Platform X
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Ready to Get Started?</h2>
        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            Contact our integration team to discuss how TrustSend can enhance your P2P platform's security and user
            trust.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90">Request Integration</Button>
            <Button variant="outline">Contact Sales</Button>
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Or email us directly at{" "}
            <a href="mailto:platforms@trustsend.com" className="text-primary hover:underline">
              platforms@trustsend.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
