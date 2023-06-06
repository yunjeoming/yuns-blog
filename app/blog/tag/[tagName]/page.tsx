import { PageProps } from '@/types/Blog';
import React from 'react';

const page = ({ params }: PageProps) => {
  const { tagName } = params;
  return (
    <>
      <div>{decodeURIComponent(tagName)}</div>
    </>
  );
};

export default page;
