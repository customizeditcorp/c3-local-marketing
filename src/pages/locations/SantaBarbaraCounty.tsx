import LocationPageTemplate from "@/components/LocationPageTemplate";

const SantaBarbaraCounty = () => (
  <LocationPageTemplate
    countyName="Condado de Santa Barbara"
    h1="Dominando el Mercado de Contratistas en el Condado de Santa Barbara."
    problemText="La competencia en la Costa Central es feroz. Es frustrante ver a otros contratistas llevarse los mejores proyectos residenciales en Santa Barbara o Goleta simplemente porque aparecen primero en Google Maps, incluso si tu calidad de trabajo es superior."
    solutionText="Conocemos el ecosistema de la Costa Central. Creamos sistemas de Growth Marketing que posicionan tu licencia CSLB frente a los dueños de casa exactos que buscan remodelar, reparar o construir hoy mismo."
    cities={["Santa Maria", "Orcutt", "Santa Barbara", "Goleta", "Lompoc", "Carpinteria", "Guadalupe"]}
    mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416658.0287362846!2d-120.39897595!3d34.7303688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e940b8aa3e9c2d%3A0xbee8e4e25ae97800!2sSanta%20Barbara%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
    seoTitle="Marketing para Contratistas en Santa Barbara County | C3 Local Marketing"
    seoDescription="Domina Google Maps en Santa Maria, Orcutt, Santa Barbara, Goleta, Lompoc, Carpinteria y Guadalupe. Growth Marketing para contratistas CSLB."
    faqItems={[
      {
        question: "¿Trabajan con contratistas en Lompoc y Guadalupe?",
        answer: "Sí. Cubrimos todo el Condado de Santa Barbara, incluyendo las ciudades del norte como Santa Maria, Orcutt, Lompoc y Guadalupe, además de la costa sur como Goleta, Santa Barbara y Carpinteria.",
      },
      {
        question: "¿Qué licencias CSLB cubren?",
        answer: "Trabajamos con contratistas C-27 (Landscaping), C-39 (Roofing), C-36 (Plumbing), C-10 (Electrical), C-33 (Painting), C-20 (HVAC) y Class B (General Building). Si tu licencia no está en la lista, contáctanos para evaluar tu caso.",
      },
      {
        question: "¿Cuánto tiempo tarda en verse resultados en mi zona?",
        answer: "Los primeros resultados visibles en Google Maps suelen aparecer entre 30 y 90 días, dependiendo de la competencia en tu ciudad específica y el estado actual de tu perfil digital.",
      },
      {
        question: "¿Puedo enfocar mi marketing solo en ciertas ciudades del condado?",
        answer: "Absolutamente. Nuestro sistema de SEO hiper-localizado te permite enfocarte en las zonas donde realmente quieres trabajar, evitando presupuestos en áreas fuera de tu ruta rentable.",
      },
      {
        question: "¿Qué diferencia a C3 de otras agencias en Santa Barbara?",
        answer: "Somos especialistas exclusivos en contratistas de servicios para el hogar. No trabajamos con restaurantes, dentistas ni abogados. Esa especialización nos permite entender tu negocio y hablar el idioma de tu licencia CSLB.",
      },
    ]}
  />
);

export default SantaBarbaraCounty;
