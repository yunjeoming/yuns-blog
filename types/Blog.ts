export interface Category {
  name: string;
  children?: Category[];
}

export interface Post {
  title: string;
  description: string;
  date: number;
  tags?: string[];
}

export interface PageProps {
  params: {
    tagName: string;
  };
}
