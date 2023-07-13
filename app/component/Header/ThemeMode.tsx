import React, { useCallback } from 'react';
import { Moon, Sun } from 'react-feather';

const ThemeMode = () => {
  const changeTheme = useCallback(() => {
    const currTheme = localStorage.getItem('theme');
    if (currTheme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    document.body.classList.toggle('dark');
  }, []);

  return (
    <div className="cursor-pointer" onClick={changeTheme}>
      <Sun color="red" className="dark:hidden" />
      <Moon color="yellow" className="hidden dark:block" />
    </div>
  );
};

export default ThemeMode;
