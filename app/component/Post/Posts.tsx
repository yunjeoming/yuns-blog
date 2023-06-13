import React from 'react';
import { PostMetasProps } from '@/types/Post';
import { Post } from './';

const Posts: React.FC<PostMetasProps> = ({ postMetas }) => {
  return (
    <div className="flex-grow min-w-0 w-full [&>div:not(:last-child)]:border-b">
      {postMetas.map((meta, i) => (
        <Post key={meta.title + meta.date + i} postMeta={meta} />
      ))}
    </div>
  );
};

export default Posts;
