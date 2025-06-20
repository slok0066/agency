import ServicesSection from '@/components/Services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | ThinkBuild',
  description: 'Explore the wide range of services offered by ThinkBuild: web development, mobile apps, UI/UX, and enterprise solutions. We deliver end-to-end digital excellence.',
  keywords: ['ThinkBuild services', 'web development', 'mobile apps', 'UI/UX design', 'enterprise software', 'digital solutions', 'India'],
  openGraph: {
    title: 'Services | ThinkBuild',
    description: 'Explore the wide range of services offered by ThinkBuild: web development, mobile apps, UI/UX, and enterprise solutions.',
    url: 'https://www.yourdomain.com/services',
    siteName: 'ThinkBuild',
    images: [
      {
        url: 'https://thinkbuild.tech/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ThinkBuild Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | ThinkBuild',
    description: 'Explore the wide range of services offered by ThinkBuild: web development, mobile apps, UI/UX, and enterprise solutions.',
    images: ['/images/og-image.png'],
    creator: '@thinkbuild',
  },
  alternates: {
    canonical: 'https://thinkbuild.tech/services',
  },
};

import Script from 'next/script';
const ServicesPage = () => {
  return (
    <>
      <Script id="ld-json-services" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Services | ThinkBuild',
          description: 'Explore the wide range of services offered by ThinkBuild: web development, mobile apps, UI/UX, and enterprise solutions.',
          provider: {
            '@type': 'Organization',
            name: 'ThinkBuild',
            url: 'https://thinkbuild.tech/',
          },
          url: 'https://thinkbuild.tech/services',
        })}
      </Script>
      <div className="bg-white dark:bg-black">
        <ServicesSection />
      </div>
    </>
  );
};

export default ServicesPage;
