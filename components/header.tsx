import Link from "next/link"
import { Code, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Code className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold text-primary">CeyCode</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          About Us
        </Link>
        <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Services
        </Link>
        <Link href="/portfolio" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Portfolio
        </Link>
        <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Blog
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4 text-foreground">
          Contact
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden ml-auto bg-transparent">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-4 py-6">
            <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold">
              Home
            </Link>
            <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold">
              About Us
            </Link>
            <Link href="/services" className="flex w-full items-center py-2 text-lg font-semibold">
              Services
            </Link>
            <Link href="/portfolio" className="flex w-full items-center py-2 text-lg font-semibold">
              Portfolio
            </Link>
            <Link href="/blog" className="flex w-full items-center py-2 text-lg font-semibold">
              Blog
            </Link>
            <Link href="/contact" className="flex w-full items-center py-2 text-lg font-semibold">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
