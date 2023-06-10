import React from 'react';

interface Props {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md';
}

const TagItem: React.FC<Props> = ({ name, className = '', size = 'sm' }) => {
  return <span className={`tag text-tag bg-tag text-${size} ${className}`}>{name}</span>;
};

export default TagItem;
