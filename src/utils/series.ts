import { ISeries } from '@/types/Post';
import { allPosts } from 'contentlayer/generated';
import { PostUtil } from './post';

let seriesPosts = allPosts.filter((p) => p.series);

const mySerieses: ISeries[] = [
  {
    title: 'Next.js 블로그',
    description: 'Next.js로 블로그 만들기',
  },
  {
    title: 'CSS',
    description: 'CSS 지식 다지기',
  },
  {
    title: 'Issue',
    description: '해결한 이슈들 모음집',
  },
  {
    title: 'TypeScript 심화',
    description: '타입스크립트 심화편',
  },
];

export const SeriesUtil = {
  /**
   * 시리즈에 속한 모든 게시물 불러오기
   * @returns seriesPosts: Post[]
   */
  getAllSeriesPosts: () => {
    return seriesPosts;
  },

  /**
   * 나의 시리즈들
   * @returns serieses: ISeries[]
   */
  getMySerieses: () => {
    return mySerieses;
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
