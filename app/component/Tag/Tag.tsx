import React from 'react';
import Link from 'next/link';
import { TagProps } from '@/types/Blog';

const Tag: React.FC<TagProps> = ({ name, className = '', size = 'sm' }) => {
  const href = name === 'ALL' ? '/blog' : `/blog/tag/${name}`;
  return (
    <Link
      href={href}
      className={`tag bg-tag text-tag text-${size} hover:bg-tag-hover dark:hover:bg-tag-hover-dark ${className}`}
    >
      {name}
    </Link>
  );
};

export default Tag;
