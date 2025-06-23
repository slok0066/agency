"use client";

import Script from "next/script";

const KoalendarBadge = () => {
  return (
    <>
      {/* Koalendar Popup Widget Start */}
      <Script id="koalendar-init" strategy="afterInteractive">
        {`window.Koalendar = window.Koalendar || function(){(Koalendar.props = Koalendar.props || []).push(arguments)};`}
      </Script>
      <Script
        id="koalendar-widget-script"
        async
        src="https://koalendar.com/assets/widget.js"
        strategy="afterInteractive"
      />
      <Script id="koalendar-config" strategy="afterInteractive">
        {`
          Koalendar('widget', {
            "url": "https://koalendar.com/e/meet-with-thinkbuild",
            "text": "Book a call",
            "shape": "rounded-full",
            "backgroundColor": "#5145CD",
            "textColor": "#FFFFFF",
            "position": "bottom-right",
            "icon": "calendar"
          });
        `}
      </Script>
      {/* Koalendar Popup Widget End */}
    </>
  );
};

export default KoalendarBadge;


