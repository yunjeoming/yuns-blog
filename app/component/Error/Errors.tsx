import React from 'react'
import { PostUtil } from '@/utils/mdx/post';
import BlogLayout from '../Layout/BlogLayout';
import { Tags } from '../Tag';
import { Posts } from '../Post';

const Errors = async () => {
  const errorPosts = PostUtil.getAllErrorPosts();
  const postMetas = PostUtil.getPostMetasByPosts(errorPosts);
  const tags = PostUtil.getAllBlogTags();
  return (
    <>
      <BlogLayout>
        <Tags tags={tags} selectedTag="ALL" />
        <Posts postMetas={postMetas} />
      </BlogLayout>
    </>
  );
}

export default Errors