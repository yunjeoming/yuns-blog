import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yunjeoming.dev',
    },
    {
      url: 'https://yunjeoming.dev/blog',
    },
    {
      url: 'https://yunjeoming.dev/issue',
    },
  ];
}
