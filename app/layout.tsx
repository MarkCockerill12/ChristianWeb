import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" })

// Set NEXT_PUBLIC_SITE_URL to your custom domain; otherwise Vercel supplies the
// production URL automatically at build time.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cross Examination - Christian Apologetics",
    template: "%s | Cross Examination ✝",
  },
  description:
    "Exploring the historical accuracy and truth claims of Christianity through evidence, scholarship, and honest inquiry.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Cross Examination ✝",
    title: "Cross Examination - Christian Apologetics",
    description:
      "Exploring the historical accuracy and truth claims of Christianity through evidence, scholarship, and honest inquiry.",
  },
  verification: {
    other: {
      "ahrefs-site-verification":
        "9a5cafaa6a1a1e307fc565c7580c8115b329aef42fc37a08ec7efc5605895ce7",
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
