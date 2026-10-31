import { CASE_STUDIES } from '../components/content/case-studies/data/case-studies';

export const PORTFOLIO_LINKS = [
  { label: 'Home', url: '/' },
  { label: 'Profile', url: '/profile' },
  { label: 'Resume', url: '/resume' },
  { label: 'Presentation', url: '/presentation' },
  { label: 'Other work', url: '/other-work' },
  { label: 'Woodworking', url: '/woodworking' },
  { label: 'All case studies', url: '/case-studies' },
  ...CASE_STUDIES.map((study) => ({ label: study.title, url: study.href })),
];

interface PortfolioLink {
  label: string;
  url: string;
  excerpt?: string;
}

export function validPortfolioLinks(links: unknown): PortfolioLink[] {
  if (!Array.isArray(links)) {
    return [];
  }
  const seen = new Set<string>();
  return links.filter((link): link is PortfolioLink => {
    if (
      !link ||
      typeof link.label !== 'string' ||
      typeof link.url !== 'string' ||
      !PORTFOLIO_LINKS.some((page) => page.url === link.url) ||
      seen.has(link.url)
    ) {
      return false;
    }
    seen.add(link.url);
    return true;
  });
}
