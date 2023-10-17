import React from 'react';
import { Serieses } from '@/features/series';
import { PostUtil } from '@/utils/post';
import { NextPage } from 'next';

const page: NextPage = () => {
  const serieses = PostUtil.getAllSerieses();
  const seriesesArr = Object.entries(serieses);

  return <Serieses serieses={seriesesArr} />;
};

export default page;
