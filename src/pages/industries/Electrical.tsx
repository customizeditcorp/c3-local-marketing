import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const services = [
  { label: "Google Business Profile — Electricista #1 en Google Maps", path: "/servicios/google-business-profile" },
  { label: "Facebook & Instagram Ads — Educa y atrae clientes", path: "/servicios/meta-ads-facebook-instagram" },
  { label: "Sitio Web Profesional — Tu licencia como garantía", path: "/servicios/websites-profesionales" },
  { label: "CRM & Automatización — Cierra más presupuestos", path: "/servicios/crm-automatizacion" },
];

const Electrical = () => (
  <IndustryPageTemplate
    licenseCode="C-10"
    licenseName="Electrical"
    industryNameEs="Electricista"
    h1="Marketing para Electricistas (C-10) en Santa Barbara y SLO"
    problemText="Los propietarios no entienden la diferencia entre un electricista licenciado y un handyman. Eso significa que te pierdes proyectos grandes — paneles eléctricos, remodelaciones completas, instalaciones solares — porque contratan al primero que encuentran."
    solutionText="Educamos al mercado y posicionamos tu licencia C-10 como garantía de seguridad y cumplimiento de código. Los dueños de casa entienden por qué necesitan un electricista profesional, y te eligen a ti."
    services={services}
    seoTitle="Marketing para Electricistas C-10 | Santa Barbara y SLO | C3 Local Marketing"
    seoDescription="Growth Marketing para electricistas con licencia C-10. Educa al mercado, posiciona tu licencia y atrae proyectos de alto valor en Santa Barbara y SLO."
    accentColor="bg-yellow-500"
    faqItems={[
      { question: "¿Cómo educan al mercado sobre la diferencia entre electricista y handyman?", answer: "Creamos contenido estratégico que destaca los riesgos de contratar a alguien sin licencia C-10: incendios, violaciones de código, seguros invalidados. Los propietarios entienden el valor y te buscan a ti." },
      { question: "¿Funcionan para proyectos residenciales y comerciales?", answer: "Nuestro enfoque es residencial en la Costa Central, pero si tu licencia C-10 cubre ambos, adaptamos la estrategia para capturar los dos tipos de leads." },
      { question: "¿Qué tipo de proyectos puedo esperar?", answer: "Upgrades de paneles eléctricos, remodelaciones, instalaciones de cargadores EV, iluminación de paisaje, y servicios de emergencia. Todos de propietarios que valoran la seguridad." },
      { question: "¿Cuánto tarda en funcionar?", answer: "Los primeros leads calificados suelen llegar entre 30 y 60 días. Proyectos grandes como paneles eléctricos tienen ciclos de venta más largos, pero el pipeline se construye desde el primer mes." },
    ]}
  />
);

export default Electrical;
