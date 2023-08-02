import { useCallback, useEffect, useRef, useState } from 'react';

const useMoreAndHide = () => {
  const [showAllTags, setShowAllTags] = useState(false);
  const [isOverHeight, setIsOverHeight] = useState(false);
  const tagsRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    setShowAllTags((state) => !state);
  }, []);

  useEffect(() => {
    if (tagsRef.current && tagsRef.current.clientHeight > 220) {
      setIsOverHeight(true);
    }
  }, []);

  useEffect(() => {
    if (!tagsRef.current) return;
    const tags = tagsRef.current as HTMLElement;

    if (showAllTags) {
      tags.classList.add('opened-tags', 'tags');
    } else {
      tags.classList.remove('opened-tags', 'tags');
    }
  }, [showAllTags]);

  return { showAllTags, isOverHeight, tagsRef, handleClick };
};

export default useMoreAndHide;
