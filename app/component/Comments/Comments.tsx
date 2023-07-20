'use client';

import React, { useEffect, useRef } from 'react';

const Comments = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('src', 'https://giscus.app/client.js');
    script.setAttribute('data-repo', 'yunjeoming/yuns-blog');
    script.setAttribute('data-repo-id', 'R_kgDOJnu5ug');
    script.setAttribute('data-category', 'Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOJnu5us4CX_VZ');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');

    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme') || 'light';
      script.setAttribute('data-theme', theme);
    }

    try {
      ref.current?.appendChild(script);
    } catch (error) {
      console.error('Error while rendering giscus widget.', error);
    }
  }, []);

  const changeGiscusTheme = (theme: string) => {
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: theme,
          },
        },
      },
      'https://giscus.app',
    );
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key) {
        changeGiscusTheme(event.key);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return <div ref={ref} className="w-full max-w-post mt-8 sm:mt-16"></div>;
};

export default Comments;
