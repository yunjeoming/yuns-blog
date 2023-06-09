import React from 'react';
import PostItem from '../component/PostItem';
import TagList from '../component/TagList';
import { Blog } from '@/lib/mdx/blog';

const page = async () => {
  const postsMetas = await Blog.getAllPostsMeta();
  const tags = await Blog.getAllTags();
  return (
    <>
      <TagList tags={tags} />
      <div className="flex-grow min-w-0 [&>div:not(:last-child)]:border-b">
        {postsMetas.map((meta, i) => (
          <PostItem key={meta.title + meta.date + i} meta={meta} />
        ))}
      </div>
    </>
  );
};

export default page;
