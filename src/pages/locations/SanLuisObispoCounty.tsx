import LocationPageTemplate from "@/components/LocationPageTemplate";

const SanLuisObispoCounty = () => (
  <LocationPageTemplate
    countyName="Condado de San Luis Obispo"
    h1="El Sistema de Crecimiento para Contratistas en el Condado de San Luis Obispo."
    problemText="Cubrir un condado tan amplio cuesta dinero en gasolina y tiempo. Si tu marketing te envía a hacer presupuestos a prospectos que solo buscan lo más barato o que están fuera de tu ruta rentable, tu negocio se estanca."
    solutionText="Implementamos filtros automáticos y SEO hiper-localizado para que tu teléfono solo suene con prospectos calificados en las zonas donde realmente quieres trabajar."
    cities={["San Luis Obispo", "Paso Robles", "Atascadero", "Arroyo Grande", "Nipomo", "Grover Beach", "Morro Bay"]}
    mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416658.0287362846!2d-120.63897595!3d35.3303688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80942b20b0e2c4a5%3A0x1c2b3d4e5f6a7b8c!2sSan%20Luis%20Obispo%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
    seoTitle="Marketing para Contratistas en San Luis Obispo County | C3 Local Marketing"
    seoDescription="Domina Google Maps en SLO, Paso Robles, Atascadero, Arroyo Grande, Nipomo, Grover Beach y Morro Bay. Growth Marketing para contratistas CSLB."
    faqItems={[
      {
        question: "¿Cubren todo el Condado de San Luis Obispo?",
        answer: "Sí. Desde Paso Robles y Atascadero en el norte hasta Nipomo y Arroyo Grande en el sur, incluyendo la costa como Morro Bay y Grover Beach.",
      },
      {
        question: "¿Cómo evitan que reciba leads de zonas donde no quiero trabajar?",
        answer: "Nuestro sistema de SEO hiper-localizado y filtros automáticos dirigen tu visibilidad solo hacia las ciudades y códigos postales que tú elijas, maximizando tu rentabilidad por viaje.",
      },
      {
        question: "¿Trabajan con contratistas que también cubren Santa Barbara County?",
        answer: "Sí, muchos de nuestros clientes operan en ambos condados. Optimizamos tu presencia digital para cubrir las dos áreas de servicio de forma estratégica.",
      },
      {
        question: "¿Cuánto tiempo tarda en verse resultados en SLO?",
        answer: "Los primeros leads calificados suelen llegar entre 30 y 90 días. En ciudades con menos competencia como Nipomo o Morro Bay, los resultados pueden ser incluso más rápidos.",
      },
      {
        question: "¿Qué pasa si mi competencia ya está usando marketing digital en mi zona?",
        answer: "Mejor. Eso significa que el mercado está activo y hay demanda. Nuestro sistema está diseñado para superar a competidores que usan estrategias genéricas de agencias que no entienden tu industria.",
      },
    ]}
  />
);

export default SanLuisObispoCounty;
