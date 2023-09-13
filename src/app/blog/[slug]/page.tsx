import React from 'react';
import { PageSlugProps } from '@/types/common';
import { Metadata, NextPage } from 'next';
import { PostUtil } from '@/utils/post';
import { MdxPage } from '@/components/mdx';

export function generateMetadata({ params: { slug } }: PageSlugProps): Metadata {
  return PostUtil.getMetadataBySlug(slug);
}

const page: NextPage<PageSlugProps> = ({ params: { slug } }) => {
  const post = PostUtil.getIPostBySlug(slug);
  return <MdxPage post={post} />;
};

export default page;
