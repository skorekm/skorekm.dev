import { unstable_ViewTransition as ViewTransition } from "react";
import Link from "next/link"
import { getPostsSlugs, getPostBySlug } from "@/lib/posts"
import { Tag } from "@/components/ui/tag"


export default async function Home() {
  const slugs = getPostsSlugs()
  const posts = await Promise.all(slugs.map((slug: string) => getPostBySlug(slug)))
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return (
    <>
      <main className="max-w-2xl mx-auto py-16 space-y-32 px-3 lg:px-0">
        <section id="blog" className="space-y-12">
          <h1 className="text-2xl font-medium text-neutral-900 dark:text-neutral-50">Latest Posts</h1>
          <div className="space-y-4">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {sortedPosts.map((post: any) => (
              <Link key={post.frontmatter.slug} href={`/blog/${post.frontmatter.slug}`} className="block group">
                <article className="group cursor-pointer space-y-4 rounded-lg p-4 -mx-4 transition-colors hover:bg-accent/25">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                      <ViewTransition name={`post-date-${post.frontmatter.slug}`}>
                        <time>{post.frontmatter.date}</time>
                      </ViewTransition>
                      <span className="inline-flex items-center gap-1">
                        <ViewTransition name={`post-reading-time-${post.frontmatter.slug}`}>
                          <span>{post.frontmatter.readingTime} read</span>
                        </ViewTransition>
                      </span>
                    </div>
                    <ViewTransition name={`post-title-${post.frontmatter.slug}`}>
                      <h2 className="text-xl font-medium text-[#2a2a2a] dark:text-[#f5f3f0] group-hover:text-accent-foreground transition-colors">
                        {post.frontmatter.title}
                      </h2>
                    </ViewTransition>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{post.frontmatter.excerpt}</p>
                  <div className="flex flex-wrap items-start gap-2">
                    <ViewTransition name={`post-tags-${post.frontmatter.slug}`}>
                      {post.frontmatter.tags.map((tag: string) => (
                        <Tag key={tag} tag={tag} />
                      ))}
                    </ViewTransition>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

