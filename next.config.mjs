import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  outputFileTracingIncludes: {
    '/api/ai-search': [
      './src/app/**/page.tsx',
      './src/components/content/about/components/{AboutMe,CurrentProject}.tsx',
      './src/components/content/experience/components/Experience.tsx',
      './src/components/content/experience/data/*.ts',
    ],
  },
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_R2_DOMAIN,
        port: '',
        pathname: '/**',
      },
    ],
  },
});
