import React from 'react';
import { NextPage } from 'next';
import { PageSlugProps } from '@/src/types/Common';
import { MdxPage } from '@/app/component/Page';
import { PostUtil } from '@/src/utils/post';

const page: NextPage<PageSlugProps> = ({ params: { slug } }) => {
  const post = PostUtil.getIPostBySlug(slug);
  return <MdxPage post={post} />;
};

export default page;
