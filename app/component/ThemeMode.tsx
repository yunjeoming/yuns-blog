'use client';

import React from 'react';
import { HeaderProps } from '@/types/Blog';
import { Moon, Sun } from 'react-feather';

const ThemeMode: React.FC<HeaderProps> = ({ theme, changeTheme }) => {
  return (
    <div className="cursor-pointer" onClick={changeTheme}>
      {theme === 'light' ? <Sun color="red" /> : <Moon color='yellow' />}
    </div>
  );
};

export default ThemeMode;
