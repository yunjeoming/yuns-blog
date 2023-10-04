import React from 'react';
import { NextPage } from 'next';
import { BasicLayout } from '@/layouts';
import { PageCategoryProps } from '@/types/common';
import { PostUtil } from '@/utils/post';
import { Posts } from '@/components/post';
import { Aside } from '@/layouts/aside';

const page: NextPage<PageCategoryProps> = ({ params: { categoryName } }) => {
  const decodedCategory = decodeURIComponent(categoryName);
  const postMetas = PostUtil.getBlogPostMetasByCategory(decodedCategory);

  return (
    <BasicLayout>
      <Aside />
      <Posts postMetas={postMetas} selectedTitle={decodedCategory} />
    </BasicLayout>
  );
};

export default page;
