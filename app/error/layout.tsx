import { PageConstants } from '@/constants/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error',
  description: PageConstants.ERROR_DESCRIPTION,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
