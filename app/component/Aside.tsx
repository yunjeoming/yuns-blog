import React from 'react';
import TagList from './TagList';

const Aside = () => {
  return (
    <aside className="flex-grow-0 flex-shrink-0 mt-6 lg:basis-60 lg:py-4 lg:px-2 lg:mr-6 lg:h-fit">
      <TagList />
    </aside>
  );
};

export default Aside;
