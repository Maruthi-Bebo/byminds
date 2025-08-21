'use client';

import { useEffect, useState, RefObject } from 'react';

export const useIsBottomVisible = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the bottom of the element is in view
        if (entry.target) {
          const elementBottom = entry.boundingClientRect.bottom;
          const windowHeight = window.innerHeight;
          setIsBottomVisible(elementBottom <= windowHeight);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for smoother detection
        root: null, // Use viewport as root
        rootMargin: '0px' // No margin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isBottomVisible;
};
