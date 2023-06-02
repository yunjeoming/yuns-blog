import { PageProps } from '@/types/Blog';
import React from 'react';

const page = ({ params }: PageProps) => {
  const { category } = params;
  return (
    <>
      <div>{decodeURIComponent(category)}</div>
    </>
  );
};

export default page;
