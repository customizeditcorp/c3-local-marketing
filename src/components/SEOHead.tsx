import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  faqItems?: FAQItem[];
}

const SEOHead = ({ title, description, faqItems }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

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
  }, [title, description, faqItems]);

  return null;
};

export default SEOHead;
