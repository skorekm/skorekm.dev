import { getPostBySlug, getPostsSlugs } from "@/lib/posts"
import { getMdxById } from "@/lib/markdown"
import { Tag } from "@/components/ui/tag";
import { MdxContent } from "@/components/ui/mdx-content";
import { formatDate } from "@/lib/utils";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = await getMdxById('posts', slug);

  return (
      <main className="max-w-2xl mx-auto py-16">
        <article className="space-y-8">
          <header className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <time>Published on {formatDate(frontmatter.date)}</time>
              <span className="block items-center gap-1">
                <span>{frontmatter.readingTime} read</span>
              </span>
            </div>
            <h1 className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">{frontmatter.title}</h1>
            <div className="flex flex-wrap items-start gap-2">
              {frontmatter.tags.map((tag: string) => (
                <Tag key={tag} tag={tag} />
              ))}
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

