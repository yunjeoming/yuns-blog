import TagList from '@/app/component/TagList';
import { Blog } from '@/lib/mdx/blog';
import { PageProps } from '@/types/Blog';
import React from 'react';

const page = async ({ params }: PageProps) => {
  const { tagName } = params;
  const tags = await Blog.getAllTags();
  return (
    <>
      <TagList tags={tags} />
      <div>{decodeURIComponent(tagName)}</div>
    </>
  );
};

export default page;
