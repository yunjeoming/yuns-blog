import React from 'react';
import { format, parseISO } from 'date-fns';
import { IPost } from '@/types/Blog';
import { DateUtil } from '@/utils/date';
import { Tag } from './Tag';

interface Props {
  post: IPost;
}

const MDXComponent = ({ post }: Props) => {
  const {
    meta: { title, description, date, tags },
    content,
  } = post;
  return (
    <div className="flex flex-col flex-grow w-full prose max-sm:prose-sm max-w-4xl prose- dark:prose-invert dark:prose-pre:bg-main-dark dark:prose-pre:border">
      <h1 className="text-center my-6 max-md:mb-4">{title}</h1>
      <time dateTime={date} className="text-sm text-stone-500 text-center">
        {DateUtil.convertDateFormat(date)}
      </time>
      {description && <p className="text-center xs:m-1">{description}</p>}
      <hr className="xs:mt-3 xs:mb-6 md:mt-6 md:mb-8" />
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.content }} />
      <hr className="xs:my-3 md:my-6" />
      <div className="not-prose">
        {tags.map((t) => (
          <Tag key={t} name={t} size="md" className="mr-2" />
        ))}
      </div>
    </div>
  );
};

export default MDXComponent;
