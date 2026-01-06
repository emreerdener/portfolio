export interface Job {
  role: string;
  company: string;
  date: string;
  location: string;
  logoSrc: string;
  bullets: string[];
}

export const JOBS: Job[] = [
  {
    role: 'Senior UX Designer',
    company: 'Vivint',
    date: '2024 - Present',
    location: 'Remote',
    logoSrc: '/images/logos/experience/vivint.svg',
    bullets: [
      'Lead design strategy and execution across 5+ product initiatives, collaborating directly with C-suite executives and cross-functional teams to align design vision with business objectives.',
      'Architected and rebuilt the entire design system from scratch in two months, resolving four years of technical debt and accelerating development velocity by 2x.',
      'Spearheaded the Energy Intelligence UX design for Vivint and NRG platforms, transforming complex energy data into intuitive interfaces.',
      'Redesigned the onboarding UX for Smart Locks and Smart Lighting, significantly reducing customer support ticket volume and optimizing user success rates.',
      'Completely redesigned the critical bridge device setup process, improving efficiency by 45% and reducing average setup time by nearly 2 minutes.',
      'Mentor junior designers, providing ongoing feedback and guidance through weekly critiques and team rituals.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'Shopify',
    date: '2021 - 2023',
    location: 'Remote',
    logoSrc: '/images/logos/experience/shopify.jpg',
    bullets: [
      'Championed and designed an internal CMS tool for the Website Platform team, enabling autonomous management of 150,000+ pages and generating $45M in annual cost savings.',
      'Researched, designed, and shipped a merchant referral program that improved payback efficiency by 63% and drove an estimated +200k new users.',
      'Spearheaded the redesign of the admin checkout experience, increasing the lead-to-customer conversion rate by +24% through UX optimizations.',
      'Led design for key projects on the Monetization team, ensuring all key metrics and signup rates surpassed company performance records.',
      'Designed and tested conversion rate optimizations for the pricing page, establishing the direction for the rebrand and Website 3.0 launch.',
      'Conceptualized multiple new initiatives for the Growth organization, innovating product features and user experiences.',
    ],
  },
  {
    role: 'Senior Product Designer',
    company: 'Mello Studio',
    date: '2016 - 2021',
    location: 'Austin, TX',
    logoSrc: '/images/logos/experience/mello.jpg',
    bullets: [
      'Delivered end-to-end product, web, and marketing design for startups and enterprise clients.',
      'Conducted user research and usability testing to define and optimize product roadmaps.',
      'Created high-fidelity wireframes, mockups, and clickable prototypes to secure stakeholder approval and ensure accurate developer handoffs.',
      'Designed and maintained comprehensive design systems and component libraries to ensure consistency across products.',
      'Executed optimization strategies at scale through lead funnel automation, multivariate testing, and dynamic reporting.',
    ],
  },
  {
    role: 'Product Designer',
    company: 'Justuno',
    date: '2018 - 2020',
    location: 'Austin, TX',
    logoSrc: '/images/logos/experience/justuno.png',
    bullets: [
      'Conceptualized product usability and design based on requirements gathered during stakeholder and user interviews.',
      'Created high-fidelity wireframes & prototypes to define visual and interactive product direction.',
      'Conducted workshops and testing to evaluate designs and identify usability enhancements.',
      'Developed a design system for rapid prototyping, ensuring continuity and efficient communication across development teams.',
      'Designed the brand identity, created assets, and coordinated implementation between Marketing, Sales, Client Success, and Partnership teams.',
    ],
  },
];
