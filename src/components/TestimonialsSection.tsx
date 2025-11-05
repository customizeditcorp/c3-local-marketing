import { Card } from "@/components/ui/card";
import { Quote, MapPin } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
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
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-16 text-center">
          Resultados Reales de Negocios Como el Tuyo
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              
              <p className="text-base sm:text-lg mb-6 italic text-muted-foreground">
                "{testimonial.quote}"
              </p>
              
              <div className="mb-4">
                <p className="font-bold text-base sm:text-lg">{testimonial.name}</p>
                <p className="text-sm sm:text-base text-muted-foreground">{testimonial.business}</p>
                <p className="text-sm flex items-center gap-1 text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  {testimonial.location}
                </p>
              </div>
              
              <div className="border-t pt-4">
                <p className="font-semibold mb-2 text-sm sm:text-base">Resultado:</p>
                <ul className="space-y-1">
                  {testimonial.results.map((result, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;