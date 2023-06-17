import React from 'react';
import Link from 'next/link';
import { TagProps } from '@/types/Common';

const Tag: React.FC<TagProps> = ({ name, className = '', size = 'sm', pageName }) => {
  const href = name === 'ALL' ? `/${pageName}` : `/${pageName}/tag/${name}`;
  return (
    <Link
      href={href}
      className={`tag text-tag text-${size} border border-tag hover:text-tag-hover ${className}`}
    >
      {name}
    </Link>
  );
};

export default Tag;
