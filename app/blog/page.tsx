"use client"

import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Construction, Home, Mail, BookOpen, TrendingUp, Lightbulb } from "lucide-react"

export default function BlogPage() {
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
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <Card className="w-full max-w-2xl p-8 shadow-lg">
                <CardHeader className="space-y-6">
                  <div className="mx-auto">
                    <Construction className="h-24 w-24 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    Blog Under Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    We're crafting an engaging blog platform where we'll share our expertise, industry insights, 
                    and the latest trends in software development and IT innovation.
                  </p>
                  <p className="text-muted-foreground">
                    Our upcoming blog will feature technical tutorials, case studies, industry analysis, and 
                    behind-the-scenes glimpses of our development process at CeyCode.
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
                <h2 className="text-2xl font-bold text-primary mb-8">Coming Soon to Our Blog</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg font-bold text-primary">Technical Tutorials</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Step-by-step guides on modern development practices, frameworks, and tools we use in our projects.
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg font-bold text-primary">Industry Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Analysis of current tech trends, market developments, and their impact on business solutions.
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                      <CardTitle className="text-lg font-bold text-primary">Project Case Studies</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Detailed breakdowns of our projects, challenges faced, and innovative solutions we implemented.
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-primary mb-8">What to Expect</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Expert Perspectives</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Insights from our team of five professionals on various aspects of software development and IT strategy.
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Best Practices</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Proven methodologies and practices we've learned through our experience in delivering successful projects.
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Technology Reviews</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Honest reviews and comparisons of tools, frameworks, and technologies we use in our development stack.
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Company Updates</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      News about CeyCode's growth, new services, team expansions, and milestone achievements.
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
              Stay Updated
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Be the first to know when our blog launches! Subscribe to our newsletter to get the latest 
              industry insights and company news directly in your inbox.
            </p>
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
