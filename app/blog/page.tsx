import React from 'react';
import { PostUtil } from '@/utils/mdx/post';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';
import BlogLayout from '../component/Layout/BlogLayout';

const page = async () => {
  const blogPosts = PostUtil.getAllBlogPosts();
  const postMetas = PostUtil.getPostMetasByPosts(blogPosts);
  const tags = PostUtil.getAllBlogTags();
  return (
    <>
      <h2 className="mb-8">생각하고 기록하는 공간</h2>
      <BlogLayout>
        <Tags tags={tags} selectedTag="ALL" />
        <Posts postMetas={postMetas} />
      </BlogLayout>
    </>
  );
};

export default page;
