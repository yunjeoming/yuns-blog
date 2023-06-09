import React from 'react';
import TagItem from './TagItem';

interface Props {
  tags: string[];
}

const TagList = ({ tags }: Props) => {
  return (
    <aside className="flex-grow-0 flex-shrink-0 mt-6 lg:basis-60 lg:py-4 lg:px-2 lg:mr-6 lg:h-fit">
      <div className="mb-2 lg:mb-4 dark:text-tag-dark">Tag</div>
      <div className="flex flex-wrap gap-1">
        {tags.map((t) => (
          <TagItem key={t} name={t} />
        ))}
      </div>
    </aside>
  );
};

export default TagList;
