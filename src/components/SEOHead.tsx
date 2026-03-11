import { useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  faqItems?: FAQItem[];
  ogTitle?: string;
  ogDescription?: string;
}

const SEOHead = ({ title, description, faqItems, ogTitle, ogDescription }: SEOHeadProps) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update html lang attribute dynamically
    document.documentElement.lang = language === 'es' ? 'es' : 'en';

    document.title = title;

    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const [key, value] = attr.split("=");
        el.setAttribute(key, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', 'name=description', description);

    // Update OG tags
    const socialTitle = ogTitle || title;
    const socialDesc = ogDescription || description;
    setMeta('meta[property="og:title"]', 'property=og:title', socialTitle);
    setMeta('meta[property="og:description"]', 'property=og:description', socialDesc);
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', socialTitle);
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', socialDesc);

    // Clean up existing FAQ schema
    const existingFaq = document.getElementById("faq-schema");
    if (existingFaq) existingFaq.remove();

    if (faqItems && faqItems.length > 0) {
      const script = document.createElement("script");
      script.id = "faq-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });
      document.head.appendChild(script);
    }

    return () => {
      const faqScript = document.getElementById("faq-schema");
      if (faqScript) faqScript.remove();
    };
  }, [title, description, faqItems, ogTitle, ogDescription, language]);

  return null;
};

export default SEOHead;
