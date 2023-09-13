import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row lg:justify-center items-center lg:items-baseline xl:max-w-header">
        {children}
      </div>
    </>
  );
};

export default BasicLayout;
