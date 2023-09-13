import { FC } from 'react';
import { ISeries } from '@/types/post';
import { H3 } from '@/components/title';

const Series: FC<ISeries> = ({ title, description, total = 0 }) => {
  return (
    <div className="w-48 h-56 flex flex-col items-center p-4 py-8 border rounded-md cursor-pointer">
      <H3 thickness='medium' styles="flex-shrink-0 basis-1/2 flex items-center">{title}</H3>
      <p className="flex-grow text-sm">{description}</p>
    </div>
  );
};

export default Series;
