import React from 'react';
import { NextPage } from 'next';
import { PostUtil } from '@/utils/post';
import { BasicLayout } from '../component/Layout';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';
import { Constants } from '@/constants';

const page: NextPage = () => {
  const issuePosts = PostUtil.getAllIssuePosts();
  const postMetas = PostUtil.getPostMetasByPosts(issuePosts);
  const tags = PostUtil.getAllIssueTags();
  return (
    <BasicLayout title={Constants.ISSUE_DESCRIPTION}>
      <Tags tags={tags} selectedTag="ALL" pageName="issue" />
      <Posts postMetas={postMetas} />
    </BasicLayout>
  );
};

export default page;
