import { IPostMeta, IPost } from '@/types/Post';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

const BLOG_PATH = 'blog';
const MEMO_PATH = 'memo';

let blogTags: string[] | null = null;
let posts = allPosts;
let blogPosts: Post[] | null = null;
let memoPosts: Post[] | null = null;

export const PostUtil = {
  /**
   * 모든 게시물 불러오기
   * @returns posts: Post[]
   */
  getAllPosts: () => {
    return posts;
  },

  /**
   * 모든 블로그 게시물 불러오기
   * @returns posts: Post[]
   */
  getAllBlogPosts: () => {
    if (!blogPosts) {
      blogPosts = posts.filter((post) => post.url.startsWith(BLOG_PATH));
    }
    return blogPosts;
  },

  /**
   * 모든 메모 게시물 불러오기
   * @returns posts: Post[]
   */
  getAllMemoPosts: () => {
    if (!memoPosts) {
      memoPosts = posts.filter((post) => post.url.startsWith(MEMO_PATH));
    }
    return memoPosts;
  },

  /**
   * 모든 블로그 태그 불러오기
   * @returns tags: string[]
   */
  getAllBlogTags: () => {
    if (!blogTags) {
      const blogPosts = PostUtil.getAllBlogPosts();
      blogTags = PostUtil.getAllTagsByPosts(blogPosts);
    }
    return blogTags;
  },

  /**
   * slug으로 하나의 게시물 가져옴
   * @param slug 파일명에서 확장자 제거된 이름(*)
   * @returns post: IPost | null
   */
  getPostBySlug: (slug: string) => {
    const decodedSlug = decodeURIComponent(slug);
    return posts.filter((post) => post._raw.flattenedPath.split('/')[1] === decodedSlug)[0] || null;
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
   * 특정 게시물들의 메타 정보가 담긴 배열
   * @returns postMetas: IPostMeta[]
   */
  getPostMetasByPosts: (posts: Post[]) => {
    const postMetas = posts.map((post) => PostUtil.getPostMetaByOnePost(post));
    return PostUtil.compareDescDateByPostMetas(postMetas);
  },

  /**
   * 태그에 해당하는 게시물들의 메타 정보 가져오기
   * @param tag 태그이름
   * @returns postMetas: IPostMeta[]
   */
  getPostMetasByTag: (tag: string) => {
    const tagPosts = posts
      .filter((post) => post.tags?.includes(tag))
      .map((post) => PostUtil.getPostMetaByOnePost(post));
    return PostUtil.compareDescDateByPostMetas(tagPosts);
  },

  /**
   * 모든 블로그 게시물에 작성된 모든 tags 가져오기
   * @returns tags: string[]
   */
  getAllTagsByPosts: (posts: Post[]) => {
    const tagsSet = new Set<string>();
    for (let post of posts) {
      post.tags?.forEach((tag) => {
        tagsSet.add(tag);
      });
    }
    const tags = Array.from(tagsSet);
    return ['ALL', ...tags];
  },

  /**
   * contentlayer에서 제공하는 기존 Post 타입을 블로그 IPost 타입으로 변환
   * @param post 기존 Post 타입의 게시글
   * @return post: IPost
   */
  convertPostsTypeByPosts: (posts: Post[]) => {
    return posts.map((post) => PostUtil.convertPostTypeByPost(post));
  },

  /**
   * contentlayer에서 제공하는 기존 Post 타입을 블로그 IPost 타입으로 변환
   * @param post 기존 Post 타입의 게시글
   * @return post: IPost
   */
  convertPostTypeByPost: (post: Post) => {
    const meta = PostUtil.getPostMetaByOnePost(post);
    const content = post.body.html;
    return {
      meta,
      content,
    } as IPost;
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
