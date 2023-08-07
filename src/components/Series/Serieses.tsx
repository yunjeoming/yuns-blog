import { ISeries } from '@/types/Post';
import Series from './Series';
import { FC } from 'react';

interface Props {
  serieses: ISeries[];
}

const Serieses: FC<Props> = ({ serieses }) => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-8">
      {serieses.map((series) => (
        <Series key={series.title} {...series} />
      ))}
    </div>
  );
};

export default Serieses;
