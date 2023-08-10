import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full p-10 sm:p-14 gap-2 text-sm">
      <div>Copyright. 2023 Ⓒ Yunjeong Lee</div>
      <div>
        <Link href="https://github.com/yunjeoming" className="cursor-pointer dark:text-white">
          <Image alt="github svg" width={20} height={20} src={`/static/github-mark.svg`} className='dark:invert' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
