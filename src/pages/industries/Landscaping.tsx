import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const services = [
  { label: "Google Business Profile — Domina Google Maps", path: "/servicios/google-business-profile" },
  { label: "Facebook & Instagram Ads — Leads de alto valor", path: "/servicios/meta-ads-facebook-instagram" },
  { label: "Sitio Web Profesional — Portfolio visual que vende", path: "/servicios/websites-profesionales" },
  { label: "CRM & Automatización — Seguimiento automático", path: "/servicios/crm-automatizacion" },
];

const Landscaping = () => (
  <IndustryPageTemplate
    licenseCode="C-27"
    licenseName="Landscaping"
    industryNameEs="Contratista de Paisajismo"
    h1="Marketing para Contratistas de Paisajismo (C-27) en Santa Barbara y SLO"
    problemText="Depender del boca en boca es una ruleta. Mientras tanto, competidores con mejor presencia digital se están llevando los contratos de mantenimiento recurrente y los proyectos de hardscape de alto valor que deberían ser tuyos."
    solutionText="Te posicionamos para capturar contratos de mantenimiento mensual recurrente y proyectos de hardscape de alto margen. Tu licencia C-27 es tu ventaja competitiva — nosotros nos aseguramos de que los dueños de casa la vean primero."
    services={services}
    seoTitle="Marketing para Contratistas de Paisajismo C-27 | Santa Barbara y SLO | C3"
    seoDescription="Growth Marketing especializado para contratistas de paisajismo con licencia C-27 en Santa Barbara y San Luis Obispo. Más contratos recurrentes, menos dependencia del boca en boca."
    accentColor="bg-green-600"
    faqItems={[
      { question: "¿Cómo me ayudan a conseguir contratos de mantenimiento recurrente?", answer: "Optimizamos tu presencia digital para que aparezcas cuando dueños de casa buscan 'mantenimiento de jardín' o 'landscaping cerca de mí'. Además, implementamos campañas de retargeting para convertir presupuestos en contratos firmados." },
      { question: "¿Funciona para proyectos de hardscape también?", answer: "Sí. Los proyectos de hardscape tienen márgenes más altos, y nuestro sistema filtra leads que buscan calidad profesional con licencia, no solo 'el más barato'." },
      { question: "¿Qué pasa si ya tengo clientes por boca en boca?", answer: "Excelente base. Pero el boca en boca tiene un techo. Nuestro sistema digital amplifica tu reputación existente para que lleguen clientes nuevos que nunca habrían oído de ti." },
      { question: "¿Necesito un sitio web nuevo?", answer: "No necesariamente. Evaluamos tu presencia digital actual en el diagnóstico gratuito y te decimos exactamente qué necesitas mejorar o crear desde cero." },
    ]}
  />
);

export default Landscaping;
