import React from 'react';
import { NextPage } from 'next';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';
import { BasicLayout } from '../component/Layout';
import { PostUtil } from '@/src/utils/post';
import { Constants } from '@/src/constants';

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
