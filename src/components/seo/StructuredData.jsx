import React from 'react';
import { Helmet } from 'react-helmet';

export const OrganizationStructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ThinkBuild",
    "url": "https://thinkbuild.com",
    "logo": "https://thinkbuild.com/logo.png",
    "description": "ThinkBuild helps businesses create stunning digital experiences with cutting-edge web development and design solutions.",
    "sameAs": [
      "https://www.facebook.com/thinkbuild",
      "https://www.twitter.com/thinkbuild",
      "https://www.linkedin.com/company/thinkbuild"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-123-456-7890",
      "contactType": "customer service",
      "email": "contact@thinkbuild.com",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Ave",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export const WebPageStructuredData = ({ title, description, url, publishedDate, modifiedDate }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title || "ThinkBuild - Transform Your Digital Presence",
    "description": description || "ThinkBuild helps businesses create stunning digital experiences with cutting-edge web development and design solutions.",
    "url": url || "https://thinkbuild.com",
    "publisher": {
      "@type": "Organization",
      "name": "ThinkBuild"
    },
    "inLanguage": "en-US"
  };

  if (publishedDate) {
    data.datePublished = publishedDate;
  }
  
  if (modifiedDate) {
    data.dateModified = modifiedDate;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export const BreadcrumbStructuredData = ({ items }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};
