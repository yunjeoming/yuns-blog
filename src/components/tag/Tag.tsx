import React from 'react';
import Link from 'next/link';
import { TagProps } from '@/types/common';
import { Constants } from '@/constants';

const Tag: React.FC<TagProps> = ({ name, className = '', size = 'sm', selected = false }) => {
  const selectedStyle = 'text-tag-selected bg-tag-selected border-none hover:text-tag-selected';
  const url = name === Constants.TAG_ALL ? `./blog` : `./blog/tag/${name}`;

  return (
    <Link
      href={url}
      className={`tag text-${size} border border-stone-300 hover:text-tag-hover ${className} ${
        selected && selectedStyle
      }`}
    >
      {name}
    </Link>
  );
};

export default Tag;
