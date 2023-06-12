export interface ICategory {
  name: string;
  children?: ICategory[];
}

export interface IPost {
  meta: IPostMeta;
  content: string;
}

export interface IPostMeta {
  title: string;
  description?: string;
  date: string;
  tags: string[];
  slug: string;
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

export interface TagProps {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | '0.5em';
  selected?: boolean;
}
