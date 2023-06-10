import React from 'react';
import TagList from '../component/TagList';
import { Blog } from '@/lib/mdx/blog';
import PostList from '../component/PostList';

const page = async () => {
  const postMetas = await Blog.getAllPostsMeta();
  const tags = await Blog.getAllTags();
  return (
    <>
      <TagList tags={tags} selectedTag='ALL' />
      <PostList postMetas={postMetas} />
    </>
  );
};

export default page;
