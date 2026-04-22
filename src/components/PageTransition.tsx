'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div
      className={`page-transition ${isTransitioning ? 'transitioning' : 'visible'}`}
    >
      {displayChildren}
    </div>
  );
}
