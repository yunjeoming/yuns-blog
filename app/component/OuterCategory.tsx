'use client';

import React, { useEffect, useRef, useState } from 'react';
import InnerCategory from './InnerCategory';
import { Category } from '@/types/Blog';
import Link from 'next/link';
import { ChevronRight, ChevronDown } from 'react-feather';

const OuterCategory = ({ category: { name, children } }: { category: Category }) => {
  const [expanded, setExpanded] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const onClickArrow = () => {
    setExpanded((state) => !state);
  };

  useEffect(() => {
    if (!ulRef.current) return;
    if (expanded) {
      ulRef.current.classList.add('show');
    } else {
      ulRef.current.classList.remove('show');
    }
  }, [expanded]);

  return (
    <li>
      <div className="relative flex items-center">
        {children && (
          <div
            className="absolute top-0 left-0 w-5 h-full cursor-pointer flex justify-center items-center"
            onClick={onClickArrow}
          >
            {expanded ? <ChevronDown size={'1rem'} /> : <ChevronRight size={'1rem'} />}
          </div>
        )}
        <Link href={`/blog/${name}`} className="ml-5">
          {name}
        </Link>
      </div>
      {children && (
        <ul ref={ulRef} className='inner-category'>
          {children.map((c) => (
            <InnerCategory key={c.name} category={c} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default OuterCategory;
