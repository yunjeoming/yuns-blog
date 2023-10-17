import { FC } from 'react';

interface Props {
  children: string | string[];
  styles?: string;
  underline?: boolean;
  thickness?: 'bold' | 'medium' | 'normal';
}

const getCommonStyles = (thickness: Props['thickness'], underline: Props['underline'], styles?: Props['styles']) => {
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

const H4: FC<Props> = ({ children, styles, underline = false, thickness = 'normal' }) => {
  return <h3 className={`text-lg ${getCommonStyles(thickness, underline, styles)}`}>{children}</h3>;
};

const H5: FC<Props> = ({ children, styles, underline = false, thickness = 'normal' }) => {
  return <h3 className={`text-base ${getCommonStyles(thickness, underline, styles)}`}>{children}</h3>;
};

export { H1, H2, H3, H4, H5 };
