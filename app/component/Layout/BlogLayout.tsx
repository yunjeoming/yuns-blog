import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center items-center lg:items-baseline xl:max-w-header">
      {children}
    </div>
  );
};

export default BlogLayout;
