'use client';

import React from 'react';
import { MainHeader, SubHeader } from './';
import useLocalStorage from '@/src/hooks/useLocalStorage';

const Header = () => {
  const { theme, changeTheme } = useLocalStorage();

  return (
    <>
      <MainHeader theme={theme} changeTheme={changeTheme} />
      <SubHeader theme={theme} changeTheme={changeTheme} />
    </>
  );
};

export default Header;
