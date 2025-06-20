import type { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | ThinkBuild',
  description: 'Learn about the mission, story, and innovation culture behind ThinkBuild. Discover how our passion for digital excellence and client success drives us to build cutting-edge solutions.',
  keywords: ['about ThinkBuild', 'company mission', 'digital innovation', 'software agency', 'tech company', 'India'],
  openGraph: {
    title: 'About Us | ThinkBuild',
    description: 'Learn about the mission, story, and innovation culture behind ThinkBuild.',
    url: 'https://www.yourdomain.com/about',
    siteName: 'ThinkBuild',
    images: [
      {
        url: 'https://thinkbuild.tech/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ThinkBuild About Us',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | ThinkBuild',
    description: 'Learn about the mission, story, and innovation culture behind ThinkBuild.',
    images: ['/images/og-image.png'],
    creator: '@thinkbuild',
  },
  alternates: {
    canonical: 'https://thinkbuild.tech/about',
  },
};

import Script from 'next/script';
const AboutPage = () => {
  return (
    <>
      <Script id="ld-json-about" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Us | ThinkBuild',
          description: 'Learn about the mission, story, and innovation culture behind ThinkBuild.',
          url: 'https://thinkbuild.tech/about',
        })}
      </Script>
      <AboutPageClient />
    </>
  );
};

export default AboutPage;
