import { JSXElementConstructor, ReactElement } from 'react';

export interface Category {
  name: string;
  children?: Category[];
}

export type PostContent = ReactElement<any, string | JSXElementConstructor<any>>;

export interface Post {
  meta: PostMeta;
  content: PostContent;
}

export interface PostMeta {
  title: string;
  description?: string;
  date: string;
  tags: string[];
  baseName: string;
}

export interface PageProps {
  params: {
    tagName: string;
  };
}

export type Theme = 'dark' | 'light';

export interface HeaderProps {
  theme: Theme | undefined;
  changeTheme: () => void;
}
