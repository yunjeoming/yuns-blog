import React from 'react';
import { PostMetasProps } from '@/types/Post';
import { Memo } from './';

const Memos: React.FC<PostMetasProps> = ({ postMetas }) => {
  return (
    <div>
      {postMetas.map((meta) => (
        <Memo postMeta={meta} />
      ))}
    </div>
  );
};

export default Memos;
