import React from 'react';
import { BlogUtil } from '@/utils/mdx/blog';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';

const page = async () => {
  const postMetas = await BlogUtil.getAllPostsMeta();
  const tags = await BlogUtil.getAllTags();
  return (
    <>
      <Tags tags={tags} selectedTag='ALL' />
      <Posts postMetas={postMetas} />
    </>
  );
};

export default page;
