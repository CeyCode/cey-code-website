import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      description:
        "A modern and responsive e-commerce website for a local retail business, focusing on improved user experience and conversion rates.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Web Development", "UI/UX", "E-commerce"],
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Developed a secure and intuitive mobile banking application for a regional financial institution, enhancing customer access to services.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Mobile App", "FinTech", "Security"],
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description:
        "A comprehensive web-based system for managing patient records, appointments, and billing for a chain of clinics.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Web Development", "Healthcare", "Database"],
    },
    {
      id: 4,
      title: "Logistics Tracking Dashboard",
      description:
        "Designed and implemented a real-time logistics tracking dashboard for a shipping company, improving operational efficiency.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Data Visualization", "Logistics", "Dashboard"],
    },
    {
      id: 5,
      title: "Educational Portal Development",
      description:
        "Created an interactive online learning portal with course management and student progress tracking features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Web Development", "Education", "LMS"],
    },
    {
      id: 6,
      title: "Custom CRM Solution",
      description:
        "Built a tailored Customer Relationship Management (CRM) system to help a service-based business manage client interactions and sales pipelines.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Custom Software", "CRM", "Business Solutions"],
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Portfolio</h1>
            <p className="max-w-[900px] mx-auto mt-4 text-lg md:text-xl">
              Showcasing our commitment to excellence and innovation through impactful projects.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    width={500}
                    height={300}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-primary">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-6">
              Have a Project in Mind?
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              We'd love to hear about your ideas and discuss how we can bring them to life.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
                Let's Talk
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
