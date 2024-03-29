import { FC } from 'react';
import { SeriesType } from '@/types/post';
import Series from './Series';

interface Props {
  serieses: SeriesType[];
}

const Serieses: FC<Props> = ({ serieses }) => {
  return (
    <div className="w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {serieses.map((series) => (
        <Series key={series[0]} name={series[0]} total={series[1].length} />
      ))}
    </div>
  );
};

export default Serieses;
