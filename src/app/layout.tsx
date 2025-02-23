import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/app/providers/theme-provider"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/ui/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "skorekm.dev",
  description: "A personal site focused on my projects and writings",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f5f3f0] dark:bg-[#1a1a1a] text-[#4a4a4a] dark:text-[#e0e0e0] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex-grow">
            <Header />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

