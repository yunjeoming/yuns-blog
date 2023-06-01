import { PageProps } from '@/types/Blog';
import React from 'react';

const page = ({ params }: PageProps) => {
  const { category } = params;
  return (
    <div>
      <div>{decodeURIComponent(category)}</div>
    </div>
  );
};

export default page;
