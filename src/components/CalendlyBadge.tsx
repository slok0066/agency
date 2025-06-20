"use client";

import { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Ensure the script is loaded before trying to initialize the widget
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        clearInterval(checkCalendly);
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/thinkbuild8/30min',
          text: 'Book a Call',
          color: '#0069ff',
          textColor: '#ffffff',
        });
      }
    }, 100); // Check every 100ms

    return () => clearInterval(checkCalendly);
  }, []);

  return null; // This component doesn't render anything itself
};

export default CalendlyBadge;
