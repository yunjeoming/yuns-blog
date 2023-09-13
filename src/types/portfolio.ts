export interface IProject {
  image: string;
  title: string;
  description: string;
  tools: string[];
  link: string;
}

export interface ProjectSection {
  type: 'Team Project' | 'Side Project';
  projects: IProject[];
}

export type ProjectDataType = ProjectSection[];
