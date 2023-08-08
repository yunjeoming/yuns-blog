import { FC } from 'react';
import { ProjectSection } from '@/types/Project';
import Project from './Project';

const ProjectSection: FC<ProjectSection> = ({ type, projects }) => {
  return (
    <section className="w-full">
      <h3 className="text-xl font-bold mb-4">{type}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
