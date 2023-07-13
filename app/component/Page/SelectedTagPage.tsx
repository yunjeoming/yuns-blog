import React from 'react';
import { PostUtil } from '@/src/utils/post';
import { Tags } from '../Tag';
import { Posts } from '../Post';
import { PostPage } from '@/src/types/Common';

interface Props {
  tagName: string;
  pageName: PostPage;
}

const SelectedTagPage: React.FC<Props> = ({ tagName, pageName }) => {
  const decodedTag = decodeURIComponent(tagName);
  const tags = pageName === 'blog' ? PostUtil.getAllBlogTags() : PostUtil.getAllIssueTags();
  const postMetas =
    pageName === 'blog' ? PostUtil.getBlogPostMetasByTag(decodedTag) : PostUtil.getIssuePostMetasByTag(decodedTag);
  return (
    <>
      <Tags tags={tags} selectedTag={decodedTag} pageName={pageName} />
      <Posts postMetas={postMetas} />
    </>
  );
};

export default SelectedTagPage;
