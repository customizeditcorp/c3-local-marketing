import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const services = [
  { label: "Google Business Profile — Aparece en emergencias", path: "/servicios/google-business-profile" },
  { label: "Facebook & Instagram Ads — Leads todo el año", path: "/servicios/meta-ads-facebook-instagram" },
  { label: "Sitio Web Profesional — Genera confianza inmediata", path: "/servicios/websites-profesionales" },
  { label: "CRM & Automatización — Nunca pierdas un lead", path: "/servicios/crm-automatizacion" },
];

const Roofing = () => (
  <IndustryPageTemplate
    licenseCode="C-39"
    licenseName="Roofing"
    industryNameEs="Contratista de Techados"
    h1="Marketing para Contratistas de Techados (C-39) en Santa Barbara y SLO"
    problemText="Tu ciclo de ventas depende de tormentas y emergencias. Cuando no hay emergencia, el teléfono deja de sonar. Esa montaña rusa de ingresos hace imposible planificar el crecimiento de tu negocio."
    solutionText="Creamos un sistema de leads constante que no depende del clima. Capturamos propietarios que están planificando reemplazos de techo, inspecciones preventivas y remodelaciones — proyectos que se cierran llueva o haga sol."
    services={services}
    seoTitle="Marketing para Contratistas de Techados C-39 | Santa Barbara y SLO | C3"
    seoDescription="Growth Marketing para contratistas de roofing con licencia C-39. Genera leads constantes sin depender del clima en Santa Barbara y San Luis Obispo."
    accentColor="bg-red-600"
    faqItems={[
      { question: "¿Cómo generan leads cuando no hay tormentas?", answer: "Implementamos campañas enfocadas en mantenimiento preventivo, inspecciones de techo y reemplazos planificados. Estos propietarios buscan activamente en Google todo el año, no solo después de una tormenta." },
      { question: "¿Pueden ayudarme a aparecer en búsquedas de emergencia?", answer: "Absolutamente. Optimizamos tu Google Business Profile para que aparezcas primero en búsquedas de 'reparación de techo urgente' y 'goteras'. Pero también te posicionamos para leads planificados que son más rentables." },
      { question: "¿Qué retorno puedo esperar?", answer: "Un solo contrato de reemplazo de techo puede valer entre $8,000 y $25,000. Nuestro sistema está diseñado para que el costo de adquisición de cada lead sea una fracción de ese valor." },
      { question: "¿Trabajan con contratistas de roofing comercial también?", answer: "Nuestro enfoque principal es roofing residencial en la Costa Central, pero si tienes licencia C-39 y haces ambos, podemos adaptar la estrategia." },
    ]}
  />
);

export default Roofing;
