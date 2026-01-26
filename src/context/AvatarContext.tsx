'use client';

import { createContext, MutableRefObject, ReactNode, useContext, useRef } from 'react';

interface AvatarContextType {
  headTransformRef: MutableRefObject<string>;
  eyeTransformRef: MutableRefObject<string>;
}

const AvatarContext = createContext<AvatarContextType | null>(null);

export function AvatarProvider({ children }: { children: ReactNode }) {
  const headTransformRef = useRef<string>('');
  const eyeTransformRef = useRef<string>('');

  return (
    <AvatarContext.Provider value={{ headTransformRef, eyeTransformRef }}>
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
