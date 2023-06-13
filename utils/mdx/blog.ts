import { IPostMeta, IPost } from '@/types/Post';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

let tags: string[] | null = null;
let blogPosts = allPosts;

export const BlogUtil = {
  /**
   * 모든 게시물 불러오기
   * @returns posts: IPost[]
   */
  getAllPosts: () => {
    return blogPosts;
  },

  /**
   * 모든 태그 불러오기
   * @returns tags: string[]
   */
  getAllTags: () => {
    if (!tags) {
      tags = BlogUtil.getAllTagsFromPosts();
    }
    return tags;
  },

  /**
   * slug으로 하나의 게시물 가져옴
   * @param slug 파일명에서 확장자 제거된 이름(*)
   * @returns post: IPost | null
   */
  getPostBySlug: (slug: string) => {
    return blogPosts.filter((post) => post._raw.flattenedPath === slug)[0] || null;
  },

  /**
   * contentlayer에서 제공하는 기존 Post 타입을 블로그 IPost 타입으로 변환
   * @param post 기존 Post 타입의 게시글
   * @return post: IPost
   */
  convertPostTypeByPost: (post: Post) => {
    const meta = BlogUtil.getPostMetaByOnePost(post);
    const content = post.body.html;
    return {
      meta,
      content,
    } as IPost;
  },

  /**
   * 특정 게시물의 메타 정보
   * @param post 특정 게시물
   * @returns postMeta: IPostMeta
   */
  getPostMetaByOnePost: (post: Post) => {
    const {
      title,
      description,
      tags,
      date,
      _raw: { flattenedPath },
    } = post;

    return {
      title,
      description,
      tags,
      date,
      slug: flattenedPath,
    } as IPostMeta;
  },

  /**
   * 모든 게시물들의 메타 정보가 담긴 배열
   * @returns postMetas: PostMeta[]
   */
  getAllPostMetas: () => {
    const allPosts = blogPosts.map((post) => BlogUtil.getPostMetaByOnePost(post));
    return BlogUtil.compareDescDateByPostMetas(allPosts);
  },

  /**
   * 특정 게시물들의 메타 정보가 담긴 배열
   * @returns postMetas: IPostMeta[]
   */
  getPostMetasByPosts: (posts: Post[]) => {
    const postMetas = posts.map((post) => BlogUtil.getPostMetaByOnePost(post));
    return BlogUtil.compareDescDateByPostMetas(postMetas);
  },

  /**
   * 태그에 해당하는 게시물들의 메타 정보 가져오기
   * @param tag 태그이름
   * @returns postMetas: IPostMeta[]
   */
  getPostMetasByTag: (tag: string) => {
    const tagPosts = blogPosts
      .filter((post) => post.tags?.includes(tag))
      .map((post) => BlogUtil.getPostMetaByOnePost(post));
    return BlogUtil.compareDescDateByPostMetas(tagPosts);
  },

  /**
   * 모든 게시물에 작성된 모든 tags 가져오기
   * @returns tags: string[]
   */
  getAllTagsFromPosts: () => {
    const tagsSet = new Set<string>();
    for (let post of blogPosts) {
      post.tags?.forEach((tag) => {
        tagsSet.add(tag);
      });
    }
    const tags = Array.from(tagsSet);
    return ['ALL', ...tags];
  },

  /**
   * 특정 메타 정보들을 날짜 내림차순으로 정렬
   * @param postMetas 특정 메타정보의 배열
   * @returns postMetas: IPostMeta[]
   */
  compareDescDateByPostMetas: (postMetas: IPostMeta[]) => {
    return postMetas.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  },
};
