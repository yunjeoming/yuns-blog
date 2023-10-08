import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BasicLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4 items-baseline lg:justify-center xl:max-w-header">
      {children}
    </div>
  );
};

export default BasicLayout;
