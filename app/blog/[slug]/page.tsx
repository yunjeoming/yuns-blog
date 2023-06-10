import React from 'react';
import MDXComponent from '@/app/component/MDXComponent';
import { BlogUtil } from '@/utils/mdx/blog';

interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params: { slug } }: Props) => {
  const post = await BlogUtil.getPostBySlug(slug);
  return (
    <div className="flex flex-col flex-grow w-full prose max-sm:prose-sm max-w-4xl prose- dark:prose-invert dark:prose-pre:bg-main-dark dark:prose-pre:border">
      <MDXComponent post={post} />
    </div>
  );
};

export default page;
