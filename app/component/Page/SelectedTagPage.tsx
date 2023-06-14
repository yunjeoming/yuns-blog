import React from 'react';
import { PostUtil } from '@/utils/mdx/post';
import { Tags } from '../Tag';
import { Posts } from '../Post';
import { PostPage } from '@/types/Common';

interface Props {
  tagName: string | undefined;
  pageName: PostPage;
}

const SelectedTagPage: React.FC<Props> = ({ tagName, pageName }) => {
  if (!tagName) return <div>404 경로를 확인해주세요</div>;
  const decodedTag = decodeURIComponent(tagName);
  const tags = pageName === 'blog' ? PostUtil.getAllBlogTags() : PostUtil.getAllErrorTags();
  const postMetas =
    pageName === 'blog' ? PostUtil.getBlogPostMetasByTag(decodedTag) : PostUtil.getErrorPostMetasByTag(decodedTag);
  return (
    <>
      <Tags tags={tags} selectedTag={decodedTag} pageName={pageName} />
      <Posts postMetas={postMetas} />
    </>
  );
};

export default SelectedTagPage;
