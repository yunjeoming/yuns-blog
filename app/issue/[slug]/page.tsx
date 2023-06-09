import React from 'react';
import { Metadata, NextPage } from 'next';
import { PageSlugProps } from '@/src/types/Common';
import { MdxPage } from '@/app/component/Page';
import { PostUtil } from '@/src/utils/post';

export function generateMetadata({ params: { slug } }: PageSlugProps): Metadata {
  return PostUtil.getMetadataBySlug(slug);
}

const page: NextPage<PageSlugProps> = ({ params: { slug } }) => {
  const post = PostUtil.getIPostBySlug(slug);
  return <MdxPage post={post} />;
};

export default page;
