import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle"
import { calculateReadingTime } from "@/lib/utils"
import { posts } from "@/lib/posts"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] dark:bg-[#1a1a1a] text-[#4a4a4a] dark:text-[#e0e0e0] transition-colors duration-300">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-[#f5f3f0]/80 dark:bg-[#1a1a1a]/80 border-b border-[#e5e2dd] dark:border-[#2a2a2a]">
        <nav className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
          <Link href="/" className="hover:text-[#2a2a2a] dark:hover:text-[#f5f3f0] transition-colors">
            skorekm.dev
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#blog" className="hover:text-accent-foreground transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-accent-foreground transition-colors">
              About
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16 space-y-32">
        <section id="blog" className="space-y-12">
          <h2 className="text-2xl font-medium text-neutral-900 dark:text-neutral-50">Latest Posts</h2>
          <div className="space-y-12">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="group cursor-pointer space-y-4 rounded-lg p-4 -mx-4 transition-colors hover:bg-accent/5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                      <time>{post.date}</time>
                      <span className="inline-flex items-center gap-1">
                        <span>{calculateReadingTime(post.content)} min read</span>
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-[#2a2a2a] dark:text-[#f5f3f0] group-hover:text-accent-foreground transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap items-start gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 text-xs rounded-full 
                bg-accent/10 text-accent-foreground 
                hover:bg-accent/20 hover:text-accent-foreground/80
                transition-all duration-200 cursor-pointer
                transform hover:scale-105"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e5e2dd] dark:border-[#2a2a2a]">
        <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-[#8c8c8c] dark:text-[#8c8c8c]">
          © 2025 skorekm.dev. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

