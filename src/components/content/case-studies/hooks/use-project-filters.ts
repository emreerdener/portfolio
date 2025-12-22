import { useCallback, useMemo, useState } from 'react'; // [!code ++]
import { CASE_STUDIES } from '@/src/components/content/case-studies/data/case-studies';

export function useProjectFilters(projects: typeof CASE_STUDIES) {
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<string | null>('Recent');

  // [!code ++] New: Reset function
  const resetFilters = useCallback(() => {
    setSelectedCompanies([]);
    setSelectedCategory(null);
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

    // [!code ++] New: Sorting logic
    if (sortOrder === 'Recent') {
      result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    // Add 'Featured' logic here if you add an isFeatured boolean to your data

    return result;
  }, [projects, selectedCompanies, selectedCategory, selectedPlatform, sortOrder]);

  return {
    selectedCompanies,
    setSelectedCompanies,
    selectedCategory,
    setSelectedCategory,
    selectedPlatform,
    setSelectedPlatform,
    sortOrder,
    setSortOrder,
    filteredProjects,
    resetFilters, // [!code ++]
  };
}
