'use client';

import { MDXRemote } from 'next-mdx-remote'

export const MDXContent = ({ source }: { source: any }) => {
  return <MDXRemote {...source} />
}