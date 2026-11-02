export const SEARCH_SUGGESTIONS_GROUPED = [
  {
    group: 'Explore my work',
    items: [
      'Where should I start with Emre’s work?',
      'Show me his design systems work',
      'What has Emre built independently?',
    ],
  },
  {
    group: 'Strategy & collaboration',
    items: [
      'How does Emre help define product direction?',
      'Show me a project he helped shape from the start',
      'How does he work with product and engineering?',
      'What impact has his work had?',
    ],
  },
  {
    group: 'Systems & code',
    items: [
      'How has Emre helped teams build and use design systems?',
      'How does his knowledge of code influence his design work?',
      'What does he build with code?',
      'How does he take an idea from prototype to product?',
    ],
  },
  {
    group: 'AI & exploration',
    items: [
      'How does Emre use AI in his work?',
      'What has he learned from building Naturebook?',
      'How does he design experiences that use AI?',
    ],
  },
  {
    group: 'Product experience',
    items: [
      'What did Emre work on at Shopify?',
      'How has he approached smart home design at Vivint?',
      'Show me how he makes complex workflows easier to use',
    ],
  },
  {
    group: 'About Emre',
    items: [
      'What experience would Emre bring to a team?',
      'How does he support other designers?',
      'How does his philosophy background influence his work?',
      'Give me a quick overview of his career',
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
  'Looking through my work...',
  'Finding relevant examples...',
  'Connecting the details...',
  'Putting an answer together...',
];
