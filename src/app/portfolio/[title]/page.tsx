import { H1, H3 } from '@/components/Title/Title';
import { NextPage } from 'next';
import React from 'react';

const page: NextPage<{ params: { title: string } }> = ({ params: { title } }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <H1>{decodeURIComponent(title)}</H1>
      <p className="border p-4">
        프로젝트 간단 설명. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione culpa beatae
        vitae, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione culpa beatae
        vitae, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione culpa beatae
        vitae, reiciendis
      </p>
      <div>
        <H3 underline thickness="semibold">
          Link
        </H3>
        <div>
          <div>view site</div>
          <div>view github</div>
        </div>
      </div>
      <div>
        <H3 underline thickness="semibold">
          Tools
        </H3>
        <div>do sth</div>
      </div>
      <div>
        <H3 underline thickness="semibold">
          담당 역할
        </H3>
        <div>do sth</div>
      </div>
      <div>
        <H3 underline thickness="semibold">
          회고 및 후기
        </H3>
        <div>do sth</div>
      </div>
      <div>
        <H3 underline thickness="semibold">
          미리 보기
        </H3>
        <div>do sth</div>
      </div>
    </div>
  );
};

export default page;
