import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Props {
  slug: string;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Toc: React.FC<Props> = ({ slug, contentRef }) => {
  const [headings, setHeadings] = useState<string[][]>([]);
  const [currentHeading, setCurrentHeading] = useState<string | null>(null);

  useEffect(() => {
    const headingElems = contentRef.current?.querySelectorAll('h1, h2, h3');
    setHeadings(Array.from(headingElems || []).map((elem) => [elem.tagName, elem.id, elem.textContent || '']));

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          setCurrentHeading(entry.target.textContent);
        }
      });
    };
    const options = {
      root: null,
      rootMargin: '-5% 0px -90% 0px',
      threshold: 1,
    };

    const io = new IntersectionObserver(callback, options);

    headingElems?.forEach((elem) => {
      io.observe(elem);
    });

    return () => {
      io.disconnect();
    };
  }, [contentRef]);

  useEffect(() => {
    const handleChangeHash = (e:HashChangeEvent) => {
      const articleToShow = document.querySelector(window.location.hash) || document.querySelector('article');
      e.preventDefault();
      // articleToShow.scrollIntoView();
    };
    window.addEventListener('hashchange', handleChangeHash);

    return () => {
      window.removeEventListener('hashchange', handleChangeHash);
    }
  }, []);

  return (
    <div className="absolute top-0 -right-80 w-72 h-full not-prose">
      <ul className="sticky top-48 flex flex-col gap-2 ml-2">
        {headings.map(([tag, id, text], index) => (
          <li
            key={`${index}-${text}`}
            className={`text-sm ${tag === 'H2' ? 'ml-2' : ''} ${tag === 'H3' ? 'ml-4' : ''} ${
              currentHeading === text ? 'text-blue-400' : 'text-tag dark:text-[#b3b3b3]'
            } transition-colors`}
          >
            <Link href={`/${slug}#${id}`}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toc;
