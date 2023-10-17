'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { TopNavbar } from '../navbar';
import ThemeMode from './ThemeMode';

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 left-0 flex-shrink-0 w-full text-base lg:text-lg border-b mb-8 bg-main dark:bg-main-dark z-10">
      <div className="flex justify-between items-center h-header-mo lg:h-header-pc px-4 max-w-header mx-auto" ref={ref}>
        <Link href="/" className="font-medium">
          <span className="text-sky-500">윤</span>로그
        </Link>
        <TopNavbar />
        <ThemeMode />
      </div>
    </header>
  );
};

export default Header;
