import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './globals.css';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { Shell } from '../components/layout/components/Shell';

export const metadata = {
  title: 'Emre Erdener, Product Designer',
  description:
    'I am an interdisciplinary product designer helping businesses conceptualize, design, and build software, systems, experiences, websites, and brands.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicons/favicon.svg',
  },
  openGraph: {
    title: 'Emre Erdener, Product Designer',
    description:
      'I am an interdisciplinary product designer helping businesses conceptualize, design, and build software, systems, experiences, websites, and brands.',
    url: 'https://www.emre.design',
    siteName: 'Emre Erdener, Product Designer',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image-c.png',
        width: 1200,
        height: 630,
        alt: 'Emre Erdener Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emre Erdener, Product Designer',
    description:
      'I am an interdisciplinary product designer helping businesses conceptualize, design, and build software, systems, experiences, websites, and brands.',
    images: ['/images/og-image-c.png'],
  },
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
