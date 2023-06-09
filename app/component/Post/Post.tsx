'use client';

import React, { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Tag } from '../Tag';
import { PostMetaProps } from '@/src/types/Post';
import TimeStamp from '../TimeStamp';
import { PathUtil } from '@/src/utils/path';
import { PostPage } from '@/src/types/Common';
import Image from 'next/image';

const Post: React.FC<PostMetaProps> = ({ postMeta: { title, description, date, tags, slug, imgUrl } }) => {
  const pathname = usePathname();
  const rootName = PathUtil.getRootNameByFullPath(pathname) as PostPage;
  const router = useRouter();
  const handleClick = useCallback(() => {
    router.push(`/${slug}`);
  }, []);

  return (
    <article className="pt-4 pb-8 px-2 mb-4 sm:[&>div]:pr-40">
      <div className="sm:relative cursor-pointer" onClick={handleClick}>
        <div className="mb-4 sm:absolute sm:top-0 sm:right-0 sm:w-36 sm:h-auto sm:mb-0">
          <Image
            src={imgUrl}
            alt="게시글 이미지"
            width={600}
            height={400}
            className="w-full h-auto rounded-md"
          />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex justify-between my-3 max-sm:text-sm">
          <p className="line-clamp-3 mr-4 overflow-hidden sm:line-clamp-2 sm:mr-0">{description}</p>
        </div>
      </div>
      <div className="flex items-baseline text-sm text-stone-500 max-sm:flex-wrap max-sm:gap-1">
        <TimeStamp date={date} className="flex-shrink-0 mr-2" />
        {tags && (
          <div className="flex flex-wrap gap-1">
            {tags.map((t) => (
              <Tag key={t} name={t} size="xs" pageName={rootName} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default Post;
