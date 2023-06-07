import React from 'react';
import PostItem from '../component/PostItem';

const page = () => {
  const post = {
    title: '안녕하세요.반갑습니다람쥐~~',
    description: '이건 설명입니다.',
    date: Date.now(),
    tags: ['javascript', 'react'],
  };

  const post2 = {
    title: '안녕하세요.반갑습니다람쥐~~ 안녕하세요',
    description:
      '이건 설명입니다. 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~ 안녕하세요.반갑습니다람쥐~~',
    date: Date.now(),
  };

  const posts = [post, post2, post2, post2];
  return (
    <div className="flex-grow min-w-0 [&>div:not(:last-child)]:border-b">
      {posts.map((p, i) => (
        <PostItem key={p.title + p.date + i} post={p} />
      ))}
    </div>
  );
};

export default page;
