import React from 'react';
import Aside from '../component/Aside';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Aside />
      {children}
    </>
  );
};

export default layout;
