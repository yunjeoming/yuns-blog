import React from 'react';
import { BlogUtil } from '@/utils/mdx/blog';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';

const page = () => {
  const postMetas = BlogUtil.getAllPostMetas();
  const tags = BlogUtil.getAllTags();
  return (
    <>
      <Tags tags={tags} selectedTag="ALL" />
      <Posts postMetas={postMetas} />
    </>
  );
};

export default page;
