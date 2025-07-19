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
import { Construction, Home, Mail, ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
            <p className="max-w-[900px] mx-auto mt-4 text-lg md:text-xl">
              Learn more about CeyCode and our journey in Sri Lankan IT innovation.
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
                    Page Under Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    We're working hard to bring you an amazing About Us page that showcases our team, 
                    our story, and our commitment to excellence in software development.
                  </p>
                  <p className="text-muted-foreground">
                    In the meantime, feel free to explore our other pages or get in touch with us directly. 
                    We'd love to hear from you!
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
                <h2 className="text-2xl font-bold text-primary mb-8">What's Coming Soon</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Our Story</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Learn about CeyCode's journey, our founding vision, and how we became a trusted IT partner in Sri Lanka.
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Meet the Team</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Get to know our talented team of five professionals and their expertise in various IT domains.
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-primary">Our Values</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground text-sm">
                      Discover the core values that drive our work and our commitment to client success.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}