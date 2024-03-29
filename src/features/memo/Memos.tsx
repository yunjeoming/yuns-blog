import React from 'react';
import { PostsProps } from '@/types/post';
import Memo from './Memo';

const Memos: React.FC<PostsProps> = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 w-full gap-4">
      {posts.map((post, i) => (
        <Memo key={post.meta.title + post.meta.date + i} post={post} />
      ))}
    </div>
  );
};

export default Memos;
