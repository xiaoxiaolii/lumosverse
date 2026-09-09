import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://lumosverse.io/sitemap.xml',
    host: 'https://lumosverse.io',
  };
}
