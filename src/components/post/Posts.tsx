import React from 'react';
import { PostMetasProps } from '@/types/post';
import Post from './Post';
import { SortUtil } from '@/utils/sort';

const Posts: React.FC<PostMetasProps> = ({ postMetas, selectedTitle, isTag }) => {
  return (
    <div className="flex-grow min-w-0 w-full lg:px-4 [&>div:not(:last-child)]:border-b">
      {selectedTitle && (
        <h6 className='pb-4 mb-8 border-b text-sm lg:text-base'>
          {isTag && '#'} {selectedTitle} <span className='text-red-500'>{postMetas.length}</span>
        </h6>
      )}
      {postMetas.length > 0
        ? SortUtil.compareDescDateByPostMetas(postMetas).map((meta, i) => <Post key={meta.title + meta.date + i} postMeta={meta} />)
        : '등록된 게시물이 없습니다.'}
    </div>
  );
};

export default Posts;
