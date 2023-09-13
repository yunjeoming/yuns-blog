import { projectsData } from '@/constants/projectsData';
import { Projects } from '@/features/portfolio';

const page = () => {
  return <Projects projects={projectsData} />;
};

export default page;
