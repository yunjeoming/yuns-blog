'use client';

import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon } from 'react-feather';
import { SideNavbar, TopNavbar } from '../Navbar';
import ThemeMode from './ThemeMode';

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenu = useCallback(() => {
    setOpenMenu((state) => !state);
  }, []);

  const closeMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <header className="sticky top-0 left-0 flex-shrink-0 w-full text-base sm:text-lg border-b mb-8 bg-main dark:bg-main-dark z-10">
      <div className="flex justify-between items-center h-header-mo sm:h-header-pc px-4 max-w-header mx-auto" ref={ref}>
        <MenuIcon className="sm:hidden cursor-pointer" onClick={handleClickMenu} />
        <Link href="/" className="font-medium">
          <span className="text-sky-500">윤</span>로그
        </Link>
        <TopNavbar />
        <ThemeMode />
      </div>
      {openMenu && <SideNavbar closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
