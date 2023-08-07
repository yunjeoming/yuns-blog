import React from 'react';
import { NextPage } from 'next';
import { SelectedTagPage } from '@/components/Page';
import { BasicLayout } from '@/components/Layout';
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
