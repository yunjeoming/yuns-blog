import { Metadata } from 'next';
import { IPostMeta, IPost, ICategory } from '@/types/post';
import { allPosts, Post } from 'contentlayer/generated';
import { Constants } from '@/constants';

let posts = allPosts.filter((p) => p.isPublished);
let blogPosts: Post[] | null = null;
let memoPosts: Post[] | null = null;
let categories: ICategory | null = null;
let blogTags: string[] | null = null;
let allPostMetas: IPostMeta[] = [];

export const PostUtil = {
  /**
   * 모든 블로그 게시물 불러오기
   */
  getAllBlogPosts() {
    if (!blogPosts) {
      blogPosts = posts.filter((post) => post.url.startsWith(Constants.BLOG_PATH));
    }
    return blogPosts;
  },

  /**
   * 모든 메모 게시물 불러오기
   */
  getAllMemoPosts() {
    if (!memoPosts) {
      memoPosts = posts.filter((post) => post.url.startsWith(Constants.MEMO_PATH));
    }
    return memoPosts;
  },

  /**
   * 모든 블로그 게시물의 메타정보 불러오기
   */
  getAllPostMetas() {
    if (!allPostMetas.length) {
      const blogPosts = this.getAllBlogPosts();
      allPostMetas = this.getPostMetasByPosts(blogPosts);
    }
    return allPostMetas;
  },

  /**
   * 모든 카테고리 불러오기
   */
  getAllCategories() {
    if (!categories) {
      categories = this.getCategoryInfo().categories;
    }
    return categories;
  },

  /**
   * 모든 블로그 태그 불러오기
   */
  getAllBlogTags() {
    if (!blogTags) {
      const blogPosts = this.getAllBlogPosts();
      blogTags = this.getAllTagsByPosts(blogPosts);
    }
    return blogTags;
  },

  /**
   * 태그에 해당하는 블로그 게시물들의 메타 정보 가져오기
   * @param tag 태그이름
   */
  getBlogPostMetasByTag(tag: string) {
    return this.getAllBlogPosts()
      .filter((post) => post.tags?.includes(tag))
      .map((post) => this.getPostMetaByOnePost(post));
  },

  /**
   * 카테고리 정보 가져오기
   */
  getCategoryInfo() {
    if (categories && allPostMetas.length) {
      return { categories, allPostMetas };
    }

    const categoryMap = {} as ICategory;
    const postMetas = [];

    const blogPosts = this.getAllBlogPosts();
    for (let post of blogPosts) {
      const postMeta = this.getPostMetaByOnePost(post);
      postMetas.push(postMeta);

      if (post.category) {
        const category = post.category;
        const upperedCategory = category.charAt(0).toUpperCase() + category.slice(1);
        categoryMap[upperedCategory] = categoryMap[upperedCategory]
          ? [...categoryMap[upperedCategory], postMeta]
          : [postMeta];
      }
    }

    return {
      categories: categoryMap,
      allPostMetas: postMetas,
    };
  },

  /**
   * slug으로 하나의 게시물(contentlayer의 Post) 가져옴
   * @param slug 파일명에서 확장자 제거된 이름(*)
   */
  getOriginPostBySlug(slug: string) {
    const decodedSlug = decodeURIComponent(slug);
    return posts.filter((post) => post._raw.flattenedPath.split('/')[1] === decodedSlug)[0];
  },

  /**
   * slug으로 하나의 게시물(게시물의 IPost) 가져옴
   * @param slug 파일명에서 확장자 제거된 이름(*)
   */
  getIPostBySlug(slug: string) {
    const decodedSlug = decodeURIComponent(slug);
    const post = this.getOriginPostBySlug(decodedSlug);
    return this.convertPostTypeByPost(post);
  },

  /**
   * 특정 게시물의 메타 정보
   * @param post 특정 게시물
   */
  getPostMetaByOnePost(post: Post) {
    const {
      title,
      description,
      category,
      tags,
      date,
      imgUrl,
      _raw: { flattenedPath },
    } = post;

    return {
      title,
      description,
      category,
      tags,
      date,
      imgUrl: `/posts/thumbnail/${imgUrl || 'default-thumbnail.jpeg'}`,
      slug: flattenedPath,
    } as IPostMeta;
  },

  /**
   * 특정 게시물의 메타 데이터 정보
   * @param post 특정 게시물
   */
  getMetadataBySlug(slug: string): Metadata {
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
   */
  getPostMetasByPosts(posts: Post[]) {
    return posts.map((post) => this.getPostMetaByOnePost(post));
  },

  /**
   * 카테고리에 해당하는 블로그 게시물들의 메타 정보 가져오기
   * @param category 카테고리
   */
  getBlogPostMetasByCategory(category: string) {
    const categories = this.getAllCategories();
    return categories?.[category] || [];
  },

  /**
   * 특정 게시물들에 작성된 모든 tags 가져오기
   */
  getAllTagsByPosts(posts: Post[]) {
    const tagsSet = new Set<string>();
    for (let post of posts) {
      post.tags?.forEach((tag) => {
        tagsSet.add(tag);
      });
    }
    return Array.from(tagsSet);
  },

  /**
   * contentlayer에서 제공하는 기존 Post 타입을 블로그 IPost 타입으로 변환
   * @param post 기존 Post 타입의 게시글
   */
  convertPostsTypeByPosts(posts: Post[]) {
    return posts.map((post) => this.convertPostTypeByPost(post));
  },

  /**
   * contentlayer에서 제공하는 기존 Post 타입을 프로젝트의 IPost 타입으로 변환
   * @param post 기존 Post 타입의 게시글
   */
  convertPostTypeByPost(post: Post) {
    const meta = this.getPostMetaByOnePost(post);
    const content = post.body.code;
    return {
      meta,
      content,
    } as IPost;
  },
};
