import React from 'react';
import { PostMetasProps } from '@/types/post';
import Post from './Post';

const Posts: React.FC<PostMetasProps> = ({ postMetas }) => {
  return (
    <div className="flex-grow min-w-0 w-full sm:px-4 [&>div:not(:last-child)]:border-b">
      {postMetas.length > 0
        ? postMetas.map((meta, i) => <Post key={meta.title + meta.date + i} postMeta={meta} />)
        : '등록된 게시물이 없습니다.'}
    </div>
  );
};

export default Posts;
