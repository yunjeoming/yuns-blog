import { Metadata } from 'next';
import { Constants } from '@/constants';

export const metadata: Metadata = {
  title: Constants.BLOG_TITLE,
  description: Constants.BLOG_DESCRIPTION,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
