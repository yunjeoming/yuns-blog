import React from 'react';
import { Blog } from '@/lib/mdx/blog';
import MDXComponent from '@/app/component/MDXComponent';

interface Props {
  params: {
    baseName: string;
  };
}

const page = async ({ params: { baseName } }: Props) => {
  const post = await Blog.getPostByBaseName(baseName);
  return (
    <div className="flex flex-col flex-grow w-full prose max-w-none prose- dark:prose-invert dark:prose-pre:bg-main-dark dark:prose-pre:border">
      <MDXComponent post={post} />
    </div>
  );
};

export default page;
