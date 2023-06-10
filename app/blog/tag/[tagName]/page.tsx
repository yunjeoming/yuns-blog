import PostList from '@/app/component/PostList';
import TagList from '@/app/component/TagList';
import { Blog } from '@/lib/mdx/blog';
import { PageProps } from '@/types/Blog';
import React from 'react';

const page = async ({ params }: PageProps) => {
  const { tagName } = params;
  const decodedTag = decodeURIComponent(tagName);
  const tags = await Blog.getAllTags();
  const postMetas = await Blog.getPostMetasByTag(decodedTag);
  return (
    <>
      <TagList tags={tags} selectedTag={decodedTag} />
      <PostList postMetas={postMetas} />
    </>
  );
};

export default page;
