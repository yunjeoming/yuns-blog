import { MetadataRoute } from 'next';
import { Constants } from '@/constants';
import { PostUtil } from '@/utils/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = PostUtil.getAllBlogPosts();
  const issuePosts = PostUtil.getAllIssuePosts();
  const slugs = PostUtil.getPostMetasByPosts([...blogPosts, ...issuePosts]).map((p) => p.slug);
  const urls = [...slugs].map((url) => {
    return {
      url: `${Constants.URL}/${url}`,
    };
  });

  return urls;
}
