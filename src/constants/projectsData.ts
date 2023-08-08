import { ProjectDataType } from '@/types/Project';

const projectsData: ProjectDataType = [
  {
    type: 'Team Project',
    projects: [
      {
        image: '',
        title: '술이술술',
        description: '술 리뷰를 간편하게 등록하고 확인할 수 있는 서비스',
        tools: ['React', 'TypeScript', 'TailwindCss', 'ReactQuery', 'Java', 'SpringBoot', 'Maven'],
        link: 'https://github.com/yunjeoming/SuliSulSul',
      },
      {
        image: '',
        title: 'sample data',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione culpa beatae vitae, reiciendis',
        tools: ['React', 'TypeScript', 'TailwindCss', 'ReactQuery', 'Java', 'SpringBoot', 'Maven'],
        link: 'https://github.com/yunjeoming/SuliSulSul',
      },
    ],
  },
  {
    type: 'Side Project',
    projects: [
      {
        image: '',
        title: '개인 블로그',
        description: 'Next.js로 만든 개발 블로그',
        tools: ['React', 'TypeScript', 'Next.js', 'TailwindCss'],
        link: 'https://github.com/yunjeoming/yuns-blog',
      },
      {
        image: '',
        title: 'sample data',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione culpa beatae vitae, reiciendis',
        tools: ['React', 'TypeScript', 'Next.js', 'TailwindCss'],
        link: 'https://github.com/yunjeoming/yuns-blog',
      },
      {
        image: '',
        title: 'sample data2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione culpa beatae vitae, reiciendis',
        tools: ['React', 'TypeScript', 'Next.js', 'TailwindCss', 'Redux'],
        link: 'https://github.com/yunjeoming/yuns-blog',
      },
    ],
  },
];

export { projectsData };
