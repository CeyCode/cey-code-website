import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, Rocket, Layout, Database, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Comprehensive Services</h1>
            <p className="max-w-[900px] mx-auto mt-4 text-lg md:text-xl">
              Delivering innovative and reliable IT solutions tailored to your business needs.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Code className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">Custom Software Development</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  We design, develop, and deploy bespoke software solutions that perfectly align with your business
                  processes and objectives. From enterprise applications to specialized tools, we build scalable and
                  efficient software.
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Web Application Development</li>
                    <li>Mobile App Development (iOS & Android)</li>
                    <li>Desktop Application Development</li>
                    <li>API Development & Integration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">IT Consulting & Strategy</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Leverage our expertise to optimize your IT infrastructure, streamline operations, and develop a robust
                  digital strategy. We provide insights and guidance to help you make informed technology decisions.
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Digital Transformation Consulting</li>
                    <li>Cloud Strategy & Migration</li>
                    <li>IT Infrastructure Planning</li>
                    <li>Technology Roadmapping</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Rocket className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">Web & Mobile App Development</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Crafting responsive, intuitive, and high-performing web and mobile applications that provide an
                  exceptional user experience and drive engagement.
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Progressive Web Apps (PWAs)</li>
                    <li>E-commerce Solutions</li>
                    <li>Content Management Systems (CMS)</li>
                    <li>Cross-Platform Mobile Apps</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Layout className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Our design team focuses on creating visually appealing and user-friendly interfaces that enhance
                  usability and ensure a seamless interaction for your customers.
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>User Research & Analysis</li>
                    <li>Wireframing & Prototyping</li>
                    <li>User Interface (UI) Design</li>
                    <li>User Experience (UX) Design</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Database className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">Data Analytics & BI</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Transform your raw data into actionable insights. We help you leverage data to make informed business
                  decisions, identify trends, and optimize performance.
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Data Warehousing</li>
                    <li>Business Intelligence Dashboards</li>
                    <li>Predictive Analytics</li>
                    <li>Data Visualization</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl font-bold">Managed IT Services</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Ensure the smooth and secure operation of your IT systems with our comprehensive managed services. We
                  provide proactive monitoring, maintenance, and support.
                  <ul className="list-disc list-inside mt-4 space-y-1">
                    <li>Network Monitoring & Management</li>
                    <li>Cybersecurity Solutions</li>
                    <li>Cloud Management</li>
                    <li>IT Support & Helpdesk</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Contact us today to discuss your requirements and discover how CeyCode can help you achieve your digital
              goals.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
