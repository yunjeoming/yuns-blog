import React from 'react';
import HeaderContent from './HeaderContent';
import { HeaderProps } from '@/types/Blog';

const MainHeader: React.FC<HeaderProps> = (props) => {
  return (
    <header className="flex-shrink-0 w-full text-base sm:text-lg border-b">
      <HeaderContent {...props} />
    </header>
  );
};

export default MainHeader;
