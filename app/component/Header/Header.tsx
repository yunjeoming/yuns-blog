'use client';

import React, { useCallback, useState } from 'react';
import { Theme } from '@/types/Blog';
import { MainHeader, SubHeader } from './';

interface Props {
  theme: string;
}

const Header: React.FC<Props> = ({ theme: cookieTheme }) => {
  const [theme, setTheme] = useState<Theme>(cookieTheme as Theme);

  const changeTheme = useCallback(() => {
    document.documentElement.classList.toggle('dark');
    setTheme((state) => (state === 'dark' ? 'light' : 'dark'));
    if (theme === 'dark') {
      document.cookie = 'theme=light;';
    } else {
      document.cookie = 'theme=dark;';
    }
  }, []);

  return (
    <>
      <MainHeader theme={theme} changeTheme={changeTheme} />
      <SubHeader theme={theme} changeTheme={changeTheme} />
    </>
  );
};

export default Header;
