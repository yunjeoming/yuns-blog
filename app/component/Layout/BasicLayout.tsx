import React, { ReactNode } from 'react';
import PageTitle from '../PageTitle';

interface Props {
  title?: string;
  children: ReactNode;
}

const BasicLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      {title && <PageTitle title={title} />}
      <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-baseline xl:max-w-header">
        {children}
      </div>
    </>
  );
};

export default BasicLayout;
