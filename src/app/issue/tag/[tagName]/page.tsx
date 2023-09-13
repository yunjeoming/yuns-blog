import React from 'react';
import { NextPage } from 'next';
import { SelectedTagPage } from '@/components/page';
import { PageTagProps } from '@/types/common';
import { BasicLayout } from '@/layouts';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return (
    <BasicLayout>
      <SelectedTagPage tagName={tagName} pageName="issue" />
    </BasicLayout>
  );
};

export default page;
