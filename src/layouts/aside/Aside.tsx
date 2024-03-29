import { Tags } from '@/components/tag';
import { Constants } from '@/constants';
import { PostUtil } from '@/utils/post';

const Aside = () => {
  const tags = PostUtil.getAllBlogTags();
  const allTags = [Constants.TAG_ALL, ...tags];

  return (
    <aside className="flex flex-col gap-8 flex-grow-0 flex-shrink-0 w-auto h-fit lg:basis-64 lg:p-4 mb-4 lg:mb-0">
      <Tags tags={allTags} />
    </aside>
  );
};

export default Aside;
