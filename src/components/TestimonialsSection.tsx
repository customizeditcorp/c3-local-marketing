import { Card } from "@/components/ui/card";
import { Quote, MapPin } from "lucide-react";
import { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src="https://elfsightcdn.com/platform.js"]');
      scripts.forEach(s => s.remove());
    };
  }, []);
  const testimonials = [
    {
      quote: "Tenía mi perfil de Google Business pero no podía acceder. Un amigo me ayudó al inicio pero después no pude actualizarlo. No podía pedir reviews, mi teléfono estaba desactualizado, mis redes tampoco eran correctas. C3 recuperó mi perfil, lo optimizamos juntos y ahora está verificado y funcionando perfecto.",
      name: "Loe Sepulveda",
      business: "Cali Painting",
      location: "California",
      results: [
        "Perfil recuperado y verificado",
        "Toda la información actualizada",
        "Sistema de reviews activado"
      ]
    },
    {
      quote: "Antes perdía contratos porque no aparecía en Google. Ahora mi perfil está verificado y mi website se ve tan profesional como la competencia grande.",
      name: "Juan Martínez",
      business: "Martinez Landscaping",
      location: "San Jose, CA",
      results: [
        "GBP verificado en 4 semanas",
        "Website profesional activo",
        "Ya no depende solo de referencias"
      ]
    },
    {
      quote: "La barrera del idioma me frenaba con otras agencias. Con C3 todo fue en español y sin complicaciones técnicas. Ahora soy dueño de todo mi sistema digital.",
      name: "Carlos Rodríguez",
      business: "Rodriguez HVAC Services",
      location: "Los Angeles, CA",
      results: [
        "Sistema completo en 90 días",
        "100% dueño de credenciales",
        "Listo para Google Ads"
      ]
    },
    {
      quote: "Lo mejor es que todo es mío. No estoy pagando rentas eternas por algo que nunca voy a poseer. Invertí una vez y ahora tengo mi sistema trabajando 24/7.",
      name: "Miguel Hernández",
      business: "Hernández Construction",
      location: "Santa Maria, CA",
      results: [
        "Presencia digital completa",
        "Website + GBP optimizado",
        "Sin mensualidades obligatorias"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Resultados <span className="text-primary">Reales</span> de Negocios Como el Tuyo
          </h2>
          <p className="text-xl text-muted-foreground">
            De invisible a imparable, así como lo harás tú
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 sm:p-10 hover:shadow-2xl hover:scale-105 transition-all border-2 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20">
              <Quote className="h-14 w-14 text-primary/30 mb-6" />
              
              <p className="text-base sm:text-lg mb-8 italic text-foreground leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="mb-6">
                <p className="font-bold text-lg sm:text-xl mb-1">{testimonial.name}</p>
                <p className="text-base text-muted-foreground font-semibold">{testimonial.business}</p>
                <p className="text-sm flex items-center gap-2 text-muted-foreground mt-2">
                  <MapPin className="h-4 w-4" />
                  {testimonial.location}
                </p>
              </div>
              
              <div className="border-t-2 border-primary/20 pt-6">
                <p className="font-bold mb-4 text-base sm:text-lg">Resultado:</p>
                <ul className="space-y-3">
                  {testimonial.results.map((result, i) => (
                    <li key={i} className="text-sm sm:text-base flex items-start gap-3 leading-relaxed">
                      <span className="text-primary text-xl leading-none">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews Widget */}
        <div className="max-w-5xl mx-auto mt-16">
          <Card className="p-8 sm:p-12 border-2">
            <div className="elfsight-app-ca4a2a87-be2a-4c74-8b7e-2f02e19c2c53" data-elfsight-app-lazy></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;