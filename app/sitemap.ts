import { MetadataRoute } from 'next';
import { Constants } from '@/src/constants';
import { PostUtil } from '@/src/utils/post';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = PostUtil.getAllBlogPosts();
  const issuePosts = PostUtil.getAllIssuePosts();
  const navUrl = [Constants.BLOG_PATH, Constants.ISSUE_PATH];
  const slugs = PostUtil.getPostMetasByPosts([...blogPosts, ...issuePosts]).map((p) => p.slug);
  const urls = [...navUrl, ...slugs].map((url) => {
    return {
      url: `${Constants.URL}/${url}`,
    };
  });

  return urls;
}
