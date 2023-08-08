import Projects from '@/components/Project/Projects';
import { projectsData } from '@/constants/projectsData';

const page = () => {
  return <Projects projects={projectsData} />;
};

export default page;
