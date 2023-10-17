'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import CategoryItem from './CategoryItem';
import { Constants } from '@/constants';
import { SeriesType } from '@/types/post';

interface Props {
  categories: SeriesType[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  const currPath = usePathname();
  const isAllCategory = currPath === '/blog' || currPath === `/blog/category/${Constants.CATEGORY_ALL}`;
  const currCategory = isAllCategory ? Constants.CATEGORY_ALL : currPath.split('/')[3];
  const decodedCategory = decodeURIComponent(currCategory);

  return (
    <ul className="flex flex-col gap-2 text-sm text-aside font-light">
      {categories.map((category) => (
        <CategoryItem
          key={category[0]}
          name={category[0]}
          total={category[1].length}
          selected={decodedCategory === category[0]}
        />
      ))}
    </ul>
  );
};

export default Categories;
