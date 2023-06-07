import Link from 'next/link';
import React from 'react';
import { Menu } from 'react-feather';
import Navbar from '../Navbar';
import { HeaderProps } from '@/types/Blog';
import ThemeMode from '../ThemeMode';

const HeaderContent: React.FC<HeaderProps> = (props) => {
  return (
    <div className="flex justify-between items-center h-14 sm:h-16 px-4 max-w-6xl mx-auto">
      <Menu className="sm:hidden cursor-pointer" />
      <Link href="/">윤로그:dev</Link>
      <Navbar />
      <div className="flex items-center">
        <ThemeMode {...props} />
        <div className="cursor-pointer ml-4">AboutMe</div>
      </div>
    </div>
  );
};

export default HeaderContent;
