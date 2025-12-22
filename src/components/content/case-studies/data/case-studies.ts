export interface CaseStudy {
  title: string;
  company: string;
  coverSrc: string;
  logoSrc: string;
  href: string;
  categories: (
    | '0 to 1'
    | 'Redesign'
    | 'Marketing'
    | 'Design System'
    | 'Growth'
    | 'SaaS'
    | 'E-commerce'
  )[];
  platforms: ('Web' | 'Mobile' | 'IoT')[];
  date: string;
  featured?: boolean;
  projectType: 'Client' | 'Concept';
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Merchant Referral Program',
    company: 'Shopify',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/shopify-m2m.png',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/merchant-referrals',
    categories: ['0 to 1', 'Growth', 'SaaS', 'E-commerce'],
    platforms: ['Web'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  {
    title: 'Inventory Management System',
    company: 'Eureka Software',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/waxwing.png',
    logoSrc: '/images/logos/apps/eureka.svg',
    href: '/',
    categories: ['0 to 1', 'SaaS', 'E-commerce'],
    platforms: ['Web'],
    date: '2023-11-01',
    projectType: 'Client',
  },
  {
    title: 'Booking Platform Redesign',
    company: 'The Squire Tarbox Inn',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/tarbox.jpg',
    logoSrc: '/images/logos/apps/tarbox.svg',
    href: '/',
    categories: ['Marketing', 'Redesign'],
    platforms: ['Web', 'IoT'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  {
    title: 'Admin Checkout 2.0',
    company: 'Shopify',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-admin/shopify-admin.png',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/',
    categories: ['0 to 1', 'SaaS', 'E-commerce'],
    platforms: ['Web'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  {
    title: 'Audi Dyno Display',
    company: 'BTRES',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/btres.png',
    logoSrc: '/images/logos/apps/btres.svg',
    href: '/',
    categories: ['0 to 1'],
    platforms: ['IoT'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  {
    title: 'Simplify Travel Expenses',
    company: 'Tripway',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/tripway.png',
    logoSrc: '/images/logos/apps/tripway.svg',
    href: '/',
    categories: ['0 to 1', 'Design System'],
    platforms: ['Mobile', 'Web'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Concept',
  },
];
