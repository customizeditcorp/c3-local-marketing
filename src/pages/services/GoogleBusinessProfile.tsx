import PageLayout from "@/components/PageLayout";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, CheckCircle, Check, Phone } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/use-language";

const faqItems = [
  {
    question: "¿Cuánto tarda en verse resultados reales?",
    answer: "Dependiendo de tu mercado, la mayoría de nuestros clientes empiezan a ver un aumento en llamadas dentro de los primeros 30-60 días. No prometemos 'posición #1 mañana' — eso es una métrica falsa. Te prometemos más llamadas de clientes reales.",
  },
  {
    question: "¿Qué pasa si ya tengo un perfil pero no aparezco en el mapa?",
    answer: "Tener un perfil no significa estar optimizado. Hacemos una auditoría completa de tu perfil, corregimos errores de NAP, agregamos contenido estratégico y activamos señales que Google necesita para posicionarte en el top 3.",
  },
  {
    question: "¿Necesito pagar publicidad aparte para aparecer en Google Maps?",
    answer: "No. Google Business Profile es orgánico (gratuito). Nosotros optimizamos tu presencia para que aparezcas sin pagar por cada clic. Es la inversión con mejor retorno para negocios locales.",
  },
  {
    question: "¿Qué diferencia hay entre esto y pagar por Google Ads?",
    answer: "Google Ads son anuncios pagados por clic. GBP es tu presencia orgánica en el mapa. Cuando un cliente busca 'plomero cerca de mí', tu perfil optimizado aparece GRATIS. Es tráfico que no se apaga cuando dejas de pagar.",
  },
  {
    question: "¿Puedo manejar mi perfil yo mismo después?",
    answer: "Absolutamente. El perfil es 100% tuyo. Nosotros te lo configuramos, optimizamos y te enseñamos a mantenerlo. Si decides continuar solo, no hay candados ni letras chiquitas.",
  },
];

const serviciosIncluidos = [
  "Verificación y reclamación de perfil",
  "Optimización NAP (Nombre, Dirección, Teléfono)",
  "Estrategia de reseñas de 5 estrellas",
  "Fotos profesionales geoetiquetadas",
  "Google Posts semanales",
  "Auditoría mensual de rendimiento",
];

const GoogleBusinessProfile = () => {
  const { isEnglish } = useLanguage();

  return (
    <PageLayout>
      <SEOHead
        title="Domina Google Maps en Santa Barbara y SLO | C3 Local Marketing"
        description="Optimización experta de Google Business Profile para contratistas en Santa Barbara y San Luis Obispo. Aparece en el top 3 del mapa y recibe más llamadas."
        faqItems={faqItems}
      />

      {/* Hero */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
            Haz que tu teléfono suene: Domina Google Maps en la Costa Central.
          </h1>
          {/* Google color bar */}
          <div className="flex justify-center mt-6 gap-1">
            {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c) => (
              <div key={c} className="h-1.5 w-16 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>
      </section>

      {/* El Problema */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-8 w-8 text-destructive shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">El Problema</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Perder solo 2 contratos al mes por no aparecer en los primeros lugares de Google podría significar perder más de <strong className="text-foreground">$8,000</strong>. Ser invisible en internet te está costando muy caro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Solución */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-start gap-4 mb-8">
            <CheckCircle className="h-8 w-8 text-green-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">La Solución</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Te ponemos en el top 3 del mapa para que los clientes te llamen a ti primero. Nosotros hacemos el trabajo técnico pesado, tú solo te dedicas a cerrar los tratos.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-4">Qué incluye nuestro servicio:</h3>
          <ul className="space-y-3">
            {serviciosIncluidos.map((s, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-600 shrink-0" />
                <span className="text-muted-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" asChild>
            <Link to="/#diagnostico">
              <Phone className="mr-2 h-5 w-5" />
              Diagnostica tu Negocio Gratis
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default GoogleBusinessProfile;
