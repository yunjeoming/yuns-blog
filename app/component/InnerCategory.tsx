import { Category } from '@/types/Blog';
import Link from 'next/link';
import React from 'react';

const InnerCategory = ({ category: { name } }: { category: Category }) => {
  return (
    <li>
      <Link href={`/blog/${name}`}>{name}</Link>
    </li>
  );
};

export default InnerCategory;
