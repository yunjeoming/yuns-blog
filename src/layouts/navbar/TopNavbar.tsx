import React from 'react';
import { NavbarContent } from '.';

const TopNavbar = () => {
  return (
    <nav className="text-center [&>*:not(:last-child)]:mr-5 lg:[&>*:not(:last-child)]:mr-10">
      <NavbarContent />
    </nav>
  );
};

export default TopNavbar;
