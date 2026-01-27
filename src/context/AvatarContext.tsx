'use client';

import { createContext, MutableRefObject, ReactNode, useContext, useEffect, useRef } from 'react';

interface AvatarContextType {
  headTransformRef: MutableRefObject<string>;
  eyeTransformRef: MutableRefObject<string>;
  setHeadElement: (el: SVGGElement | null) => void;
}

const AvatarContext = createContext<AvatarContextType | null>(null);

export function AvatarProvider({ children }: { children: ReactNode }) {
  const headTransformRef = useRef<string>('scale(1.02)');
  const eyeTransformRef = useRef<string>('');
  const headElementRef = useRef<SVGGElement | null>(null);

  // Function to register the DOM element from the component
  const setHeadElement = (el: SVGGElement | null) => {
    headElementRef.current = el;
    // Apply current state immediately upon registration
    if (el && headTransformRef.current) {
      el.style.transform = headTransformRef.current;
    }
  };

  // Persistent Organic Head Movement Loop
  useEffect(() => {
    let headTimeout: ReturnType<typeof setTimeout>;

    const triggerHeadMove = () => {
      // Organic bobbing movement
      const rotate = Math.random() * 1 - 0.5; // Increased rotation for more wiggle
      const moveX = Math.random() * 10 - 5; // Increased side sway
      const moveY = Math.random() * 20 - 10; // Increased bobbing

      const newTransform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg) scale(1.02)`;
      headTransformRef.current = newTransform;

      // Apply to the registered element if it exists
      if (headElementRef.current) {
        headElementRef.current.style.transform = newTransform;
      }

      const nextMove = Math.random() * 500 + 1000; // 2-3 seconds
      headTimeout = setTimeout(triggerHeadMove, nextMove);
    };

    // Start delay
    const initialTimeout = setTimeout(triggerHeadMove, 100);

    return () => {
      clearTimeout(headTimeout);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <AvatarContext.Provider value={{ headTransformRef, eyeTransformRef, setHeadElement }}>
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatarContext() {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatarContext must be used within an AvatarProvider');
  }
  return context;
}
