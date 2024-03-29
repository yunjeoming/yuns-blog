import React from 'react';
import { NextPage } from 'next';
import { PostUtil } from '@/utils/post';
import { Memos } from '@/features/memo';

const page: NextPage = () => {
  const memoPosts = PostUtil.getAllMemoPosts();
  const posts = PostUtil.convertPostsTypeByPosts(memoPosts);
  return (
    <div className="flex flex-col items-center w-full max-w-post">
      <Memos posts={posts} />
    </div>
  );
};

export default page;
