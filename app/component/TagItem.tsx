import Link from 'next/link';
import React from 'react';

interface Props {
  name: string;
  size?: 'xs' | 'sm' | 'md';
}

const TagItem: React.FC<Props> = ({ name, size = 'sm' }) => {
  return (
    <Link
      href={`/blog/tag/${name}`}
      className={`text-${size} bg-[#f2f2f2] text-[#6a6a6a] rounded-3xl px-2 py-1 max-sm:text-xs dark:text-[#ececec] dark:bg-[#706c6c]`}
    >
      {name}
    </Link>
  );
};

export default TagItem;
