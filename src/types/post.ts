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
  imgUrl: string;
}

export interface ISeries {
  title: string;
  description: string;
  total?: number;
}

export interface PostMetasProps {
  postMetas: IPostMeta[];
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