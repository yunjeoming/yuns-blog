import React from 'react';
import { NavbarContent } from './';

const TopNavbar = () => {
  return (
    <nav className="max-sm:hidden [&>*:not(:last-child)]:mr-5 lg:[&>*:not(:last-child)]:mr-10 font-light">
      <NavbarContent />
    </nav>
  );
};

export default TopNavbar;
