import { PostMeta } from '@/types/Blog';
import React from 'react';
import PostItem from './PostItem';

interface Props {
  postMetas: PostMeta[];
}

const PostList: React.FC<Props> = ({ postMetas }) => {
  return (
    <div className="flex-grow min-w-0 w-full [&>div:not(:last-child)]:border-b">
      {postMetas.map((meta, i) => (
        <PostItem key={meta.title + meta.date + i} meta={meta} />
      ))}
    </div>
  );
};

export default PostList;
