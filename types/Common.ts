export type Navbar = 'blog' | 'archive' | 'resume';

export interface NavbarProps {
  closeMenu?: () => void;
}

export interface PageProps {
  params: {
    tagName?: string;
    slug?: string;
  };
}

export type Theme = 'dark' | 'light';

export interface HeaderProps {
  theme: Theme | undefined;
  changeTheme: () => void;
}

export type PostPage = 'blog' | 'error';

export interface TagProps {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | '0.5em';
  selected?: boolean;
  pageName: PostPage;
}
