import { Metadata } from 'next';
import { Constants } from '@/constants';
import { BasicLayout } from '@/layouts';

export const metadata: Metadata = {
  title: Constants.BLOG_TITLE,
  description: Constants.BLOG_DESCRIPTION,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <BasicLayout>{children}</BasicLayout>;
};

export default layout;
