import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Menu as MenuIcon } from 'react-feather';
import { HeaderProps } from '@/types/Blog';
import ThemeMode from '../ThemeMode';
import Menu from '../Menu';
import HeaderNavbar from '../Navbar/HeaderNavbar';

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
      <div className="flex justify-between items-center h-14 sm:h-16 px-4 max-w-6xl mx-auto" ref={ref}>
        <MenuIcon className="sm:hidden cursor-pointer" onClick={handleClickMenu} />
        <Link href="/">윤로그:dev</Link>
        <HeaderNavbar />
        <ThemeMode {...props} />
      </div>
      {openMenu && <Menu closeMenu={closeMenu} />}
    </>
  );
};

export default HeaderContent;
