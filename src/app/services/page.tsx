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
        <section className="prose prose-lg dark:prose-invert mx-auto text-center my-12">
          <h1>Our Services: End-to-End Digital Solutions</h1>
          <p><strong>ThinkBuild</strong> offers a full spectrum of digital services for ambitious brands and enterprises worldwide:</p>
          <ul>
            <li><strong>Custom Software Development:</strong> Tailored solutions for your unique business needs.</li>
            <li><strong>Web Development:</strong> Fast, secure, and scalable websites using Next.js and React.</li>
            <li><strong>Mobile App Development:</strong> Engaging iOS and Android apps for startups and enterprises.</li>
            <li><strong>UI/UX Design:</strong> Award-winning user experiences that delight and convert.</li>
            <li><strong>Digital Transformation Consulting:</strong> Strategy, cloud, and automation for future-ready businesses.</li>
          </ul>
          <p>Partner with ThinkBuild for proven results, advanced SEO, and digital growth. <strong>Your success is our mission.</strong></p>
        </section>
        <ServicesSection />
      </div>
    </>
  );
};

export default ServicesPage;
