'use client';

import { createContext, ReactNode, useCallback, useContext, useRef, useState } from 'react';

interface SearchResponse {
  summary: string;
  suggestedLinks: Array<{ label: string; url: string; excerpt?: string }>;
  followUpQuestions?: string[];
  disableInput?: boolean;
}

interface SearchContextType {
  opened: boolean;
  openSpotlight: () => void;
  closeSpotlight: () => void;
  query: string;
  setQuery: (query: string) => void;
  submittedQuery: string;
  loading: boolean;
  data: SearchResponse | null;
  performSearch: (queryOverride?: string) => Promise<void>;
  resetSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [opened, setOpened] = useState(false);
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SearchResponse | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const openSpotlight = useCallback(() => setOpened(true), []);
  const closeSpotlight = useCallback(() => setOpened(false), []);

  const resetSearch = useCallback(() => {
    setData(null);
    setQuery('');
    setSubmittedQuery('');
    setLoading(false);
  }, []);

  const performSearch = useCallback(
    async (overrideQuery?: string) => {
      const searchQuery = overrideQuery || query;
      if (!searchQuery.trim()) return;

      // Cancel any pending request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      setSubmittedQuery(searchQuery);
      // Don't clear query immediately, or handle it in UI
      setTimeout(() => setQuery(''), 0);

      setLoading(true);
      if (!opened) setOpened(true);

      // Create new controller for this request
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const res = await fetch('/api/ai-search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: searchQuery }),
          signal: controller.signal,
        });

        const responseData = await res.json();

        if (!res.ok) {
          throw new Error(responseData.error || 'Failed to fetch results');
        }

        setData(responseData);
      } catch (err: any) {
        // Ignore abort errors as they are intentional
        if (err.name === 'AbortError') return;
        console.error(err);
        // Could handle error state here
      } finally {
        if (abortControllerRef.current === controller) {
          setLoading(false);
          abortControllerRef.current = null;
        }
      }
    },
    [query, opened]
  );

  return (
    <SearchContext.Provider
      value={{
        opened,
        openSpotlight,
        closeSpotlight,
        query,
        setQuery,
        submittedQuery,
        loading,
        data,
        performSearch,
        resetSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
