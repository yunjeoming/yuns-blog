import React from 'react';
import Navbar from '.';
import { MenuProps } from '@/types/Common';

const MenuNavbar: React.FC<MenuProps> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col items-center [&>*]:w-full [&>*]:p-3">
      <Navbar closeMenu={closeMenu} />
    </div>
  );
};

export default MenuNavbar;
