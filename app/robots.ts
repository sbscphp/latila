import { MetadataRoute } from 'next';

const baseUrl = "https://latila.org"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/cgi-bin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}