'use client';

import { FC, MouseEvent } from 'react';
import { IProject } from '@/types/Project';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Project: FC<IProject> = ({ image, title, description, tools, link }) => {
  const router = useRouter();
  const handleClickSection = () => {
    router.push(`/portfolio/${title}`);
  };

  const handleClickLink = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="min-h-[20rem] flex flex-col border rounded-md cursor-pointer" onClick={handleClickSection}>
      <div className="flex-shrink-0 basis-1/2 bg-slate-100">{image}</div>
      <div className="flex-shrink-0 basis-1/2 flex flex-col p-2">
        <div className="font-semibold mb-2">{title}</div>
        <div className="flex-grow">
          <div className="mb-2 text-sm">{description}</div>
          <div className="flex flex-wrap gap-1">
            {tools.map((tool) => (
              <span key={tool} className="text-xs bg-slate-100 px-2 rounded-sm dark:text-stone-600">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target='_blank'
          rel="noopener noreferrer"
          className="text-sm text-stone-400 hover:text-stone-500"
          onClick={handleClickLink}
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default Project;
