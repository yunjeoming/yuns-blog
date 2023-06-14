import React from 'react';
import { NextPage } from 'next';
import { PageProps } from '@/types/Common';
import { MdxPage } from '@/app/component/Mdx';

const page: NextPage<PageProps> = ({ params: { slug } }) => {
  return <MdxPage slug={slug} />;
};

export default page;
