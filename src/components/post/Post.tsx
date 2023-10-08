'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { PostMetaProps } from '@/types/post';
import { H3 } from '../title/Title';
import { Tag } from '../tag';
import TimeStamp from './TimeStamp';

const Post: React.FC<PostMetaProps> = ({ postMeta: { title, description, date, tags, slug, imgUrl } }) => {
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/${slug}`);
  }, []);

  return (
    <article className="mb-8 lg:mb-16 sm:[&>div]:pr-40">
      <div className="sm:relative cursor-pointer" onClick={handleClick}>
        <div className="mb-4 sm:absolute sm:top-0 sm:right-0 sm:w-36 sm:h-auto sm:mb-0">
          <Image src={imgUrl} alt="게시글 이미지" width={600} height={400} className="w-full h-auto rounded-md" />
        </div>
        <H3>{title}</H3>
        <div className="flex justify-between mt-1 mb-3">
          <p className="text-stone-600 max-sm:text-sm line-clamp-3 mr-4 overflow-hidden sm:line-clamp-2 sm:mr-0">{description}</p>
        </div>
      </div>
      {tags && (
        <div className="flex flex-wrap gap-1 mb-1">
          {tags.map((t) => (
            <Tag key={t} name={t} size="xs" />
          ))}
        </div>
      )}
      <TimeStamp date={date} className="flex-shrink-0 mr-2" />
    </article>
  );
};

export default Post;
