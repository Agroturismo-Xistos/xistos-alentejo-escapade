export const pixelId = import.meta.env.VITE_META_PIXEL_ID;

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

let initialized = false;

export const initMetaPixel = () => {
  if (!pixelId) {
    console.warn("Meta Pixel ID não configurado (VITE_META_PIXEL_ID).");
    return;
  }
  
  if (typeof window === "undefined") return;
  if (initialized) return;

  /* eslint-disable */
  void function(f: any,b: any,e: any,v: any,n?: any,t?: any,s?: any)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq('init', pixelId);
  initialized = true;
};

export const trackPageView = () => {
  if (!initialized || typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
};

export const trackMetaEvent = (eventName: string, data?: Record<string, any>) => {
  if (!initialized || typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", eventName, data);
};

export const trackMetaCustomEvent = (eventName: string, data?: Record<string, any>) => {
  if (!initialized || typeof window === "undefined" || !window.fbq) return;
  window.fbq("trackCustom", eventName, data);
};

export const trackBookingIntent = (sourcePage?: string) => {
  trackMetaEvent("InitiateCheckout", {
    content_name: "Reserva Xistos Authentic Alentejo",
    content_category: "Alojamento",
    destination: "Amenitiz"
  });

  trackMetaCustomEvent("BookingButtonClick", {
    destination: "Amenitiz",
    source_page: sourcePage || (typeof window !== "undefined" ? window.location.pathname : "")
  });
};
