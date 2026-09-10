import type { MetadataRoute } from 'next';

const routes = ['', '/creators', '/how-it-works', '/about', '/organization'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://lumosverse.io${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : route === '/organization' ? 0.4 : 0.8,
  }));
}
