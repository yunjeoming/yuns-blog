import { Post } from '@/types/Blog';
import { convertDateFormat } from '@/utils/date';
import React from 'react';
import TagItem from './TagItem';

interface Props {
  post: Post;
}

const MDXComponent = ({ post }: Props) => {
  const {
    meta: { title, description, date, tags },
    content,
  } = post;
  return (
    <>
      <h1 className="my-6">{title}</h1>
      <span className="text-sm text-stone-500">{convertDateFormat(date)}</span>
      {description && <p>{description}</p>}
      <hr />
      {content}
      <hr />
      <div className="not-prose">
        {tags.map((t) => (
          <TagItem key={t} name={t} size="md" className="mr-2" />
        ))}
      </div>
    </>
  );
};

export default MDXComponent;
