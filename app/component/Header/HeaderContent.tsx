'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu as MenuIcon } from 'react-feather';
import { HeaderProps } from '@/types/Common';
import ThemeMode from '../ThemeMode';
import { SideNavbar, TopNavbar } from '../Navbar';

const HeaderContent: React.FC<HeaderProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenu = useCallback(() => {
    setOpenMenu((state) => !state);
  }, []);

  const closeMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const bodyElem = ref.current.closest('body')! as HTMLElement;
    if (openMenu) {
      bodyElem.style.overflow = 'hidden';
    } else {
      bodyElem.style.overflow = 'auto';
    }
  }, [openMenu]);

  return (
    <>
      <div className="flex justify-between items-center h-header-mo sm:h-header-pc px-4 max-w-header mx-auto" ref={ref}>
        <MenuIcon className="sm:hidden cursor-pointer" onClick={handleClickMenu} />
        <Link href="/">윤로그:dev</Link>
        <TopNavbar />
        <ThemeMode {...props} />
      </div>
      {openMenu && <SideNavbar closeMenu={closeMenu} />}
    </>
  );
};

export default HeaderContent;
