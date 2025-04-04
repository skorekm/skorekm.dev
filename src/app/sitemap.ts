import type { MetadataRoute } from 'next'
import { getPostsSlugs } from '@/lib/posts';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const lastModified = new Date();
  const postSlugs = getPostsSlugs();

  const postsUrls = postSlugs.map((post) => (
    {
      url: `${baseUrl}/blog/${post}`,
      lastModified,
    }
  ));

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
    },
    ...postsUrls,
  ]
}