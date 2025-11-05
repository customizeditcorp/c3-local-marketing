import { Card } from "@/components/ui/card";
import paso1 from "@/assets/generated/08_paso1_fundacion_digital.png";
import paso2 from "@/assets/generated/09_paso2_magnetizacion_local.png";
import paso3 from "@/assets/generated/10_paso3_confianza_visual.png";
import paso4 from "@/assets/generated/11_paso4_activacion_247.png";

const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "FUNDACIÓN DIGITAL",
      description: "Establecemos tu presencia profesional",
      image: paso1,
      items: [
        "Creación de correo Gmail corporativo",
        "Compra y configuración de dominio + hosting",
        "Brief completo de tu negocio",
        "Diseño de website profesional (5-7 páginas)",
        "Creación de Google Business Profile",
        "Setup de LinkTree"
      ],
      result: "Base digital sólida lista para trabajar"
    },
    {
      number: "02",
      title: "MAGNETIZACIÓN LOCAL",
      description: "Te optimizamos para ser encontrado en tu zona",
      image: paso2,
      items: [
        "Investigación de 10 keywords estratégicas",
        "Optimización de categorías y servicios",
        "Configuración de áreas de cobertura",
        "Benchmarking de competencia",
        "Estructura técnica SEO correcta",
        "Schema markup básico"
      ],
      result: "Visible para clientes en tu zona específica"
    },
    {
      number: "03",
      title: "CONFIANZA VISUAL",
      description: "Construimos credibilidad digital",
      image: paso3,
      items: [
        "Fotos profesionales de servicios",
        "Optimización de imágenes para web",
        "Videos de trabajo (si disponibles)",
        "Galería de proyectos completados",
        "Branding consistente",
        "Contenido que demuestra experiencia"
      ],
      result: "Presencia visual que genera confianza"
    },
    {
      number: "04",
      title: "ACTIVACIÓN 24/7",
      description: "Tu sistema imán trabaja constantemente",
      image: paso4,
      items: [
        "Formularios de contacto optimizados",
        "Botones de llamada directa",
        "Chat automático (opcional)",
        "Integración con redes sociales",
        "Configuración de Google Ads ready",
        "Analytics y tracking configurado"
      ],
      result: "Sistema capturando leads automáticamente"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-16 text-center">
          Los 4 Pasos del Sistema Imán Local™
        </h2>

        <div className="space-y-8 sm:space-y-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10 relative">
                  <div className="text-8xl sm:text-9xl font-bold text-muted/20 absolute top-0 right-4 sm:right-8 select-none">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-primary font-semibold">
                      {step.description}
                    </p>
                    
                    <div className="mb-6 sm:mb-8">
                      <p className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Qué hacemos:</p>
                      <ul className="space-y-2 sm:space-y-3">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-sm sm:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                      <p className="text-sm sm:text-base lg:text-lg font-semibold">
                        {step.result}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={step.image} 
                    alt={`Paso ${step.number}: ${step.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;