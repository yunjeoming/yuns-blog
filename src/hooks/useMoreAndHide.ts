import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const useMoreAndHide = (selectedTag: string) => {
  const openedTag = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('tag-state') ? true : false;
  }, []);

  const [showAllTags, setShowAllTags] = useState(openedTag);
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
    const tags = tagsRef.current as HTMLElement;

    if (showAllTags) {
      tags.classList.add('opened-tags', 'tags');
    } else {
      tags.classList.remove('opened-tags', 'tags');
    }
  }, [showAllTags]);

  return { showAllTags, tagsRef, handleClick };
};

export default useMoreAndHide;
