import React from 'react';
import { NextPage } from 'next';
import { Posts } from '../../components/post';
import { Tags } from '../../components/tag';
import { PostUtil } from '@/utils/post';

const page: NextPage = () => {
  const blogPosts = PostUtil.getAllBlogPosts();
  const postMetas = PostUtil.getPostMetasByPosts(blogPosts);
  const tags = PostUtil.getAllBlogTags();
  return (
    <>
      <Tags tags={tags} selectedTag="ALL" pageName="blog" />
      <Posts postMetas={postMetas} />
    </>
  );
};

export default page;
