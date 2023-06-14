import React from 'react';
import { NextPage } from 'next';
import { PageTagProps } from '@/types/Common';
import { SelectedTagPage } from '@/app/component/Page';
import { BasicLayout } from '@/app/component/Layout';
import { PageConstants } from '@/constants/page';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  return (
    <BasicLayout title={PageConstants.BLOG_DESCRIPTION}>
      <SelectedTagPage tagName={tagName} pageName="blog" />;
    </BasicLayout>
  );
};

export default page;
