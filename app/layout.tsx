import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://lumosverse.io'),
  title: 'Lumosverse — Creator-First Story Distribution',
  description:
    'A creator-first content distribution platform. Connect with the audiences who value your stories and keep more of the value you create.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/brand/favicon-light.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/brand/favicon-dark.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://lumosverse.io',
    siteName: 'Lumosverse',
    title: 'Lumosverse — Every story deserves its audience.',
    description:
      'A creator-first content distribution platform for stories and the audiences who value them.',
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="dns-prefetch" href="https://d8j0ntlcm91z4.cloudfront.net" />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
