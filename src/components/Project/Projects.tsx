import { FC } from 'react';
import { ProjectDataType } from '@/types/Project';
import ProjectSection from './ProjectSection';

interface Props {
  projects: ProjectDataType;
}

const Projects: FC<Props> = ({ projects }) => {
  return (
    <div className='w-full flex flex-col gap-12'>
      {projects.map((project) => (
        <ProjectSection key={project.type} {...project} />
      ))}
    </div>
  );
};

export default Projects;
