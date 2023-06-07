import Link from 'next/link';
import React from 'react';
import TagItem from './TagItem';

const TagList = () => {
  const tag = [
    'react',
    'javascript',
    'typescript',
    'dom',
    'cors',
    'closure',
    'class',
    'web apis',
    'nextjs',
    'threejs',
    '디자인패턴',
    '렌더링',
    '운영체제',
    '자바스크립트',
    '타입스크립트',
    'mdn',
  ];
  return (
    <>
      <div className="mb-2 lg:mb-4 dark:text-[#ececec]">Tag</div>
      <div className="flex flex-wrap gap-1">
        {tag.map((t) => (
          <TagItem key={t} name={t} />
        ))}
      </div>
    </>
  );
};

export default TagList;
