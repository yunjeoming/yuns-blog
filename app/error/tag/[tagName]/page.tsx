import React from 'react';
import { NextPage } from 'next';
import { SelectedTagPage } from '@/app/component/Page';
import { BasicLayout } from '@/app/component/Layout';
import { PageConstants } from '@/constants/page';
import { PageTagProps } from '@/types/Common';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return (
    <BasicLayout title={PageConstants.ERROR_DESCRIPTION}>
      <SelectedTagPage tagName={tagName} pageName="error" />;
    </BasicLayout>
  );
};

export default page;
