import React from 'react';

interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return <h2 className="text-sm mb-4 sm:text-base sm:mb-8">{title}</h2>;
};

export default PageTitle;
