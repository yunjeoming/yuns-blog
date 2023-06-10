import { MenuProps } from '@/types/Common';
import Link from 'next/link';
import React, { useCallback } from 'react';

const Navbar: React.FC<MenuProps> = ({ closeMenu }) => {
  const handleClick = useCallback(() => {
    closeMenu && closeMenu();
  }, []);
  
  return (
    <>
      <Link className="text-center" href="/blog" onClick={handleClick}>
        Blog
      </Link>
      <Link className="text-center" href="/archive" onClick={handleClick}>
        Archive
      </Link>
      <Link className="text-center" href="/resume" onClick={handleClick}>
        Resume
      </Link>
    </>
  );
};

export default Navbar;
