import { FC } from 'react';
import Link from 'next/link';
import { H5 } from '@/components/title/Title';
import { CommonUtil } from '@/utils/common';

interface Props {
  name: string;
  total: number;
}

const Series: FC<Props> = ({ name, total }) => {
  const randomBgc = CommonUtil.getRandomBackgroundColor();

  return (
    <Link href={`/series/${name}`}>
      <div className="w-full flex flex-col items-center gap-2 cursor-pointer p-2">
        <div className={`w-full pb-[75%] relative md:h-56 border rounded-md hover:opacity-70 transition-all ${randomBgc}`}>
          <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
            <H5 thickness="medium">
              {name} ({total.toString()})
            </H5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Series;
