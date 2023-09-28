// contentlayer.config.ts
import { defineDocumentType, makeSource } from '@contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    category: { type: 'string', required: false },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    date: { type: 'date', required: true },
    isPublished: { type: 'boolean', required: true },
    imgUrl: { type: 'string', required: false },
    series: { type: 'string', required: false },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `${post._raw.flattenedPath}` },
  },
}));

const rehypeoptions = {
  theme: 'slack-dark',
  keepBackground: true,
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, rehypeoptions], rehypeSlug],
  },
});
