import { ISeries } from '@/types/Post';
import { FC } from 'react';

const Series: FC<ISeries> = ({ title, description, total = 0 }) => {
  return (
    <div className="w-48 h-56 flex flex-col items-center p-4 py-8 border rounded-md cursor-pointer">
      <h3 className="flex-shrink-0 basis-1/2 flex items-center text-xl font-semibold">{title}</h3>
      <p className="flex-grow text-sm">{description}</p>
    </div>
  );
};

export default Series;
