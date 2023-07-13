import React from 'react';
import { PostsProps } from '@/src/types/Post';
import { Memo } from './';

const Memos: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="flex flex-wrap w-full gap-4">
      {posts.map((post, i) => (
        <Memo key={post.meta.title + post.meta.date + i} post={post} />
      ))}
    </div>
  );
};

export default Memos;
