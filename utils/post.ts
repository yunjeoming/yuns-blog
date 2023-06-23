import { Metadata } from 'next';
import { IPostMeta, IPost } from '@/types/Post';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { Constants } from '@/constants';

let posts = allPosts.filter(p => p.isPublished);
let blogPosts: Post[] | null = null;
let memoPosts: Post[] | null = null;
let issuePosts: Post[] | null = null;
let blogTags: string[] | null = null;
let issueTags: string[] | null = null;

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
      blogPosts = posts.filter((post) => post.url.startsWith(Constants.BLOG_PATH));
    }
    return blogPosts;
  },

  /**
   * 모든 메모 게시물 불러오기
   * @returns posts: Post[]
   */
  getAllMemoPosts: () => {
    if (!memoPosts) {
      memoPosts = posts.filter((post) => post.url.startsWith(Constants.MEMO_PATH));
    }
    return memoPosts;
  },

  /**
   * 모든 에러 게시물 불러오기
   * @returns posts: Post[]
   */
  getAllIssuePosts: () => {
    if (!issuePosts) {
      issuePosts = posts.filter((post) => post.url.startsWith(Constants.ISSUE_PATH));
    }
    return issuePosts;
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
   * 모든 에러 태그 불러오기
   * @returns tags: string[]
   */
  getAllIssueTags: () => {
    if (!issueTags) {
      const issuePosts = PostUtil.getAllIssuePosts();
      issueTags = PostUtil.getAllTagsByPosts(issuePosts);
    }
    return issueTags;
  },

  /**
   * slug으로 하나의 게시물(contentlayer의 Post) 가져옴
   * @param slug 파일명에서 확장자 제거된 이름(*)
   * @returns post: Post
   */
  getOriginPostBySlug: (slug: string) => {
    const decodedSlug = decodeURIComponent(slug);
    return posts.filter((post) => post._raw.flattenedPath.split('/')[1] === decodedSlug)[0];
  },

  /**
   * slug으로 하나의 게시물(게시물의 IPost) 가져옴
   * @param slug 파일명에서 확장자 제거된 이름(*)
   * @returns post: IPost
   */
  getIPostBySlug: (slug: string) => {
    const decodedSlug = decodeURIComponent(slug);
    const post = PostUtil.getOriginPostBySlug(decodedSlug);
    return PostUtil.convertPostTypeByPost(post);
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
      imgUrl,
      _raw: { flattenedPath },
    } = post;

    return {
      title,
      description,
      tags,
      date,
      imgUrl: `/posts/thumbnail/${imgUrl || 'default-thumbnail.jpeg'}`,
      slug: flattenedPath,
    } as IPostMeta;
  },

  /**
   * 특정 게시물의 메타 데이터 정보
   * @param post 특정 게시물
   * @returns metadata: Metadata
   */
  getMetadataBySlug: (slug: string): Metadata => {
    const post = PostUtil.getOriginPostBySlug(slug);
    const {
      title,
      description,
      imgUrl,
      tags,
      _raw: { flattenedPath },
    } = post;

    const url = `https://yunjeoming.dev/posts/thumbnail/${imgUrl || 'default-thumbnail.jpeg'}`;

    return {
      title,
      description,
      keywords: tags,
      openGraph: {
        title,
        description,
        url: `https://yunjeoming.dev/${flattenedPath}`,
        siteName: "Yun's blog",
        images: {
          url,
          alt: 'Post Image',
        },
        locale: 'ko_KR',
        type: 'article',
        tags,
      },
      twitter: {
        card: 'summary_large_image',
        creator: 'yunjeoming',
        title,
        description,
        images: {
          url,
          alt: 'Post Image',
        },
      },
    };
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
   * 태그에 해당하는 블로그 게시물들의 메타 정보 가져오기
   * @param tag 태그이름
   * @returns postMetas: IPostMeta[]
   */
  getBlogPostMetasByTag: (tag: string) => {
    const tagPosts = PostUtil.getAllBlogPosts()
      .filter((post) => post.tags?.includes(tag))
      .map((post) => PostUtil.getPostMetaByOnePost(post));
    return PostUtil.compareDescDateByPostMetas(tagPosts);
  },

  /**
   * 태그에 해당하는 에러 게시물들의 메타 정보 가져오기
   * @param tag 태그이름
   * @returns postMetas: IPostMeta[]
   */
  getIssuePostMetasByTag: (tag: string) => {
    const tagPosts = PostUtil.getAllIssuePosts()
      .filter((post) => post.tags?.includes(tag))
      .map((post) => PostUtil.getPostMetaByOnePost(post));
    return PostUtil.compareDescDateByPostMetas(tagPosts);
  },

  /**
   * 특정 게시물들에 작성된 모든 tags 가져오기
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
   * contentlayer에서 제공하는 기존 Post 타입을 프로젝트의 IPost 타입으로 변환
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
