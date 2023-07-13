export const PathUtil = {
  getRootPathByFullPath: (fullPath: string) => {
    const rootName = fullPath.split('/')[1];
    return `/${rootName}`;
  },
  getRootNameByFullPath: (fullPath: string) => {
    const rootName = fullPath.split('/')[1];
    return `${rootName}`;
  },
  getRootNameBySlug: (slug: string) => {
    return slug.split('/')[0];
  },
};
