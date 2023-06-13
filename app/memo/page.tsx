import React from 'react';
import { Memos } from '../component/Memo';
import { PostUtil } from '@/utils/mdx/post';

const page = () => {
  const memoPosts = PostUtil.getAllMemoPosts();
  const posts = PostUtil.convertPostsTypeByPosts(memoPosts);
  return (
    <div className="flex flex-col items-center w-full max-w-post">
      <h2 className="mb-8">정리되지 않은 생각을 적어놓는 공간</h2>
      <Memos posts={posts} />
    </div>
  );
};

export default page;
