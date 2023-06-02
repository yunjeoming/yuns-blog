'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { Menu } from 'react-feather';
import Link from 'next/link';
import { throttle } from '@/utils/throttle';

const SubHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const prevScrollPos = useRef(window.pageYOffset);

  useEffect(() => {
    const handler = throttle(() => {
      if (!headerRef.current) return;
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos < prevScrollPos.current) {
        headerRef.current.style.opacity = '1';
      } else {
        headerRef.current.style.opacity = '0';
      }
      prevScrollPos.current = currentScrollPos;
    }, 200);

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className="sub-header flex-shrink-0 w-full text-base sm:text-lg border-b bg-white" ref={headerRef}>
      <div className="flex justify-between items-center h-14 sm:h-16 px-4 max-w-7xl mx-auto">
        <Menu className="sm:hidden cursor-pointer" />
        <Link href="/">윤로그:dev</Link>
        <Navbar />
        <div className="cursor-pointer">AboutMe</div>
      </div>
    </div>
  );
};

export default SubHeader;
