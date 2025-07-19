import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      date: "July 15, 2025",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the software development lifecycle, from automated testing to intelligent code generation.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#", // Placeholder for individual blog post link
    },
    {
      id: 2,
      title: "Why Responsive Design is Crucial for Your Business",
      date: "July 10, 2025",
      excerpt:
        "Understand the importance of responsive web design in today's multi-device world and how it impacts user experience and SEO.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
    {
      id: 3,
      title: "Leveraging Cloud Computing for Scalable Solutions",
      date: "July 05, 2025",
      excerpt:
        "A deep dive into the benefits of cloud computing for startups and established businesses, focusing on scalability, cost-efficiency, and security.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
    {
      id: 4,
      title: "The Rise of Low-Code/No-Code Platforms",
      date: "June 28, 2025",
      excerpt:
        "How low-code and no-code platforms are democratizing software development and empowering citizen developers.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
    {
      id: 5,
      title: "Cybersecurity Best Practices for Small Businesses",
      date: "June 20, 2025",
      excerpt:
        "Essential cybersecurity tips and strategies to protect your small business from common digital threats.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
    {
      id: 6,
      title: "Agile Methodologies: Boosting Team Productivity",
      date: "June 15, 2025",
      excerpt:
        "An overview of Agile principles and how implementing them can significantly improve your team's efficiency and project delivery.",
      image: "/placeholder.svg?height=200&width=350",
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">CeyCode Blog</h1>
            <p className="max-w-[900px] mx-auto mt-4 text-lg md:text-xl">
              Insights, trends, and updates from the world of IT and software development.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={post.image || "/placeholder.svg"}
                    width={350}
                    height={200}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">{post.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">{post.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Link href={post.link}>
                      <Button variant="link" className="p-0 h-auto text-primary hover:underline">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-6">
              Stay Updated
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Subscribe to our newsletter to get the latest industry insights and company news directly in your inbox.
            </p>
            {/* Placeholder for a newsletter signup form */}
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
