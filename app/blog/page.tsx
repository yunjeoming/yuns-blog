import React from 'react';
import { PostUtil } from '@/utils/mdx/post';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';
import { BasicLayout } from '../component/Layout';
import { NextPage } from 'next';
import { PageConstants } from '@/constants/page';

const page: NextPage = () => {
  const blogPosts = PostUtil.getAllBlogPosts();
  const postMetas = PostUtil.getPostMetasByPosts(blogPosts);
  const tags = PostUtil.getAllBlogTags();
  return (
    <>
      <BasicLayout title={PageConstants.BLOG_TITLE}>
        <Tags tags={tags} selectedTag="ALL" pageName="blog" />
        <Posts postMetas={postMetas} />
      </BasicLayout>
    </>
  );
};

export default page;
