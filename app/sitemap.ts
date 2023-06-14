import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://..',
    },
    {
      url: 'https://../blog',
    },
    {
      url: 'https://../error',
    },
  ];
}
