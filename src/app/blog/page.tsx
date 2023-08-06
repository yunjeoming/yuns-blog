import React from 'react';
import { NextPage } from 'next';
import { Tags } from '@/components/Tag';
import { Posts } from '@/components/Post';
import { BasicLayout } from '@/components/Layout';
import { PostUtil } from '@/utils/post';
import { Constants } from '@/constants';

const page: NextPage = () => {
  const blogPosts = PostUtil.getAllBlogPosts();
  const postMetas = PostUtil.getPostMetasByPosts(blogPosts);
  const tags = PostUtil.getAllBlogTags();
  return (
    <BasicLayout title={Constants.BLOG_DESCRIPTION}>
      <Tags tags={tags} selectedTag="ALL" pageName="blog" />
      <Posts postMetas={postMetas} />
    </BasicLayout>
  );
};

export default page;
