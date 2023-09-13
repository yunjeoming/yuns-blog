import { FC } from 'react';

interface Props {
  children: string;
  styles?: string;
  underline?: boolean;
  thickness?: 'bold' | 'medium';
}

const getCommonStyles = (thickness: 'bold' | 'medium', underline: boolean, styles?: string) => {
  return `font-${thickness} pb-2 ${underline ? 'border-b mb-2' : ''} ${styles ? styles : ''}`;
};

const H1: FC<Props> = ({ children, styles, underline = false, thickness = 'medium' }) => {
  return <h1 className={`text-3xl ${getCommonStyles(thickness, underline, styles)}`}>{children}</h1>;
};

const H2: FC<Props> = ({ children, styles, underline = false, thickness = 'medium' }) => {
  return <h2 className={`text-2xl ${getCommonStyles(thickness, underline, styles)}`}>{children}</h2>;
};

const H3: FC<Props> = ({ children, styles, underline = false, thickness = 'medium' }) => {
  return <h3 className={`text-xl ${getCommonStyles(thickness, underline, styles)}`}>{children}</h3>;
};

export { H1, H2, H3 };
