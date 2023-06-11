'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { convertDateFormat } from '@/utils/date';
import { IPostMeta } from '@/types/Blog';
import { Tag } from '../Tag';

interface Props {
  meta: IPostMeta;
}

const Post: React.FC<Props> = ({ meta: { title, description, date, tags, slug } }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/blog/${slug}`);
  }, []);

  return (
    <div className="pt-4 pb-8 px-2 mb-4">
      <div className="sm:relative sm:pr-36 cursor-pointer" onClick={handleClick}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex justify-between my-3 max-sm:text-sm">
          <p className="line-clamp-3 mr-4 overflow-hidden sm:line-clamp-2 sm:mr-0">{description}</p>
          <div className="basis-20 flex-shrink-0 border h-14 sm:absolute sm:top-0 sm:right-0 sm:w-28 sm:h-24">
            <span>이미지</span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-sm text-stone-500 max-sm:flex-wrap max-sm:gap-1">
        <span className="mr-2">{convertDateFormat(date)}</span>
        {tags && (
          <div className="flex gap-1">
            {tags.map((t) => (
              <Tag key={t} name={t} size="xs" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
