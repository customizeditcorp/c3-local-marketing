import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const services = [
  { label: "Google Business Profile — El plomero #1 en tu zona", path: "/servicios/google-business-profile" },
  { label: "Facebook & Instagram Ads — Filtra leads de calidad", path: "/servicios/meta-ads-facebook-instagram" },
  { label: "Sitio Web Profesional — Transmite confianza y licencia", path: "/servicios/websites-profesionales" },
  { label: "CRM & Automatización — Seguimiento automático 24/7", path: "/servicios/crm-automatizacion" },
];

const Plumbing = () => (
  <IndustryPageTemplate
    licenseCode="C-36"
    licenseName="Plumbing"
    industryNameEs="Plomero"
    h1="Marketing para Plomeros (C-36) en Santa Barbara y SLO"
    problemText="Estás compitiendo con apps de servicios baratos y contratistas sin licencia que bajan los precios al piso. Los dueños de casa no ven la diferencia entre tú y el que cobra la mitad — hasta que algo sale mal."
    solutionText="Te posicionamos como el plomero licenciado de confianza en tu zona. Nuestro sistema filtra leads que buscan calidad sobre precio, conectándote con propietarios que valoran la garantía de un trabajo bien hecho con licencia C-36."
    services={services}
    seoTitle="Marketing para Plomeros C-36 | Santa Barbara y SLO | C3 Local Marketing"
    seoDescription="Growth Marketing para plomeros con licencia C-36 en Santa Barbara y San Luis Obispo. Filtra leads de calidad y posiciónate como el profesional de confianza."
    accentColor="bg-blue-600"
    faqItems={[
      { question: "¿Cómo me diferencian de los plomeros sin licencia?", answer: "Destacamos tu licencia C-36, tus reseñas verificadas y tu historial en cada punto de contacto digital. Los dueños de casa que buscan calidad ven inmediatamente por qué vales más." },
      { question: "¿Puedo filtrar a los clientes que solo buscan lo más barato?", answer: "Sí. Nuestro sistema de SEO y ads está diseñado para atraer propietarios que valoran la calidad y están dispuestos a pagar por un plomero licenciado. Los 'cazadores de gangas' se filtran solos." },
      { question: "¿Funcionan los anuncios de Facebook para plomería?", answer: "Sí, especialmente para servicios preventivos como inspecciones de tuberías, detección de fugas y remodelaciones de baño. Estos leads no buscan en Google — los encontramos donde están." },
      { question: "¿Qué tipo de leads puedo esperar?", answer: "Leads de propietarios que necesitan reparaciones, remodelaciones de baño/cocina, re-tuberías y servicios de emergencia. Todos pre-calificados por zona geográfica y disposición a pagar." },
    ]}
  />
);

export default Plumbing;
