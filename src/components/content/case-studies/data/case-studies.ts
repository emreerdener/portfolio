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
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  {
    title: 'Inventory Management System',
    company: 'Eureka Software',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/waxwing.png',
    logoSrc: '/images/logos/apps/eureka.svg',
    href: '/case-study/waxwing',
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
    href: '/case-study/tarbox',
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
    href: '/case-study/admin-checkout',
    categories: ['0 to 1', 'SaaS', 'E-commerce'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  {
    title: 'Audi Dyno Display',
    company: 'BTRES',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/btres.png',
    logoSrc: '/images/logos/apps/btres.svg',
    href: '/case-study/btres',
    categories: ['0 to 1'],
    platforms: ['IoT'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  // {
  //   title: 'Simplify Travel Expenses',
  //   company: 'Tripway',
  //   coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/tripway.png',
  //   logoSrc: '/images/logos/apps/tripway.svg',
  //   href: '/case-study/tripway',
  //   categories: ['0 to 1', 'Design System'],
  //   platforms: ['Mobile', 'Web'],
  //   date: '2023-11-01',
  //   featured: false,
  //   projectType: 'Concept',
  // },
  {
    title: 'Animal Snuggles Delivered',
    company: 'Tiny Tails to You',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/tiny-tails-cover.png',
    logoSrc: '/images/logos/apps/tinytails.svg',
    href: '/case-study/tiny-tails',
    categories: ['0 to 1', 'Marketing', 'Growth'],
    platforms: ['Web'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
  {
    title: 'Shopify Pricing',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-pricing/shopify-pricing-c.png',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-pricing',
    categories: ['Redesign', 'Marketing', 'Growth'],
    platforms: ['Web'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
  },
  {
    title: 'Shop Curator Profiles',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/shopify-shop-cover.png',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-shopapp',
    categories: ['0 to 1', 'Marketing', 'Growth'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
  },
  {
    title: 'Mobile Banking App',
    company: 'University Federal Credit Union',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/ufcu-cover.png',
    logoSrc: '/images/logos/apps/ufcu.svg',
    href: '/case-study/ufcu',
    categories: ['0 to 1', 'Redesign', 'Design System', 'SaaS'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Concept',
  },
  {
    title: 'Internal Website Platform',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/shopify-website-cover.png',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-website-platform',
    categories: ['0 to 1', 'SaaS'],
    platforms: ['Web'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
  },
  {
    title: 'Productivity Incentives',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/shopify-incentives-cover.png',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-productivity-incentives',
    categories: ['0 to 1', 'SaaS', 'Growth', 'E-commerce'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
  },
  {
    title: 'Optimizing Bridge Onboarding',
    company: 'Vivint',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/bridge.jpg',
    logoSrc: '/images/logos/apps/vivint.svg',
    href: '/case-study/vivint-bridge',
    categories: ['Redesign'],
    platforms: ['Mobile', 'IoT'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
  },
];
