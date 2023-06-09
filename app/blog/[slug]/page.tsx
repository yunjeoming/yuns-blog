import React from 'react';
import { PageSlugProps } from '@/src/types/Common';
import { Metadata, NextPage } from 'next';
import { PostUtil } from '@/src/utils/post';
import { MdxPage } from '@/app/component/Page';

export function generateMetadata({ params: { slug } }: PageSlugProps): Metadata {
  return PostUtil.getMetadataBySlug(slug);
}

const page: NextPage<PageSlugProps> = ({ params: { slug } }) => {
  const post = PostUtil.getIPostBySlug(slug);
  return <MdxPage post={post} />;
};

export default page;
