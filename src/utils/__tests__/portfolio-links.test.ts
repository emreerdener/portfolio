import { validPortfolioLinks } from '../portfolio-links';

test('keeps real portfolio destinations and rejects invented, external, and duplicate links', () => {
  const profile = { label: 'Profile', url: '/profile' };
  const study = { label: 'Energy', url: '/case-study/vivint-energy' };
  expect(
    validPortfolioLinks([
      profile,
      { label: 'Mello Studio', url: '/case-study/mello-studio' },
      { label: 'External', url: 'https://example.com/profile' },
      { label: 'False match', url: '/case-study/vivint-energy-invented' },
      null,
      study,
      profile,
    ])
  ).toEqual([profile, study]);
  expect(validPortfolioLinks(undefined)).toEqual([]);
});
