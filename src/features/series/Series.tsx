import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { H5 } from '@/components/title/Title';

interface Props {
  name: string;
  total: number;
}

const Series: FC<Props> = ({ name, total }) => {
  return (
    <Link href={`/series/${name}`}>
      <div className="w-full flex flex-col items-center gap-2 cursor-pointer p-2">
        <div className={`w-full pt-[60%] relative md:h-56`}>
          <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 rounded-md overflow-hidden">
            <Image
              className="w-full h-full hover:scale-110 transition-all"
              alt={`${name} 썸네일`}
              src={`/series/${name}.png`}
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
        <H5 styles='pb-0' thickness="medium">
          {name} ({total.toString()})
        </H5>
      </div>
    </Link>
  );
};

export default Series;
