import React from 'react';
import { NavbarProps } from '@/types/common';
import { NavbarContent } from '.';

const SideNavbar: React.FC<NavbarProps> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col items-center w-full h-main-mo overflow-auto bg-main dark:bg-main-dark border-t sm:hidden [&>*]:w-full [&>*]:p-3">
      <NavbarContent closeMenu={closeMenu} />
    </div>
  );
};

export default SideNavbar;
