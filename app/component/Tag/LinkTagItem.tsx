import Link from 'next/link';
import React from 'react';

interface Props {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
  selected?: boolean;
}

const LinkTagItem: React.FC<Props> = ({ name, className = '', size = 'sm', selected }) => {
  const href = name === 'ALL' ? '/blog' : `/blog/tag/${name}`;
  const selectedStyles = selected
    ? `bg-tag-selected text-tag-selected dark:bg-tag-selected-dark dark:text-tag-selected-dark`
    : `hover:bg-tag-hover dark:hover:bg-tag-hover-dark`;
  return (
    <Link href={href} className={`tag bg-tag text-tag text-${size} ${selectedStyles} ${className}`}>
      {name}
    </Link>
  );
};

export default LinkTagItem;
