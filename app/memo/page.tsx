import React from 'react';
import { PostUtil } from '@/utils/mdx/post';
import { Memos } from '../component/Memo';
import PageTitle from '../component/PageTitle';

const page = () => {
  const memoPosts = PostUtil.getAllMemoPosts();
  const posts = PostUtil.convertPostsTypeByPosts(memoPosts);
  return (
    <div className="flex flex-col items-center w-full max-w-post">
      <PageTitle title="정리되지 않은 생각을 적어놓는 공간" />
      <Memos posts={posts} />
    </div>
  );
};

export default page;
