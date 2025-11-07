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
      quote: "Pagué por más de un año a esas empresas que llaman ofreciendo GBP y website. Cuando dejé de pagar, mi perfil quedó cerrado temporalmente. Nunca pusieron mi número de teléfono, no recibí ni una llamada y perdí el dominio de mi website porque querían que pagara más para recuperarla. C3 me recuperó al 100% todos mis activos digitales.",
      name: "Lorenzo",
      business: "Lorenzo's Plumbing",
      location: "California",
      results: [
        "100% de sus activos recuperados",
        "Perfil reactivado con información correcta",
        "Ahora es dueño de todo"
      ]
    },
    {
      quote: "Tenemos 5 sedes y solo una estaba verificada. Las demás existían pero no pertenecían al mismo perfil. C3 unificó todo nuestro portafolio de Google bajo una misma cuenta, verificó todas nuestras sedes, optimizó cada perfil y creó la website de cada sede con location pages y service pages. Ahora todo está ordenado con una presencia que inspira confianza y acompaña a nuestra empresa en su expansión.",
      name: "AGS Recycling",
      business: "AGS Recycling (5 Sedes)",
      location: "California",
      results: [
        "5 sedes unificadas y verificadas",
        "Website completa con location pages",
        "Presencia ordenada para expansión"
      ]
    },
    {
      quote: "Estaba frustrado tras perder dinero en websites y agencias que me ofrecían resultados y ninguna me entregó lo prometido. Contraté a C3 y desde la primera semana me entregaron resultados. La agencia anterior ni siquiera pudo verificar mi perfil, no tenía mi número de teléfono correcto. C3 optimizó todo mi perfil de Google, renovó mi website y desde entonces mis números no paran de crecer.",
      name: "Jose Valdovinos",
      business: "JV Roofing INC",
      location: "California",
      results: [
        "Resultados desde la primera semana",
        "Perfil verificado y optimizado",
        "Números creciendo constantemente"
      ]
    },
    {
      quote: "C3 lleva más de 6 años manejando mi presencia digital. Me recuperaron mi perfil de Google, lo verificaron y optimizaron más de 500 fotos que yo subía repetidas porque Google no me las aprobaba. Ahora tengo mi website y mi perfil funcionando perfectamente, recibiendo proyectos constantemente gracias a mi fuerte presencia digital.",
      name: "Octavio Claudio",
      business: "Bajascape LLC",
      location: "California",
      results: [
        "Más de 6 años de relación exitosa",
        "Perfil optimizado con 500+ fotos",
        "Recibe proyectos constantemente"
      ]
    },
    {
      quote: "Teníamos nuestro perfil activo por años pero sin ningún acceso. C3 recuperó todos nuestros accesos, verificó nuestro negocio, optimizó el perfil y nos creó nuestra página web. Las visitas al perfil y a la web se dispararon completamente.",
      name: "Destiny Castro",
      business: "Transmission Exchange",
      location: "California",
      results: [
        "Accesos recuperados al 100%",
        "Perfil verificado y optimizado",
        "Visitas al perfil y web se dispararon"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 sm:p-7 hover:shadow-2xl hover:scale-105 transition-all border-2 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20">
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              
              <p className="text-sm sm:text-base mb-6 italic text-foreground leading-relaxed font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="mb-5">
                <p className="font-bold text-base sm:text-lg mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground font-semibold">{testimonial.business}</p>
                <p className="text-xs flex items-center gap-2 text-muted-foreground mt-2">
                  <MapPin className="h-3 w-3" />
                  {testimonial.location}
                </p>
              </div>
              
              <div className="border-t-2 border-primary/20 pt-5">
                <p className="font-bold mb-3 text-sm sm:text-base">Resultado:</p>
                <ul className="space-y-2">
                  {testimonial.results.map((result, i) => (
                    <li key={i} className="text-xs sm:text-sm flex items-start gap-2 leading-relaxed">
                      <span className="text-primary text-lg leading-none">•</span>
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
          <h3 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
            Lo Que Dicen Nuestros Clientes
          </h3>
          <Card className="p-8 sm:p-12 border-2">
            <div className="elfsight-app-ca4a2a87-be2a-4c74-8b7e-2f02e19c2c53" data-elfsight-app-lazy></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;