import { Metadata } from 'next';
import { Constants } from '@/constants';

export const metadata: Metadata = {
  title: Constants.ISSUE_TITLE,
  description: Constants.ISSUE_DESCRIPTION,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
