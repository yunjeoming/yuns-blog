import React from 'react';
import Link from 'next/link';
import { TagProps } from '@/types/common';

const Tag: React.FC<TagProps> = ({ name, className = '', size = 'sm', pageName, selected = false }) => {
  const href = name === 'ALL' ? `/${pageName}` : `/${pageName}/tag/${name}`;
  const defaultStyle = 'border border-tag hover:text-tag-hover';
  const selectedStyle =
    'bg-tag bg-tag-selected text-tag-selected dark:bg-tag-selected-dark dark:text-tag-selected-dark';
  const styles = selected ? selectedStyle : defaultStyle;

  return (
    <Link href={href} className={`tag text-${size} ${styles} ${className}`}>
      {name}
    </Link>
  );
};

export default Tag;
