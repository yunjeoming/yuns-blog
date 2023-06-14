import React from 'react';
import { PostUtil } from '@/utils/mdx/post';
import { MdxPost } from './';

interface Props {
  slug: string | undefined;
}

const MdxPage: React.FC<Props> = ({ slug }) => {
  if (!slug) return <div>404 페이지를 찾을 수 없습니다.</div>;
  const originPost = PostUtil.getPostBySlug(slug);
  if (!originPost) return <div>404 페이지를 찾을 수 없습니다.</div>;
  const newPost = PostUtil.convertPostTypeByPost(originPost);
  return <MdxPost post={newPost} />;
};

export default MdxPage;
