import { unstable_ViewTransition as ViewTransition } from "react";
import { getPostBySlug, getPostsSlugs } from "@/lib/posts"
import { getMdxById } from "@/lib/markdown"
import { Tag } from "@/components/ui/tag";
import { MdxContent } from "@/components/ui/mdx-content";
import { formatDate } from "@/lib/utils";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = await getMdxById('posts', slug);

  return (
      <main className="max-w-2xl mx-auto py-16 px-3 lg:px-0">
        <article className="space-y-8">
          <header className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <ViewTransition name={`post-date-${slug}`}>
              <time>Published on {formatDate(frontmatter.date)}</time>
              </ViewTransition>
              <ViewTransition name={`post-reading-time-${slug}`}>
              <span className="block items-center gap-1">
                  <span>{frontmatter.readingTime} read</span>
                </span>
              </ViewTransition>
            </div>
            <ViewTransition name={`post-title-${slug}`}>
              <h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">{frontmatter.title}</h1>
            </ViewTransition>
            <div className="flex flex-wrap items-start gap-2">
              <ViewTransition name={`post-tags-${slug}`}>
                {frontmatter.tags.map((tag: string) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </ViewTransition>
            </div>
          </header>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MdxContent content={content} />
          </div>
        </article>
      </main>
  )
}

export async function generateStaticParams() {
  const slugs = await getPostsSlugs();
  return slugs.map((slug: string) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
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

