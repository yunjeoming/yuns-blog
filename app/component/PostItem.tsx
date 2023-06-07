'use client';

import { Post } from '@/types/Blog';
import React, { useCallback } from 'react';
import TagItem from './TagItem';
import { useRouter } from 'next/router';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post: { title, description, date, tags } }) => {
  // const router = useRouter();
  const handleClick = useCallback(() => {
    // router.push(`/blog/${title}`);
  }, []);

  return (
    <div className="pt-4 pb-8 px-2 my-4" onClick={handleClick}>
      <div className="sm:relative sm:pr-36">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex justify-between my-3 max-sm:text-sm">
          <p className="line-clamp-3 mr-4 overflow-hidden sm:line-clamp-2 sm:mr-0">{description}</p>
          <div className="basis-20 flex-shrink-0 border h-14 sm:absolute sm:top-0 sm:right-0 sm:w-28 sm:h-24">
            <span>이미지</span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-sm text-stone-500 max-sm:flex-wrap max-sm:gap-1">
        <span className="mr-2">{new Date(date).toLocaleDateString().slice(0, -1)}</span>
        {tags && (
          <div className="flex gap-1">
            {tags.map((t) => (
              <TagItem key={t} name={t} size="xs" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
