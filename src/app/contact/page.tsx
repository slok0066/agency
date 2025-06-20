import ContactSection from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ThinkBuild',
  description: 'Get in touch with ThinkBuild for project inquiries, support, or partnership opportunities. Reach us by email, phone, or our secure online form.',
  keywords: ['contact ThinkBuild', 'get in touch', 'project inquiry', 'software agency', 'digital solutions', 'India'],
  openGraph: {
    title: 'Contact Us | ThinkBuild',
    description: 'Get in touch with ThinkBuild for project inquiries, support, or partnership opportunities.',
    url: 'https://www.yourdomain.com/contact',
    siteName: 'ThinkBuild',
    images: [
      {
        url: 'https://thinkbuild.tech/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ThinkBuild Contact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | ThinkBuild',
    description: 'Get in touch with ThinkBuild for project inquiries, support, or partnership opportunities.',
    images: ['/images/og-image.png'],
    creator: '@thinkbuild',
  },
  alternates: {
    canonical: 'https://thinkbuild.tech/contact',
  },
};

import Script from 'next/script';
const ContactPage = () => {
  return (
    <>
      <Script id="ld-json-contact" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Us | ThinkBuild',
          description: 'Get in touch with ThinkBuild for project inquiries, support, or partnership opportunities.',
          url: 'https://thinkbuild.tech/contact',
        })}
      </Script>
      <div className="bg-gray-50 dark:bg-gray-900">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage;
