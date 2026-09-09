import type { MetadataRoute } from 'next';

const routes = ['', '/creators', '/how-it-works', '/about'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://lumosverse.io${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8,
  }));
}
