import React from 'react';
import { PostProps } from '@/types/post';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { TimeStamp } from '@/components/post';
import { H3 } from '@/components/title';

const Memo: React.FC<PostProps> = ({
  post: {
    content,
    meta: { title, date, slug },
  },
}) => {
  const MDXContent = useMDXComponent(content);
  return (
    <article className="border rounded-md p-4">
      <Link href={`/${slug}`}>
        <H3 thickness='medium'>{title}</H3>
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
