import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PricingPage() {
  const individualPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential protection for occasional P2P users",
      features: [
        "Coverage up to $50 per transaction",
        "Basic fraud detection",
        "Email support",
        "Up to 5 protected transactions per month",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Premium",
      price: "$9.99/month",
      description: "Enhanced protection for regular P2P users",
      features: [
        "Coverage up to $100 per transaction",
        "Advanced AI fraud detection",
        "Priority email support",
        "Up to 20 protected transactions per month",
        "24/7 chat support",
      ],
      cta: "Subscribe Now",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$19.99/month",
      description: "Maximum protection for frequent P2P users",
      features: [
        "Coverage up to $176 per transaction",
        "Premium AI fraud detection",
        "Priority phone & email support",
        "Unlimited protected transactions",
        "Real-time transaction monitoring",
        "Personalized risk assessment",
      ],
      cta: "Get Ultimate",
      popular: false,
    },
  ]

  const businessPlans = [
    {
      name: "Startup",
      price: "$49.99/month",
      description: "Essential protection for small businesses",
      features: [
        "Coverage up to $500 per transaction",
        "Advanced fraud detection",
        "Business hours support",
        "Up to 50 protected transactions per month",
        "Basic analytics dashboard",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Business",
      price: "$99.99/month",
      description: "Enhanced protection for growing businesses",
      features: [
        "Coverage up to $1,000 per transaction",
        "Premium AI fraud detection",
        "Priority 24/7 support",
        "Up to 200 protected transactions per month",
        "Advanced analytics & reporting",
        "Dedicated account manager",
      ],
      cta: "Subscribe Now",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored protection for large organizations",
      features: [
        "Custom coverage limits",
        "Enterprise-grade security",
        "Dedicated support team",
        "Unlimited protected transactions",
        "Custom integration & API access",
        "Comprehensive risk management",
        "White-label options available",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h1>
        <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-4">
          Choose the right plan to protect your P2P transactions
        </p>
        <p className="text-center text-gray-600 dark:text-gray-400">
          All plans include our core AI-powered fraud detection technology
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">For Individuals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {individualPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                  )}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">For Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.popular ? "border-primary shadow-lg relative" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && plan.price !== "Custom" && (
                    <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
                  )}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Contact our sales team to discuss your specific requirements and get a tailored quote.
        </p>
        <Button className="bg-primary hover:bg-primary/90">Contact Sales</Button>
      </div>
    </div>
  )
}
