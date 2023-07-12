import React from 'react';
import { PostProps } from '@/src/types/Post';
import TimeStamp from '../TimeStamp';
import Link from 'next/link';

const Memo: React.FC<PostProps> = ({
  post: {
    content,
    meta: { title, date, slug },
  },
}) => {
  return (
    <article className="flex-grow-0 basis-full sm:basis-[48%] border rounded-md p-4">
      <Link href={`/${slug}`}>
        <h3 className="font-semibold">{title}</h3>
        <TimeStamp date={date} />
        {content && (
          <div className="p-2">
            <div
              className="line-clamp-5 overflow-hidden [&>*]:mb-3 [&>*:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}
      </Link>
    </article>
  );
};

export default Memo;
