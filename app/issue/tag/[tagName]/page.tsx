import React from 'react';
import { NextPage } from 'next';
import { SelectedTagPage } from '@/app/component/Page';
import { BasicLayout } from '@/app/component/Layout';
import { PageTagProps } from '@/types/Common';
import { Constants } from '@/constants';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return (
    <BasicLayout title={Constants.ISSUE_DESCRIPTION}>
      <SelectedTagPage tagName={tagName} pageName="issue" />
    </BasicLayout>
  );
};

export default page;
