import React from 'react';
import { NextPage } from 'next';
import { PageTagProps } from '@/types/Common';
import { SelectedTagPage } from '@/app/component/Page';
import { BasicLayout } from '@/app/component/Layout';
import { Constants } from '@/constants';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return (
    <BasicLayout title={Constants.BLOG_DESCRIPTION}>
      <SelectedTagPage tagName={tagName} pageName="blog" />;
    </BasicLayout>
  );
};

export default page;
