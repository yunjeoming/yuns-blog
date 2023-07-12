import React from 'react';
import { HeaderProps } from '@/src/types/Common';
import { HeaderContent } from './';

const MainHeader: React.FC<HeaderProps> = (props) => {
  return (
    <header className="flex-shrink-0 w-full text-base sm:text-lg border-b mb-8">
      <HeaderContent {...props} />
    </header>
  );
};

export default MainHeader;
