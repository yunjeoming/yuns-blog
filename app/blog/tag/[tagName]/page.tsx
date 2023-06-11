import React from 'react';
import { BlogUtil } from '@/utils/mdx/blog';
import { PageProps } from '@/types/Blog';
import { Tags } from '@/app/component/Tag';
import { Posts } from '@/app/component/Post';

const page = async ({ params }: PageProps) => {
  const { tagName } = params;
  const decodedTag = decodeURIComponent(tagName);
  const tags = await BlogUtil.getAllTags();
  const postMetas = await BlogUtil.getPostMetasByTag(decodedTag);
  return (
    <>
      <Tags tags={tags} selectedTag={decodedTag} />
      <Posts postMetas={postMetas} />
    </>
  );
};

export default page;
