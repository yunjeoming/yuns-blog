import React from 'react';
import MDXComponent from '@/app/component/MDXComponent';
import { PostUtil } from '@/utils/mdx/post';
import { PageProps } from '@/types/Common';

const page = ({ params: { slug } }: PageProps) => {
  if (!slug) return <div>404 페이지를 찾을 수 없습니다.</div>;
  const originPost = PostUtil.getPostBySlug(slug);
  if (!originPost) return <div>404 페이지를 찾을 수 없습니다.</div>;
  const newPost = PostUtil.convertPostTypeByPost(originPost);
  return <MDXComponent post={newPost} />;
};

export default page;
