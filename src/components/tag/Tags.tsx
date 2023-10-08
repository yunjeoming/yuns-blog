'use client';

import React from 'react';
import Tag from './Tag';
import TagMoreAndHideButton from './TagMoreAndHideButton';
import { useMoreAndHide } from '@/hooks';
import { usePathname } from 'next/navigation';
import { Constants } from '@/constants';

interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  const { handleClick, showAllTags, tagsRef } = useMoreAndHide();
  const currPath = usePathname();
  const isAllTag = currPath === '/blog' || currPath === `/blog/tag/${Constants.TAG_ALL}`;
  const currTag = isAllTag ? Constants.CATEGORY_ALL : currPath.split('/')[3];
  const decodedTag = decodeURIComponent(currTag);

  return (
    <div>
      <div className="mb-3 text-sm dark:text-tag-dark">Tag</div>
      <div className="flex flex-wrap overflow-hidden gap-1 text-aside max-h-14 lg:max-h-[13rem]" ref={tagsRef}>
        {tags.map((t) => (
          <Tag key={t} name={t} size="xs" selected={decodedTag === t} />
        ))}
      </div>
      <TagMoreAndHideButton handleClick={handleClick} showAllTags={showAllTags} />
    </div>
  );
};

export default Tags;
