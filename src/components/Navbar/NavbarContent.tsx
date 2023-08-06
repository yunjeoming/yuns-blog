import React, { useCallback } from 'react';
import { NavbarProps } from '@/types/Common';
import { usePathname } from 'next/navigation';
import { NavbarLink } from '../Link';

const links = [
  {
    name: 'Blog',
    href: '/blog',
  },
  // {
  //   name: 'Memo',
  //   href: '/memo',
  // },
  {
    name: 'Issue',
    href: '/issue',
  },
  // {
  //   name: 'Resume',
  //   href: '/resume',
  // },
];

const NavbarContent: React.FC<NavbarProps> = ({ closeMenu }) => {
  const pathname = '/' + usePathname().split('/')[1];
  const handleClick = useCallback(() => {
    closeMenu && closeMenu();
  }, []);

  return (
    <>
      {links.map((link) => (
        <NavbarLink key={link.name} link={link} onClick={handleClick} selected={link.href == pathname} />
      ))}
    </>
  );
};

export default NavbarContent;