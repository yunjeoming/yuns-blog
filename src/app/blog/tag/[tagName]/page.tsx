import React from 'react';
import { NextPage } from 'next';
import { PageTagProps } from '@/types/common';
import { SelectedTagPage } from '@/components/mdx';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return <SelectedTagPage tagName={tagName} pageName="blog" />;
};

export default page;
