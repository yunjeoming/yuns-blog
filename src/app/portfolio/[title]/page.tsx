import { NextPage } from 'next';
import React from 'react';

const page: NextPage<{ params: { title: string } }> = ({ params: { title } }) => {
  return (
    <div className="w-full">
      <div>{decodeURIComponent(title)}</div>
      <div className="text-lg">
        <div>view site</div>
        <div>view github</div>
      </div>
      <p className="border p-4">
        프로젝트 간단 설명. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione culpa beatae
        vitae, reiciendis
      </p>
      <div>Tools</div>
      <div>담당 역할</div>
      <div>회고 및 후기</div>
      <div>미리 보기</div>
    </div>
  );
};

export default page;
