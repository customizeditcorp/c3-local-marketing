import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const services = [
  { label: "Google Business Profile — Destaca tu portfolio", path: "/servicios/google-business-profile" },
  { label: "Facebook & Instagram Ads — Muestra tu trabajo visualmente", path: "/servicios/meta-ads-facebook-instagram" },
  { label: "Sitio Web Profesional — Portfolio y reseñas que venden", path: "/servicios/websites-profesionales" },
  { label: "CRM & Automatización — Convierte presupuestos en contratos", path: "/servicios/crm-automatizacion" },
];

const Painting = () => (
  <IndustryPageTemplate
    licenseCode="C-33"
    licenseName="Painting"
    industryNameEs="Contratista de Pintura"
    h1="Marketing para Contratistas de Pintura (C-33) en Santa Barbara y SLO"
    problemText="La barrera de entrada es baja: cualquiera con una brocha y una escalera compite contigo, haciendo que los precios se desplomen. Los dueños de casa no distinguen entre un pintor con licencia y uno improvisado."
    solutionText="Te diferenciamos como contratista profesional con licencia C-33, portfolio visual impactante y reseñas verificadas. Los propietarios que buscan calidad te encuentran a ti primero — y están dispuestos a pagar lo que vales."
    services={services}
    seoTitle="Marketing para Contratistas de Pintura C-33 | Santa Barbara y SLO | C3"
    seoDescription="Growth Marketing para contratistas de pintura con licencia C-33. Diferénciate con portfolio visual y reseñas verificadas en Santa Barbara y San Luis Obispo."
    accentColor="bg-purple-600"
    faqItems={[
      { question: "¿Cómo me diferencian si hay tantos pintores compitiendo?", answer: "Tu licencia C-33 es tu arma secreta. La combinamos con un portfolio visual de antes/después, reseñas verificadas y una presencia digital que grita 'profesional'. Los clientes que buscan calidad te eligen sin dudar." },
      { question: "¿Instagram realmente funciona para contratistas de pintura?", answer: "Es uno de los mejores canales para tu industria. Las transformaciones de antes/después generan engagement masivo y leads de propietarios que quieren ese mismo resultado en su casa." },
      { question: "¿Pueden ayudarme con pintura residencial y comercial?", answer: "Nuestro enfoque principal es residencial en la Costa Central, pero el sistema funciona para ambos. Los leads comerciales suelen tener ticket más alto y ciclos de venta más largos." },
      { question: "¿Necesito tener fotos profesionales de mis trabajos?", answer: "Ayuda mucho, pero no es obligatorio al inicio. Podemos comenzar con fotos de celular bien tomadas y ir mejorando. Lo importante es mostrar resultados reales." },
    ]}
  />
);

export default Painting;
