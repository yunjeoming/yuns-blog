import React from 'react';
import Link from 'next/link';
import { Constants } from '@/constants';

interface Props {
  name: string;
  total: number;
  selected?: boolean;
}

const CategoryItem: React.FC<Props> = ({ name, total, selected = false }) => {
  const url = name === Constants.CATEGORY_ALL ? `./blog` : `./blog/category/${name}`;

  return (
    <li
      className={`${
        selected ? 'text-aside-selected dark:text-aside-selected-dark font-normal' : 'hover:text-aside-hover'
      }`}
    >
      <Link href={url}>
        {name} ({total})
      </Link>
    </li>
  );
};

export default CategoryItem;
