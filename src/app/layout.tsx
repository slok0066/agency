import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CalendlyBadge from "@/components/CalendlyBadge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thinkbuild.tech'),
  title: {
    template: '%s | ThinkBuild',
    default: 'ThinkBuild - Custom Software Development & Digital Solutions',
  },
  description: 'ThinkBuild specializes in crafting bespoke digital solutions, from web and mobile apps to enterprise software. We turn your ideas into reality with cutting-edge technology and a passion for innovation.',
  keywords: ['software development', 'web development', 'mobile apps', 'custom software', 'digital solutions', 'tech company'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        {/* SEO: Open Graph, Twitter Card, Canonical */}
        <meta property="og:title" content="ThinkBuild - Custom Software Development & Digital Solutions" />
        <meta property="og:description" content="ThinkBuild specializes in crafting bespoke digital solutions, from web and mobile apps to enterprise software. We turn your ideas into reality with cutting-edge technology and a passion for innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thinkbuild.tech/" />
        <meta property="og:image" content="https://thinkbuild.tech/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ThinkBuild - Custom Software Development & Digital Solutions" />
        <meta name="twitter:description" content="ThinkBuild specializes in crafting bespoke digital solutions, from web and mobile apps to enterprise software. We turn your ideas into reality with cutting-edge technology and a passion for innovation." />
        <meta name="twitter:image" content="/images/og-image.png" />
        <link rel="canonical" href="https://thinkbuild.tech/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <header>
            <Navigation />
          </header>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
          <CalendlyBadge />
        </ThemeProvider>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
