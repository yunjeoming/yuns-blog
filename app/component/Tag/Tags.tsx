'use client';

import React from 'react';
import { SelectedTag, Tag } from './';
import { ChevronUp, ChevronDown } from 'react-feather';
import { PostPage } from '@/src/types/Common';
import useMoreAndHide from '@/src/hooks/useMoreAndHide';

interface Props {
  tags: string[];
  selectedTag: string;
  pageName: PostPage;
}

const Tags: React.FC<Props> = ({ tags, selectedTag, pageName }) => {
  const { handleClick, isOverHeight, showAllTags, tagsRef } = useMoreAndHide(selectedTag);

  return (
    <aside className="flex-grow-0 flex-shrink-0 w-full lg:w-auto lg:basis-60 lg:py-4 lg:px-2 lg:mr-6 lg:h-fit max-lg:mb-8">
      <div className="mb-2 lg:mb-4 dark:text-tag-dark">Tag</div>
      <div className="flex flex-wrap overflow-hidden gap-2 max-h-7 sm:max-h-8 lg:max-h-[14rem]" ref={tagsRef}>
        {tags.map((t) =>
          t == selectedTag ? (
            <SelectedTag key={t} name={t} pageName={pageName} />
          ) : (
            <Tag key={t} name={t} pageName={pageName} />
          ),
        )}
      </div>
      {isOverHeight ? (
        <button className="flex justify-center items-center w-full p-2 text-sm sm:text-base" onClick={handleClick}>
          {showAllTags ? (
            <>
              <span>Hide</span>
              <ChevronUp size={'1rem'} />
            </>
          ) : (
            <>
              <span>More</span>
              <ChevronDown size={'1rem'} />
            </>
          )}
        </button>
      ) : null}
    </aside>
  );
};

export default Tags;
