import { PageConstants } from '@/constants/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memo',
  description: PageConstants.MEMO_DESCRIPTION,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
