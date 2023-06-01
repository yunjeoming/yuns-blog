import React from 'react';
import InnerCategory from './InnerCategory';
import { Category } from '@/types/Blog';
import Link from 'next/link';

const OuterCategory = ({ category: { name, children } }: { category: Category }) => {
  return (
    <li>
      <Link href={`/blog/${name}`}>{name}</Link>
      {children && (
        <ul>
          {children.map((c) => (
            <InnerCategory key={c.name} category={c} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default OuterCategory;
