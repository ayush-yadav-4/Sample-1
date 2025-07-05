import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Leo Jimenez",
      role: "CEO & Founder",
      bio: "Leo has over 15 years of experience in fintech and previously led product at PayPal.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Roni Pena",
      role: "CTO",
      bio: "Roni is an Tech expert.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ayush Yadav",
      role: "Full stack developer",
      bio: "Ayush Yadav is a Full stack developer with a passion for building scalable and efficient systems.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Husain Khan",
      role: "Developer",
      bio: "Husain Khan is Frontend Developer with a passion for building scalable and efficient systems.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const partners = [
    {
      name: "Chubb",
      description: "Leading global insurance provider",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Lemonade",
      description: "Digital insurance company",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Fintech Alliance",
      description: "Industry association for fintech companies",
      logo: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">About TrustSend</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            TrustSend was founded in 2025 with a simple mission: to make peer-to-peer payments safe and secure for
            everyone. We recognized that while P2P payment platforms have revolutionized how we exchange money, they've
            also created new opportunities for scammers and fraudsters.
          </p>
          <p className="text-lg mb-6">
            Our team of fintech and AI experts developed a solution that combines advanced artificial intelligence with
            insurance coverage to protect users from fraud and scams. By analyzing transaction patterns and user
            behavior in real-time, our AI can detect potential scams before they happen, while our insurance coverage
            provides an additional layer of protection.
          </p>
          <p className="text-lg mb-6">
            TrustSend is backed by leading insurance providers and is committed to making the digital economy safer for
            everyone. We believe that financial security should be accessible to all, regardless of technical knowledge
            or experience.
          </p>
          <p className="text-lg">
            Our vision is to become the standard for secure P2P transactions across all platforms, protecting millions
            of users from fraud and building trust in the digital economy.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <Card key={partner.name} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-16 mb-4" />
                <h3 className="text-xl font-bold">{partner.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
