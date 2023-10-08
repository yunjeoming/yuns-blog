import React from 'react';
import { ChevronUp, ChevronDown } from 'react-feather';

interface Props {
  handleClick: () => void;
  showAllTags: boolean;
}

const TagMoreAndHideButton: React.FC<Props> = ({ handleClick, showAllTags }) => {
  return (
    <button className="flex justify-center items-center w-full p-2 text-aside text-sm" onClick={handleClick}>
      {showAllTags ? (
        <>
          <span>Hide</span>
          <ChevronUp size={'1rem'} />
        </>
      ) : (
        <>
          <span>More</span>
          <ChevronDown size={'1rem'} />
        </>
      )}
    </button>
  );
};

export default TagMoreAndHideButton;
