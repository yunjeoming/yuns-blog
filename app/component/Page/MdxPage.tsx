import React from 'react';
import { IPost } from '@/types/Post';
import { DateUtil } from '@/utils/date';
import { Tag } from '../Tag';
import { PathUtil } from '@/utils/path';
import { PostPage } from '@/types/Common';

interface Props {
  post: IPost;
}

const MdxPage: React.FC<Props> = ({ post }) => {
  const { meta, content } = post;
  const { title, description, date, tags, slug } = meta;
  const rootName = PathUtil.getRootNameBySlug(slug) as PostPage;
  return (
    <>
      <div className="flex flex-col flex-grow w-full prose max-sm:prose-sm max-w-post prose- dark:prose-invert dark:prose-pre:bg-main-dark dark:prose-pre:border">
        <h1 className="text-center my-6 max-md:mb-4">{title}</h1>
        <time dateTime={date} className="text-sm text-stone-500 text-center">
          {DateUtil.convertDateFormat(date)}
        </time>
        {description && <p className="text-center xs:m-1">{description}</p>}
        <hr className="xs:mt-3 xs:mb-6 md:mt-6 md:mb-8" />
        <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: content }} />
        {tags && (
          <>
            <hr className="xs:mt-12 xs:mb-6 max-xl:mt-12 max-xl: mb-6" />
            <div className="not-prose">
              {tags.map((t) => (
                <Tag key={t} name={t} size="md" className="mr-2" pageName={rootName} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MdxPage;
