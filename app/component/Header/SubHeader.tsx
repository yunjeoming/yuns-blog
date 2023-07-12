'use client';

import React, { useEffect, useRef } from 'react';
import { throttle } from '@/src/utils/throttle';
import { HeaderProps } from '@/src/types/Common';
import { HeaderContent } from './';

const SubHeader: React.FC<HeaderProps> = (props) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const prevScrollPos = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = throttle(() => {
      if (!headerRef.current) return;
      let currentScrollPos = window.scrollY;
      if (currentScrollPos >= prevScrollPos.current || window.scrollY == 0) {
        headerRef.current.style.opacity = '0';
        headerRef.current.style.visibility = 'hidden';
      } else {
        headerRef.current.style.opacity = '1';
        headerRef.current.style.visibility = 'visible';
      }
      prevScrollPos.current = currentScrollPos;
    }, 200);

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div
      className="sub-header flex-shrink-0 w-full text-base sm:text-lg border-b dark:bg-main-dark dark:text-main-dark dark:border-b-dark-header"
      ref={headerRef}
    >
      <HeaderContent {...props} />
    </div>
  );
};

export default SubHeader;
