import Projects from '@/features/portfolio/Projects';
import { projectsData } from '@/constants/projectsData';

const page = () => {
  return <Projects projects={projectsData} />;
};

export default page;
