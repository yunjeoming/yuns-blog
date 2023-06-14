import React, { useCallback } from 'react';
import Link from 'next/link';
import { NavbarProps } from '@/types/Common';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Memo',
    href: '/memo',
  },
  {
    name: 'Error',
    href: '/error',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
];

const NavbarContent: React.FC<NavbarProps> = ({ closeMenu }) => {
  const pathname = '/' + usePathname().split('/')[1];
  const handleClick = useCallback(() => {
    closeMenu && closeMenu();
  }, []);

  return (
    <>
      {links.map((link) =>
        link.href == pathname ? (
          <Link key={link.name} className="text-center font-bold" href={link.href} onClick={handleClick}>
            {link.name}
          </Link>
        ) : (
          <Link key={link.name} className="text-center hover:text-navbar-hover" href={link.href} onClick={handleClick}>
            {link.name}
          </Link>
        ),
      )}
    </>
  );
};

export default NavbarContent;
