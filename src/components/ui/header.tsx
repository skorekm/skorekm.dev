import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-[#f5f3f0]/80 dark:bg-[#1a1a1a]/80 border-b border-[#e5e2dd] dark:border-[#2a2a2a]">
      <nav className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="hover:text-accent-foreground transition-colors">
          skorekm.dev
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/about" className="hover:text-accent-foreground transition-colors">
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
