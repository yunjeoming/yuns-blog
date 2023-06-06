import Link from 'next/link';
import React from 'react';

interface Props {
  name: string;
  size?: 'xs' | 'sm' | 'md';
}

const TagItem: React.FC<Props> = ({ name, size = 'sm' }) => {
  return (
    <Link href={`/blog/tag/${name}`} className={`text-${size} border rounded-full px-2 py-1 max-sm:text-xs`}>
      {name}
    </Link>
  );
};

export default TagItem;
