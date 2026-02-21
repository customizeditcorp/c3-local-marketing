import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const services = [
  { label: "Google Business Profile — Aparece en búsquedas de AC y calefacción", path: "/servicios/google-business-profile" },
  { label: "Facebook & Instagram Ads — Campañas de mantenimiento preventivo", path: "/servicios/meta-ads-facebook-instagram" },
  { label: "Sitio Web Profesional — Genera confianza y llamadas", path: "/servicios/websites-profesionales" },
  { label: "CRM & Automatización — Llena tu calendario todo el año", path: "/servicios/crm-automatizacion" },
];

const HVAC = () => (
  <IndustryPageTemplate
    licenseCode="C-20"
    licenseName="HVAC"
    industryNameEs="Contratista HVAC"
    h1="Marketing para Contratistas HVAC (C-20) en Santa Barbara y SLO"
    problemText="La demanda es estacional: los picos de verano e invierno no compensan los meses muertos de primavera y otoño. Esa irregularidad te impide contratar personal fijo, invertir en equipo o planificar tu crecimiento."
    solutionText="Implementamos campañas de mantenimiento preventivo y filtros inteligentes para llenar tu calendario todo el año. Captamos propietarios que necesitan tune-ups, reemplazos de unidades y contratos de mantenimiento recurrente — no solo emergencias."
    services={services}
    seoTitle="Marketing para Contratistas HVAC C-20 | Santa Barbara y SLO | C3"
    seoDescription="Growth Marketing para contratistas HVAC con licencia C-20. Llena tu calendario todo el año con leads de mantenimiento preventivo y reemplazos en la Costa Central."
    accentColor="bg-sky-600"
    faqItems={[
      { question: "¿Cómo llenan los meses muertos de primavera y otoño?", answer: "Lanzamos campañas de mantenimiento preventivo ('tune-up de AC antes del verano', 'revisión de calefacción antes del invierno') que generan leads en los meses bajos. También capturamos leads de reemplazo de unidades que se planifican con anticipación." },
      { question: "¿Funcionan los anuncios en redes sociales para HVAC?", answer: "Sí, especialmente para crear consciencia sobre mantenimiento preventivo. Los propietarios no buscan 'tune-up de AC' en Google, pero cuando ven tu anuncio en Facebook recordando que su unidad tiene 10 años, actúan." },
      { question: "¿Pueden ayudarme a conseguir contratos de mantenimiento recurrente?", answer: "Ese es uno de nuestros enfoques principales para HVAC. Los contratos de mantenimiento recurrente son el santo grial: ingresos predecibles, clientes leales y oportunidades de upsell en reemplazos." },
      { question: "¿Qué retorno puedo esperar?", answer: "Un reemplazo de unidad HVAC puede valer entre $5,000 y $15,000. Con un costo de adquisición de lead de una fracción de eso, el ROI es significativo incluso con tasas de conversión conservadoras." },
    ]}
  />
);

export default HVAC;
