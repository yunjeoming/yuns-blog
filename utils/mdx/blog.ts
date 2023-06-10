import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { IPost, IPostMeta } from '@/types/Blog';

const blogDirectory = path.join(process.cwd(), '/posts/blog');
let posts: IPost[] | null = null;
let tags: string[] | null = null;

export const BlogUtil = {
  /**
   * 모든 게시물 불러오기
   * @returns posts: IPost[]
   */
  getAllPosts: async () => {
    if (!posts) {
      posts = await BlogUtil.readAndGetAllPosts();
    }
    return posts;
  },

  /**
   * 모든 태그 불러오기
   * @returns tags: string[]
   */
  getAllTags: async () => {
    if (!tags) {
      tags = await BlogUtil.getAllTagsFromPosts();
    }
    return tags;
  },

  /**
   * 블로그 디렉토리 내 모든 게시물 읽고 가져오기
   * @returns posts: IPost[]
   */
  readAndGetAllPosts: async () => {
    let files;
    let posts: IPost[] = [];

    try {
      files = fs.readdirSync(blogDirectory);
    } catch (err) {
      console.error(`Can not get files, check your path -> ${blogDirectory}`);
    }

    if (!files || !files.length) return posts;

    for (let file of files) {
      const post = await BlogUtil.getPostByFileName(file);
      post && posts.push(post);
    }

    return posts;
  },

  /**
   * 파일명(*.mdx)으로 파일 한 개 가져오기
   * @param fileName 파일명(*.mdx)
   * @returns post: IPost | null
   */
  getPostByFileName: async (fileName: string): Promise<IPost | null> => {
    const slug = fileName.replace(/\.mdx$/, '');
    const filePath = path.join(blogDirectory, `${slug}.mdx`);
    let file;

    try {
      file = fs.readFileSync(filePath, 'utf-8');
    } catch (err) {
      console.error(`fs loading error, path -> ${filePath}`);
    }

    if (!file) return null;

    const { frontmatter, content } = await compileMDX({
      source: file || '',
      options: { parseFrontmatter: true },
    });
    const post = {
      meta: {
        ...frontmatter,
        slug,
      } as IPostMeta,
      content,
    };
    return post;
  },

  /**
   * 사전에 loaded된 post에서 slug으로 하나의 post 가져옴
   * @param slug 파일명에서 확장자 제거된 이름(*)
   * @returns post: IPost | null
   */
  getPostBySlug: async (slug: string) => {
    const posts = await BlogUtil.getAllPosts();
    return posts.filter((post) => post.meta.slug === slug)[0] || null;
  },

  /**
   * 게시물들의 메타 정보가 담긴 배열
   * @returns postMetas: PostMeta[]
   */
  getAllPostsMeta: async () => {
    const posts = await BlogUtil.getAllPosts();
    return posts.map((post) => post.meta);
  },

  /**
   * 태그이름으로 게시물 메타 정보 가져오기
   * @param tag 태그이름
   * @returns postMetas: PostMeta[]
   */
  getPostMetasByTag: async (tag: string) => {
    const posts = await BlogUtil.getAllPosts();
    return posts.filter((post) => post.meta.tags?.includes(tag)).map((post) => post.meta);
  },

  /**
   * 포스트에 작성된 모든 tags 가져오기
   * @returns tags: Tag[]
   */
  getAllTagsFromPosts: async () => {
    const posts = await BlogUtil.getAllPosts();
    const tagsSet = new Set<string>();
    for (let post of posts) {
      post.meta.tags?.forEach((tag) => {
        tagsSet.add(tag);
      });
    }
    const tags = Array.from(tagsSet);
    return ['ALL', ...tags];
  },
};
