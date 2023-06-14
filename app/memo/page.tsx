import React from 'react';
import { NextPage } from 'next';
import { PostUtil } from '@/utils/mdx/post';
import { Memos } from '../component/Memo';
import PageTitle from '../component/PageTitle';
import { PageConstants } from '@/constants/page';

const page: NextPage = () => {
  const memoPosts = PostUtil.getAllMemoPosts();
  const posts = PostUtil.convertPostsTypeByPosts(memoPosts);
  return (
    <div className="flex flex-col items-center w-full max-w-post">
      <PageTitle title={PageConstants.MEMO_TITLE} />
      <Memos posts={posts} />
    </div>
  );
};

export default page;
