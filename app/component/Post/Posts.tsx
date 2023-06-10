import React from 'react';
import { IPostMeta } from '@/types/Blog';
import { Post } from './';

interface Props {
  postMetas: IPostMeta[];
}

const Posts: React.FC<Props> = ({ postMetas }) => {
  return (
    <div className="flex-grow min-w-0 w-full [&>div:not(:last-child)]:border-b">
      {postMetas.map((meta, i) => (
        <Post key={meta.title + meta.date + i} meta={meta} />
      ))}
    </div>
  );
};

export default Posts;
