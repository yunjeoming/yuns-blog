import { FC } from 'react';
import { ISeries } from '@/types/post';
import Series from './Series';

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
