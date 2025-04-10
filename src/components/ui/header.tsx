'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
export const Header = () => {
  const pathname = usePathname()
  
  const isBlogPost = pathname.includes('/blog')

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-[#f5f3f0]/80 dark:bg-[#1a1a1a]/80 border-b border-[#e5e2dd] dark:border-[#2a2a2a]">
      <nav className="max-w-2xl px-3 lg:px-0 mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="hover:text-accent-foreground transition-colors">
          skorekm.dev
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/about" className="hover:text-accent-foreground hover:bg-accent/50 transition-colors rounded-md px-2 py-1">
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      {isBlogPost && <ScrollIndicator />}
    </header>
  )
}
