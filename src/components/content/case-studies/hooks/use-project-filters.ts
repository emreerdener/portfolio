import { useCallback, useMemo, useState } from 'react';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export function useProjectFilters(projects: typeof CASE_STUDIES) {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>('Recent');

  const resetFilters = useCallback(() => {
    setSelectedCompanies([]);
    setSelectedCategories([]);
    setSelectedPlatform(null);
    setSortOrder('Recent');
  }, []);

  // Filter logic
  const filteredProjects = useMemo(() => {
    let result = projects.filter((project) => {
      // 1. Client Filter
      if (selectedCompanies.length > 0 && !selectedCompanies.includes(project.company)) {
        return false;
      }
      // 2. Category Filter (Multi-select)
      if (selectedCategories.length > 0) {
        // Check if project has ANY of the selected categories
        const hasMatch = project.categories.some((cat) => selectedCategories.includes(cat));
        if (!hasMatch) {
          return false;
        }
      }
      // 3. Platform Filter
      if (selectedPlatform && !project.platforms.includes(selectedPlatform as any)) {
        return false;
      }
      return true;
    });

    if (sortOrder === 'Recent') {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [projects, selectedCompanies, selectedCategories, selectedPlatform, sortOrder]);

  return {
    selectedCompanies,
    setSelectedCompanies,
    selectedCategories,
    setSelectedCategories,
    selectedPlatform,
    setSelectedPlatform,
    sortOrder,
    setSortOrder,
    filteredProjects,
    resetFilters,
  };
}
