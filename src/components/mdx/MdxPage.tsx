'use client';

import React, { useRef } from 'react';
import { DateUtil } from '@/utils/date';
import { Tag } from '../tag';
import { IPost } from '@/types/post';
import { Comments } from '../comments';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Toc } from '../toc';

interface Props {
  post: IPost;
}

const MdxPage = ({ post }: Props) => {
  const { meta, content } = post;
  const { title, description, date, tags, slug } = meta;
  const MDXContent = useMDXComponent(content);
  const contentRef = useRef(null);

  return (
    <>
      <div className="flex flex-col flex-grow w-full max-w-post dark:[&>hr]:border-[#374151]">
        <h1 className="text-center font-medium my-4 break-keep text-2xl md:text-4xl">{title}</h1>
        <time dateTime={date} className="text-sm text-stone-500 text-center">
          {DateUtil.convertDateFormat(date)}
        </time>
        {description && <p className="text-center xs:m-1">{description}</p>}
        <hr className="my-6" />
        <div
          className="relative max-w-full prose dark:prose-invert prose-pre:not-prose [&>*:last-child]:mb-0"
          ref={contentRef}
        >
          <Toc slug={slug} contentRef={contentRef} />
          <MDXContent />
        </div>
        {tags.length > 0 && (
          <>
            <hr className="mt-12 mb-6" />
            <div className="flex flex-wrap gap-1">
              {tags.map((t) => (
                <Tag key={t} name={t} />
              ))}
            </div>
          </>
        )}
      </div>
      <Comments />
    </>
  );
};

export default MdxPage;
