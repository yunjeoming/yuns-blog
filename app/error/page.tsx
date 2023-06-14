import React from 'react';
import { NextPage } from 'next';
import { PostUtil } from '@/utils/post';
import { BasicLayout } from '../component/Layout';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';
import { PageConstants } from '@/constants/page';

const page: NextPage = () => {
  const errorPosts = PostUtil.getAllErrorPosts();
  const postMetas = PostUtil.getPostMetasByPosts(errorPosts);
  const tags = PostUtil.getAllErrorTags();
  return (
    <BasicLayout title={PageConstants.ERROR_DESCRIPTION}>
      <Tags tags={tags} selectedTag="ALL" pageName="error" />
      <Posts postMetas={postMetas} />
    </BasicLayout>
  );
};

export default page;
