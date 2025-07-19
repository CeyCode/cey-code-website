"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Construction, Home, Mail, Code, Briefcase, Smartphone } from "lucide-react"

export default function PortfolioPage() {
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
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <Card className="w-full max-w-2xl p-8 shadow-lg">
                <CardHeader className="space-y-6">
                  <div className="mx-auto">
                    <Construction className="h-24 w-24 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    Portfolio Under Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    We're curating an impressive portfolio showcase that will highlight our best work,
                    client success stories, and innovative solutions across various industries.
                  </p>
                  <p className="text-muted-foreground">
                    Our portfolio will feature detailed case studies, project outcomes, and the technologies
                    we've used to deliver exceptional results for our clients.
                  </p>

                  <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-6">
                    <Link href="/">
                      <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground px-8 text-sm font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-primary mb-8">Featured Project Categories</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg font-bold text-primary">Web Applications</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Custom web applications built with modern frameworks, featuring responsive design and robust functionality.
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg font-bold text-primary">Mobile Solutions</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Native and cross-platform mobile applications designed for optimal user experience and performance.
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg font-bold text-primary">Enterprise Systems</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Scalable enterprise solutions including CRM systems, inventory management, and business automation tools.
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-primary mb-8">What You'll Find Here Soon</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Detailed Case Studies</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      In-depth analysis of our projects, including challenges faced, solutions implemented, and results achieved.
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Technology Stack</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Comprehensive overview of the technologies, frameworks, and tools we use in our development process.
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Client Testimonials</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Real feedback from our clients about their experience working with CeyCode and project outcomes.
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Live Demos</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Interactive demonstrations of our applications and systems for you to explore and experience firsthand.
                    </CardContent>
                  </Card>
                </div>
              </div>
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
