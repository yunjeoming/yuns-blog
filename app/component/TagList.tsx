import React from 'react';
import LinkTagItem from './Tag/LinkTagItem';

interface Props {
  tags: string[];
  selectedTag: string;
}

const TagList:React.FC<Props> = ({ tags, selectedTag }) => {
  return (
    <aside className="flex-grow-0 flex-shrink-0 w-full lg:w-auto lg:basis-60 lg:py-4 lg:px-2 lg:mr-6 lg:h-fit max-lg:mb-8">
      <div className="mb-2 lg:mb-4 dark:text-tag-dark">Tag</div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <LinkTagItem key={t} name={t} selected={t == selectedTag} />
        ))}
      </div>
    </aside>
  );
};

export default TagList;
