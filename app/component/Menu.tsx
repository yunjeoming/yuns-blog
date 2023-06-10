import React from 'react';
import MenuNavbar from './Navbar/MenuNavbar';
import { MenuProps } from '@/types/Common';

const Menu: React.FC<MenuProps> = ({ closeMenu }) => {
  return (
    <div className="absolute top-header left-0 w-full h-main bg-main dark:bg-main-dark border-t sm:hidden">
      <MenuNavbar closeMenu={closeMenu} />
    </div>
  );
};

export default Menu;
