import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Constants } from '@/constants';
import { SubLayout } from '@/layouts';

export const metadata: Metadata = {
  title: Constants.SERIES_TITLE,
  description: Constants.SERIES_DESCRIPTION,
};

const layout = ({ children }: { children: ReactNode }) => {
  return <SubLayout>{children}</SubLayout>;
};

export default layout;
