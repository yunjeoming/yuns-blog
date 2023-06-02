import React from 'react';
import Navbar from './Navbar';
import { Menu } from 'react-feather';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-between items-center h-14 sm:h-16 px-4 max-w-7xl mx-auto">
      <Menu className="sm:hidden cursor-pointer" />
      <Link href="/">윤로그:dev</Link>
      <Navbar />
      <div className="cursor-pointer">AboutMe</div>
    </div>
  );
}

const MainHeader = () => {
  return (
    <header className="flex-shrink-0 w-full text-base sm:text-lg border-b bg-white">
      <Header />
    </header>
  );
}

export default MainHeader;
