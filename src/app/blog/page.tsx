import React from 'react';
import { NextPage } from 'next';
import { Posts } from '@/components/post';
import { PostUtil } from '@/utils/post';
import { BasicLayout } from '@/layouts';
import { Aside } from '@/layouts/aside';

const page: NextPage = () => {
  const postMetas = PostUtil.getAllPostMetas();

  return (
    <BasicLayout>
      <Aside />
      <Posts postMetas={postMetas} />
    </BasicLayout>
  );
};

export default page;
