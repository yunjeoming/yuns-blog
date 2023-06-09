import React from 'react';
import Link from 'next/link';
import { TagProps } from '@/src/types/Common';

const SelectedTag: React.FC<TagProps> = ({ name, className = '', size = 'sm', pageName }) => {
  const href = name === 'ALL' ? `/${pageName}` : `/${pageName}/tag/${name}`;
  return (
    <Link
      href={href}
      className={`tag bg-tag text-tag text-${size} bg-tag-selected text-tag-selected dark:bg-tag-selected-dark dark:text-tag-selected-dark ${className}`}
    >
      {name}
    </Link>
  );
};

export default SelectedTag;
