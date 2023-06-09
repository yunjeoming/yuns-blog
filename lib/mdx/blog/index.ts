import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Post, PostMeta } from '@/types/Blog';

const blogDirectoryInClient = path.join(process.env.PUBLIC_URL || '', '/posts/blog');
const blogDirectory = path.join(process.cwd(), '/posts/blog');
let posts: Post[] | null = null;
let tags: string[] | null = null;

export const Blog = {
  /**
   * 모든 게시물 불러오기
   * @returns posts: Post[]
   */
  getAllPosts: async () => {
    if (!posts) {
      posts = await Blog.readAndGetAllPosts();
    }
    return posts;
  },

  /**
   * 모든 태그 불러오기
   * @returns tags: string[]
   */
  getAllTags: async () => {
    if (!tags) {
      tags = await Blog.getAllTagsFromPosts();
    }
    return tags;
  },

  /**
   * 블로그 디렉토리 내 모든 게시물 읽고 가져오기
   * @returns posts: Post[]
   */
  readAndGetAllPosts: async () => {
    let files;
    let posts: Post[] = [];

    try {
      files = fs.readdirSync(blogDirectory);
    } catch (err) {
      console.error(`Can not get files, check your path -> ${blogDirectory}`);
    }

    if (!files || !files.length) return posts;

    for (let file of files) {
      const post = await Blog.getPostByFileName(file);
      post && posts.push(post);
    }

    return posts;
  },

  /**
   * 파일명(*.mdx)으로 파일 한 개 가져오기
   * @param fileName 파일명(*.mdx)
   * @returns post: Post | null
   */
  getPostByFileName: async (fileName: string): Promise<Post | null> => {
    const baseName = fileName.replace(/\.mdx$/, '');
    const filePath = path.join(blogDirectory, `${baseName}.mdx`);
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
        baseName,
      } as PostMeta,
      content,
    };
    return post;
  },

  /**
   * 사전에 loaded된 post에서 baseName으로 하나의 post 가져옴
   * @param baseName 파일명에서 확장자 제거된 이름(*)
   * @returns post: Post | null
   */
  getPostByBaseName: async (baseName: string) => {
    const posts = await Blog.getAllPosts();
    return posts.filter((post) => post.meta.baseName === baseName)[0] || null;
  },

  /**
   * 게시물들의 메타 정보가 담긴 배열
   * @returns postMetas: PostMeta[]
   */
  getAllPostsMeta: async () => {
    const posts = await Blog.getAllPosts();
    return posts.map((post) => post.meta);
  },

  /**
   * 태그이름으로 게시물 메타 정보 가져오기
   * @param tag 태그이름
   * @returns postMetas: PostMeta[]
   */
  getPostsMetaByTag: async (tag: string) => {
    const posts = await Blog.getAllPosts();
    return posts.filter((post) => post.meta.tags?.includes(tag)).map((post) => post.meta);
  },

  /**
   * 포스트에 작성된 모든 tags 가져오기
   * @returns tags: Tag[]
   */
  getAllTagsFromPosts: async () => {
    const posts = await Blog.getAllPosts();
    const tagsSet = new Set<string>();
    for (let post of posts) {
      post.meta.tags?.forEach((tag) => {
        tagsSet.add(tag);
      });
    }
    const tags = Array.from(tagsSet);
    return tags;
  },
};
