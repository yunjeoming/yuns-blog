import React from 'react';
import { NextPage } from 'next';
import { PageProps } from '@/types/Common';
import { SelectedTagPage } from '@/app/component/Page';
import { BasicLayout } from '@/app/component/Layout';
import { PageConstants } from '@/constants/page';

const page: NextPage<PageProps> = ({ params: { tagName } }) => {
  return (
    <BasicLayout title={PageConstants.BLOG_TITLE}>
      <SelectedTagPage tagName={tagName} pageName="blog" />;
    </BasicLayout>
  );
};

export default page;
