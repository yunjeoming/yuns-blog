import { FC } from 'react';
import { ProjectSection } from '@/types/project';
import { H3 } from '@/components/title';
import Project from './Project';

const ProjectSection: FC<ProjectSection> = ({ type, projects }) => {
  return (
    <section className="w-full">
      <H3>{type}</H3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
