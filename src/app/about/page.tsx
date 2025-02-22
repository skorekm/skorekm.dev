import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle"

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors duration-300">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-neutral-50/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
            Home
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/#blog" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              About
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <section className="space-y-8">
          <h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">About Me</h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I&apos;m a writer and designer focused on creating meaningful digital experiences. My work explores the
              intersection of minimalism, technology, and human connection. Through my writing, I aim to share insights
              and spark conversations about design, creativity, and the future of digital communication.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              With a background in both design and development, I bring a unique perspective to my work. I believe in
              the power of simplicity and the importance of thoughtful design in our increasingly digital world.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              When I&apos;m not writing or designing, you can find me exploring new technologies, reading about design
              theory, or experimenting with different creative approaches to problem-solving.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-neutral-500 dark:text-neutral-400">
          © 2024 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

