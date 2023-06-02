'use client';
import React, { useRef } from 'react';
import OuterCategory from './OuterCategory';

const Aside = () => {
  const ulRef = useRef<HTMLUListElement>(null);
  const clickOuterCategory = () => {
    console.log('click');
    if (ulRef.current) {
      console.log(ulRef.current);
      ulRef.current.classList.toggle('category__open');
    }
  };

  const category = [
    {
      name: 'Error',
    },
    {
      name: 'JavaScript & TypeScript',
    },
    {
      name: '운영체제',
    },
    {
      name: '알고리즘',
    },
    {
      name: 'Frontend',
      children: [
        {
          name: 'React',
        },
        {
          name: 'CSS',
        },
      ],
    },
    {
      name: 'Backend',
      children: [
        {
          name: 'Spring',
        },
        {
          name: 'Sample',
        },
      ],
    },
  ];
  return (
    <aside className="max-lg:hidden lg:text-yellow-400 basis-60 h-fit flex-shrink-0 p-4 pl-2 mt-6 [&>ul>li]:mb-4 border-r-2">
      <ul>
        {category.map((c) => (
          <OuterCategory key={c.name} category={c} />
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
