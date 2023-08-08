import { FC } from 'react';
import Link from 'next/link';

type Props = {
  link: {
    name: string;
    href: string;
  };
  onClick: () => void;
  selected?: boolean;
};

const NavbarLink: FC<Props> = ({ link: { name, href }, onClick, selected = false }) => {
  const selectedStyle = 'font-medium';
  const defaultStyle = 'font-light hover:text-navbar-hover';

  return (
    <Link key={name} className={`text-center ${selected ? selectedStyle : defaultStyle}`} href={href} onClick={onClick}>
      {name}
    </Link>
  );
};

export default NavbarLink;
