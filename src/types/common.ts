export type Navbar = 'blog' | 'archive' | 'resume';

export interface NavbarProps {
  closeMenu?: () => void;
}

export interface PageTagProps {
  params: {
    tagName: string;
  };
}

export interface PageCategoryProps {
  params: {
    categoryName: string;
  }
}

export interface PageSlugProps {
  params: {
    slug: string;
  };
}

export interface PageSeriesProps {
  params: {
    title: string;
  }
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
