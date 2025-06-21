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
    <main className="relative bg-gradient-to-br from-emerald-50 via-cyan-50 to-white    min-h-screen">
      <Hero />
      <div className="h-12 w-full bg-gradient-to-b from-transparent to-emerald-50 " />
      <About />
      <div className="h-12 w-full bg-gradient-to-b from-emerald-50 to-cyan-50  dark:to-emerald-900/10" />
      <Services />
      <div className="h-12 w-full bg-gradient-to-b from-cyan-50 to-white dark:from-emerald-900/10 " />
      <Testimonials />
      <div className="h-12 w-full bg-gradient-to-b from-white to-emerald-50  dark:to-emerald-900/10" />
      <Contact />
    </main>
  );
}
