import React from 'react';
import { NextPage } from 'next';
import { PostUtil } from '@/src/utils/post';
import { Memos } from '../component/Memo';
import PageTitle from '../component/PageTitle';
import { Constants } from '@/src/constants';

const page: NextPage = () => {
  const memoPosts = PostUtil.getAllMemoPosts();
  const posts = PostUtil.convertPostsTypeByPosts(memoPosts);
  return (
    <div className="flex flex-col items-center w-full max-w-post">
      <PageTitle title={Constants.MEMO_DESCRIPTION} />
      <Memos posts={posts} />
    </div>
  );
};

export default page;
