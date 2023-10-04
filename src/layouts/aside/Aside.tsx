import { Categories } from '@/components/category';
import { Tags } from '@/components/tag';
import { Constants } from '@/constants';
import { CategoryType } from '@/types/post';
import { PostUtil } from '@/utils/post';
import { SortUtil } from '@/utils/sort';

const Aside = () => {
  const categories = PostUtil.getAllCategories();
  const tags = PostUtil.getAllBlogTags();
  const allPostMetas = PostUtil.getAllPostMetas();
  const sortedCategories = SortUtil.sortCategoryName(Object.entries(categories));
  const allInfo: CategoryType = [Constants.CATEGORY_ALL, allPostMetas];
  const allCategories = [allInfo, ...sortedCategories];

  return (
    <aside className="flex flex-col gap-8 flex-grow-0 flex-shrink-0 w-full lg:w-auto lg:basis-60 lg:py-4 lg:px-2 lg:mr-6 lg:h-fit max-lg:mb-8">
      <Categories categories={allCategories} />
      <Tags tags={tags} />
    </aside>
  );
};

export default Aside;
