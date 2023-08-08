import React from 'react';
import { PostProps } from '@/types/Post';
import TimeStamp from '../TimeStamp';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { H3 } from '../Title/Title';

const Memo: React.FC<PostProps> = ({
  post: {
    content,
    meta: { title, date, slug },
  },
}) => {
  const MDXContent = useMDXComponent(content);
  return (
    <article className="flex-grow-0 basis-full sm:basis-[48%] border rounded-md p-4">
      <Link href={`/${slug}`}>
        <H3 thickness='semibold'>{title}</H3>
        <TimeStamp date={date} />
        {content && (
          <div className="p-2">
            <div className="line-clamp-5 overflow-hidden [&>*]:mb-3 [&>*:last-child]:mb-0">
              <MDXContent />
            </div>
          </div>
        )}
      </Link>
    </article>
  );
};

export default Memo;
