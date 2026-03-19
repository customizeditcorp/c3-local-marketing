import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  const testimonials = language === 'es' 
    ? [
        { quote: "C3 recuperó mi perfil, lo optimizamos juntos y ahora está verificado y funcionando perfecto.", name: "Loe Sepulveda", business: "Cali Painting", result: "Perfil recuperado y verificado" },
        { quote: "C3 me recuperó al 100% todos mis activos digitales que perdí con otras agencias.", name: "Lorenzo", business: "Lorenzo's Plumbing", result: "100% de sus activos recuperados" },
        { quote: "Unificaron 5 sedes bajo una misma cuenta. Ahora todo está ordenado para nuestra expansión.", name: "AGS Recycling", business: "AGS Recycling (5 Sedes)", result: "5 sedes unificadas y verificadas" },
        { quote: "Desde la primera semana me entregaron resultados. Mis números no paran de crecer.", name: "Jose Valdovinos", business: "JV Roofing INC", result: "Resultados desde la primera semana" },
        { quote: "Más de 6 años con C3. Recibo proyectos constantemente gracias a mi presencia digital.", name: "Octavio Claudio", business: "Bajascape LLC", result: "Más de 6 años de relación exitosa" },
        { quote: "Las visitas al perfil y a la web se dispararon completamente después de trabajar con C3.", name: "Destiny Castro", business: "Transmission Exchange", result: "Visitas al perfil y web se dispararon" }
      ]
    : [
        { quote: "C3 recovered my profile, we optimized it together and now it's verified and working perfectly.", name: "Loe Sepulveda", business: "Cali Painting", result: "Profile recovered and verified" },
        { quote: "C3 recovered 100% of all my digital assets that I lost with other agencies.", name: "Lorenzo", business: "Lorenzo's Plumbing", result: "100% of assets recovered" },
        { quote: "They unified 5 locations under one account. Now everything is organized for our expansion.", name: "AGS Recycling", business: "AGS Recycling (5 Locations)", result: "5 locations unified and verified" },
        { quote: "From the first week they delivered results. My numbers don't stop growing.", name: "Jose Valdovinos", business: "JV Roofing INC", result: "Results from the first week" },
        { quote: "More than 6 years with C3. I receive projects constantly thanks to my digital presence.", name: "Octavio Claudio", business: "Bajascape LLC", result: "More than 6 years of successful relationship" },
        { quote: "Visits to the profile and website skyrocketed completely after working with C3.", name: "Destiny Castro", business: "Transmission Exchange", result: "Profile and web visits skyrocketed" }
      ];

  const StarRating = () => (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t('testimonials.title')} <span className="text-primary">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all border hover:border-primary/30">
              {/* Logo Placeholder */}
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-muted-foreground">
                  {testimonial.business.charAt(0)}
                </span>
              </div>

              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="border-t border-border pt-4">
                {/* Result */}
                <p className="font-bold text-sm text-primary mb-2">
                  {testimonial.result}
                </p>

                {/* Name & Business */}
                <p className="text-xs text-muted-foreground">
                  — {testimonial.name}, {testimonial.business}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
