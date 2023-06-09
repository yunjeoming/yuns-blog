import Link from 'next/link';
import React from 'react';

interface Props {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
}

const TagItem: React.FC<Props> = ({ name, className, size = 'sm' }) => {
  return (
    <Link
      href={`/blog/tag/${name}`}
      className={`text-${size} text-tag bg-tag rounded-3xl px-2 py-1 max-sm:text-xs dark:text-tag-dark dark:bg-tag-dark ${className}`}
    >
      {name}
    </Link>
  );
};

export default TagItem;
