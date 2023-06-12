import React from 'react';
import MDXComponent from '@/app/component/MDXComponent';
import { BlogUtil } from '@/utils/mdx/blog';

interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params: { slug } }: Props) => {
  const originPost = BlogUtil.getPostBySlug(slug);
  const newPost = BlogUtil.convertPostTypeByPost(originPost);
  return <MDXComponent post={newPost} />;
};

export default page;
