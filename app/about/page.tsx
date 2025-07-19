import Image from "next/image"
import Header from "@/components/header"
import { Users, Lightbulb, Handshake } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About CeyCode</h1>
            <p className="max-w-[900px] mx-auto mt-4 text-lg md:text-xl">
              Innovating the future of IT, one solution at a time.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Story</h2>
              <p className="text-muted-foreground md:text-lg">
                Founded in Sri Lanka, CeyCode emerged from a shared passion for technology and a vision to deliver
                impactful IT solutions. Starting as a dedicated team of five, we've grown our expertise in service-based
                solutions, helping businesses of all sizes navigate the complexities of the digital landscape. Our
                journey is marked by continuous learning, innovation, and a steadfast commitment to our clients'
                success.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Looking ahead, CeyCode is poised for expansion into product development, aiming to create innovative
                software products that address market needs and set new industry standards. We believe in leveraging
                cutting-edge technologies to build scalable, efficient, and user-friendly solutions.
              </p>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              width="600"
              height="400"
              alt="Our Story"
              className="mx-auto rounded-xl object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
              Our Vision & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-lg">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">Innovation</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  We constantly explore new technologies and creative approaches to deliver groundbreaking solutions.
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg">
                <CardHeader>
                  <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">Client-Centricity</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  Our clients' success is our priority. We build strong relationships based on trust and mutual respect.
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">Excellence</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  We are committed to delivering high-quality, reliable, and efficient solutions in every project.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        \
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-8">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
              Our team of five dedicated professionals is the heart of CeyCode. Each member brings unique skills and a
              shared commitment to innovation and excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i} className="p-4 shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=150&width=150&query=team%20member%20${i + 1}%20avatar`}
                    width={150}
                    height={150}
                    alt={`Team Member ${i + 1}`}
                    className="rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg font-bold">Team Member {i + 1}</CardTitle>
                  <CardContent className="text-muted-foreground text-sm mt-1">Role / Expertise</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
