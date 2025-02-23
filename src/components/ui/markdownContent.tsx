'use client';

import { MDXRemote } from 'next-mdx-remote/rsc'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MDXContent = ({ source }: { source: any }) => {
  return <MDXRemote {...source} />
}