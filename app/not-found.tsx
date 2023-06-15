import React from 'react';
import Link from 'next/link';

const notFound = () => {
  return (
    <>
      <div className="mb-2">
        😟 현재 페이지를 찾을 수 없습니다. 😟 <br />
      </div>
      <div>
        <Link href="/blog" className="text-blue-500 underline">
          여기
        </Link>
        를 클릭하면 <b>Blog</b> 메인 페이지로 이동합니다.
      </div>
    </>
  );
};

export default notFound;
