import React from 'react'
import Navbar from '.';

const HeaderNavbar = () => {
  return (
    <nav className="max-sm:hidden [&>*:not(:last-child)]:mr-5 lg:[&>*:not(:last-child)]:mr-10 font-light">
      <Navbar />
    </nav>
  );
}

export default HeaderNavbar