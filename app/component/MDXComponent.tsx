import React from 'react';
import { IPost } from '@/types/Blog';
import { convertDateFormat } from '@/utils/date';
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
    <>
      <h1 className="text-center my-6 max-md:mb-4">{title}</h1>
      <span className="text-sm text-stone-500 text-center">{convertDateFormat(date)}</span>
      {description && <p className="text-center xs:m-1">{description}</p>}
      <hr className="xs:mt-3 xs:mb-6 md:mt-6 md:mb-8" />
      {content}
      <hr className="xs:my-3 md:my-6" />
      <div className="not-prose">
        {tags.map((t) => (
          <Tag key={t} name={t} size="md" className="mr-2" />
        ))}
      </div>
    </>
  );
};

export default MDXComponent;
