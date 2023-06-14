import React from 'react'
import { PostUtil } from '@/utils/mdx/post';
import PageTitle from '../component/PageTitle';
import BlogLayout from '../component/Layout/BlogLayout';
import { Tags } from '../component/Tag';
import { Posts } from '../component/Post';

const page = () => {
  const errorPosts = PostUtil.getAllErrorPosts();
  const postMetas = PostUtil.getPostMetasByPosts(errorPosts);
  const tags = PostUtil.getAllErrorTags();
  return (
    <>
      <PageTitle title="에러를 다루는 공간" />
      <BlogLayout>
        <Tags tags={tags} selectedTag="ALL" />
        <Posts postMetas={postMetas} />
      </BlogLayout>
    </>
  );
}

export default page