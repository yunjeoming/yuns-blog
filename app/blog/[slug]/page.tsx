import React from 'react';
import { PageProps } from '@/types/Common';
import { NextPage } from 'next';
import { MdxPage } from '@/app/component/Mdx';

const page: NextPage<PageProps> = ({ params: { slug } }) => {
  return <MdxPage slug={slug} />;
};

export default page;
