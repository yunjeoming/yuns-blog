'use client';

import React, { useEffect, useRef } from 'react';
import { throttle } from '@/utils/throttle';
import HeaderContent from './HeaderContent';
import { HeaderProps } from '@/types/Blog';

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
      className="sub-header flex-shrink-0 w-full text-base sm:text-lg border-b dark:bg-[#202123] dark:text-[#ececec] dark:border-b-[#898989]"
      ref={headerRef}
    >
      <HeaderContent {...props} />
    </div>
  );
};

export default SubHeader;
