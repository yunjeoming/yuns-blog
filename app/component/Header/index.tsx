'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import { Theme } from '@/types/Blog';

interface Props {
  theme: string;
}

export const Header: React.FC<Props> = ({ theme: cookieTheme }) => {
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
