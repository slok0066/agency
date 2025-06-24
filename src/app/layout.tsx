import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import KoalendarBadge from "@/components/KoalendarBadge";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thinkbuild.tech'),
  title: {
    template: '%s | ThinkBuild',
    default: 'ThinkBuild - Custom Software Development & Digital Solutions',
  },
  description: 'ThinkBuild specializes in crafting bespoke digital solutions, from web and mobile apps to enterprise software. We turn your ideas into reality with cutting-edge technology and a passion for innovation.',
  keywords: ['software development', 'web development', 'mobile apps', 'custom software', 'digital solutions', 'tech company', 'enterprise software', 'IT consulting'],
  creator: 'ThinkBuild',
  publisher: 'ThinkBuild',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ThinkBuild - Custom Software Development & Digital Solutions',
    description: 'ThinkBuild specializes in crafting bespoke digital solutions, from web and mobile apps to enterprise software. We turn your ideas into reality with cutting-edge technology and a passion for innovation.',
    url: '/',
    siteName: 'ThinkBuild',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ThinkBuild Digital Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ThinkBuild - Custom Software Development & Digital Solutions',
    description: 'ThinkBuild specializes in crafting bespoke digital solutions, from web and mobile apps to enterprise software. We turn your ideas into reality with cutting-edge technology and a passion for innovation.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="only light" />
        {/* Metadata is now handled by the metadata object above */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'ThinkBuild',
              'url': 'https://thinkbuild.tech',
              'logo': 'https://thinkbuild.tech/images/logo.png',
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+1-555-555-5555', // Add your phone number
                'contactType': 'customer service',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <header>
          <Navigation />
        </header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
        <KoalendarBadge />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
