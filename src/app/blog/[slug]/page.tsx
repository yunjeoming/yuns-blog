import React from 'react';
import { Metadata, NextPage } from 'next';
import { MdxPage } from '@/components/page';
import { PageSlugProps } from '@/types/common';
import { PostUtil } from '@/utils/post';

export function generateMetadata({ params: { slug } }: PageSlugProps): Metadata {
  return PostUtil.getMetadataBySlug(slug);
}

const page: NextPage<PageSlugProps> = ({ params: { slug } }) => {
  const post = PostUtil.getIPostBySlug(slug);
  return <MdxPage post={post} />;
};

export default page;
