import { getPostBySlug, getPostsSlugs } from "@/lib/posts"
import { MDXContent } from "@/components/ui/markdownContent"
import { serialize } from "next-mdx-remote/serialize"
import { getMdxById } from "@/lib/markdown"
import { Tag } from "@/components/ui/tag";


export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const { frontmatter, content } = await getMdxById('posts', slug);
  const mdxSource = await serialize(content);

  return (
      <main className="max-w-2xl mx-auto px-6 py-16">
        <article className="space-y-8">
          <header className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
              <time>{frontmatter.date}</time>
              <span className="inline-flex items-center gap-1">
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
            <MDXContent source={mdxSource} />
          </div>
        </article>
      </main>
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

