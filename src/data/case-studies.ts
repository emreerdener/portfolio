export interface CaseStudy {
  title: string;
  company: string;
  coverSrc: string;
  logoSrc: string;
  href: string;
  categories: ('Product' | 'Marketing' | 'System' | 'Growth')[];
  platforms: ('Web' | 'Mobile' | 'IoT')[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Merchant Referral Program',
    company: 'Shopify',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/shopify-m2m.png',
    logoSrc: '/images/apps/shopify.svg',
    href: '/case-study/merchant-referrals',
    categories: ['Product', 'Growth'],
    platforms: ['Web'],
  },
  {
    title: 'Inventory Management System',
    company: 'Eureka Software',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/waxwing.png',
    logoSrc: '/images/apps/eureka.svg',
    href: '/',
    categories: ['Product', 'System'],
    platforms: ['Web'],
  },
  {
    title: 'Booking Platform Redesign',
    company: 'The Squire Tarbox Inn',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/tarbox.jpg',
    logoSrc: '/images/apps/tarbox.svg',
    href: '/',
    categories: ['Marketing', 'System'],
    platforms: ['Web'],
  },
  {
    title: 'Admin Checkout 2.0',
    company: 'Shopify',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-admin/shopify-admin.png',
    logoSrc: '/images/apps/shopify.svg',
    href: '/',
    categories: ['Product', 'System'],
    platforms: ['Web'],
  },
  {
    title: 'Audi Dyno Display',
    company: 'BTRES',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/btres.png',
    logoSrc: '/images/apps/btres.svg',
    href: '/',
    categories: ['Product'],
    platforms: ['IoT'],
  },
  {
    title: 'Simplify Travel Expenses',
    company: 'Tripway',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/tripway.png',
    logoSrc: '/images/apps/tripway.svg',
    href: '/',
    categories: ['Product', 'Marketing', 'System'],
    platforms: ['Mobile', 'Web'],
  },
];
