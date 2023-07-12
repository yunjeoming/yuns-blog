import { useCallback, useEffect, useState } from 'react';
import { Theme } from '../types/Common';

const useLocalStorage = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  );

  const changeTheme = useCallback(() => {
    const currTheme = localStorage.getItem('theme');
    if (currTheme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    document.body.classList.toggle('dark');
    setTheme((state) => (state === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add(theme);
    }
  }, []);

  return { theme, changeTheme };
};

export default useLocalStorage;
