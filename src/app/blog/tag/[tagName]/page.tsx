import React from 'react';
import { NextPage } from 'next';
import { BasicLayout } from '@/layouts';
import { PageTagProps } from '@/types/common';
import { PostUtil } from '@/utils/post';
import { Posts } from '@/components/post';
import { Aside } from '@/layouts/aside';

const page: NextPage<PageTagProps> = ({ params: { tagName } }) => {
  const decodedTag = decodeURIComponent(tagName);
  const postMetas = PostUtil.getBlogPostMetasByTag(decodedTag);

  return (
    <BasicLayout>
      <Aside />
      <Posts postMetas={postMetas} selectedTitle={decodedTag} isTag={true} />
    </BasicLayout>
  );
};

export default page;
