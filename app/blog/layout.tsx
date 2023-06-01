import React from 'react';
import Aside from '../component/Aside';
import Index from '../component/Index';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Aside />
      {children}
      <Index />
    </>
  );
};

export default layout;
