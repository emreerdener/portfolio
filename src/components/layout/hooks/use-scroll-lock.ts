import { useEffect, useState } from 'react';

export function useScrollLock() {
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (scrollLocked) {
      // Lock scroll
      body.style.overflow = 'hidden';
    } else {
      // Unlock scroll
      body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      body.style.overflow = '';
    };
  }, [scrollLocked]);

  return [scrollLocked, setScrollLocked] as const;
}
