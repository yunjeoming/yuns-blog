import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="max-sm:hidden [&>*:not(:last-child)]:mr-5 lg:[&>*:not(:last-child)]:mr-10 font-light">
      <Link href="/blog">Blog</Link>
      <Link href="/archive">Archive</Link>
      <Link href="/resume">Resume</Link>
    </nav>
  );
};

export default Navbar;
