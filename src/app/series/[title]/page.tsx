import React from 'react';
import { Posts } from '@/components/post';
import { H3, H4, H5 } from '@/components/title/Title';
import { PageSeriesProps } from '@/types/common';
import { PostUtil } from '@/utils/post';
import { ArrowLeft } from 'react-feather';
import Link from 'next/link';

const page: React.FC<PageSeriesProps> = ({ params: { title } }) => {
  const decodedTitle = decodeURIComponent(title);
  const postMetas = PostUtil.getPostMetasBySeries(decodedTitle);

  return (
    <div className="w-full flex flex-col gap-6 lg:gap-8">
      <div className="flex items-center gap-2 lg:px-4">
        <Link href={`/series`} className='hover:text-stone-500'>
          <ArrowLeft />
        </Link>
        <H4 styles="max-md:text-base pb-0">{decodedTitle}</H4>
      </div>
      <Posts postMetas={postMetas} />
    </div>
  );
};

export default page;
