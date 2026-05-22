import { MetadataRoute } from 'next';
import { safariPackages } from '@/data/packages';
import { excursions } from '@/data/excursions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hippotransfersandadventures.com';

  const staticPages = [
    '',
    '/packages',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const packagePages = safariPackages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const excursionPages = excursions.map((exc) => ({
    url: `${baseUrl}/excursions/${exc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...packagePages, ...excursionPages];
}
