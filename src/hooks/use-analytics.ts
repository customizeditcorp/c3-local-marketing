// Unified Analytics Hook - Google Analytics 4 + Facebook Pixel

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

type EventName = 
  | 'lead'
  | 'contact'
  | 'page_view'
  | 'view_content'
  | 'schedule'
  | 'cta_click';

interface EventParams {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

// Map our unified events to platform-specific events
const eventMapping = {
  lead: { ga: 'generate_lead', fb: 'Lead' },
  contact: { ga: 'contact', fb: 'Contact' },
  page_view: { ga: 'page_view', fb: 'PageView' },
  view_content: { ga: 'view_item', fb: 'ViewContent' },
  schedule: { ga: 'schedule', fb: 'Schedule' },
  cta_click: { ga: 'cta_click', fb: 'InitiateCheckout' },
};

export const trackEvent = (eventName: EventName, params: EventParams = {}) => {
  const mapping = eventMapping[eventName];
  
  // Track with Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', mapping.ga, {
      event_category: params.content_category || 'Sistema Imán Local',
      event_label: params.content_name,
      value: params.value,
      ...params
    });
    console.log(`[GA4] Event: ${mapping.ga}`, params);
  }
  
  // Track with Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', mapping.fb, {
      content_name: params.content_name,
      content_category: params.content_category || 'Sistema Imán Local',
      value: params.value,
      currency: params.currency || 'USD',
      ...params
    });
    console.log(`[FB Pixel] Event: ${mapping.fb}`, params);
  }
};

export const useAnalytics = () => {
  const track = (eventName: EventName, params: EventParams = {}) => {
    trackEvent(eventName, params);
  };

  const trackLead = (contentName: string) => {
    track('lead', { content_name: contentName });
  };

  const trackContact = (contentName: string) => {
    track('contact', { content_name: contentName });
  };

  const trackViewContent = (contentName: string, value?: number) => {
    track('view_content', { content_name: contentName, value });
  };

  const trackCTAClick = (ctaName: string, section: string) => {
    track('cta_click', { 
      content_name: ctaName, 
      content_category: section 
    });
  };

  const trackSchedule = (contentName: string) => {
    track('schedule', { content_name: contentName });
  };

  return {
    track,
    trackLead,
    trackContact,
    trackViewContent,
    trackCTAClick,
    trackSchedule
  };
};

export default useAnalytics;
