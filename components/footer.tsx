import Link from "next/link"
import { Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Code className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold text-primary">CeyCode</span>
      </Link>
      <p className="text-xs text-muted-foreground sm:ml-auto">
        &copy; {new Date().getFullYear()} CeyCode. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="/about" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
          About Us
        </Link>
        <Link href="/services" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
          Services
        </Link>
        <Link href="/contact" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
          Contact
        </Link>
      </nav>
    </footer>
  )
}
