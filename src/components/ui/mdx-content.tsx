import { HTMLAttributes } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import '@/styles/highlight-js/a11y-dark.css';

export const mdxComponents = {
  pre: ({ children }: { children: React.ReactNode }) => {
    return <pre className="p-0">{children}</pre>
  },
  code: ({ children, ...props }: { children: React.ReactNode, props: HTMLAttributes<HTMLElement> }) => {
    return <code tabIndex={0} {...props}>{children}</code>
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
