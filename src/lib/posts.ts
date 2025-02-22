import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), '/src/content/posts')

export function getPostsSlugs() {
  return fs.readdirSync(postsDirectory)
    .map(slug => slug.replace(/\.mdx$/, ''));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)
  const mdxSource = await serialize(content)

  return {
    mdxSource,
    frontmatter: data,
  }
}

// TODO: Cleanup
export type Post = {
  slug: string
  date: string
  title: string
  excerpt: string
  content: string
  tags: string[]
}

