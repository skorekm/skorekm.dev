import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import '@/styles/highlight-js/a11y-dark.css';

export const mdxComponents = {
  pre: ({ children }: { children: React.ReactNode }) => {
    return <pre tabIndex={0} className="p-0 overflow-y-auto overflow-x-auto">{children}</pre>
  }
}

const options = {
  mdxOptions: {
    rehypePlugins: [rehypeHighlight],
  },
}

export const MdxContent = ({ content }: { content: string }) => {
  return <MDXRemote source={content} components={mdxComponents} options={options} />
}
