import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: 'ThinkBuild - #1 Custom Software Development, Web & Mobile Apps | ThinkBuild.tech',
  description: 'Rank #1 with ThinkBuild: Award-winning custom software development, web & mobile app experts. Proven results, advanced SEO, modern UI/UX, and digital growth for ambitious brands.',
  keywords: [
    'custom software development', 'web development', 'mobile app development', 'enterprise solutions', 'UI/UX design', 'digital transformation', 'SEO', 'Next.js', 'React', 'India', 'USA', 'agency', 'award-winning', 'digital growth', 'startup', 'SaaS', 'ecommerce', 'cloud', 'AI', 'ML', 'consulting', 'ThinkBuild', 'thinkbuild.tech'
  ],
  openGraph: {
    title: 'ThinkBuild - #1 Custom Software Development, Web & Mobile Apps | ThinkBuild.tech',
    description: 'Rank #1 with ThinkBuild: Award-winning custom software development, web & mobile app experts. Proven results, advanced SEO, modern UI/UX, and digital growth for ambitious brands.',
    url: 'https://thinkbuild.tech/',
    siteName: 'ThinkBuild',
    images: [
      {
        url: 'https://thinkbuild.tech/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ThinkBuild - Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThinkBuild - #1 Custom Software Development, Web & Mobile Apps | ThinkBuild.tech',
    description: 'Rank #1 with ThinkBuild: Award-winning custom software development, web & mobile app experts.',
    images: ['/images/og-image.png'],
    creator: '@thinkbuild',
    site: '@thinkbuild',
  },
  alternates: {
    canonical: 'https://thinkbuild.tech/',
    languages: {
      'en': 'https://thinkbuild.tech/',
      'hi': 'https://thinkbuild.tech/hi',
      'es': 'https://thinkbuild.tech/es',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-emerald-50 via-cyan-50 to-white dark:from-slate-900 dark:via-emerald-900/10 dark:to-slate-900 min-h-screen">
      {/* Advanced SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="ThinkBuild" />
      <meta name="copyright" content="ThinkBuild.tech" />
      <meta name="publisher" content="ThinkBuild.tech" />
      <meta httpEquiv="content-language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://thinkbuild.tech/" />
      <link rel="alternate" href="https://thinkbuild.tech/" hrefLang="en" />
      <link rel="alternate" href="https://thinkbuild.tech/hi" hrefLang="hi" />
      <link rel="alternate" href="https://thinkbuild.tech/es" hrefLang="es" />
      {/* JSON-LD Structured Data */}
      <Script id="ld-json-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ThinkBuild',
          url: 'https://thinkbuild.tech/',
          logo: 'https://thinkbuild.tech/images/logo.png',
          sameAs: [
            'https://instagram.com/thinkbuild.tech'
          ],
          description: 'Award-winning custom software, web, and mobile app development agency. Proven results and advanced SEO for ambitious brands.'
        })}
      </Script>
      <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'ThinkBuild',
          url: 'https://thinkbuild.tech/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://thinkbuild.tech/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        })}
      </Script>
      <Script id="ld-json-breadcrumb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://thinkbuild.tech/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://thinkbuild.tech/#services' },
            { '@type': 'ListItem', position: 3, name: 'Contact', item: 'https://thinkbuild.tech/#contact' },
          ],
        })}
      </Script>
      <Script id="ld-json-service" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Custom Software Development',
          provider: {
            '@type': 'Organization',
            name: 'ThinkBuild',
            url: 'https://thinkbuild.tech/'
          },
          areaServed: ['IN', 'US', 'GB', 'AU'],
          description: 'Award-winning custom software, web, and mobile app development agency. Proven results and advanced SEO for ambitious brands.'
        })}
      </Script>
      <Script id="ld-json-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What services does ThinkBuild offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ThinkBuild offers custom software development, web and mobile app development, UI/UX design, and digital transformation consulting.'
              }
            },
            {
              '@type': 'Question',
              name: 'Where is ThinkBuild located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ThinkBuild is based in India and serves clients globally, including the US, UK, and Australia.'
              }
            },
            {
              '@type': 'Question',
              name: 'Why choose ThinkBuild for your project?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'ThinkBuild is an award-winning agency with a proven track record, advanced SEO expertise, and a focus on delivering measurable business results.'
              }
            }
          ]
        })}
      </Script>
      <Hero />
      <div className="h-12 w-full bg-gradient-to-b from-transparent to-emerald-50 dark:to-slate-900" />
      <About />
      <div className="h-12 w-full bg-gradient-to-b from-emerald-50 to-cyan-50 dark:from-slate-900 dark:to-emerald-900/10" />
      <Services />
      <div className="h-12 w-full bg-gradient-to-b from-cyan-50 to-white dark:from-emerald-900/10 dark:to-slate-900" />
      <Testimonials />
      <div className="h-12 w-full bg-gradient-to-b from-white to-emerald-50 dark:from-slate-900 dark:to-emerald-900/10" />
      <Contact />
    </main>
  );
}
