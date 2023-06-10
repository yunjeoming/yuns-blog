import React, { useCallback } from 'react';
import Link from 'next/link';
import { NavbarProps } from '@/types/Common';

const links = [
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Archive',
    href: '/archive',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
];

const NavbarContent: React.FC<NavbarProps> = ({ closeMenu }) => {
  const handleClick = useCallback(() => {
    closeMenu && closeMenu();
  }, []);

  return (
    <>
      {links.map((link) => (
        <Link key={link.name} className="text-center hover:text-navbar-hover" href={link.href} onClick={handleClick}>
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavbarContent;
