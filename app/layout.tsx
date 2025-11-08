import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
//import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cross Examination - Christian Apologetics",
  description:
    "Exploring the historical accuracy and truth claims of Christianity through evidence, scholarship, and honest inquiry.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="ahrefs-site-verification" content="9a5cafaa6a1a1e307fc565c7580c8115b329aef42fc37a08ec7efc5605895ce7" />
      </head>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          <Navigation />
          <main>{children}</main>
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
