'use client';

import { createContext, useContext } from 'react';

export const CaseStudyContentsContext = createContext({
  openContents: () => {},
  contentsOpened: false,
  navigationOpened: false,
});

export const useCaseStudyContents = () => useContext(CaseStudyContentsContext);
