import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle"
import { getPostBySlug, getPostsSlugs } from "@/lib/posts"
import { MDXContent } from "@/components/ui/markdownContent"
import { serialize } from "next-mdx-remote/serialize"
import { getMdxById } from "@/lib/markdown"


export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { frontmatter, content } = await getMdxById('posts', slug);
  const mdxSource = await serialize(content);

  const calculateReadingTime = (content: string) => {
    if (!content) {
      return 0;
    }
    const wordsPerMinute = 200
    const numberOfWords = content.split(/\s/g).length
    const minutes = numberOfWords / wordsPerMinute
    return Math.ceil(minutes)
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 transition-colors duration-300">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-neutral-50/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors">
            skorekm.dev
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
        <article className="space-y-8">
          <header className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <time>{frontmatter.date}</time>
              <span className="inline-flex items-center gap-1">
                <span>{calculateReadingTime(frontmatter.content)} min read</span>
              </span>
            </div>
            <h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">{frontmatter.title}</h1>
            <div className="flex flex-wrap items-start gap-2">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 text-xs rounded-full 
                    bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 
                    hover:bg-emerald-100 dark:hover:bg-emerald-900
                    transition-all duration-200 cursor-pointer
                    transform hover:scale-105"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MDXContent source={mdxSource} />
          </div>
        </article>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-neutral-500 dark:text-neutral-400">
          © 2024 Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export async function generateStaticParams() {
  const slugs = await getPostsSlugs();
  return slugs.map((slug: string) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { frontmatter } = await getPostBySlug(slug)

  if (!frontmatter) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
  }
}

