import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useMoreAndHide = (selectedTag: string) => {
  const openedTag = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const isOtherSelected = selectedTag !== 'ALL' ? true : false;
    const hasTagState = localStorage.getItem('tag-state') ? true : false;
    return isOtherSelected && hasTagState;
  }, []);

  const [showAllTags, setShowAllTags] = useState(openedTag);
  const [isOverHeight, setIsOverHeight] = useState(false);
  const tagsRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    if (showAllTags) {
      localStorage.removeItem('tag-state');
    } else {
      localStorage.setItem('tag-state', 'open');
    }
    setShowAllTags((state) => !state);
  }, [showAllTags]);

  useEffect(() => {
    if (!tagsRef.current) return;

    // large size
    if (document.documentElement.clientWidth > 1024 && tagsRef.current.clientHeight > 220) {
      setIsOverHeight(true);
    }

    // md size
    if (document.documentElement.clientWidth < 1024 && tagsRef.current.clientHeight > 30) {
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
