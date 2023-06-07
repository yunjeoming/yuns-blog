'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import { Theme } from '@/types/Blog';

export const Header: React.FC = () => {
  const firstTheme = useMemo(() => {
    if (typeof document === 'undefined') return 'light';
    return document.cookie.split(';')[0].split('=')[1] as Theme;
  }, []);
  const [theme, setTheme] = useState<Theme>(firstTheme === 'light' ? 'light' : 'dark');

  const changeTheme = useCallback(() => {
    setTheme((state) => (state === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      document.cookie = 'theme=dark; max-age=10000';
    } else {
      document.documentElement.classList.remove('dark');
      document.cookie = 'theme=light; max-age=10000';
    }
  }, [theme]);

  return (
    <>
      <MainHeader theme={theme} changeTheme={changeTheme} />
      <SubHeader theme={theme} changeTheme={changeTheme} />
    </>
  );
};
