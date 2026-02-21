import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const services = [
  { label: "Google Business Profile — Presencia premium en Google Maps", path: "/servicios/google-business-profile" },
  { label: "Facebook & Instagram Ads — Genera confianza con portfolio", path: "/servicios/meta-ads-facebook-instagram" },
  { label: "Sitio Web Profesional — Tu mejor carta de presentación", path: "/servicios/websites-profesionales" },
  { label: "CRM & Automatización — Seguimiento a proyectos grandes", path: "/servicios/crm-automatizacion" },
];

const GeneralBuilding = () => (
  <IndustryPageTemplate
    licenseCode="Class B"
    licenseName="General Building"
    industryNameEs="Contratista General"
    h1="Marketing para Contratistas Generales (Class B) en Santa Barbara y SLO"
    problemText="Los proyectos grandes requieren confianza. Los propietarios investigan mucho antes de contratar una remodelación completa, una adición de cuarto o una construcción nueva. Si tu presencia digital no inspira confianza inmediata, te descartan antes de llamarte."
    solutionText="Construimos una presencia digital premium que genera confianza inmediata: portfolio profesional de proyectos completados, reseñas verificadas de 5 estrellas y tu licencia Class B visible en cada punto de contacto. Los propietarios te eligen antes de conocerte en persona."
    services={services}
    seoTitle="Marketing para Contratistas Generales Class B | Santa Barbara y SLO | C3"
    seoDescription="Growth Marketing para contratistas generales con licencia Class B. Presencia digital premium que genera confianza y atrae proyectos de alto valor en la Costa Central."
    accentColor="bg-amber-700"
    faqItems={[
      { question: "¿Cómo generan confianza con propietarios que aún no me conocen?", answer: "Combinamos tres elementos: un portfolio visual de proyectos completados, reseñas verificadas en Google y una presencia web profesional que muestra tu licencia, seguro y experiencia. Los propietarios sienten confianza antes de levantar el teléfono." },
      { question: "¿Funcionan para remodelaciones y construcción nueva?", answer: "Sí. Nuestro sistema captura leads para ambos tipos de proyectos. Las remodelaciones suelen tener ciclos de venta más cortos, mientras que la construcción nueva genera tickets más altos." },
      { question: "¿Cómo manejan el ciclo de venta largo de proyectos grandes?", answer: "Nuestro CRM mantiene el contacto automático con prospectos durante semanas o meses. Cuando un propietario está investigando una remodelación de $50,000, el seguimiento consistente marca la diferencia entre ganar o perder el contrato." },
      { question: "¿Puedo mostrar diferentes tipos de proyectos?", answer: "Absolutamente. Organizamos tu portfolio por categoría (cocinas, baños, adiciones, construcción nueva) para que cada prospecto vea exactamente el tipo de trabajo que necesita." },
    ]}
  />
);

export default GeneralBuilding;
