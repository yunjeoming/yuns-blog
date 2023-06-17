import { Metadata } from 'next';
import { Constants } from '@/constants';

export const metadata: Metadata = {
  title: Constants.MEMO_TITLE,
  description: Constants.MEMO_DESCRIPTION,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
