import { useMemo, useState } from 'react';
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export function useProjectFilters(projects: typeof CASE_STUDIES) {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>('Recent');

  // Filter logic
  const filteredProjects = useMemo(() => {
    const result = projects.filter((project) => {
      // 1. Client Filter
      if (selectedCompanies.length > 0 && !selectedCompanies.includes(project.company)) {
        return false;
      }
      // 2. Category Filter
      if (selectedCategory && !project.categories.includes(selectedCategory as any)) {
        return false;
      }
      // 3. Platform Filter
      if (selectedPlatform && !project.platforms.includes(selectedPlatform as any)) {
        return false;
      }
      return true;
    });

    // Optional: Add sorting logic here if needed in the future
    if (sortOrder === 'Recent') {
      // result = result.sort(...)
    }

    return result;
  }, [projects, selectedCompanies, selectedCategory, selectedPlatform, sortOrder]);

  return {
    // State
    selectedCompanies,
    setSelectedCompanies,
    selectedCategory,
    setSelectedCategory,
    selectedPlatform,
    setSelectedPlatform,
    sortOrder,
    setSortOrder,
    // Results
    filteredProjects,
  };
}
