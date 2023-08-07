import { Serieses } from '@/components/Series';
import { SeriesUtil } from '@/utils/series';
import { NextPage } from 'next';
import React from 'react';

const page:NextPage = () => {
  const mySerieses = SeriesUtil.getMySerieses();
  return <Serieses serieses={mySerieses} />;
};

export default page;
