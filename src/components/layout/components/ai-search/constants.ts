export const SEARCH_SUGGESTIONS_GROUPED = [
  {
    group: 'Strategy & leadership',
    items: [
      'What is your approach to aligning design strategy with business goals?',
      'How have you led cross-functional teams to deliver product outcomes?',
      'What is your experience with zero-to-one product development?',
      'How do you measure and communicate the business impact of design?',
    ],
  },
  {
    group: 'Design engineering & systems',
    items: [
      'How do you architect and scale design systems for large organizations?',
      'What is your process for improving development velocity through design?',
      'How do you handle technical debt and component governance at scale?',
      'Describe your experience bridging the gap between design and code.',
    ],
  },
  {
    group: 'Emerging tech & AI',
    items: [
      'How do you approach designing for AI-powered and agentic workflows?',
      'What are your principles for establishing trust in automated systems?',
      'How does your philosophy background influence your view on tech ethics?',
    ],
  },
  {
    group: 'Specialized domain expertise',
    items: [
      'What are the challenges of designing for IoT and hardware ecosystems?',
      'How do you design for complex, multi-sided e-commerce marketplaces?',
      'How do you handle latency and connectivity constraints in product design?',
    ],
  },
  {
    group: 'Professional profile',
    items: [
      'What are the core pillars of your design philosophy?',
      'How do you mentor junior designers and foster a critique culture?',
      'Summarize your professional background and key career milestones.',
    ],
  },
];

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const LOADING_MESSAGES = [
  'Analyzing portfolio...',
  'Searching experience...',
  'Digging into case studies...',
  'Writing analysis...',
  'Reviewing design systems...',
  'Polishing the pixels...',
  'Auditing UX flows...',
  'Curating artifacts...',
  'Outlining an answer...',
];
