import React from 'react';
import { NextPage } from 'next';
import { PageSlugProps } from '@/types/Common';
import { MdxPage } from '@/components/Page';
import { PostUtil } from '@/utils/post';

const page: NextPage<PageSlugProps> = ({ params: { slug } }) => {
  const post = PostUtil.getIPostBySlug(slug);
  return <MdxPage post={post} />;
};

export default page;
