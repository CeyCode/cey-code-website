import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CeyCode - Sri Lankan IT Solutions',
  description: 'Created by CeyCode, a Sri Lankan IT solutions provider.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
