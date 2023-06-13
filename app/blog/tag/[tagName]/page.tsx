import React from 'react';
import { PostUtil } from '@/utils/mdx/post';
import { PageProps } from '@/types/Common';
import { Tags } from '@/app/component/Tag';
import { Posts } from '@/app/component/Post';

const page = ({ params }: PageProps) => {
  const { tagName } = params;
  if (!tagName) return <div>404 경로를 확인해주세요</div>;
  const decodedTag = decodeURIComponent(tagName);
  const tags = PostUtil.getAllBlogTags();
  const postMetas = PostUtil.getPostMetasByTag(decodedTag);
  return (
    <>
      <Tags tags={tags} selectedTag={decodedTag} />
      <Posts postMetas={postMetas} />
    </>
  );
};

export default page;
