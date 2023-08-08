import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
};

const SubLayout: FC<Props> = ({ children }) => {
  return (
    <div className="w-full flex flex-col lg:justify-center items-center lg:items-baseline max-w-post">
      {children}
    </div>
  );
};

export default SubLayout;
