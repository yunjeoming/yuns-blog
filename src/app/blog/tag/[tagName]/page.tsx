import React from 'react';
import { NextPage } from 'next';
import { SelectedTagPage } from '@/components/page';
import { BasicLayout } from '@/layouts';
import { PageTagProps } from '@/types/common';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return (
    <BasicLayout>
      <SelectedTagPage tagName={tagName} pageName="blog" />
    </BasicLayout>
  );
};

export default page;
