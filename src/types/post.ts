export interface IPost {
  meta: IPostMeta;
  content: string;
}

export interface IPostMeta {
  title: string;
  description?: string;
  category?: string;
  date: string;
  tags: string[];
  slug: string;
  imgUrl: string;
}

export interface ISeries {
  [key: string]: IPostMeta[];
}

export type SeriesType = [string, IPostMeta[]];

export interface PostMetasProps {
  postMetas: IPostMeta[];
  selectedTitle?: string;
  isTag?: boolean;
}

export interface PostMetaProps {
  postMeta: IPostMeta;
}

export interface PostsProps {
  posts: IPost[];
}

export interface PostProps {
  post: IPost;
}