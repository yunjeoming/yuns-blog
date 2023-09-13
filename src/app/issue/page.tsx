import React from 'react';
import { NextPage } from 'next';
import { PostUtil } from '@/utils/post';
import { Tags } from '@/components/tag';
import { Posts } from '@/components/post';
import { BasicLayout } from '@/layouts';

const page: NextPage = () => {
  const issuePosts = PostUtil.getAllIssuePosts();
  const postMetas = PostUtil.getPostMetasByPosts(issuePosts);
  const tags = PostUtil.getAllIssueTags();
  return (
    <BasicLayout>
      <Tags tags={tags} selectedTag="ALL" pageName="issue" />
      <Posts postMetas={postMetas} />
    </BasicLayout>
  );
};

export default page;
