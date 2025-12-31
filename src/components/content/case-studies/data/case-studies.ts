export interface Stat {
  label: string;
  value?: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  company: string;
  coverSrc: string; // Used for Profile/Project Card
  headerImage: string; // Used for Page Header
  coverAlt?: string;
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
  heading?: string;
  metadata?: string;
  description?: string;
  problem?: string;
  proposal?: string;
  stats?: Stat[];
  statsDescription?: string;
  prototypeUrl?: string;
  websiteUrl?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Smart Home Energy Insights',
    company: 'Vivint',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/energy-insights-cover-c.png',
    headerImage:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-energy/header-image-c.png',
    coverAlt: 'Vivint case study cover image',
    logoSrc: '/images/logos/apps/vivint.svg',
    href: '/case-study/vivint-energy',
    categories: ['Redesign', '0 to 1', 'Design System'],
    platforms: ['Mobile', 'IoT'],
    date: '2025-11-01',
    featured: true,
    projectType: 'Client',
    heading: 'Integrating energy into the smart home',
    metadata: 'Vivint • Lead Designer • 2025',
    description:
      "I led the design for 'Energy Insights,' a top-priority initiative transforming the Vivint experience by integrating comprehensive power management into the smart home. Evolving the product from an early MVP to mature v1.0 and v2.0 releases, I am now defining the v3.0 vision to fully embed energy intelligence across the core application.",
    prototypeUrl:
      'https://www.figma.com/proto/RNv5yexqJNxAkEXlCS7g2G/Energy-Insights-Dec7?page-id=26564%3A23250&node-id=26603-80089&p=f&viewport=438%2C296%2C0.58&t=3MpoFTvoXW34Edpq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=26603%3A80089&show-proto-sidebar=1',
    problem:
      'While the MVP displayed raw data, it lacked a coherent vision for user value. The interface was dense and unintuitive, failing to translate complex power usage into actionable insights. Users could see their energy, but the design offered no clear path to manage it within their existing smart home flow.',
    proposal:
      'Redefine the product vision to focus on actionable intelligence rather than raw reporting. Overhaul the UX to prioritize clarity and context, creating a scalable framework where energy insights drive automation and behavioral changes throughout the entire Vivint experience.',
    statsDescription:
      'Replacing unreliable QR code scanning with automated mDNS connectivity eliminated critical user friction points, providing real-time visibility into firmware updates and cutting setup time by more than half.',
    stats: [
      {
        label: 'Feature adoption',
        value: '+300%',
        description:
          'Increase in daily active users engaging with energy insights compared to the legacy MVP.',
      },
      {
        label: 'User retention',
        value: '+20%',
        description:
          'Energy monitoring became a primary driver for daily app opens, second only to security.',
      },
    ],
  },
  {
    title: 'Summit Design System',
    company: 'Vivint',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/summit-cover-c.png',
    headerImage:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-design-system/Cover-c.png',
    coverAlt: 'Vivint case study cover image',
    logoSrc: '/images/logos/apps/vivint.svg',
    href: '/case-study/vivint-design-system',
    categories: ['Redesign', '0 to 1', 'Design System'],
    platforms: ['Mobile', 'IoT'],
    date: '2025-11-01',
    featured: false,
    projectType: 'Client',
    heading: 'Rebuilding a design system',
    metadata: 'Vivint • Lead Designer • 2025',
    description:
      "To enable the strategic vision of the new Energy experience, I identified that the legacy design infrastructure was insufficient. I spearheaded the complete recreation of Vivint's design system and color logic. This overhaul established a modern, token-based architecture that streamlined design-to-dev handoff and ensured visual consistency across the entire smart home ecosystem.",
    prototypeUrl: '',
    problem:
      "The legacy design system was rigid, fragmented, and visually heavy. It lacked the flexibility required for modern data visualization and modular widgets. Inconsistencies between design files and production code created significant 'UI debt,' slowing down feature development and making it nearly impossible to scale new products like Energy Insights effectively.",
    proposal:
      'Architect and build a comprehensive new design system based on atomic design principles. I introduced a semantic color palette, responsive typography tokens, and a library of accessible, modular components. This system was designed to be platform-agnostic, ensuring a unified experience across iOS, Android, and IoT hub displays.',
    statsDescription:
      'Establishing a shared language between design and engineering eliminated redundant work, accelerated feature delivery, and ensured 100% consistency across the new Energy product suite.',
    stats: [
      {
        label: 'Development Velocity',
        value: '2x',
        description:
          'Reduction in time-to-ship for new features due to reusable components and standardized tokens.',
      },
      {
        label: 'System Coverage',
        value: '100%',
        description:
          'Complete adoption of the new color and typography system across the Energy Insights vertical.',
      },
    ],
  },
  {
    title: 'Inventory Management System',
    company: 'Eureka Software',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/waxwing.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/waxwing/cover.png',
    coverAlt: 'Waxwing software cover image',
    logoSrc: '/images/logos/apps/eureka.svg',
    href: '/case-study/waxwing',
    categories: ['0 to 1', 'SaaS', 'E-commerce'],
    platforms: ['Web'],
    date: '2023-11-01',
    projectType: 'Client',
    heading: 'Digitizing a decade of manual workflows',
    metadata: 'Eureka Software • Lead Designer • 2022',
    description:
      "Waxwing is a custom internal tool to manage customer relationships (CRM), order management (OMS), and staff activity. The app is for Hase Petroleum Wax Company, a wax reseller for wax producers throughout North America. This app evolves the company's decade-long workflow of handwritten papers into a functional and organized digital database.",
    prototypeUrl:
      'https://www.figma.com/proto/w72Xw17cWu46VIH12qobMq/Waxwing---HP-Wax?page-id=0%3A1&node-id=77-8053&viewport=38%2C3579%2C0.29&scaling=min-zoom&starting-point-node-id=77%3A8053',
    problem:
      'The company currently relies on manual paper-based methods to manage its inventory and orders, resulting in time-consuming processes and an increased risk of errors. Moreover, the documentation of orders lacks consistency among employees, making it challenging to refer to past orders or seamlessly handle orders between team members.',
    proposal:
      "Design a custom order management tool for a wholesale wax company that meets and builds on the company's current order management process. This app also needs to allow for flexibility to extend functionality as the company and processes evolve.",
    statsDescription:
      'Transforming a decade of paper trails into a streamlined digital workflow significantly reduced administrative overhead.',
    stats: [
      {
        label: 'Order Processing',
        value: '-75%',
        description:
          'Reduction in time spent creating and filing new orders compared to the manual workflow.',
      },
      {
        label: 'Data Retrieval',
        value: 'Instant',
        description:
          'Shifted from searching physical files to instant, searchable digital records.',
      },
    ],
  },
  {
    title: 'Booking Platform Redesign',
    company: 'The Squire Tarbox Inn',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/tarbox.jpg',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tarbox/tarbox-cover.jpg',
    coverAlt: 'Tarbox cover image',
    logoSrc: '/images/logos/apps/tarbox.svg',
    href: '/case-study/tarbox',
    categories: ['Marketing', 'Redesign'],
    platforms: ['Web', 'IoT'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
    heading: 'Redefining the booking experience',
    metadata: 'Squire Tarbox Inn • Lead Designer • 2021',
    description:
      'A boutique inn, surrounded by 12 acres of pastoral farmland, heritage woods, and a tranquil salt marsh. Built in 1763 and restored in 2018, the historic property is a peaceful retreat. Fifteen minutes from Wiscasset and the Boothbay region, in midcoast Maine. Rest, unwind, and explore our favorite local spots in Maine.',
    websiteUrl: 'https://www.squiretarboxinn.com/',
    problem:
      'The customer experience cannot be handled efficiently by a small team while maintaining an individual, personalized experience. The brand has no guidelines for content or design, and the company lacks marketing automation and content. Additionally, there is no reporting on marketing, business performance, or customer metadata.',
    proposal:
      'Optimize the brand, business processes, and customer experience across all channels, as well as introduce a new brand, tech stack, and business logic to increase conversions and business efficiency.',
    statsDescription:
      'The redesigned website and marketing ecosystem led to a substantial increase in bookings, improved user engagement, and enhanced overall business performance.',
    stats: [
      {
        label: 'Faster loading speed',
        value: '10X',
        description:
          'With a more efficient design, build, and optimized content, the page speed improved by more than 4 seconds on desktop and mobile.',
      },
      {
        label: 'Increased bookings',
        value: '300%',
        description:
          'The site brings in higher organic traffic with better SEO performance, delivers a seamless user experience, and has significantly faster load times.',
      },
    ],
  },
  {
    title: 'Payment & Checkout Redesign',
    company: 'Shopify',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-admin/shopify-admin.png',
    headerImage:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-admin/admin-cover.png',
    coverAlt: 'Shopify admin cover image',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/admin-checkout',
    categories: ['0 to 1', 'SaaS', 'E-commerce'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
    heading: 'Streamlining the admin checkout experience',
    metadata: 'Shopify • Lead Designer • 2022',
    description:
      'The checkout flow for choosing a plan in the Shopify admin required a redesign to accommodate changes in the product and the onboarding process for new users. Furthermore, several user experience enhancements were necessary to be implemented as fixes to further enhance the lead-to-customer acquisition ratio.',
    prototypeUrl:
      'https://www.figma.com/proto/Rn46dLpFj8y2f4p2f3MZP9/Checkout?page-id=770%3A46788&node-id=770-49412&viewport=-5703%2C-1216%2C0.14&scaling=min-zoom&starting-point-node-id=770%3A49412&show-proto-sidebar=1',
    problem:
      'The user interface is causing confusion and frustration among users, resulting in low conversion rates to paid customers. Users encounter difficulties understanding the specific plan they are signing up for. Internally, the payment components are outdated and do not accommodate all international payment methods across different regions. Each regional payment component is managed by a separate team, which is inefficient and difficult to maintain.',
    proposal:
      'The objective is to enhance the user experience and improve the conversion rate of the Shopify admin checkout for both new and existing users managing their subscription accounts. To achieve this, a redesign of the checkout components is necessary to ensure they can be easily integrated across the platform, from sign up to failed billing to core settings. Additionally, this redesign will include user experience optimizations as fixes to further boost lead-to-customer acquisition rate.',
    statsDescription:
      'By redesigning the checkout experience, we improved clarity and usability, resulting in higher conversion rates and better user satisfaction.',
    stats: [
      {
        label: 'Lead to customer',
        value: '+24%',
        description: 'UX optimizations led to an increase in customer acquisition.',
      },
      {
        label: 'Cross-functional teams',
        value: '6',
        description:
          'Coordinated design across billing, retention, activation, plans & pricing, and core teams.',
      },
    ],
  },
  {
    title: 'Audi Dyno Display',
    company: 'BTRES',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/btres.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/btres/gauges.png',
    coverAlt: 'BTRES cover image',
    logoSrc: '/images/logos/apps/btres.svg',
    href: '/case-study/btres',
    categories: ['0 to 1'],
    platforms: ['IoT'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
    heading: 'Visualizing engine performance in real-time',
    metadata: 'BTRES • Lead Designer • 2019',
    description:
      "Multiple touchscreen gauge displays, auto logging, auto dyno, map switching, fault checking, and more for Audi cars. Built on the power of Dyno Spectrum, this system presents a dynamic interface for complete transparency on your car's performance, as well as data storage for all logs.",
    websiteUrl: 'https://betterthan.shop/',
    problem:
      'There is not a clean and easy-to-read display for Audi engine performance. The current solutions require viewing the data after-the-fact, or not having one entirely.',
    proposal:
      'Design an interface, dials, and meters for a touch panel to reflect engine performance for Audis. This UI needs to be implemented via CSS and some additional SVG graphics. Additionally, the company needs branding and a logo.',
    statsDescription:
      'The dynamic gauge interface provides real-time performance data, enhancing user experience and vehicle monitoring.',
    stats: [
      {
        label: 'User interface design',
        description:
          'Real-time KPIs on one screen with dynamic gauges, min and max, labels, graphs, and more.',
      },
      {
        label: 'Brand identity',
        description:
          "I designed the logo and brand mark for the company's marketing, website, and product.",
      },
    ],
  },
  {
    title: 'Simplify Travel Expenses',
    company: 'Tripway',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/tripway.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tripway/cover.jpg',
    coverAlt: 'Tripway cover image',
    logoSrc: '/images/logos/apps/tripway.svg',
    href: '/case-study/tripway',
    categories: ['0 to 1', 'Design System'],
    platforms: ['Mobile'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Concept',
    heading: 'Streamlining shared travel expenses',
    metadata: 'Tripway • Design Proposal • 2023',
    description:
      "Tripway helps you track your travel expenses, split payments with friends, and gain insight into your travel spending patterns. Keep track of who owes what, how much you've paid for different trip and expense categories, and make payments to friends and family through your trusted payment service, like Venmo or PayPal.",
    prototypeUrl:
      'https://www.figma.com/proto/ru0w8LnUiE2P3uofc25ity/Tripway?page-id=0%3A1&node-id=386-16643&viewport=277%2C514%2C0.05&scaling=scale-down&starting-point-node-id=386%3A16643',
    problem:
      'It is difficult and time-consuming to track travel expenses with friends, and calculating expense splits can be tricky. If expenses are kept in an external document, it takes a lot of back and forth to sync payments, requests, etc. Additionally, there is not an easy way to identify spending patterns, view travel insights, and learn about your spending.',
    proposal:
      'Design a mobile app to help users track and split travel spending. This app needs to have a defined data structure and a seamless user experience. Along with the app there needs to be a brand, custom assets and animations, and a frontend marketing website.',
    statsDescription:
      'This comprehensive design proposal resolves the friction of group travel finance, delivering a cohesive brand and product ecosystem that transforms complex expense splitting into an intuitive and stress-free experience.',
    stats: [
      {
        label: 'Complete design',
        description:
          'Fully designed and prototyped app, from sign up and getting started, to tracking payments and splitting expenses.',
      },
      {
        label: 'Brand & marketing',
        description:
          'Complete brand and website design, from logo and brand guidelines, to animations and copy.',
      },
    ],
  },
  {
    title: 'Animal Snuggles Delivered',
    company: 'Tiny Tails to You',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/tiny-tails-cover.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/tiny-tails/tiny-tails.jpg',
    coverAlt: 'Tiny Tails image',
    logoSrc: '/images/logos/apps/tinytails.svg',
    href: '/case-study/tiny-tails',
    categories: ['0 to 1', 'Marketing', 'Growth'],
    platforms: ['Web', 'IoT'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
    heading: '12x faster orders for a local favorite',
    metadata: 'Tiny Tails to You • Consultant • 2017 - 2018',
    description:
      'Tiny Tails to You is an interactive and ethical traveling petting zoo, serving Central Texas since 2010. Each experience is designed to engage the young in age and the young at heart! They travel to you to bring animal snuggles for all kinds of events.',
    websiteUrl: 'https://www.tinytailstoyou.com/',
    problem:
      'The process of handling orders proved to be excessively time-consuming and challenging. Customers faced difficulties in understanding which services to order, leading to further delays and back-and-forth communication before finalizing an order. Creating quotes consumed a significant amount of time for staff members, and customers would often retract their orders once the quote was provided. After orders were placed, there was a lack of effective tracking, inability to request customer feedback, and inadequate reporting on sales, performance, conversion rates, and other important metrics.',
    proposal:
      'Redesign the brand, website, product offerings, and backend order management system in order to increase business efficiency and more clearly communicate with customers. Additionally, the business logic needs to allow for a more scalable and automated infrastructure.',
    statsDescription:
      'The redesigned website and marketing ecosystem led to a substantial increase in bookings, improved user engagement, and enhanced overall business performance.',
    stats: [
      {
        label: 'Order velocity',
        value: '12x',
        description: 'Orders are now processed in minutes instead of hours.',
      },
      {
        label: 'Efficiency gain',
        value: '+70%',
        description: 'Increase in order processing speed across the sales team.',
      },
    ],
  },
  {
    title: 'Merchant Referral Program',
    company: 'Shopify',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/shopify-m2m.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-m2m/m2m-cover.svg',
    coverAlt: 'Shopify Merchant Referral Program cover image',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/merchant-referrals',
    categories: ['0 to 1', 'Growth', 'SaaS', 'E-commerce'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: true,
    projectType: 'Client',
    heading: 'Unlocking a new growth lever',
    metadata: 'Shopify • Lead Designer • 2022',
    description:
      'As the Lead Designer, I spearheaded the end-to-end execution of Shopify’s Merchant Referral Program. I drove the design lifecycle from the initial MVP launch in the US and UK through to the global full-feature release, simultaneously conceptualizing the north-star incentive strategy and delivering the final production-ready interface.',
    prototypeUrl:
      'https://www.figma.com/proto/I98Ec6IN7ng4dlrRw3vDgp/Ref?page-id=1868%3A20716&node-id=2091-22734&viewport=316%2C48%2C0.05&scaling=min-zoom&starting-point-node-id=2091%3A22734&show-proto-sidebar=1',
    problem:
      'The expenses associated with acquiring users through paid ads are excessively high, without necessarily yielding the highest quality leads. The payback period for paid ads is prolonged and frequently fails to achieve a successful return on investment, ultimately leading to a net loss for the company.',
    proposal:
      'Develop and implement an innovative growth strategy for Shopify that reduces dependence on costly paid advertisements and instead utilizes existing research data on user sign-ups, particularly through referrals. The primary objective is to create avenues to engage and activate users within the Shopify ecosystem by incorporating incentive mechanisms.',
    statsDescription:
      'By operationalizing word-of-mouth, we achieved immediate improvements in acquisition costs and cross-team alignment.',
    stats: [
      {
        label: 'Payback efficiency',
        value: '+63%',
        description:
          'More efficient payback period for user acquisitions, from eight months down to three months.',
      },
      {
        label: 'New users',
        value: '+200k',
        description:
          'Estimated number of incremental new users brought in by full feature rollout.',
      },
    ],
  },
  {
    title: 'Shopify Pricing',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-pricing/shopify-pricing-c.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-pricing/cover.png',
    coverAlt: 'Shopify pricing cover image',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-pricing',
    categories: ['Redesign', 'Marketing', 'Growth'],
    platforms: ['Web'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
    heading: 'Clarifying value for millions of merchants',
    metadata: 'Shopify • Lead Designer • 2022',
    description:
      "Shopify's pricing page had not been worked on since 2019, aside from a few minor color updates. The user experience of the page was not great, especially on mobile, and it was difficult to understand how one plan was differentiated from another. The research team outlined a number of improvements to be made, from social proof elements (like logos) to a better feature table. I led the design on this project.",
    prototypeUrl:
      'https://www.figma.com/proto/JTl7erPq9ds06NOl3LDyEO/Shopify.com-pricing?page-id=2%3A4&node-id=186-18227&viewport=36%2C86%2C0.05&scaling=min-zoom&starting-point-node-id=186%3A18227&show-proto-sidebar=1',
    problem:
      'User research has revealed that users struggle to comprehend the unique value propositions and distinctions between each plan. Additionally, the interface is marked by confusion, featuring unexpected user interactions that have resulted in a decrease in sign-up conversions.',
    proposal:
      'Redesign the pricing page on Shopify.com to improve the user experience, match the rebrand, increase conversions, and more clearly explain the pricing plans and feature gaps between the plans.',
    statsDescription:
      'The strategic redesign clarified plan differentiation and streamlined the decision-making process, directly contributing to improved sign-up conversions and user confidence.',
    stats: [
      {
        label: 'Monthly page views',
        value: '50m',
        description:
          'The pricing page is one of the most popular pages on the website with million of views.',
      },
      {
        label: 'Conversion rate optimizations',
        value: '40+',
        description: 'Improvements to the information architecture and overall user experience.',
      },
    ],
  },
  {
    title: 'Shop Curator Profiles',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/shopify-shop-cover.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-shopapp/cover.png',
    coverAlt: 'Shopify Shop app cover image',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-shopapp',
    categories: ['0 to 1', 'Marketing', 'Growth'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
    heading: 'A new economy for product discovery',
    metadata: 'Shopify • Lead Designer • 2023',
    description:
      "Curator profiles are a new feature for the Shop App, which allow users to create collections of products from within Shopify's merchant ecosystem. This feature allows users to earn Shop Cash each time a purchase is made from their curated list. This feature will provide users with a more practical means of saving products and also create a growth intiative to attract more users to the app.",
    prototypeUrl:
      'https://www.figma.com/proto/J8U5yHemWSFg0hqXKypImf/Big-Bets-Monetization?page-id=118%3A28036&type=design&node-id=120-19905&viewport=480%2C801%2C0.04&scaling=scale-down&starting-point-node-id=120%3A19905',
    problem:
      'Finding products on the Shop app poses a challenge, and the creation of curated lists by the Shop team requires a substantial amount of time and resources. Users are currently restricted to a single favorites list, and they lack the ability to share this list with their friends or social networks.',
    proposal:
      'The objective behind curator profiles is to offer a practical function to users (both for reference and sharing), while simultaneously encouraging use of the Shop app. The anticipated outcome is a better shopping experience for all users, an increase in purchases made through the app, and a growth flywheel for Shop user acquisition.',
    statsDescription:
      'Transforming static favorites into shareable, incentive-driven collections unlocked a scalable organic growth loop, empowering users to drive product discovery.',
    stats: [
      {
        label: 'New growth loop',
        description:
          'Creates a growth loop that incentivizes users to drive increased shopping within the Shop app.',
      },
      {
        label: 'New feature',
        description:
          'Introduces a new feature that allows users better organization and greater customization of their accounts.',
      },
    ],
  },
  {
    title: 'Mobile Banking App',
    company: 'University Federal Credit Union',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/ufcu-cover.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/ufcu/cover.png',
    coverAlt: 'UFCU app cover image',
    logoSrc: '/images/logos/apps/ufcu.svg',
    href: '/case-study/ufcu',
    categories: ['0 to 1', 'Redesign', 'Design System', 'SaaS'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Concept',
    heading: 'Redesigning mobile banking',
    metadata: 'University Federal Credit Union • Design Proposal • 2023',
    description:
      'The University Federal Credit Union mobile app was released a few years ago, and while the functionality is okay, the user experience has a lot of room for improvement. In an effort to improve the app for myself and others, I completely redesigned the mobile app from the ground up. One of the goals of this redesign was to maintain the data, just display it better and design a cleaner, more streamlined user experience.',
    prototypeUrl:
      'https://www.figma.com/proto/iCXwkVG4Qw3PiLMq5Djdmd/UFCU?page-id=3%3A186&node-id=90-3270&viewport=124%2C2421%2C0.33&scaling=scale-down&starting-point-node-id=90%3A3270&show-proto-sidebar=1',
    problem:
      'The user experience is confusing, difficult to use, and broken in certain areas of the product. The app is slow and the interface is not accessible, as the buttons are small and the text is challenging to read.',
    proposal:
      'Redesign the mobile interface and user experience to deliver a comprehensive suite of financial tools for UFCU members. This redesign needs to maintain, improve, and add features, while also improving accessibility and usability.',
    stats: [
      {
        label: 'Accessibility improvements',
        description:
          'Through higher contrast ratios, larger font sizes, and a better information architecture, the app is much more accessible to all users, especially the visually impaired.',
      },
      {
        label: 'A better user experience',
        description:
          'Consistency across all user interactions and the interface improves the user experience, from viewing account balances and transactions to making deposits.',
      },
    ],
  },
  {
    title: 'Internal Website Platform',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/shopify-website-cover.png',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-website/cover.png',
    coverAlt: 'Shopify website platform cover image',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-website-platform',
    categories: ['0 to 1', 'SaaS'],
    platforms: ['Web'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
    heading: 'A scalable custom CMS for international growth',
    metadata: 'Shopify • Lead Designer • 2023',
    description:
      "With the release of Hydrogen (Shopify's React-based framework), Shopify needed a content management system to empower their marketing teams to create, update, delete, manage, and experiment with pages across all international variations of the website. I lead the design for this project, to scope the functionality, and design the interface and user experience for Shopify's custom CMS.",
    prototypeUrl:
      'https://www.figma.com/proto/QHlzAOSDPpEMLNZOk7ZKN9/Website-Platform?page-id=21%3A18609&node-id=24-40335&viewport=463%2C983%2C0.03&scaling=contain&starting-point-node-id=24%3A40335&show-proto-sidebar=1',
    problem:
      'Shopifolk spend a considerable amount of time and resources creating and updating pages on the website. The process requires engineering support, is prone to errors, and can be slow. This is an inefficient use of resources and expensive for the company.',
    proposal:
      'Design a scalable and no-code content management system for Shopify employees to build and launch pages without developer support. These pages need to be able to be translated and localized across international domains and content.',
    statsDescription:
      'Empowering marketing teams to work autonomously eliminated engineering bottlenecks, resulting in massive operational efficiencies and annual cost savings.',
    stats: [
      {
        label: 'Website pages',
        value: '150,000+',
        description: 'Primary and secondary pages built and maintained within this custom CMS.',
      },
      {
        label: 'Annual cost savings',
        value: '$45M',
        description: 'Enabling teams to work autonomously on the website saves company resources.',
      },
    ],
  },
  {
    title: 'Productivity Incentives',
    company: 'Shopify',
    coverSrc:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/shopify-incentives-cover.png',
    headerImage:
      'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/shopify-productivity/cover.png',
    coverAlt: 'Shopify productivity incentives cover image',
    logoSrc: '/images/logos/apps/shopify.svg',
    href: '/case-study/shopify-productivity-incentives',
    categories: ['0 to 1', 'SaaS', 'Growth', 'E-commerce'],
    platforms: ['Web', 'Mobile'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
    heading: 'Driving first-time success through incentives',
    metadata: 'Shopify • Lead Designer • 2023',
    description:
      'As a means of encouraging new leads and free trial merchants to complete essential tasks that are known to enhance long-term productivity, we are providing a $50 app store credit incentive. Our goal is to increase the probability of merchants contributing to Gross Merchandise Volume (GMV) and to improve user retention. These tests will lay the foundation for productivity incentives across the Admin.',
    prototypeUrl:
      'https://www.figma.com/proto/H8MM9bvCbH9xtuVNqGABJX/Productivity-Incentives?page-id=1198%3A110524&type=design&node-id=1392-225359&viewport=-2031%2C239%2C0.13&scaling=min-zoom&starting-point-node-id=1392%3A225359&show-proto-sidebar=1',
    problem:
      "Merchants are struggling to achieve sustainable growth and are facing challenges in quickly realizing value on Shopify's platform. The process of generating sales can take a significant amount of time. We need to improve the ease of identifying different growth opportunities, as the current system does not facilitate this effectively.",
    proposal:
      "Our aim was to evaluate the impact of productivity incentives on significant milestones within the admin's new user setup guide. The objective was to determine whether improving the completion rate of these milestones would lead to a more complete shop setup and therefore more successful merchants.",
    statsDescription:
      'Validating this strategy across 1.3M users established a scalable framework for driving merchant success and increasing long-term platform retention.',
    stats: [
      {
        label: 'Gross profit',
        value: '$12.7M',
        description: 'The estimated profit over 3 years.',
      },
      {
        label: 'Userbase',
        value: '1.3M users',
        description: 'Tested worldwide for 3 weeks with a cooldown.',
      },
    ],
  },
  {
    title: 'Optimizing Bridge Onboarding',
    company: 'Vivint',
    coverSrc: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/bridge.jpg',
    headerImage: 'https://pub-e42ab952d43b4bb2b7d9131b00ac9de4.r2.dev/vivint-bridge/cover.jpg',
    coverAlt: 'Vivint case study cover image',
    logoSrc: '/images/logos/apps/vivint.svg',
    href: '/case-study/vivint-bridge',
    categories: ['Redesign'],
    platforms: ['Mobile', 'IoT'],
    date: '2023-11-01',
    featured: false,
    projectType: 'Client',
    heading: 'Seamless onboarding connectivity',
    metadata: 'Vivint • Lead Designer • 2025',
    description:
      "The bridge serves as a crucial communication hub, linking various Vivint products within the ecosystem. Despite its importance, the hardware was managed by a third-party company, restricting Vivint's capacity to update or customize the firmware. The design work focused on streamlining the user experience, enhancing functionality, and accelerating the integration process, resulting in a more seamless experience for users.",
    prototypeUrl:
      'https://www.figma.com/design/evA0SJLCpGKc5sUwhtVFnH/Bridge?node-id=167-1119&t=pnLicmh1OELVPWyl-1',
    problem:
      'Users find the bridge onboarding to be confusing, take longer than expected, and are often not able to successfully pair their bridge through the app.',
    proposal:
      'Redesign bridge onboarding and troubleshooting for an improved UX that is faster, more reliable, and easier for users.',
    statsDescription:
      'Replacing unreliable QR code scanning with automated mDNS connectivity eliminated critical user friction points, providing real-time visibility into firmware updates and cutting setup time by more than half.',
    stats: [
      {
        label: 'More efficient',
        value: '2x',
        description: 'Reduced the number of steps from 12 to 6.',
      },
      {
        label: 'Faster setup time',
        value: '+60%',
        description: 'Faster average setup time: 10m → 4m',
      },
    ],
  },
];
