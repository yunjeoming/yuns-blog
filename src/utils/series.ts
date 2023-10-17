import { allPosts } from 'contentlayer/generated';
import { PostUtil } from './post';

let seriesPosts = allPosts.filter((p) => p.series);

export const SeriesUtil = {
  /**
   * 시리즈에 속한 모든 게시물 불러오기
   * @returns seriesPosts: Post[]
   */
  getAllSeriesPosts: () => {
    return seriesPosts;
  },

  /**
   * 특정 시리즈에 속한 게시물들
   * @param title 시리즈 제목
   * @returns postMetas: IPostMeta[]
   */
  getSeriesesByTitle: (title: string) => {
    const posts = seriesPosts.filter((post) => post.series === title);
    return PostUtil.getPostMetasByPosts(posts);
  },
};
