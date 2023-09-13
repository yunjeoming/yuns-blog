import React from 'react';
import { NextPage } from 'next';
import { SelectedTagPage } from '@/components/mdx';
import { PageTagProps } from '@/types/common';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return <SelectedTagPage tagName={tagName} pageName="issue" />;
};

export default page;
