import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './globals.css';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';
import { PasswordProtection } from '../components/layout/components/PasswordProtection';
import { Shell } from '../components/layout/components/Shell';

export const metadata = {
  title: 'Emre Erdener',
  description:
    'I am an interdisciplinary product designer helping businesses conceptualize, design, and build software, systems, experiences, websites, and brands.',
  icons: {
    icon: '/images/favicons/favicon.svg',
  },
  openGraph: {
    title: 'Emre Erdener',
    description:
      'I am an interdisciplinary product designer helping businesses conceptualize, design, and build software, systems, experiences, websites, and brands.',
    url: 'https://www.emre.design',
    siteName: 'Emre Erdener',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image-c.png',
        width: 1200,
        height: 630,
        alt: 'Emre Erdener Product Designer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emre Erdener',
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
          <PasswordProtection>
            <Shell>{children}</Shell>
          </PasswordProtection>
        </MantineProvider>
      </body>
    </html>
  );
}
