import { Metadata } from 'next';
import { Constants } from '@/constants';
import { SubLayout } from '@/layouts';

export const metadata: Metadata = {
  title: Constants.PORTFOLIO_TITLE,
  description: Constants.PORTFOLIO_DESCRIPTION,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <SubLayout>{children}</SubLayout>;
};

export default layout;
