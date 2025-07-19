import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Lightbulb, Rocket, Users, Code, Briefcase } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-blue-700 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    CeyCode - Innovating Sri Lankan IT Solutions
                  </h1>
                  <p className="max-w-[600px] text-lg md:text-xl">
                    Your trusted partner for cutting-edge software development and IT services. We build the future, one
                    line of code at a time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Get a Quote
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground"
                    >
                      Our Services
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width="550"
                height="550"
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Mission</h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At CeyCode, our mission is to empower businesses with innovative and reliable IT solutions that drive
                growth and efficiency. We are committed to delivering exceptional value through our expertise,
                dedication, and a client-centric approach, fostering long-term partnerships and contributing to the
                digital transformation of Sri Lanka and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Our Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of IT services tailored to meet your business needs, from custom software
                  development to comprehensive IT consulting.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Custom Software Development</CardTitle>
                <CardContent className="text-muted-foreground text-sm">
                  Building bespoke software solutions designed to streamline your operations and meet unique business
                  requirements.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">IT Consulting & Strategy</CardTitle>
                <CardContent className="text-muted-foreground text-sm">
                  Providing expert advice and strategic planning to optimize your IT infrastructure and digital
                  initiatives.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Web & Mobile App Development</CardTitle>
                <CardContent className="text-muted-foreground text-sm">
                  Crafting responsive and intuitive web and mobile applications for an engaging user experience.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">UI/UX Design</CardTitle>
                <CardContent className="text-muted-foreground text-sm">
                  Designing user-friendly and visually appealing interfaces that enhance user satisfaction.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Managed IT Services</CardTitle>
                <CardContent className="text-muted-foreground text-sm">
                  Comprehensive IT support and management to ensure your systems run smoothly and securely.
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold mb-2">Data Analytics & BI</CardTitle>
                <CardContent className="text-muted-foreground text-sm">
                  Transforming raw data into actionable insights to drive informed business decisions.
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link href="/services">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Team Expertise Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Our Team's Expertise
              </h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our dedicated team of five highly skilled professionals brings a wealth of experience in various domains
                of software development and IT. We combine diverse talents with a collaborative spirit to deliver
                innovative and robust solutions that exceed client expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={100}
                    height={100}
                    alt="Team Member"
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl font-bold">Full-Stack Development</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Proficient in both front-end and back-end technologies, ensuring seamless and scalable applications.
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={100}
                    height={100}
                    alt="Team Member"
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl font-bold">UI/UX Design & Research</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Creating intuitive and engaging user experiences through meticulous design and user research.
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    width={100}
                    height={100}
                    alt="Team Member"
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle className="text-xl font-bold">Project Management</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Ensuring timely delivery and efficient execution of projects with agile methodologies.
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link href="/about">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-lg md:text-xl">
                Let's discuss your next big idea. Contact us today for a free consultation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link href="/contact">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Contact Us
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground"
                >
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
