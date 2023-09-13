import React from 'react';
import { NextPage } from 'next';
import { Tags } from '@/components/tag';
import { Posts } from '@/components/post';
import { PostUtil } from '@/utils/post';
import { BasicLayout } from '@/layouts';

const page: NextPage = () => {
  const blogPosts = PostUtil.getAllBlogPosts();
  const postMetas = PostUtil.getPostMetasByPosts(blogPosts);
  const tags = PostUtil.getAllBlogTags();
  return (
    <BasicLayout>
      <Tags tags={tags} selectedTag="ALL" pageName="blog" />
      <Posts postMetas={postMetas} />
    </BasicLayout>
  );
};

export default page;
