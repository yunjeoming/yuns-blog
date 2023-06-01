export interface Category {
  name: string;
  children?: Category[];
}

export interface PageProps {
  params: {
    category: string;
  };
}
