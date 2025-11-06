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
    <section className="py-20 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Los 4 Pasos del <span className="text-primary">Sistema Imán Local™</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Una metodología probada que transforma tu negocio
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:shadow-2xl transition-all">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className="p-8 sm:p-12 lg:p-16 relative bg-background">
                  <div className="text-[120px] sm:text-[140px] font-bold text-muted/10 absolute top-0 right-8 select-none leading-none">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-xl sm:text-2xl mb-8 text-secondary font-semibold leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="mb-8">
                      <p className="font-bold mb-5 text-lg">Qué hacemos:</p>
                      <ul className="space-y-4">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className="text-primary mt-1 text-2xl leading-none">•</span>
                            <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-lg">
                      <p className="text-lg sm:text-xl font-bold">
                        ✓ {step.result}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} min-h-[400px]`}>
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